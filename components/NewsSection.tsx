import Link from "next/link";
import type { Locale } from "@/lib/content";
import { news, t } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import NewsCard from "./NewsCard";
import Icon from "./Icon";

export default function NewsSection({ locale, limit = 3 }: { locale: Locale; limit?: number }) {
  const isAr = locale === "ar";
  return (
    <section className="bg-sand py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={isAr ? "المستجدّات" : "Newsroom"}
            title={isAr ? "آخر أخبارنا" : "Latest News"}
            desc={isAr ? "أحدث المشاريع والإنجازات والاعتمادات." : "Our latest projects, milestones and accreditations."}
          />
          <Reveal>
            <Link href={`/${locale}/news`} className="btn-outline-ink hidden sm:inline-flex">
              {t.cta.all[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, limit).map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 0.08}>
              <NewsCard locale={locale} item={n} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
