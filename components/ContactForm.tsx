"use client";
import { useState } from "react";
import type { Locale } from "@/lib/content";
import { company, services } from "@/lib/content";
import Icon from "./Icon";

export default function ContactForm({ locale }: { locale: Locale }) {
  const isAr = locale === "ar";
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  const L = {
    name: isAr ? "الاسم الكامل" : "Full Name",
    phone: isAr ? "رقم الجوال" : "Phone Number",
    service: isAr ? "نوع الخدمة" : "Service",
    choose: isAr ? "اختر الخدمة…" : "Choose a service…",
    message: isAr ? "تفاصيل مشروعك" : "Your project details",
    messagePh: isAr ? "أخبرنا عن مشروعك ونطاق العمل…" : "Tell us about your project and scope…",
    send: isAr ? "أرسل عبر واتساب" : "Send via WhatsApp",
    done: isAr ? "تم فتح واتساب لإكمال الإرسال ✓" : "WhatsApp opened to complete your message ✓",
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const svc = services.find((s) => s.slug === form.service);
    const lines = [
      isAr ? "طلب تواصل من موقع مسكن ريفا" : "Contact request from Maskan Riva website",
      `${L.name}: ${form.name}`,
      `${L.phone}: ${form.phone}`,
      svc ? `${L.service}: ${svc.title[locale]}` : "",
      `${isAr ? "التفاصيل" : "Details"}: ${form.message}`,
    ].filter(Boolean);
    const url = `https://wa.me/${company.phoneIntl.replace("+", "")}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");
    setSent(true);
  };

  const field = "w-full rounded-xl border border-ink/12 bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-concrete/60 focus:border-gold";

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold text-ink">{L.name}</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} placeholder={L.name} />
        </div>
        <div>
          <label className="mb-2 block text-xs font-bold text-ink">{L.phone}</label>
          <input required type="tel" dir="ltr" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${field} text-start`} placeholder="05xxxxxxxx" />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-xs font-bold text-ink">{L.service}</label>
        <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={field}>
          <option value="">{L.choose}</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title[locale]}</option>)}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-xs font-bold text-ink">{isAr ? "تفاصيل مشروعك" : "Your project details"}</label>
        <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-none`} placeholder={L.messagePh} />
      </div>
      <button type="submit" className="btn-gold w-full !py-4">
        <Icon name="MessageCircle" size={18} /> {L.send}
      </button>
      {sent && <p className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-semibold text-emerald-700">{L.done}</p>}
    </form>
  );
}
