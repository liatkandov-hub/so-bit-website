import { recentArticles } from "@/lib/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecentArticles() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">מאמרים אחרונים</h2>
          <p className="mt-3 text-muted-foreground">תוכן מקצועי שיעזור לך לקבל את ההחלטה הביטוחית הנכונה.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {recentArticles.map((article) => (
            <Card key={article.slug} className="h-full">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <Badge variant="secondary" className="w-fit">
                  {article.category}
                </Badge>
                <h3 className="font-semibold leading-snug">{article.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
