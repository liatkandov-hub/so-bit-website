import { BadgeCheck } from "lucide-react";

import { whyUsItems } from "@/lib/data/site";

export function WhyUs() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">למה לבחור ב-SO BIT</h2>
          <p className="mt-3 text-muted-foreground">
            סוכנות ביטוח עצמאית שעובדת בשבילך, ולא בשביל חברת ביטוח אחת.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsItems.map((item) => (
            <div key={item.title} className="rounded-2xl bg-background p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
