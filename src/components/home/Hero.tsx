"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="container relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
        >
          <ShieldCheck className="h-4 w-4" />
          סוכנות הביטוח של שחם אורלן
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-balance text-4xl font-bold leading-tight sm:text-6xl"
        >
          הביטוח הנכון לכל שלב בחיים שלך
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-balance text-lg text-primary-foreground/80"
        >
          רכב, דירה, עסק, בריאות ופנסיה — נשווה עבורך בין החברות המובילות ונמצא את הכיסוי
          המשתלם והמדויק ביותר, עם ליווי אישי בכל שלב.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" variant="secondary" className="text-secondary-foreground">
            <Link href="/bituach-rechev#lead-form">
              קבל הצעה
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
          >
            <Link href="/personal-area">
              <UserRound className="h-4 w-4" />
              אזור אישי
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
