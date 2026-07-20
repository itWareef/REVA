import Link from "next/link";
import type { Locale } from "@/lib/content";
import { t } from "@/lib/content";
import Photo from "./Photo";
import Icon from "./Icon";

export default function PageHero({
  locale, eyebrow, title, desc, crumb, image = "/images/site-shell.webp",
}: {
  locale: Locale; eyebrow: string; title: string; desc?: string; crumb: string; image?: string; variant?: number;
}) {
  const isAr = locale === "ar";
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink pb-14 pt-32 text-white">
      <div className="absolute inset-0">
        <Photo src={image} alt={title} className="h-full w-full" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
      </div>
      <div className="container-x relative">
        <nav className="mb-5 flex items-center gap-2 text-xs font-semibold text-white/50">
          <Link href={`/${locale}`} className="hover:text-gold">{t.nav.home[locale]}</Link>
          <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={12} />
          <span className="text-gold">{crumb}</span>
        </nav>
        <span className="eyebrow-light"><span className="h-px w-8 bg-current" />{eyebrow}</span>
        <h1 className="mt-4 h-display text-4xl text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">{desc}</p>}
      </div>
    </section>
  );
}
