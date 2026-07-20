import type { Locale } from "@/lib/content";
import { company } from "@/lib/content";

/* Official Maskan Riva brand mark (icon only). */
export function LogoMark({ className = "h-10 w-auto", tone = "color" }: { className?: string; tone?: "color" | "white" | "dark" }) {
  const src = tone === "white" ? "/brand/mark-white.svg" : tone === "dark" ? "/brand/mark-dark.svg" : "/brand/mark-color.svg";
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="مسكن ريفا" className={className} />;
}

/* Official full logo (mark + wordmark). tone: 'white' for dark backgrounds, 'ink' (color) for light. */
export default function Logo({ locale, tone = "ink", className = "" }: { locale: Locale; tone?: "ink" | "white"; className?: string }) {
  const src = tone === "white" ? "/brand/logo-white.svg" : "/brand/logo-color.svg";
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={company.legal[locale]} className={`w-auto ${className || "h-11"}`} />;
}
