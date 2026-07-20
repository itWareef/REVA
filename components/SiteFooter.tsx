import Link from "next/link";
import type { Locale } from "@/lib/content";
import { t, company, services, certifications } from "@/lib/content";
import Logo from "./Logo";
import Icon from "./Icon";

export default function SiteFooter({ locale }: { locale: Locale }) {
  const year = 2026;
  const nav = [
    { href: `/${locale}/about`, label: t.nav.about[locale] },
    { href: `/${locale}/services`, label: t.nav.services[locale] },
    { href: `/${locale}/projects`, label: t.nav.projects[locale] },
    { href: `/${locale}/news`, label: t.nav.news[locale] },
    { href: `/${locale}/contact`, label: t.nav.contact[locale] },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:52px_52px] opacity-40" />
      <div className="pointer-events-none absolute -top-40 start-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[120px]" />

      {/* certifications strip */}
      <div className="relative border-b border-white/10">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-7">
          {certifications.map((c) => (
            <div key={c.code} className="flex items-center gap-2.5 text-white/70">
              <Icon name="BadgeCheck" size={18} className="text-gold" />
              <span className="text-sm font-bold text-white">{c.code}</span>
              <span className="text-xs text-white/50">{c.title[locale]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo locale={locale} tone="white" />
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">{company.tagline[locale]}</p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { icon: "MessageCircle", href: `https://wa.me/${company.phoneIntl.replace("+", "")}` },
              { icon: "Phone", href: `tel:${company.phoneIntl}` },
              { icon: "Mail", href: `mailto:${company.email}` },
            ].map((s) => (
              <a key={s.icon} href={s.href} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold">
                <Icon name={s.icon as any} size={17} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-gold">{locale === "ar" ? "روابط" : "Links"}</h4>
          <ul className="space-y-3.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-white/60 transition-colors hover:text-gold">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-gold">{t.nav.services[locale]}</h4>
          <ul className="space-y-3.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/${locale}/services#${s.slug}`} className="text-white/60 transition-colors hover:text-gold">
                  {s.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-gold">{t.nav.contact[locale]}</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <Icon name="MapPin" size={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{company.address[locale]}</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Phone" size={18} className="shrink-0 text-gold" />
              <a href={`tel:${company.phoneIntl}`} className="force-ltr hover:text-gold">{company.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="Mail" size={18} className="shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="force-ltr hover:text-gold">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <span>© {year} {company.legal[locale]}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</span>
          <span className="flex items-center gap-2">
            <Icon name="MapPin" size={13} className="text-gold/70" /> {t.common.riyadh[locale]}
          </span>
        </div>
      </div>
    </footer>
  );
}
