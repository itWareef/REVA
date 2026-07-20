import Link from "next/link";
import type { Locale } from "@/lib/content";
import { projects, t } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import Icon from "./Icon";

export default function ProjectsShowcase({ locale, limit }: { locale: Locale; limit?: number }) {
  const isAr = locale === "ar";
  const items = limit ? projects.slice(0, limit) : projects;
  return (
    <section className="relative bg-sand-100 py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={isAr ? "أعمالنا" : "Our Work"}
            title={isAr ? "مشاريع تعكس إتقاننا" : "Projects that reflect our craft"}
            desc={isAr
              ? "محفظة متنامية من المشاريع السكنية والتجارية في أرقى أحياء الرياض."
              : "A growing portfolio of residential and commercial projects across Riyadh's finest districts."}
          />
          <Reveal>
            <Link href={`/${locale}/projects`} className="btn-outline-ink hidden sm:inline-flex">
              {t.cta.all[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.1}>
              <ProjectCard locale={locale} project={p} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
