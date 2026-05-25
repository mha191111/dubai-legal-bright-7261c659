import { useLang } from "@/providers/LanguageProvider";

const LINKS = [
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#pricing", key: "pricing" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#contact", key: "contact" },
] as const;

export function MobileStickyBar() {
  const { t } = useLang();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur-xl shadow-glow lg:hidden">
      <div className="grid grid-cols-5 gap-2 px-2 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {LINKS.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="inline-flex flex-col items-center justify-center rounded-3xl border border-border bg-background px-2 py-2 text-[0.72rem] font-semibold text-muted-foreground transition hover:border-[var(--ball)] hover:bg-[var(--ball)] hover:text-[var(--ball-foreground)]"
          >
            {t.nav[item.key]}
          </a>
        ))}
      </div>
    </div>
  );
}
