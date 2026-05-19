import { motion } from "framer-motion";
import aboutImg from "@/assets/about-coach.jpg";
import { useLang } from "@/providers/LanguageProvider";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-[var(--clay)]/20 via-[var(--ball)]/10 to-[var(--court)]/20 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-2xl">
            <img
              src={aboutImg}
              alt="Portrait of coach Mohammad Moslem on a Dubai tennis court"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-6 hidden rounded-2xl px-5 py-4 md:block">
            <p className="font-display text-3xl font-extrabold">12+</p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Years on court</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">About</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.about.title}</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t.about.body1}</p>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{t.about.body2}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {t.about.badges.map((b) => (
              <span key={b} className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-semibold">
                {b}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <WhatsAppButton message={`${t.about.cta} — ${t.hero.waMessage}`} label={t.about.cta} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
