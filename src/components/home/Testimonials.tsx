import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data/site";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">מה הלקוחות שלנו אומרים</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full bg-background">
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <Quote className="h-6 w-6 text-accent" />
                <p className="flex-1 text-sm leading-relaxed text-foreground/80">“{t.quote}”</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
