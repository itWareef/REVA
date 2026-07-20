import Link from "next/link";
import type { Locale } from "@/lib/content";
import { services, t } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Photo from "./Photo";
import Icon from "./Icon";
import type { IconName } from "./Icon";

export default function ServicesSection({ locale, limit }: { locale: Locale; limit?: number }) {
  const isAr = locale === "ar";
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section className="relative bg-sand py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={isAr ? "ماذا نقدّم" : "What We Offer"}
            title={isAr ? "خدمات إنشائية متكاملة" : "Integrated Construction Services"}
            desc={isAr
              ? "من الأساسات حتى التسليم — نغطّي دورة البناء كاملة بفريق هندسي واحد وجودة موحّدة."
              : "From foundations to handover — we cover the full build cycle with one engineering team and a single standard of quality."}
          />
          <Reveal>
            <Link href={`/${locale}/services`} className="btn-outline-ink hidden sm:inline-flex">
              {t.cta.all[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/${locale}/services#${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white card-hover"
              >
                <div className="relative">
                  <Photo
                    src={s.image}
                    alt={s.title[locale]}
                    className="aspect-[16/10] w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                  <div className="absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold shadow-lg transition-colors duration-500 group-hover:bg-gold group-hover:text-ink -bottom-7 start-6">
                    <Icon name={s.icon as IconName} size={26} strokeWidth={1.7} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-10">
                  <h3 className="font-display text-xl font-extrabold text-ink">{s.title[locale]}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-concrete">{s.short[locale]}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold-dark opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {t.cta.details[locale]}
                    <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={15} />
                  </span>
                </div>
                <span className="pointer-events-none absolute bottom-0 start-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
