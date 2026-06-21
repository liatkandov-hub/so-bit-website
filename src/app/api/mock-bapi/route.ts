import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (process.env.BAPI_MOCK_FAIL === "true") {
    return NextResponse.json({ ok: false, error: "BAPI לא זמין" }, { status: 503 });
  }

  const body = await req.json().catch(() => null);
  console.log("[mock-bapi] received lead", body);

  return NextResponse.json({ ok: true, receivedAt: new Date().toISOString() });
}
