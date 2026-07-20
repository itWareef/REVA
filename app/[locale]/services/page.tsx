import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { services, t } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import type { IconName } from "@/components/Icon";
import Photo from "@/components/Photo";
import CTASection from "@/components/CTASection";
import CertificationsSection from "@/components/CertificationsSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  return (
    <>
      <PageHero
        locale={locale}
        crumb={t.nav.services[locale]}
        eyebrow={isAr ? "خدماتنا" : "Our Services"}
        title={isAr ? "حلول إنشائية متكاملة" : "Integrated construction solutions"}
        desc={isAr
          ? "نغطّي دورة البناء كاملة — من أعمال التربة والعظم حتى الميكانيكا والتشطيبات واللاندسكيب والأنظمة الذكية."
          : "We cover the entire build cycle — from earthworks and structure to mechanical, finishing, landscaping and smart systems."}
        image="/images/steel-structure.webp"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.05}>
              <div id={s.slug} className="group grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-[2rem] border border-ink/8 bg-sand-50 lg:grid-cols-2">
                <div className={`p-9 lg:p-12 ${i % 2 ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-gold">
                      <Icon name={s.icon as IconName} size={30} strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-5xl font-black text-ink/10">0{i + 1}</span>
                  </div>
                  <h2 className="mt-6 h-display text-2xl text-ink sm:text-3xl">{s.title[locale]}</h2>
                  <p className="mt-4 text-base leading-8 text-concrete">{s.short[locale]}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {s.points[locale].map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm font-semibold text-ink">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-dark">
                          <Icon name="Check" size={13} strokeWidth={3} />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-64 lg:h-full ${i % 2 ? "lg:order-1" : ""}`}>
                  <Photo src={s.image} alt={s.title[locale]} className="h-full min-h-[16rem] w-full" sizes="(max-width: 1024px) 100vw, 50vw" imgClassName="transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CertificationsSection locale={locale} />
      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
