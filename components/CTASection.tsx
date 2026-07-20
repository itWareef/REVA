import Link from "next/link";
import type { Locale } from "@/lib/content";
import { company, t, siteImages } from "@/lib/content";
import Reveal from "./Reveal";
import Icon from "./Icon";
import Photo from "./Photo";

export default function CTASection({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  return (
    <section className="relative py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center text-white sm:px-16 lg:py-20">
            <Photo src={siteImages.cta} alt="" className="absolute inset-0" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
            <div className="pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
            <div className="relative mx-auto max-w-3xl">
              <span className="eyebrow-light justify-center"><span className="h-px w-8 bg-current" />{isAr ? "لنبدأ معاً" : "Let's Build"}</span>
              <h2 className="mt-5 h-display text-3xl text-white sm:text-5xl">
                {isAr ? "استثمر الآن مع واحدة من أكبر شركات الإنشاء والمقاولات" : "Invest today with one of the leading construction & contracting firms"}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/70">
                {isAr ? "حدّد موعداً للتواصل معك، وسيقوم فريقنا الهندسي بمناقشة مشروعك وتقديم أفضل الحلول." : "Schedule a call and our engineering team will discuss your project and craft the best solutions."}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Link href={`/${locale}/contact`} className="btn-gold">
                  {t.cta.contact[locale]} <Icon name={isAr ? "ArrowLeft" : "ArrowRight"} size={18} />
                </Link>
                <a href={`tel:${company.phoneIntl}`} className="btn-outline">
                  <Icon name="PhoneCall" size={17} /> {company.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
