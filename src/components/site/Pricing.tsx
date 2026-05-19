import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";
import { waHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function Pricing() {
  const { t } = useLang();
  return (
    <section id="pricing" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">Pricing</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.pricing.title}</h2>
          <p className="mt-3 text-muted-foreground">{t.pricing.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier, i) => {
            const isPopular = tier.id === "pro";
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1",
                  isPopular
                    ? "border-transparent bg-foreground text-background shadow-2xl lg:scale-105"
                    : "border-border bg-card text-card-foreground hover:shadow-xl",
                )}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[var(--ball)] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--ball-foreground)] shadow-glow">
                    <Star className="h-3 w-3 fill-current" /> {t.pricing.popular}
                  </span>
                )}
                <p className={cn("text-xs font-semibold uppercase tracking-widest", isPopular ? "text-[var(--ball)]" : "text-[var(--clay)]")}>
                  {tier.price}
                </p>
                <h3 className="mt-2 font-display text-3xl font-extrabold">{tier.name}</h3>
                <p className={cn("mt-2 text-sm", isPopular ? "text-background/70" : "text-muted-foreground")}>{tier.desc}</p>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className={cn("mt-0.5 h-4 w-4 shrink-0", isPopular ? "text-[var(--ball)]" : "text-[var(--court)]")} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waHref(`Hi Mohammad, I'd like to start the ${tier.name} package.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.03]",
                    isPopular
                      ? "bg-[var(--ball)] text-[var(--ball-foreground)] shadow-glow"
                      : "border border-border bg-background hover:bg-foreground hover:text-background",
                  )}
                >
                  {t.pricing.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
