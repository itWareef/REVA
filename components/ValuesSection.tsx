import type { Locale } from "@/lib/content";
import { values } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function ValuesSection({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow={isAr ? "ما يميّزنا" : "What Defines Us"}
          title={isAr ? "قيمٌ نبني عليها" : "The values we build on"}
          desc={isAr
            ? "مبادئ راسخة توجّه كل قرار وكل تفصيلة في مشاريعنا."
            : "Firm principles that guide every decision and every detail in our projects."}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <Reveal key={v.title.en} delay={i * 0.07}>
              <div className="group h-full rounded-3xl border border-ink/8 bg-sand-50 p-7 text-center transition-all duration-500 hover:border-gold/40 hover:bg-white hover:shadow-card">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Icon name={v.icon as any} size={26} strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{v.title[locale]}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-concrete">{v.text[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
