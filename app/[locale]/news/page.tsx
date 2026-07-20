import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { news, t } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import NewsCard from "@/components/NewsCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function NewsPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  return (
    <>
      <PageHero
        locale={locale}
        crumb={t.nav.news[locale]}
        eyebrow={isAr ? "المستجدّات" : "Newsroom"}
        title={isAr ? "أخبارنا وإنجازاتنا" : "News & Milestones"}
        desc={isAr ? "تابع أحدث مشاريع الشركة وإنجازاتها واعتماداتها." : "Follow the company's latest projects, milestones and accreditations."}
        variant={0}
      />
      <section className="bg-sand py-24 lg:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 0.08}>
              <NewsCard locale={locale} item={n} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
