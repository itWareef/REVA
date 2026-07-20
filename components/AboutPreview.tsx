import Link from "next/link";
import type { Locale } from "@/lib/content";
import { company, values, t, siteImages } from "@/lib/content";
import Photo from "./Photo";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function AboutPreview({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const body = isAr
    ? "في مسكن ريفا نبني أكثر من مجرد مشاريع؛ نبدأ بتصميم المخططات بدقة، ونتقدّم خطوة بخطوة لتحقيق رؤية متكاملة. نعتبر الإتقان أسلوب حياة، ونقدّم حلول بناء تجمع بين الجودة العالية والموثوقية في جميع أنحاء المملكة."
    : "At Maskan Riva we build more than projects; we begin with precise planning and advance step by step toward a complete vision. Craftsmanship is a way of life for us, and we deliver build solutions that combine high quality with reliability across the Kingdom.";
  return (
    <section className="relative bg-white py-24 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/20 to-transparent" />
            <Photo
              src={siteImages.about}
              alt={isAr ? "فريق مسكن ريفا في الموقع" : "Maskan Riva team on site"}
              className="aspect-[4/3.4] w-full rounded-[1.75rem] shadow-soft"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute -bottom-6 rounded-2xl bg-ink px-7 py-5 text-white shadow-gold end-6">
              <div className="font-display text-4xl font-black text-gold">{company.yearsExperience}</div>
              <div className="mt-1 text-xs font-semibold text-white/70">{isAr ? "عاماً من الخبرة" : "Years of Experience"}</div>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow"><span className="h-px w-8 bg-current" />{isAr ? "من نحن" : "About Us"}</span>
          <Reveal delay={0.05}>
            <h2 className="mt-4 h-display text-3xl text-ink sm:text-4xl">
              {isAr ? "شركة سعودية رائدة في قطاع المقاولات والإنشاءات" : "A leading Saudi company in contracting & construction"}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-8 text-concrete">{body}</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.slice(0, 4).map((v, i) => (
              <Reveal key={v.title.en} delay={0.12 + i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-sand-50 px-4 py-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                    <Icon name={v.icon as any} size={18} />
                  </span>
                  <span className="text-sm font-bold text-ink">{v.title[locale]}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`/${locale}/about`} className="btn-ink">
                {isAr ? "تعرّف علينا أكثر" : "More About Us"}
                <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={17} />
              </Link>
              <a href={`tel:${company.phoneIntl}`} className="btn-outline-ink">
                <Icon name="PhoneCall" size={17} /> {company.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
