"use client";
import { company } from "@/lib/content";
import type { Locale } from "@/lib/content";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat({ locale }: { locale: Locale }) {
  const msg = locale === "ar" ? "مرحباً، أود الاستفسار عن خدمات مسكن ريفا للمقاولات" : "Hello, I'd like to ask about Maskan Riva Contracting services";
  return (
    <a
      href={`https://wa.me/${company.phoneIntl.replace("+", "")}?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 end-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
      <MessageCircle size={26} className="relative" />
    </a>
  );
}
