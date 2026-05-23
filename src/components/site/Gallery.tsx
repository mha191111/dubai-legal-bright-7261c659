import { motion } from "framer-motion";
import serve from "@/assets/coach-serve.jpg";
import forehand from "@/assets/coach-forehand.jpg";
import bounce from "@/assets/coach-bounce.jpg";
import follow from "@/assets/coach-followthrough.jpg";
import hero from "@/assets/coach-hero.jpg";
import { useLang } from "@/providers/LanguageProvider";

const shots = [
  { src: serve, alt: "Serve toss", className: "row-span-2" },
  { src: forehand, alt: "Forehand drive" },
  { src: hero, alt: "Racket inspection" },
  { src: bounce, alt: "Ball bounce drill", className: "row-span-2" },
  { src: follow, alt: "Follow through" },
];

export function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="relative overflow-hidden bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">{t.gallery.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              {t.gallery.title} <span className="font-serif-display italic text-[var(--court)]">{t.gallery.titleAccent}</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">{t.gallery.sub}</p>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${s.className ?? ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold uppercase tracking-wider text-background opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {s.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
