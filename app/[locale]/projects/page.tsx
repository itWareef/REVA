import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { projects, t } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ProjectsPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  return (
    <>
      <PageHero
        locale={locale}
        crumb={t.nav.projects[locale]}
        eyebrow={isAr ? "أعمالنا" : "Portfolio"}
        title={isAr ? "مشاريعنا" : "Our Projects"}
        desc={isAr
          ? "محفظة متنامية من المشاريع السكنية والتجارية في أرقى أحياء الرياض، تنفّذ بأعلى معايير الجودة."
          : "A growing portfolio of residential and commercial projects across Riyadh's finest districts, built to the highest quality standards."}
        variant={3}
      />
      <section className="bg-sand py-24 lg:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1}>
              <ProjectCard locale={locale} project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <StatsSection locale={locale} />
      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
