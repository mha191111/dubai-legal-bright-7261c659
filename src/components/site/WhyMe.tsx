import { motion } from "framer-motion";
import { Target, Dumbbell, Languages, Users } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";

const ICONS = [Target, Dumbbell, Languages, Users];

export function WhyMe() {
  const { t } = useLang();
  return (
    <section id="why" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">Why me</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.why.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.why.sub}</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.why.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--ball)]/20 text-[var(--court)] transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
