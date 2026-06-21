interface ProductOverviewProps {
  productName: string;
  overview: string;
}

export function ProductOverview({ productName, overview }: ProductOverviewProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">מהו {productName}?</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{overview}</p>
      </div>
    </section>
  );
}
