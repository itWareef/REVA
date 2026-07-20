"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/content";
import { t, company } from "@/lib/content";
import { other } from "@/lib/i18n";
import Logo from "./Logo";
import Icon from "./Icon";

const links = (l: Locale) => [
  { href: `/${l}`, label: t.nav.home[l], exact: true },
  { href: `/${l}/about`, label: t.nav.about[l] },
  { href: `/${l}/services`, label: t.nav.services[l] },
  { href: `/${l}/projects`, label: t.nav.projects[l] },
  { href: `/${l}/news`, label: t.nav.news[l] },
  { href: `/${l}/contact`, label: t.nav.contact[l] },
];

export default function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const nav = links(locale);
  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  // language switch keeps current path
  const switchHref = (() => {
    const o = other(locale);
    const rest = pathname.replace(/^\/(ar|en)/, "");
    return `/${o}${rest}`;
  })();

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-white/90 shadow-card backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between">
          <Link href={`/${locale}`} aria-label={company.name[locale]}>
            <Logo locale={locale} tone={solid ? "ink" : "white"} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`relative rounded-full px-4 py-2 text-[15px] font-bold transition-colors ${
                  solid ? "text-ink-700" : "text-white/85"
                } ${isActive(n.href, n.exact) ? "!text-gold-dark" : "hover:text-gold"}`}
              >
                {n.label}
                {isActive(n.href, n.exact) && (
                  <motion.span layoutId="nav-dot" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href={switchHref}
              className={`hidden items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold transition-colors sm:inline-flex ${
                solid ? "border-ink/15 text-ink-700 hover:border-gold hover:text-gold-dark" : "border-white/25 text-white hover:border-gold hover:text-gold"
              }`}
            >
              <Icon name="Globe" size={15} />
              {locale === "ar" ? "EN" : "ع"}
            </Link>
            <Link href={`/${locale}/contact`} className="hidden btn-gold !px-5 !py-2.5 !text-[13px] md:inline-flex">
              {t.cta.quote[locale]}
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                solid ? "text-ink" : "text-white"
              }`}
            >
              <Icon name={open ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-20">
              {nav.map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={n.href}
                    className={`block border-b border-white/10 py-4 font-display text-3xl font-extrabold ${
                      isActive(n.href, n.exact) ? "text-gold" : "text-white"
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex items-center gap-3">
                <Link href={switchHref} className="btn-outline flex-1">
                  <Icon name="Globe" size={16} /> {locale === "ar" ? "English" : "العربية"}
                </Link>
                <a href={`tel:${company.phoneIntl}`} className="btn-gold flex-1">
                  <Icon name="PhoneCall" size={16} /> {t.cta.call[locale]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
