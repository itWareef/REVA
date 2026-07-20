import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ink px-6 text-center text-white">
      <div>
        <LogoMark className="mx-auto h-20 w-auto" tone="white" />
        <div className="mt-8 font-display text-7xl font-black text-gold">404</div>
        <p className="mt-4 text-lg text-white/70">الصفحة غير موجودة · Page not found</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/ar" className="btn-gold">الرئيسية</Link>
          <Link href="/en" className="btn-outline">Home</Link>
        </div>
      </div>
    </section>
  );
}
