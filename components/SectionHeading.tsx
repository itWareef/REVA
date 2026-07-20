import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow, title, desc, align = "start", light = false,
}: {
  eyebrow?: string; title: string; desc?: string; align?: "start" | "center"; light?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <span className={light ? "eyebrow-light" : "eyebrow"}>
            <span className="h-px w-8 bg-current" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`mt-4 h-display text-3xl sm:text-4xl lg:text-[2.9rem] ${light ? "text-white" : "text-ink"}`}>
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-base leading-8 ${light ? "text-white/60" : "text-concrete"}`}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
