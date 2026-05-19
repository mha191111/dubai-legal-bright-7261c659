import { useLang } from "@/providers/LanguageProvider";
import { CONTACT, mailHref, telHref, waHref } from "@/lib/contact";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ball)] text-[var(--ball-foreground)]">⬤</span>
            {CONTACT.name}
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">{t.footer.tagline}</p>
          <div className="mt-4"><LanguageToggle /></div>
        </div>

        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-[var(--clay)]">{t.nav.services}</a></li>
            <li><a href="#pricing" className="hover:text-[var(--clay)]">{t.nav.pricing}</a></li>
            <li><a href="#about" className="hover:text-[var(--clay)]">{t.nav.about}</a></li>
            <li><a href="#faq" className="hover:text-[var(--clay)]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={telHref} className="hover:text-[var(--clay)]">{CONTACT.phoneDisplay}</a></li>
            <li><a href={waHref(t.hero.waMessage)} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--clay)]">WhatsApp</a></li>
            <li><a href={mailHref} className="hover:text-[var(--clay)]">{CONTACT.email}</a></li>
            <li className="text-muted-foreground">{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-border px-4 pt-6 text-xs text-muted-foreground md:flex-row md:px-8">
        <p>© {year} {CONTACT.name}. {t.footer.rights}</p>
        <p>{t.footer.built}</p>
      </div>
    </footer>
  );
}
