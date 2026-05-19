import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useLang } from "@/providers/LanguageProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  return (
    <button
      onClick={toggle}
      aria-label={t.a11y.toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur transition hover:bg-accent hover:text-accent-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
