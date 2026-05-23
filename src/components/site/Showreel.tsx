import { motion } from "framer-motion";
import { useLang } from "@/providers/LanguageProvider";

export function Showreel() {
  const { t } = useLang();
  return (
    <section id="showreel" className="relative overflow-hidden bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ball)]">{t.showreel.eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            {t.showreel.title} <span className="font-serif-display italic text-[var(--ball)]">{t.showreel.titleAccent}</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-background/15 shadow-2xl"
        >
          <video
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            className="aspect-video w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-background/10" />
        </motion.div>
      </div>
    </section>
  );
}
