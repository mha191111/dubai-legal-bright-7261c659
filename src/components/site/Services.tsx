import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";
import { waHref } from "@/lib/contact";

export function Services() {
  const { t } = useLang();
  return (
    <section id="services" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">Services</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.services.title}</h2>
          </div>
          <p className="max-w-md text-muted-foreground">{t.services.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <motion.a
              key={s.title}
              href={waHref(`Hi Mohammad, I'm interested in ${s.title}.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--ball)]/15 blur-3xl transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start justify-between">
                <span className="font-display text-5xl font-extrabold text-muted-foreground/30">0{i + 1}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <h3 className="relative mt-6 font-display text-2xl font-extrabold">{s.title}</h3>
              <p className="relative mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="relative mt-6 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[var(--court)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
