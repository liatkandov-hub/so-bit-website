import {
  Car,
  Home,
  Briefcase,
  ShieldCheck,
  Truck,
  Bike,
  Plane,
  HeartPulse,
  Heart,
  HandHeart,
  Stethoscope,
  UserX,
  PiggyBank,
  Landmark,
  GraduationCap,
  TrendingUp,
  Banknote,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type ServiceGroup = "elementary" | "finance" | "life" | "health" | "business";

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  icon: LucideIcon;
  group: ServiceGroup;
}

export const products: Product[] = [
  {
    slug: "bituach-rechev",
    name: 'ביטוח רכב',
    shortDescription: "כיסוי מקיף, צד ג' וחובה לרכב הפרטי שלך, במחיר הוגן.",
    icon: Car,
    group: "elementary",
  },
  {
    slug: "bituach-dira",
    name: "ביטוח דירה",
    shortDescription: "הגנה על המבנה והתכולה מפני נזק, פריצה ואסונות טבע.",
    icon: Home,
    group: "elementary",
  },
  {
    slug: "bituach-esek",
    name: "ביטוח עסק",
    shortDescription: "כיסוי רכוש, חבויות והפסד הכנסות לעסק שלך.",
    icon: Briefcase,
    group: "business",
  },
  {
    slug: "achrayut-miktzoit",
    name: "אחריות מקצועית",
    shortDescription: "הגנה מפני תביעות רשלנות מקצועית בעבודה השוטפת.",
    icon: ShieldCheck,
    group: "business",
  },
  {
    slug: "tzi-rechev",
    name: "צי רכב",
    shortDescription: "פתרון ביטוח כולל לניהול צי הרכבים העסקי שלך.",
    icon: Truck,
    group: "business",
  },
  {
    slug: "ofnoa",
    name: "אופנוע",
    shortDescription: "ביטוח חובה וצד ג' מותאם לרוכבי אופנועים וקטנועים.",
    icon: Bike,
    group: "elementary",
  },
  {
    slug: "nesiot-lechul",
    name: 'נסיעות לחו"ל',
    shortDescription: "כיסוי רפואי, ביטול נסיעה ומטען לכל יעד בעולם.",
    icon: Plane,
    group: "elementary",
  },
  {
    slug: "beriut",
    name: "בריאות",
    shortDescription: "ניתוחים, תרופות ורפואה פרטית מעבר לסל הבריאות.",
    icon: HeartPulse,
    group: "health",
  },
  {
    slug: "chaim",
    name: "חיים",
    shortDescription: "הבטחת העתיד הכלכלי של בני המשפחה שלך.",
    icon: Heart,
    group: "life",
  },
  {
    slug: "siud",
    name: "סיעוד",
    shortDescription: "מימון טיפול סיעודי ושמירה על איכות חיים בעת הצורך.",
    icon: HandHeart,
    group: "health",
  },
  {
    slug: "machalot-kashot",
    name: "מחלות קשות",
    shortDescription: "תגמול כספי מיידי במקרה של אבחון מחלה קשה.",
    icon: Stethoscope,
    group: "health",
  },
  {
    slug: "ovdan-kosher-avoda",
    name: "אובדן כושר עבודה",
    shortDescription: "פיצוי חודשי שמחליף את ההכנסה במקרה של אי כושר.",
    icon: UserX,
    group: "life",
  },
  {
    slug: "pensia",
    name: "פנסיה",
    shortDescription: "תכנון וניהול החיסכון הפנסיוני לקראת הפרישה.",
    icon: PiggyBank,
    group: "finance",
  },
  {
    slug: "gemel",
    name: "גמל",
    shortDescription: "קופות גמל לחיסכון לטווח ארוך בתנאי מס מיטביים.",
    icon: Landmark,
    group: "finance",
  },
  {
    slug: "hishtalmut",
    name: "השתלמות",
    shortDescription: "קרן השתלמות לחיסכון נזיל ופטור ממס לאחר שש שנים.",
    icon: GraduationCap,
    group: "finance",
  },
  {
    slug: "kupat-gemel-lehaskaa",
    name: "קופת גמל להשקעה",
    shortDescription: "חיסכון גמיש עם אפשרות משיכה בכל עת ויתרונות מס.",
    icon: TrendingUp,
    group: "finance",
  },
  {
    slug: "polisat-chisachon",
    name: "פוליסת חיסכון",
    shortDescription: "מסלול השקעה אישי בניהול אפיק ההשקעות שתבחר.",
    icon: Banknote,
    group: "finance",
  },
  {
    slug: "hashkaot",
    name: "השקעות",
    shortDescription: "ייעוץ והשקעה בשוק ההון בהתאם לפרופיל הסיכון שלך.",
    icon: LineChart,
    group: "finance",
  },
];

export const serviceGroups: { id: ServiceGroup; name: string; description: string }[] = [
  { id: "elementary", name: "אלמנטרי", description: "רכב, דירה ונכסים" },
  { id: "finance", name: "פיננסים", description: "פנסיה, גמל וחיסכון" },
  { id: "life", name: "חיים", description: "הגנה כלכלית למשפחה" },
  { id: "health", name: "בריאות", description: "רפואה פרטית וסיעוד" },
  { id: "business", name: "עסקים", description: "כיסוי לעסק ולעצמאים" },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
