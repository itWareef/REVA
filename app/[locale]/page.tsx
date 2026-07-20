import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutPreview from "@/components/AboutPreview";
import ServicesSection from "@/components/ServicesSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ValuesSection from "@/components/ValuesSection";
import CertificationsSection from "@/components/CertificationsSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  return (
    <>
      <Hero locale={locale} />
      <StatsSection locale={locale} />
      <AboutPreview locale={locale} />
      <ServicesSection locale={locale} />
      <ProjectsShowcase locale={locale} limit={4} />
      <ValuesSection locale={locale} />
      <CertificationsSection locale={locale} />
      <NewsSection locale={locale} />
      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
