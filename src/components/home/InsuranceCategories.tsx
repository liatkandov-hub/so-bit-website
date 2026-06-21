import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { products } from "@/lib/data/products";
import { Card, CardContent } from "@/components/ui/card";

export function InsuranceCategories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">כל סוגי הביטוח במקום אחד</h2>
          <p className="mt-3 text-muted-foreground">
            בחר את התחום הרלוונטי עבורך וקבל הצעת מחיר מותאמת אישית בתוך דקות.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.slug} href={`/${product.slug}`} className="group">
                <Card className="h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {product.shortDescription}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary">
                      למעבר לעמוד
                      <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                    </span>
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
