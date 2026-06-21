import { prisma } from "@/lib/prisma";
import type { LeadInput } from "@/lib/validations/lead";

function resolveBapiUrl(): string {
  if (process.env.BAPI_URL) return process.env.BAPI_URL;
  // Vercel sets VERCEL_URL to the current deployment's hostname at runtime;
  // localhost has no meaning inside an isolated serverless function.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}/api/mock-bapi`;
  return "http://localhost:3000/api/mock-bapi";
}

const BAPI_URL = resolveBapiUrl();
const BAPI_TIMEOUT_MS = 5000;
const MAX_BAPI_ATTEMPTS = 5;

export type SubmitLeadResult =
  | { ok: true; status: "synced" | "pending" }
  | { ok: false; error: string };

async function postToBapi(payload: LeadInput): Promise<boolean> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), BAPI_TIMEOUT_MS);

  try {
    const res = await fetch(BAPI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

export async function submitLead(input: LeadInput): Promise<SubmitLeadResult> {
  const synced = await postToBapi(input);

  try {
    if (synced) {
      await prisma.lead.create({
        data: {
          name: input.name,
          phone: input.phone,
          email: input.email || null,
          product: input.product,
          notes: input.notes || null,
          source: input.source || null,
          status: "SYNCED",
          bapiSyncedAt: new Date(),
        },
      });
      return { ok: true, status: "synced" };
    }

    await prisma.lead.create({
      data: {
        name: input.name,
        phone: input.phone,
        email: input.email || null,
        product: input.product,
        notes: input.notes || null,
        source: input.source || null,
        status: "PENDING",
        bapiAttempts: 1,
      },
    });
    return { ok: true, status: "pending" };
  } catch (err) {
    if (synced) {
      return { ok: true, status: "synced" };
    }
    console.error("Failed to persist lead after BAPI failure", err);
    return { ok: false, error: "BAPI ולא ניתן לשמור את הפנייה כעת" };
  }
}

export async function retryPendingLeads() {
  const pending = await prisma.lead.findMany({
    where: { status: "PENDING", bapiAttempts: { lt: MAX_BAPI_ATTEMPTS } },
    take: 50,
  });

  const results = { synced: 0, failed: 0, exhausted: 0 };

  for (const lead of pending) {
    const synced = await postToBapi({
      name: lead.name,
      phone: lead.phone,
      email: lead.email ?? "",
      product: lead.product,
      notes: lead.notes ?? "",
      source: lead.source ?? undefined,
    });

    if (synced) {
      await prisma.lead.update({
        where: { id: lead.id },
        data: { status: "SYNCED", bapiSyncedAt: new Date() },
      });
      results.synced += 1;
      continue;
    }

    const attempts = lead.bapiAttempts + 1;
    await prisma.lead.update({
      where: { id: lead.id },
      data: {
        bapiAttempts: attempts,
        status: attempts >= MAX_BAPI_ATTEMPTS ? "FAILED" : "PENDING",
      },
    });

    if (attempts >= MAX_BAPI_ATTEMPTS) {
      results.exhausted += 1;
    } else {
      results.failed += 1;
    }
  }

  return results;
}
