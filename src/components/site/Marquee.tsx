import { useLang } from "@/providers/LanguageProvider";

export function Marquee() {
  const { t } = useLang();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="relative border-y border-border bg-foreground py-5 text-background">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-12 pe-12">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap font-display text-base font-bold uppercase tracking-[0.22em]">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ball)]" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
