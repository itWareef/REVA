import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { projects, company, t } from "@/lib/content";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export function generateStaticParams() {
  return projects.flatMap((p) => [{ locale: "ar", slug: p.slug }, { locale: "en", slug: p.slug }]);
}

export default function ProjectDetail({ params }: { params: { locale: string; slug: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  const idx = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[idx];
  if (!project) notFound();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const facts = [
    { icon: "MapPin", label: isAr ? "الموقع" : "Location", value: project.district[locale] },
    { icon: "Layers", label: isAr ? "الوحدات" : "Units", value: project.units[locale] },
    { icon: "Calendar", label: isAr ? "السنة" : "Year", value: project.year },
    { icon: "Clock", label: isAr ? "الحالة" : "Status", value: project.status[locale] },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink pb-16 pt-32 text-white">
        <div className="absolute inset-0">
          <Photo src={project.image} alt={project.title[locale]} className="h-full w-full" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/45" />
        </div>
        <div className="container-x relative">
          <nav className="mb-5 flex items-center gap-2 text-xs font-semibold text-white/50">
            <Link href={`/${locale}/projects`} className="hover:text-gold">{t.nav.projects[locale]}</Link>
            <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={12} />
            <span className="text-gold">{project.title[locale]}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">{project.category[locale]}</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">{project.status[locale]}</span>
          </div>
          <h1 className="mt-4 h-display text-4xl text-white sm:text-6xl">{project.title[locale]}</h1>
          <p className="mt-3 flex items-center gap-2 text-gold"><Icon name="MapPin" size={16} /> {project.district[locale]}</p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <span className="eyebrow"><span className="h-px w-8 bg-current" />{isAr ? "عن المشروع" : "Overview"}</span>
            <Reveal delay={0.05}><p className="mt-5 text-lg leading-9 text-ink">{project.description[locale]}</p></Reveal>
            {project.progress != null && (
              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl border border-ink/8 bg-sand-50 p-6">
                  <div className="flex items-center justify-between text-sm font-bold text-ink">
                    <span>{isAr ? "نسبة الإنجاز" : "Completion"}</span>
                    <span className="text-gold-dark">{project.progress}%</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold" style={{ width: `${project.progress}%` }} />
                  </div>
                </div>
              </Reveal>
            )}
            <div className="mt-10">
              <h3 className="font-display text-xl font-extrabold text-ink">{isAr ? "أبرز ملامح المشروع" : "Project Highlights"}</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.highlights[locale].map((h) => (
                  <li key={h} className="flex items-center gap-3 rounded-xl border border-ink/8 bg-white px-4 py-3.5 text-sm font-semibold text-ink">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20 text-gold-dark"><Icon name="Check" size={14} strokeWidth={3} /></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-xl font-extrabold text-ink">{isAr ? "معرض الصور" : "Project Gallery"}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((src, gi) => (
                  <Photo
                    key={src + gi}
                    src={src}
                    alt={`${project.title[locale]} — ${gi + 1}`}
                    className={`w-full rounded-2xl shadow-card ${gi === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"}`}
                    imgClassName="transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-ink/8 bg-sand-50 p-7">
              <h3 className="font-display text-lg font-extrabold text-ink">{isAr ? "بيانات المشروع" : "Project Facts"}</h3>
              <ul className="mt-5 space-y-4">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark"><Icon name={f.icon as any} size={17} /></span>
                    <span>
                      <span className="block text-xs text-concrete">{f.label}</span>
                      <span className="block text-sm font-bold text-ink">{f.value}</span>
                    </span>
                  </li>
                ))}
                {project.area && (
                  <li className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark"><Icon name="Ruler" size={17} /></span>
                    <span><span className="block text-xs text-concrete">{isAr ? "المساحة" : "Built-up Area"}</span><span className="force-ltr block text-sm font-bold text-ink">{project.area} m²</span></span>
                  </li>
                )}
              </ul>
              <a href={`tel:${company.phoneIntl}`} className="btn-gold mt-7 w-full"><Icon name="PhoneCall" size={17} /> {isAr ? "استفسر عن مشروع مماثل" : "Ask about a similar project"}</a>
              <Link href={`/${locale}/contact`} className="btn-outline-ink mt-3 w-full">{t.cta.quote[locale]}</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="container-x">
          <h2 className="mb-10 h-display text-2xl text-ink sm:text-3xl">{isAr ? "مشاريع أخرى" : "More Projects"}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p, i) => <ProjectCard key={p.slug} locale={locale} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
