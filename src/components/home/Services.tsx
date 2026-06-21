import Link from "next/link";

import { serviceGroups, products } from "@/lib/data/products";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">השירותים שלנו</h2>
          <p className="mt-3 text-muted-foreground">חמשה תחומים מרכזיים שמכסים כל צורך ביטוחי ופיננסי.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {serviceGroups.map((group) => {
            const firstProduct = products.find((p) => p.group === group.id);
            const count = products.filter((p) => p.group === group.id).length;
            return (
              <Link key={group.id} href={firstProduct ? `/${firstProduct.slug}` : "#"}>
                <Card className="h-full text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex flex-col items-center gap-2 p-6">
                    <h3 className="text-lg font-semibold">{group.name}</h3>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                    <span className="mt-2 text-xs font-medium text-primary">{count} מוצרים</span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
