import { getProductBySlug, type Product } from "@/lib/data/products";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface ArticleItem {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}

export interface ProductContent {
  product: Product;
  heroTagline: string;
  overview: string;
  audience: string[];
  benefits: BenefitItem[];
  faq: FaqItem[];
  articles: ArticleItem[];
}

const bituachRechevContent: Omit<ProductContent, "product"> = {
  heroTagline: "ביטוח רכב חכם, מהיר וללא הפתעות בתביעה",
  overview:
    "ביטוח רכב מקנה לך כיסוי כלכלי במקרה של תאונה, גניבה, נזק לרכוש או פגיעה בצד שלישי. ב-SO BIT נשווה עבורך בין חברות הביטוח המובילות בישראל, נבנה תמהיל כיסויים מותאם אישית לרכב ולנהיגה שלך, ונדאג שתהיה מבוטח בצורה הנכונה במחיר ההוגן ביותר — מביטוח חובה בלבד ועד כיסוי מקיף מלא.",
  audience: [
    "בעלי רכב פרטי המעוניינים בכיסוי חובה, צד ג' או מקיף",
    "נהגים חדשים וצעירים המחפשים פוליסה במחיר משתלם",
    "משפחות עם יותר מרכב אחד המעוניינות בהטבת ריבוי רכבים",
    "בעלי רכב יוקרה או רכב חדש הדורש כיסוי מקיף מורחב",
  ],
  benefits: [
    {
      title: "השוואת מחירים בין החברות",
      description: "אנחנו משווים עבורך הצעות ממיטב חברות הביטוח ומוצאים את הפוליסה המשתלמת ביותר.",
    },
    {
      title: "ליווי אישי בתביעות",
      description: "סוכן אישי שילווה אותך משלב הדיווח על האירוע ועד לסיום הטיפול בתביעה.",
    },
    {
      title: "התאמה מדויקת לצרכים שלך",
      description: "בניית תמהיל כיסויים על פי שווי הרכב, הוותק שלך כנהג והתקציב המשפחתי.",
    },
    {
      title: "חיסכון בעת חידוש הפוליסה",
      description: "בדיקה שנתית מחדש של השוק כדי להבטיח שאתה ממשיך לקבל את התנאים הטובים ביותר.",
    },
  ],
  faq: [
    {
      question: "מה ההבדל בין ביטוח חובה לביטוח מקיף?",
      answer:
        "ביטוח חובה הוא ביטוח המתחייב על פי חוק ומכסה פגיעות גוף בלבד. ביטוח מקיף הוא ביטוח רשות שמוסיף כיסוי לנזקי רכוש לרכב שלך ולרכוש צד שלישי, גניבה ועוד.",
    },
    {
      question: "איך נקבע מחיר הפוליסה?",
      answer:
        "המחיר נקבע בהתאם לגורמים כמו גיל הנהג, ניסיון נהיגה, היסטוריית תביעות, סוג הרכב ושווי הרכב. אנחנו בודקים את כל הפרמטרים כדי להשיג עבורך את התמחור המשתלם ביותר.",
    },
    {
      question: "מה עליי לעשות מיידית לאחר תאונה?",
      answer:
        "יש לוודא שלום הנפשות המעורבות, לתעד את האירוע בתמונות, לאסוף פרטי מעורבים ועדים, ולפנות אלינו בהקדם כדי שנפתח עבורך תביעה וננחה אותך בכל השלבים.",
    },
    {
      question: "האם אפשר לעבור חברת ביטוח באמצע השנה?",
      answer:
        "כן, ניתן לבטל פוליסה קיימת ולעבור לחברה אחרת, לרוב תוך קבלת זיכוי יחסי על התקופה שלא נוצלה. נבדוק עבורך אם המעבר משתלם.",
    },
  ],
  articles: [
    {
      title: "5 טיפים להוזלת ביטוח הרכב שלך",
      excerpt: "כך תוכל להפחית את הפרמיה השנתית מבלי לפגוע בכיסוי הביטוחי.",
      slug: "tips-lehozalat-bituach-rechev",
      category: "רכב",
    },
    {
      title: "מה עושים אחרי תאונת דרכים?",
      excerpt: "מדריך שלב-אחר-שלב לטיפול נכון באירוע ובתביעה שמגיעה בעקבותיו.",
      slug: "ma-osim-acharei-teunat-drachim",
      category: "רכב",
    },
    {
      title: "ביטוח חובה מול ביטוח מקיף — מה מתאים לך?",
      excerpt: "פירוט ההבדלים בין סוגי הכיסויים וכיצד לבחור את הפוליסה הנכונה.",
      slug: "chova-mol-makif",
      category: "רכב",
    },
  ],
};

function buildGenericContent(product: Product): Omit<ProductContent, "product"> {
  return {
    heroTagline: `${product.name} שמתאים בדיוק לצרכים שלך`,
    overview: `${product.shortDescription} צוות הסוכנים שלנו ב-SO BIT ישווה עבורך בין החברות המובילות, יבנה תמהיל כיסויים מדויק וילווה אותך מהרגע הראשון ועד לכל תביעה.`,
    audience: [
      "מי שמחפש כיסוי ראשוני ומקצועי בתחום",
      "מי שמעוניין להשוות בין הצעות של כמה חברות ביטוח",
      "מי שמחפש ליווי אישי וצמוד של סוכן מומחה",
    ],
    benefits: [
      {
        title: "השוואת מחירים",
        description: "בדיקה מקיפה של השוק כדי להבטיח את התנאים והמחיר המשתלמים ביותר.",
      },
      {
        title: "ליווי אישי",
        description: "סוכן ביטוח אישי שזמין עבורך בכל שאלה ובכל שלב בתהליך.",
      },
      {
        title: "התאמה אישית",
        description: "פוליסה שנבנית בהתאם לצרכים ולתקציב הספציפיים שלך.",
      },
    ],
    faq: [
      {
        question: "כמה זמן לוקח לקבל הצעת מחיר?",
        answer: "לאחר מילוי הטופס, סוכן SO BIT יחזור אליך עם הצעה מותאמת אישית בתוך יום עסקים.",
      },
      {
        question: "האם הבדיקה וההצעה כרוכות בתשלום?",
        answer: "לא, בדיקת ההצעה וההשוואה בין חברות הביטוח הן שירות חינמי ללא התחייבות.",
      },
    ],
    articles: [],
  };
}

export function getProductContent(slug: string): ProductContent | undefined {
  const product = getProductBySlug(slug);
  if (!product) return undefined;

  if (slug === "bituach-rechev") {
    return { product, ...bituachRechevContent };
  }

  return { product, ...buildGenericContent(product) };
}
