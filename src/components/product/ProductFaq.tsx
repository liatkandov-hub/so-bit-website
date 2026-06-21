import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/data/product-content";

interface ProductFaqProps {
  faq: FaqItem[];
}

export function ProductFaq({ faq }: ProductFaqProps) {
  if (faq.length === 0) return null;

  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold sm:text-3xl">שאלות נפוצות</h2>
        <Accordion type="single" collapsible className="mt-6">
          {faq.map((item, idx) => (
            <AccordionItem key={item.question} value={`faq-${idx}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
