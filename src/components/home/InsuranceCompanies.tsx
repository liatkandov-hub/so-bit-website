import { insuranceCompanies } from "@/lib/data/site";

export function InsuranceCompanies() {
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-16">
      <div className="container">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          אנחנו עובדים עם כל חברות הביטוח המובילות בישראל
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {insuranceCompanies.map((name) => (
            <span
              key={name}
              className="rounded-xl border border-border/60 bg-background px-5 py-3 text-sm font-semibold text-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
