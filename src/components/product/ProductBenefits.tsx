import { Sparkles } from "lucide-react";

import type { BenefitItem } from "@/lib/data/product-content";

interface ProductBenefitsProps {
  benefits: BenefitItem[];
}

export function ProductBenefits({ benefits }: ProductBenefitsProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">היתרונות שלך</h2>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl border border-border/60 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
