import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ProductHeroProps {
  name: string;
  tagline: string;
  icon: LucideIcon;
}

export function ProductHero({ name, tagline, icon: Icon }: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.12),transparent_45%)]" />
      <div className="container relative flex flex-col items-center gap-6 py-20 text-center sm:py-28">
        <span className="glass flex h-16 w-16 items-center justify-center rounded-2xl">
          <Icon className="h-8 w-8" />
        </span>
        <h1 className="max-w-2xl text-balance text-3xl font-bold sm:text-5xl">{name}</h1>
        <p className="max-w-xl text-balance text-lg text-primary-foreground/80">{tagline}</p>
        <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
          <Link href="#lead-form">
            קבל הצעה
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
