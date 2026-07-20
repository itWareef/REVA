// ملفات المحتوى القابلة للتحرير من لوحة التحكم موجودة في مجلد /content
// لا تعدّل الأرقام هنا يدوياً — استخدم لوحة التحكم على /admin
import settings from "@/content/settings.json";
import servicesData from "@/content/services.json";
import valuesData from "@/content/values.json";
import certificationsData from "@/content/certifications.json";
import projectsData from "@/content/projects.json";
import newsData from "@/content/news.json";

export type Locale = "ar" | "en";

export interface Service {
  slug: string;
  icon: string;
  image: string;
  title: Record<Locale, string>;
  short: Record<Locale, string>;
  points: Record<Locale, string[]>;
}

export interface Project {
  slug: string;
  district: Record<Locale, string>;
  title: Record<Locale, string>;
  category: Record<Locale, string>;
  status: Record<Locale, string>;
  year: string;
  area?: string;
  value?: string;
  units: Record<Locale, string>;
  progress?: number;
  description: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  accent: string;
  image: string;
  gallery: string[];
}

export interface NewsItem {
  slug: string;
  date: string;
  dateLabel: Record<Locale, string>;
  tag: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string[]>;
  image: string;
}

export interface Stat {
  value: string;
  label: Record<Locale, string>;
  suffix?: string;
}
export interface ValueItem {
  icon: string;
  title: Record<Locale, string>;
  text: Record<Locale, string>;
}
export interface Certification {
  code: string;
  title: Record<Locale, string>;
}

// —— البيانات محمّلة من ملفات JSON القابلة للتحرير من لوحة /admin ——
export const company = settings.company;
export const siteImages = settings.siteImages;
export const stats = settings.stats as unknown as Stat[];
export const services = servicesData.items as unknown as Service[];
export const values = valuesData.items as unknown as ValueItem[];
export const certifications = certificationsData.items as unknown as Certification[];
export const projects = projectsData.items as unknown as Project[];
export const news = newsData.items as unknown as NewsItem[];

export const t = {
  nav: {
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "من نحن", en: "About" },
    services: { ar: "خدماتنا", en: "Services" },
    projects: { ar: "مشاريعنا", en: "Projects" },
    news: { ar: "أخبارنا", en: "News" },
    contact: { ar: "تواصل معنا", en: "Contact" },
  },
  cta: {
    quote: { ar: "اطلب عرض سعر", en: "Request a Quote" },
    contact: { ar: "تواصل معنا", en: "Get in Touch" },
    explore: { ar: "استكشف مشاريعنا", en: "Explore Projects" },
    all: { ar: "عرض الكل", en: "View All" },
    details: { ar: "تفاصيل المشروع", en: "Project Details" },
    readMore: { ar: "اقرأ المزيد", en: "Read More" },
    call: { ar: "اتصل بنا", en: "Call Us" },
    whatsapp: { ar: "واتساب", en: "WhatsApp" },
    back: { ar: "رجوع", en: "Back" },
  },
  common: {
    established: { ar: "تأسست عام", en: "Established" },
    riyadh: { ar: "الرياض، السعودية", en: "Riyadh, KSA" },
  },
};
