import { Phone } from "lucide-react";
import { telHref } from "@/lib/contact";
import { useLang } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function CallButton({ className, variant = "solid" }: { className?: string; variant?: "solid" | "ghost" }) {
  const { t } = useLang();
  return (
    <a
      href={telHref}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300",
        variant === "solid"
          ? "bg-foreground text-background shadow-lg hover:scale-[1.03] hover:shadow-xl"
          : "border border-border bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground",
        className,
      )}
    >
      <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
      <span>{t.cta.call}</span>
    </a>
  );
}
