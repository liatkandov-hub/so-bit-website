"use client";

import * as React from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface LeadFormProps {
  product: string;
  title?: string;
  description?: string;
}

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm({ product, title, description }: LeadFormProps) {
  const [state, setState] = React.useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      notes: String(formData.get("notes") ?? ""),
      product,
      source: typeof window !== "undefined" ? window.location.pathname : undefined,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? "אירעה שגיאה, נסה שוב");
        setState("error");
        return;
      }

      setState("success");
      e.currentTarget.reset();
    } catch {
      setErrorMessage("לא ניתן להתחבר לשרת, נסה שוב בעוד מספר דקות");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
          <CheckCircle2 className="h-12 w-12 text-primary" />
          <p className="text-lg font-semibold">הפנייה נשלחה בהצלחה!</p>
          <p className="text-sm text-muted-foreground">
            סוכן SO BIT יחזור אליך בהקדם עם הצעה מותאמת אישית.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title ?? "קבל הצעה מותאמת אישית"}</CardTitle>
        <CardDescription>
          {description ?? `השאר פרטים ונחזור אליך בנוגע ל${product} בהקדם האפשרי.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">שם מלא</Label>
            <Input id="name" name="name" required placeholder="ישראל ישראלי" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <Label htmlFor="phone">טלפון</Label>
              <Input id="phone" name="phone" required placeholder="050-1234567" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">מייל (אופציונלי)</Label>
              <Input id="email" name="email" type="email" placeholder="name@example.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">הערות (אופציונלי)</Label>
            <Textarea id="notes" name="notes" placeholder="פרטים נוספים שיעזרו לנו להתאים עבורך הצעה" />
          </div>

          {state === "error" && errorMessage && (
            <div className="flex items-center gap-2 rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button type="submit" size="lg" disabled={state === "submitting"} className="mt-2">
            {state === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
            קבל הצעה
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
