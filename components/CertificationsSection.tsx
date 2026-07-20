import type { Locale } from "@/lib/content";
import { certifications } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function CertificationsSection({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:52px_52px] opacity-25" />
      <div className="pointer-events-none absolute -top-32 start-1/3 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          light
          eyebrow={isAr ? "اعتمادات وشهادات" : "Accreditations"}
          title={isAr ? "جودة موثّقة عالمياً ومحلياً" : "Quality certified globally & locally"}
          desc={isAr
            ? "التزامنا بالمعايير الدولية موثّق بثلاث شهادات آيزو، وبشهادة المحتوى المحلي دعماً لرؤية المملكة ٢٠٣٠."
            : "Our commitment to international standards is backed by three ISO certifications and a Local Content certificate supporting Vision 2030."}
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur transition-all duration-500 hover:border-gold/40 hover:bg-white/[0.06]">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <Icon name="Award" size={24} />
                </span>
                <div className="mt-5 font-display text-2xl font-black text-gold">{c.code}</div>
                <p className="mt-2 text-sm font-semibold text-white/65">{c.title[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
