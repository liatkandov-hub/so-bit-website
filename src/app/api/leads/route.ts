import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { leadSchema } from "@/lib/validations/lead";
import { submitLead } from "@/lib/bapi";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "יותר מדי בקשות, נסה שוב בעוד דקה" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "גוף הבקשה אינו JSON תקין" }, { status: 400 });
  }

  try {
    const input = leadSchema.parse(body);
    const result = await submitLead(input);

    if (!result.ok) {
      return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
    }

    return NextResponse.json({ ok: true, status: result.status }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { ok: false, error: "שדות לא תקינים", issues: err.issues },
        { status: 400 }
      );
    }
    console.error("Unexpected error handling lead submission", err);
    return NextResponse.json({ ok: false, error: "שגיאת שרת" }, { status: 500 });
  }
}
