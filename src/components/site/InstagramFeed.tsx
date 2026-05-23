import { motion } from "framer-motion";
import { Instagram, Play, Heart, MessageCircle } from "lucide-react";
import serve from "@/assets/coach-serve.jpg";
import forehand from "@/assets/coach-forehand.jpg";
import bounce from "@/assets/coach-bounce.jpg";
import follow from "@/assets/coach-followthrough.jpg";
import hero from "@/assets/coach-hero.jpg";
import portrait from "@/assets/coach-portrait.jpg";
import action from "@/assets/coach-hero.jpg";
import { useLang } from "@/providers/LanguageProvider";

const IG_URL = "https://www.instagram.com/mmpersonaltraining";

type Post = {
  src: string;
  type: "post" | "reel";
  caption: string;
  likes: string;
  comments: string;
};

const posts: Post[] = [
  { src: serve, type: "reel", caption: "Serve mechanics breakdown 🎾", likes: "1.2k", comments: "48" },
  { src: forehand, type: "post", caption: "Forehand drive — racket lag", likes: "874", comments: "23" },
  { src: portrait, type: "post", caption: "Coaching philosophy", likes: "2.1k", comments: "91" },
  { src: bounce, type: "reel", caption: "Footwork ladder drill", likes: "3.4k", comments: "127" },
  { src: follow, type: "post", caption: "Follow-through, full extension", likes: "612", comments: "18" },
  { src: hero, type: "reel", caption: "Match prep — Dubai courts", likes: "5.8k", comments: "204" },
  { src: action, type: "post", caption: "Junior academy session", likes: "1.5k", comments: "62" },
  { src: portrait, type: "reel", caption: "S&C for tennis players", likes: "2.9k", comments: "85" },
];

export function InstagramFeed() {
  const { t, lang } = useLang();
  const copy =
    lang === "ar"
      ? {
          eyebrow: "إنستغرام",
          title: "تابع الرحلة",
          titleAccent: "على إنستغرام.",
          sub: "تدريبات حقيقية، حركات بطيئة، نصائح فنية — مباشرة من ملاعب دبي.",
          follow: "تابع @mmpersonaltraining",
        }
      : {
          eyebrow: "Instagram",
          title: "Follow the journey",
          titleAccent: "@mmpersonaltraining",
          sub: "Real sessions, slow-mo breakdowns, technical tips — straight from the Dubai courts.",
          follow: "Follow on Instagram",
        };

  void t;

  return (
    <section id="instagram" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">{copy.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              {copy.title}{" "}
              <span className="font-serif-display italic text-[var(--court)]">{copy.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{copy.sub}</p>
          </div>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] via-40% to-[#d62976] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#d62976]/30 transition hover:scale-[1.03]"
          >
            <Instagram className="h-4 w-4" />
            {copy.follow}
          </a>
        </div>

        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {posts.map((p, i) => (
            <motion.a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative mb-3 block break-inside-avoid overflow-hidden rounded-2xl border border-border md:mb-4"
              aria-label={`Instagram ${p.type}: ${p.caption}`}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                }`}
              />

              <div className="absolute right-3 top-3 rounded-full bg-background/80 p-1.5 backdrop-blur">
                {p.type === "reel" ? (
                  <Play className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ) : (
                  <Instagram className="h-3.5 w-3.5 text-foreground" />
                )}
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="line-clamp-2 text-sm font-medium text-background">{p.caption}</p>
                <div className="mt-2 flex items-center gap-4 text-xs text-background/90">
                  <span className="inline-flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 fill-background" /> {p.likes}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" /> {p.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
