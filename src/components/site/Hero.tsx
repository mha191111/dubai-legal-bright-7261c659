import { motion } from "framer-motion";
import heroImg from "@/assets/hero-coach.jpg";
import { useLang } from "@/providers/LanguageProvider";
import { CallButton } from "./CallButton";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Tennis coach Mohammad Moslem mid-swing on a Dubai court at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 court-pattern opacity-50" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 md:px-8 md:pb-28 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ball)]" />
            {t.hero.eyebrow}
          </span>

          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            {t.hero.title}
            <br />
            <span className="text-gradient-ball">{t.hero.titleAccent}</span>
          </h1>

          <p className="max-w-xl text-base text-muted-foreground md:text-lg">{t.hero.sub}</p>

          <div className="flex flex-wrap items-center gap-3">
            <WhatsAppButton message={t.hero.waMessage} />
            <CallButton variant="ghost" />
          </div>

          <dl className="grid max-w-md grid-cols-3 gap-4 pt-6">
            {t.hero.stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-3 py-4 text-center">
                <dt className="font-display text-2xl font-extrabold text-foreground md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[var(--ball)]/20 blur-3xl" />
          <div className="glass-strong rounded-[2rem] p-6 animate-float">
            <div className="rounded-2xl bg-gradient-to-br from-[var(--clay)]/20 to-[var(--court)]/20 p-6">
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">This week</p>
              <p className="mt-2 font-display text-4xl font-extrabold">Open slots</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Mon · 7:00 AM", "Wed · 6:30 PM", "Fri · 7:00 AM", "Sat · 9:00 AM"].map((slot) => (
                  <li key={slot} className="flex items-center justify-between rounded-xl bg-background/70 px-4 py-2">
                    <span className="font-medium">{slot}</span>
                    <span className="text-xs font-semibold text-[var(--court)]">Available</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
