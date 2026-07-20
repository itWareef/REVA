import type { Locale } from "@/lib/content";
import { stats } from "@/lib/content";
import StatCounter from "./StatCounter";
import Reveal from "./Reveal";

export default function StatsSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative overflow-hidden bg-ink py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:48px_48px] opacity-30" />
      <div className="pointer-events-none absolute -bottom-24 end-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08} className="text-center">
            <div className="font-display text-4xl font-black text-gold sm:text-5xl lg:text-6xl">
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mx-auto mt-3 h-px w-10 bg-gold/40" />
            <p className="mt-3 text-sm font-semibold text-white/60">{s.label[locale]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
