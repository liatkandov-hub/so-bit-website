import { NextRequest, NextResponse } from "next/server";

import { retryPendingLeads } from "@/lib/bapi";

function isAuthorized(req: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) return true;
  return req.headers.get("authorization") === `Bearer ${cronSecret}`;
}

async function handleRetry(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ ok: false, error: "לא מורשה" }, { status: 401 });
  }

  try {
    const results = await retryPendingLeads();
    return NextResponse.json({ ok: true, results });
  } catch (err) {
    console.error("Failed to retry pending leads", err);
    return NextResponse.json({ ok: false, error: "שגיאת שרת" }, { status: 500 });
  }
}

// Vercel Cron Jobs trigger this route with GET (see vercel.json).
export async function GET(req: NextRequest) {
  return handleRetry(req);
}

// Kept for manual/admin triggering.
export async function POST(req: NextRequest) {
  return handleRetry(req);
}
