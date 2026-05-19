import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";

export function Blog() {
  const { t } = useLang();
  return (
    <section id="blog" className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--clay)]">Blog</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.blog.title}</h2>
          </div>
          <p className="max-w-md text-muted-foreground">{t.blog.sub}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.blog.items.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${
                i === 0 ? "from-[var(--clay)]/30 to-[var(--court)]/40" :
                i === 1 ? "from-[var(--ball)]/40 to-[var(--court)]/30" :
                "from-[var(--court)]/40 to-[var(--clay)]/30"
              } relative overflow-hidden`}>
                <div className="absolute inset-0 court-pattern opacity-30" />
                <span className="absolute bottom-4 start-4 inline-flex rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {post.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold leading-tight">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-[var(--clay)]">
                  {t.blog.readMore}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
