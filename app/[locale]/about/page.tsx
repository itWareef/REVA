import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { company, t } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import StatsSection from "@/components/StatsSection";
import ValuesSection from "@/components/ValuesSection";
import CertificationsSection from "@/components/CertificationsSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";

  const story = isAr
    ? [
        "تأسست شركة مسكن ريفا للمقاولات عام ٢٠٠١، ومنذ نشأتها استطاعت أن تضع بصمتها المميزة في قطاع المقاولات بفضل أكثر من عشرين عاماً من الخبرة والابتكار.",
        "وفي عام ٢٠٢٢ أطلقت الشركة استراتيجية جديدة شاملة تواكب التوجهات والتطورات الحديثة في مجال المقاولات والإنشاء، نفّذت من خلالها مجموعة واسعة من المشاريع المميزة التي تشمل الوحدات السكنية بجميع أنواعها (فلل، أدوار، تاون هاوس، بنتهاوس، شقق) والمجمعات التجارية في مواقع حيوية بمدينة الرياض.",
        "وتلتزم الشركة بمعايير عالية في إدارة التكلفة والجودة والوقت لضمان تحقيق أفضل النتائج، كما تسعى لتوسيع نطاق عملياتها على مستوى المملكة بهدف تنفيذ مشاريع ريادية تواكب العصر.",
      ]
    : [
        "Maskan Riva Contracting was founded in 2001, and since its inception it has left a distinctive mark on the contracting sector through more than twenty years of experience and innovation.",
        "In 2022 the company launched a comprehensive new strategy aligned with modern trends in contracting and construction, delivering a wide range of distinguished projects — residential units of every type (villas, floor-units, townhouses, penthouses, apartments) and commercial complexes in vibrant Riyadh locations.",
        "The company adheres to high standards in cost, quality and time management to ensure the best results, and continually seeks to expand its operations across the Kingdom with pioneering, contemporary projects.",
      ];

  const mission = isAr
    ? { m: "أن نكون روّاد قطاع الإنشاءات من خلال تقديم حلول بناء تجمع بين الجودة العالية والموثوقية، ونواصل التوسّع لتلبية احتياجات عملائنا في جميع أنحاء المملكة.", v: "نبني أكثر من مجرد مشاريع؛ نبني المستقبل، ونعتبر الإتقان أسلوب حياة نسعى من خلاله إلى أعلى مستويات الجودة في كل مشروع." }
    : { m: "To lead the construction sector by delivering build solutions that combine high quality with reliability, expanding continually to meet our clients' needs across the Kingdom.", v: "We build more than projects; we build the future. Craftsmanship is a way of life through which we pursue the highest levels of quality in every project." };

  return (
    <>
      <PageHero
        locale={locale}
        crumb={t.nav.about[locale]}
        eyebrow={isAr ? "من نحن" : "About Us"}
        title={isAr ? "نبني المستقبل منذ عام ٢٠٠١" : "Building the future since 2001"}
        desc={company.tagline[locale]}
        image="/images/crane-sky.webp"
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <Photo src="/images/villas-palm.webp" alt={isAr ? "مشاريع مسكن ريفا" : "Maskan Riva projects"} className="aspect-[4/4] w-full rounded-[1.75rem] shadow-soft" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute -bottom-6 rounded-2xl bg-gold px-7 py-5 text-ink shadow-gold start-6">
                <div className="font-display text-3xl font-black">{company.foundedYear}</div>
                <div className="text-xs font-bold">{isAr ? "سنة التأسيس" : "Established"}</div>
              </div>
            </div>
          </Reveal>
          <div>
            <span className="eyebrow"><span className="h-px w-8 bg-current" />{isAr ? "قصتنا" : "Our Story"}</span>
            <Reveal delay={0.05}>
              <h2 className="mt-4 h-display text-3xl text-ink sm:text-4xl">
                {isAr ? "عشرون عاماً من الإتقان والابتكار" : "Two decades of craft and innovation"}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5">
              {story.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.06}>
                  <p className="text-base leading-8 text-concrete">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section className="bg-sand py-20">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            { icon: "Star", t: isAr ? "رؤيتنا" : "Our Vision", x: mission.v },
            { icon: "BadgeCheck", t: isAr ? "رسالتنا" : "Our Mission", x: mission.m },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-ink/8 bg-white p-9 card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold">
                  <Icon name={c.icon as any} size={26} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-ink">{c.t}</h3>
                <p className="mt-4 text-base leading-8 text-concrete">{c.x}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsSection locale={locale} />
      <ValuesSection locale={locale} />
      <CertificationsSection locale={locale} />
      <CTASection locale={locale} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
