import { useLang } from "@/providers/LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const next = lang === "en" ? "ar" : "en";
  return (
    <button
      onClick={() => setLang(next)}
      aria-label={t.a11y.toggleLang}
      className="inline-flex h-9 items-center justify-center rounded-full border border-border bg-background/60 px-3 text-xs font-semibold tracking-wider backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
    >
      {lang === "en" ? "العربية" : "EN"}
    </button>
  );
}
