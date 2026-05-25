import { waHref } from "@/lib/contact";
import { useLang } from "@/providers/LanguageProvider";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.56 7.44a5.5 5.5 0 0 0-7.78 7.78l-.58 2.14 2.14-.58a5.5 5.5 0 0 0 7.78-7.78Z" />
      <path d="M15.1 10.9c-.1-.2-.3-.3-.5-.3-.1 0-.3 0-.5.1-.2.1-.4.2-.6.4-.1.1-.2.2-.3.4-.1.1-.2.2-.2.3 0 .1 0 .2.1.3.1.3.2.5.3.7.2.3.4.5.6.7.2.2.4.3.6.3.1 0 .2 0 .2 0 .1 0 .2 0 .3-.1.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2.2-.3.1-.1.1-.2.1-.3 0-.1 0-.2-.1-.3-.1-.3-.2-.5-.3-.7ZM13.7 9.1c-.1-.1-.3-.1-.5 0-.2.1-.4.2-.6.4-.2.2-.3.4-.4.6-.1.2-.1.4 0 .6.1.3.2.6.4.9.1.2.3.3.5.4.2.1.4.1.6 0 .2-.1.4-.2.5-.4.1-.2.1-.4 0-.6-.1-.4-.2-.7-.4-.9-.1-.2-.2-.3-.4-.4ZM12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8Z" />
    </svg>
  );
}

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
  const buttonLabel = label ?? t.cta.whatsapp;

  return (
    <a
      href={waHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={buttonLabel}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[var(--ball)] px-6 py-3 font-bold text-[var(--ball-foreground)] shadow-glow transition-all duration-300 hover:scale-[1.03]",
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <WhatsAppIcon className="h-4 w-4" />
      <span className="relative">{buttonLabel}</span>
    </a>
  );
}
