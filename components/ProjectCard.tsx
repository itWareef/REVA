import Link from "next/link";
import type { Locale, Project } from "@/lib/content";
import { t } from "@/lib/content";
import Photo from "./Photo";
import Icon from "./Icon";

export default function ProjectCard({ locale, project, index = 0 }: { locale: Locale; project: Project; index?: number }) {
  const isAr = locale === "ar";
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-ink card-hover"
    >
      <Photo
        src={project.image}
        alt={project.title[locale]}
        className="aspect-[4/3.2] w-full"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-ink">{project.category[locale]}</span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">{project.status[locale]}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="flex items-center gap-2 text-xs font-semibold text-gold">
          <Icon name="MapPin" size={13} /> {project.district[locale]}
        </div>
        <h3 className="mt-2 font-display text-2xl font-extrabold">{project.title[locale]}</h3>
        <p className="mt-1 text-sm text-white/70">{project.units[locale]}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          {t.cta.details[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={15} />
        </span>
      </div>
    </Link>
  );
}
