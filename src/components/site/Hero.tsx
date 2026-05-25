import { motion } from "framer-motion";
import { ArrowDown, Play } from "lucide-react";
import heroPortrait from "@/assets/coach-hero.jpg";
import { useLang } from "@/providers/LanguageProvider";
import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-foreground text-background pt-24 md:pt-28">
      {/* Cinematic video backdrop */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={heroPortrait}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/70 to-foreground" />
        <div className="absolute inset-0 court-pattern opacity-20" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 md:px-8 md:pb-28 md:[grid-template-columns:minmax(0,1fr)_auto] lg:grid-cols-12 lg:items-center lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-7 lg:col-span-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur">
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--ball)] pulse-ring" />
            {t.hero.eyebrow}
          </span>

          <h1 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
            <span className="block">{t.hero.title}</span>
            <span className="font-serif-display block text-[1.05em] font-normal italic text-[var(--ball)]">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p className="max-w-xl text-base text-background/70 md:text-lg">{t.hero.sub}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <WhatsAppButton message={t.hero.waMessage} />
            <CallButton variant="ghost" className="border-background/25 bg-background/5 text-background hover:bg-background/10 hover:text-background" />
            <a
              href="#showreel"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-background/80 transition hover:text-[var(--ball)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-background/20 transition group-hover:border-[var(--ball)]">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch reel
            </a>
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/10 backdrop-blur">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="bg-foreground/40 px-4 py-5 text-center">
                <dt className="font-display text-2xl font-extrabold text-background md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-[10px] font-medium uppercase tracking-wider text-background/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Mobile/tablet image removed per request */}

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden lg:col-span-5 lg:block"
        >
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[var(--ball)]/25 blur-3xl" />
          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-[2rem] border border-background/20 shadow-2xl">
              <img
                src={heroPortrait}
                alt="Mohammad Moslem — Dubai tennis & fitness coach"
                width={900}
                height={1200}
                className="aspect-[3/4] w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent p-5 pt-16">
                <p className="font-serif-display text-xl italic text-background/80">"Train the player.</p>
                <p className="font-serif-display text-xl italic text-[var(--ball)]">Build the athlete."</p>
              </div>
            </div>

            <div className="glass-strong absolute -left-6 top-8 rounded-2xl px-4 py-3 text-foreground shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Now booking</p>
              <p className="font-display text-sm font-extrabold">This week · Dubai</p>
            </div>

            <div className="glass-strong absolute -right-4 bottom-16 rounded-2xl px-4 py-3 text-foreground shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--court)]" />
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">4 slots open</p>
              </div>
              <p className="mt-0.5 font-display text-sm font-extrabold">Mon · Wed · Fri</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#why" aria-label="Scroll" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-background/60 md:block">
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
