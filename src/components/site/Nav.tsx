import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const SECTIONS = ["services", "about", "pricing", "testimonials", "blog", "contact"] as const;

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/75 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ball)] text-[var(--ball-foreground)] shadow-glow">
            <span className="text-sm">⬤</span>
          </span>
          <span>Coach Mohammad</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a key={s} href={`#${s}`} className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {t.nav[s]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:scale-[1.03] md:inline-flex"
          >
            {t.nav.book}
          </a>
          <button
            type="button"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {SECTIONS.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                {t.nav[s]}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
