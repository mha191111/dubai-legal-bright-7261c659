import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/contact";
import { useLang } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  message,
  label,
  className,
}: {
  message?: string;
  label?: string;
  className?: string;
}) {
  const { t } = useLang();
  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--ball)] px-6 py-3 font-bold text-[var(--ball-foreground)] shadow-glow transition-all duration-300 hover:scale-[1.03]",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <MessageCircle className="h-4 w-4" />
      <span className="relative">{label ?? t.cta.whatsapp}</span>
    </a>
  );
}
