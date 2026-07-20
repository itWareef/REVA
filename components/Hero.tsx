"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Locale } from "@/lib/content";
import { t, company, certifications, siteImages } from "@/lib/content";
import Photo from "./Photo";
import Icon from "./Icon";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const sub = isAr
    ? "خدمات إنشائية متكاملة في الرياض — من التصميم والأساسات حتى التشطيبات واللاندسكيب، بمعايير جودة عالمية وخبرة تتجاوز عشرين عاماً."
    : "Integrated construction services in Riyadh — from design and foundations to finishing and landscaping, delivered to global quality standards with 20+ years of experience.";

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      {/* background photo */}
      <div className="absolute inset-0">
        <Photo
          src={siteImages.hero}
          alt={company.legal[locale]}
          className="h-full w-full"
          imgClassName="scale-105"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/65 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink via-ink/55 to-ink/20" />
      </div>

      {/* giant faint word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-stroke select-none font-display text-[22vw] font-black leading-none tracking-tighter opacity-[0.55]">
          RIVA
        </span>
      </div>

      <div className="container-x relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-bold tracking-wide text-gold backdrop-blur"
          >
            <span className="flex h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(201,162,75,0.8)]" />
            {isAr ? `شركة سعودية للمقاولات • تأسست ${company.foundedYear}` : `Saudi Contracting Company • Est. ${company.foundedYear}`}
          </motion.div>

          <h1 className="h-display text-4xl text-white sm:text-6xl lg:text-7xl">
            {company.tagline[locale].split(/[—…]/).map((part, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease }}
                className={i === 1 ? "block bg-gradient-to-l from-gold-light via-gold to-gold-dark bg-clip-text text-transparent" : "block"}
              >
                {part.trim()}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg"
          >
            {sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href={`/${locale}/projects`} className="btn-gold">
              {t.cta.explore[locale]}
              <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={18} />
            </Link>
            <Link href={`/${locale}/contact`} className="btn-outline">
              {t.cta.quote[locale]}
            </Link>
          </motion.div>

          {/* certifications inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-7"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
              {isAr ? "معتمدون بشهادات" : "Certified by"}
            </span>
            {certifications.map((c) => (
              <span key={c.code} className="flex items-center gap-2 text-sm font-bold text-white/80">
                <Icon name="BadgeCheck" size={16} className="text-gold" />
                {c.code}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{isAr ? "اكتشف" : "Scroll"}</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <Icon name="ChevronDown" size={20} />
        </motion.span>
      </motion.div>
    </section>
  );
}
