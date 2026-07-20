import type { Locale } from "./content";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

export function isLocale(x: string): x is Locale {
  return x === "ar" || x === "en";
}
export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
export function other(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
export function pick<T>(obj: Record<Locale, T>, locale: Locale): T {
  return obj[locale];
}
