import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ArticleItem } from "@/lib/data/product-content";

interface ProductArticlesProps {
  articles: ArticleItem[];
}

export function ProductArticles({ articles }: ProductArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">מאמרים בנושא</h2>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {articles.map((article) => (
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
