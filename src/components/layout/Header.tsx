"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { mainNavLinks } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-xl">SO BIT</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/personal-area">
              <UserRound className="h-4 w-4" />
              אזור אישי
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/bituach-rechev#lead-form">קבל הצעה</Link>
          </Button>
        </div>

        <button
          aria-label="פתח תפריט"
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border/60 transition-all lg:hidden",
          open ? "max-h-[28rem]" : "max-h-0 border-t-0"
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/personal-area" onClick={() => setOpen(false)}>
                אזור אישי
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/bituach-rechev#lead-form" onClick={() => setOpen(false)}>
                קבל הצעה
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
