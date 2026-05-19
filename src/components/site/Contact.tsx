import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useLang } from "@/providers/LanguageProvider";
import { CONTACT, contactSchema, mailHref, telHref, waHref } from "@/lib/contact";
import { Button } from "@/components/ui/button";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", pkg: "standard" as "standard" | "pro" | "premium" | "custom", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse({
      name: form.name,
      phone: form.phone,
      package: form.pkg,
      message: form.message || undefined,
    });
    if (!result.success) {
      const map: Errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof Errors;
        if (field && !map[field]) map[field] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    const pkgLabel = t.contact.packages[result.data.package];
    const lines = [
      `${t.contact.formIntro} ${result.data.name}.`,
      `${t.contact.formPhone} ${result.data.phone}`,
      `${t.contact.formPackage} ${pkgLabel}`,
      result.data.message ? `${t.contact.formNote} ${result.data.message}` : "",
    ].filter(Boolean);
    window.open(waHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  const field = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-[var(--court)] focus:ring-2 focus:ring-[var(--court)]/30";

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 court-pattern opacity-[0.06]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ball)]">Contact</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{t.contact.title}</h2>
            <p className="mt-3 max-w-md text-background/70">{t.contact.sub}</p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-background/60">{t.contact.orReach}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={telHref} className="group flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 transition hover:border-[var(--ball)] hover:bg-background/10">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ball)]/20 text-[var(--ball)]"><Phone className="h-4 w-4" /></span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/60">{t.cta.call}</span>
                  <span className="block text-sm font-semibold">{CONTACT.phoneDisplay}</span>
                </span>
              </a>
              <a href={mailHref} className="group flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 transition hover:border-[var(--ball)] hover:bg-background/10">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ball)]/20 text-[var(--ball)]"><Mail className="h-4 w-4" /></span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/60">Email</span>
                  <span className="block text-sm font-semibold">{CONTACT.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 sm:col-span-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ball)]/20 text-[var(--ball)]"><MapPin className="h-4 w-4" /></span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/60">Location</span>
                  <span className="block text-sm font-semibold">{CONTACT.city}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-background/15">
            <iframe
              title="Dubai map"
              src="https://www.google.com/maps?q=Dubai&output=embed"
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-3xl p-6 text-foreground md:p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="name">{t.contact.name}</label>
              <input id="name" type="text" maxLength={80} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="phone">{t.contact.phone}</label>
              <input id="phone" type="tel" maxLength={20} required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="pkg">{t.contact.package}</label>
              <select id="pkg" value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value as typeof form.pkg })} className={field}>
                <option value="standard">{t.contact.packages.standard}</option>
                <option value="pro">{t.contact.packages.pro}</option>
                <option value="premium">{t.contact.packages.premium}</option>
                <option value="custom">{t.contact.packages.custom}</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="msg">{t.contact.message}</label>
              <textarea id="msg" rows={4} maxLength={600} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
            </div>
            <Button type="submit" className="group w-full rounded-full bg-[var(--ball)] py-6 font-bold text-[var(--ball-foreground)] hover:bg-[var(--ball)] hover:opacity-90">
              <Send className="me-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {t.contact.send}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
