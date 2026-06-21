import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ProductCtaProps {
  productName: string;
}

export function ProductCta({ productName }: ProductCtaProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">מוכנים להתחיל עם {productName}?</h2>
          <p className="max-w-xl text-primary-foreground/80">
            השאירו פרטים וסוכן SO BIT יחזור אליכם עם הצעה מותאמת אישית, בלי התחייבות.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
            <Link href="#lead-form">
              קבל הצעה עכשיו
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
