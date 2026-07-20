import Link from "next/link";
import type { Locale, NewsItem } from "@/lib/content";
import { t } from "@/lib/content";
import Photo from "./Photo";
import Icon from "./Icon";

export default function NewsCard({ locale, item, index = 0 }: { locale: Locale; item: NewsItem; index?: number }) {
  const isAr = locale === "ar";
  return (
    <Link href={`/${locale}/news/${item.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/8 bg-white card-hover">
      <div className="relative overflow-hidden">
        <Photo
          src={item.image}
          alt={item.title[locale]}
          className="aspect-[16/10] w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute start-4 top-4 z-10 rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-ink">{item.tag[locale]}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-concrete">
          <Icon name="Calendar" size={13} className="text-gold-dark" /> {item.dateLabel[locale]}
        </div>
        <h3 className="mt-3 font-display text-lg font-extrabold leading-7 text-ink transition-colors group-hover:text-gold-dark">
          {item.title[locale]}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-concrete">{item.excerpt[locale]}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-dark">
          {t.cta.readMore[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={15} />
        </span>
      </div>
    </Link>
  );
}
