import Link from "next/link";
import { Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center gap-6 py-32 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Compass className="h-8 w-8" />
      </span>
      <h1 className="text-3xl font-bold sm:text-4xl">העמוד לא נמצא</h1>
      <p className="max-w-md text-muted-foreground">
        העמוד שחיפשת אינו קיים או הוסר. ניתן לחזור לעמוד הראשי ולהמשיך משם.
      </p>
      <Button asChild size="lg">
        <Link href="/">חזרה לעמוד הראשי</Link>
      </Button>
    </section>
  );
}
