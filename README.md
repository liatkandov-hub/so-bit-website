# SO BIT

אתר התדמית והלידים של סוכנות הביטוח SO BIT (מבית שחם אורלן). Next.js 15, TypeScript, Tailwind CSS, Prisma.

## מצב נוכחי

זהו ה-slice הראשון של הפרויקט: סקלפולד מלא, עמוד הבית המלא, ועמוד מוצר דינמי (`/[slug]`) עם תוכן מפורט ל"ביטוח רכב" ותוכן גנרי לשאר 17 המוצרים, כולל טופס ליד שמחובר ל-API. עמודי `/about`, `/contact`, `/blog`, `/personal-area` ו-CMS עדיין לא נבנו (שלבים עתידיים).

## הרצה מקומית

```bash
npm install
cp .env.example .env   # מלא DATABASE_URL אם יש לך Postgres, אחרת אפשר להשאיר ריק
npm run dev
```

האתר יעלה על `http://localhost:3000`.

> אם `DATABASE_URL` לא מוגדר, טופס הליד עדיין יעבוד כל עוד ה-BAPI (המדומה ב-`/api/mock-bapi`) מצליח. ה-DB משמש רק כ-fallback כאשר ה-BAPI לא זמין.

## משתני סביבה

ראה `.env.example`:

- `DATABASE_URL` — חיבור PostgreSQL (לדוגמה Supabase). נדרש כדי לשמור לידים שנכשלו ב-BAPI.
- `BAPI_URL` — כתובת ה-BAPI האמיתי. כברירת מחדל מצביע ל-mock המקומי.
- `BAPI_MOCK_FAIL` — `true` כדי לדמות תקלה ב-BAPI ולבדוק את מסלול ה-fallback.

## ארכיטקטורת לידים

`POST /api/leads` → מאמת עם zod → שולח ל-BAPI (`src/lib/bapi.ts`) → אם הצליח: נשמר במסד כ-`SYNCED`; אם נכשל: נשמר כ-`PENDING`. `vercel.json` מגדיר Cron Job שקורא ל-`GET /api/leads/retry` כל שעה כדי לנסות לסנכרן לידים שנכשלו (עד 5 ניסיונות, לאחר מכן מסומן `FAILED`).

## פריסה ל-Vercel

1. דחיפת הריפו ל-GitHub.
2. ייבוא הריפו בלוח הבקרה של Vercel.
3. הגדרת משתני הסביבה (`DATABASE_URL`, `BAPI_URL`, אופציונלי `CRON_SECRET`).
4. Deploy — Vercel מריץ `npm install` (כולל `prisma generate` ב-`postinstall`) ו-`next build`.

אם מוגדר `DATABASE_URL` של Postgres (למשל Supabase), יש להריץ פעם אחת `npx prisma migrate deploy` כדי ליצור את הטבלאות.

## מבנה הפרויקט

```
src/app            Next.js App Router (עמודים + API routes)
src/components     ui/ (primitives), layout/, home/, product/, leads/
src/lib/data       תוכן סטטי (מוצרים, ניווט, מאמרים, עדויות) — נקודת ההחלפה העתידית ל-CMS
src/lib            prisma client, validations, bapi client
prisma/schema.prisma   מודל Lead
```
