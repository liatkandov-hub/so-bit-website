import { CheckCircle2 } from "lucide-react";

interface ProductAudienceProps {
  audience: string[];
}

export function ProductAudience({ audience }: ProductAudienceProps) {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">למי זה מתאים?</h2>
        <ul className="mt-6 grid gap-3">
          {audience.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
