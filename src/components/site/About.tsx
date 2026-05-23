import { motion } from "framer-motion";
import portraitImg from "@/assets/coach-portrait.jpg";
import courtImg from "@/assets/coach-followthrough.jpg";
import { useLang } from "@/providers/LanguageProvider";
import { WhatsAppButton } from "./WhatsAppButton";

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative lg:col-span-5"
        >
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-[var(--clay)]/25 via-[var(--ball)]/15 to-[var(--court)]/25 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl">
            <img
              src={portraitImg}
              alt="Portrait of Mohammad Moslem"
              width={900}
              height={1200}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden h-44 w-36 overflow-hidden rounded-2xl border-4 border-background shadow-2xl md:block">
            <img src={courtImg} alt="Coach in motion" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="glass absolute -bottom-6 -left-6 hidden rounded-2xl px-5 py-4 md:block">
            <p className="font-display text-3xl font-extrabold">12<span className="text-[var(--clay)]">+</span></p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Years on court</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 lg:col-span-7"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">About</p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            {t.about.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="font-serif-display italic text-[var(--court)]">{t.about.title.split(" ").slice(-1)}</span>
          </h2>
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
