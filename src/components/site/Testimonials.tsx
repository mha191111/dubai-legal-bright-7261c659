import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";

export function Testimonials() {
  const { t } = useLang();
  const items = t.testimonials.items;
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[idx];

  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">Reviews</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.testimonials.title}</h2>
        <p className="mt-3 text-muted-foreground">{t.testimonials.sub}</p>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl">
        <div className="glass-strong relative rounded-3xl p-8 md:p-12">
          <Quote className="absolute end-6 top-6 h-12 w-12 text-[var(--ball)]/40" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[var(--ball)] text-[var(--ball)]" />
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="mt-5 font-display text-xl font-semibold leading-snug md:text-2xl">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--court)] text-sm font-bold text-primary-foreground">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold">{current.name}</p>
                  <p className="text-xs text-muted-foreground">{current.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
