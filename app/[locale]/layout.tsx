import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tajawal, Sora, Inter } from "next/font/google";
import { isLocale, dir, defaultLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/content";
import { company } from "@/lib/content";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700", "800", "900"], variable: "--font-ar", display: "swap" });
const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-en", display: "swap" });

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";
  return {
    title: isAr ? "مسكن ريفا للمقاولات | نبني المستقبل" : "Maskan Riva Contracting | We Build the Future",
    description: isAr
      ? "شركة مسكن ريفا للمقاولات — خدمات إنشائية متكاملة في الرياض: أعمال إنشائية، ميكانيكا، تشطيبات، لاندسكيب وأنظمة ذكية."
      : "Maskan Riva Contracting — integrated construction services in Riyadh: structural, mechanical, finishing, landscaping and smart systems.",
    alternates: { languages: { ar: "/ar", en: "/en" } },
    openGraph: { title: company.legal[locale], description: company.tagline[locale], type: "website" },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <html lang={locale} dir={dir(locale)} className={`${tajawal.variable} ${sora.variable} ${inter.variable}`}>
      <body className={locale === "ar" ? "font-ar" : "font-en"}>
        <ScrollProgress />
        <SiteHeader locale={locale} />
        <main>{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
