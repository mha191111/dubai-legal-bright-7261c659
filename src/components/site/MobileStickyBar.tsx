import { Phone, MessageCircle } from "lucide-react";
import { telHref, waHref } from "@/lib/contact";
import { useLang } from "@/providers/LanguageProvider";

export function MobileStickyBar() {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/85 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={telHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-foreground py-3 font-semibold text-background"
        >
          <Phone className="h-4 w-4" />
          {t.cta.call}
        </a>
        <a
          href={waHref(t.hero.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--ball)] py-3 font-bold text-[var(--ball-foreground)]"
        >
          <MessageCircle className="h-4 w-4" />
          {t.cta.whatsapp}
        </a>
      </div>
    </div>
  );
}
