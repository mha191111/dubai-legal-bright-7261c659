import { useLang } from "@/providers/LanguageProvider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">FAQ</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.faq.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.faq.sub}</p>
      </div>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {t.faq.items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="overflow-hidden rounded-2xl border border-border bg-card px-5 data-[state=open]:shadow-md"
          >
            <AccordionTrigger className="text-start font-display text-base font-bold hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
