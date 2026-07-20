import type { Locale } from "@/lib/content";

/**
 * Stylized architectural SVG "scene" used as a premium placeholder for real
 * project photography. Each variant renders a distinct concrete + gold blueprint
 * composition. Swap for <Image> when real photos (uploads.zip) are provided.
 */
export default function ArchScene({
  variant = 0,
  accent = "#826E39",
  className = "",
  label,
  dark = false,
}: {
  variant?: number;
  accent?: string;
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  const bg = dark ? "#071F35" : "#0A2E4B";
  const v = ((variant % 4) + 4) % 4;
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 800 600" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`sky-${v}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor={bg} />
            <stop offset="1" stopColor="#05192B" />
          </linearGradient>
          <linearGradient id={`glow-${v}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={accent} stopOpacity="0.35" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <pattern id={`grid-${v}`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="800" height="600" fill={`url(#sky-${v})`} />
        <rect width="800" height="600" fill={`url(#grid-${v})`} />
        <circle cx={v % 2 ? 640 : 180} cy="150" r="260" fill={`url(#glow-${v})`} />

        {/* skyline variants */}
        {v === 0 && (
          <g>
            <rect x="120" y="230" width="120" height="370" fill="#0E3352" stroke={accent} strokeOpacity="0.5" />
            <rect x="260" y="150" width="150" height="450" fill="#123A5C" stroke={accent} strokeOpacity="0.6" />
            <rect x="430" y="300" width="110" height="300" fill="#0E3352" stroke={accent} strokeOpacity="0.4" />
            <rect x="560" y="200" width="130" height="400" fill="#103656" stroke={accent} strokeOpacity="0.5" />
            {[280, 320, 360].map((x) => [180, 230, 280, 330, 380, 430].map((y) => (
              <rect key={`${x}-${y}`} x={x} y={y} width="16" height="22" fill={accent} fillOpacity="0.22" />
            )))}
          </g>
        )}
        {v === 1 && (
          <g>
            <path d="M100 600V260l180-90 180 90v340z" fill="#103656" stroke={accent} strokeOpacity="0.55" strokeWidth="1.5" />
            <path d="M280 170l180 90v340" fill="none" stroke={accent} strokeOpacity="0.3" />
            <rect x="470" y="320" width="230" height="280" fill="#0C2C48" stroke={accent} strokeOpacity="0.45" />
            {[150, 220, 290, 360].map((x) => (
              <rect key={x} x={x} y={340} width="26" height="34" fill={accent} fillOpacity="0.18" />
            ))}
            <line x1="0" y1="600" x2="800" y2="600" stroke={accent} strokeWidth="3" />
          </g>
        )}
        {v === 2 && (
          <g>
            <rect x="90" y="180" width="260" height="420" fill="#0E3352" stroke={accent} strokeOpacity="0.5" />
            <rect x="380" y="120" width="90" height="480" fill="#143E60" stroke={accent} strokeOpacity="0.6" />
            <rect x="500" y="260" width="210" height="340" fill="#0C2C48" stroke={accent} strokeOpacity="0.4" />
            <g stroke={accent} strokeOpacity="0.25">
              {[220, 280, 340, 400, 460, 520].map((y) => <line key={y} x1="90" y1={y} x2="350" y2={y} />)}
            </g>
            <path d="M60 180l150-70 150 70" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="2" />
          </g>
        )}
        {v === 3 && (
          <g>
            <path d="M120 600V300h200v-90h160v390z" fill="#103656" stroke={accent} strokeOpacity="0.55" strokeWidth="1.5" />
            <rect x="520" y="230" width="160" height="370" fill="#0C2C48" stroke={accent} strokeOpacity="0.45" />
            <circle cx="600" cy="160" r="34" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="2" />
            {[[160, 340], [230, 340], [370, 260], [430, 260]].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="34" height="40" fill={accent} fillOpacity="0.16" />
            ))}
          </g>
        )}

        {/* crane accent */}
        <g stroke={accent} strokeOpacity="0.6" strokeWidth="2" fill="none">
          <line x1="720" y1="90" x2="720" y2="240" />
          <line x1="640" y1="110" x2="770" y2="110" />
          <line x1="660" y1="110" x2="660" y2="140" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      {label && (
        <div className="absolute bottom-3 start-3 rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 backdrop-blur">
          {label}
        </div>
      )}
    </div>
  );
}
