import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { news, t } from "@/lib/content";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import NewsCard from "@/components/NewsCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export function generateStaticParams() {
  return news.flatMap((n) => [{ locale: "ar", slug: n.slug }, { locale: "en", slug: n.slug }]);
}

export default function NewsDetail({ params }: { params: { locale: string; slug: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  const idx = news.findIndex((n) => n.slug === params.slug);
  const item = news[idx];
  if (!item) notFound();
  const more = news.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[56vh] items-end overflow-hidden bg-ink pb-14 pt-32 text-white">
        <div className="absolute inset-0">
          <Photo src={item.image} alt={item.title[locale]} className="h-full w-full" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
        </div>
        <div className="container-x relative max-w-4xl">
          <nav className="mb-5 flex items-center gap-2 text-xs font-semibold text-white/50">
            <Link href={`/${locale}/news`} className="hover:text-gold">{t.nav.news[locale]}</Link>
            <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={12} />
            <span className="text-gold">{item.tag[locale]}</span>
          </nav>
          <div className="flex items-center gap-4 text-sm">
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">{item.tag[locale]}</span>
            <span className="flex items-center gap-2 text-white/60"><Icon name="Calendar" size={14} /> {item.dateLabel[locale]}</span>
          </div>
          <h1 className="mt-4 h-display text-3xl leading-tight text-white sm:text-5xl">{item.title[locale]}</h1>
        </div>
      </section>

      <article className="bg-white py-20 lg:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="mb-8 border-s-4 border-gold ps-5 text-xl font-semibold leading-9 text-ink">{item.excerpt[locale]}</p>
          </Reveal>
          <div className="space-y-6">
            {item.body[locale].map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-lg leading-9 text-concrete-dark">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-ink/8 pt-8">
            <Link href={`/${locale}/news`} className="btn-outline-ink">
              <Icon name={isAr ? "ArrowRight" : "ArrowLeft"} size={16} /> {isAr ? "كل الأخبار" : "All News"}
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-sand py-20">
        <div className="container-x">
          <h2 className="mb-10 h-display text-2xl text-ink sm:text-3xl">{isAr ? "أخبار ذات صلة" : "Related News"}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((n, i) => <NewsCard key={n.slug} locale={locale} item={n} index={i} />)}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
