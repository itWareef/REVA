import type { Locale } from "@/lib/content";
import { isLocale, defaultLocale } from "@/lib/i18n";
import { company, t } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : defaultLocale) as Locale;
  const isAr = locale === "ar";

  const cards = [
    { icon: "PhoneCall", label: isAr ? "اتصل بنا" : "Call Us", value: company.phoneDisplay, href: `tel:${company.phoneIntl}`, ltr: true },
    { icon: "Mail", label: isAr ? "راسلنا" : "Email Us", value: company.email, href: `mailto:${company.email}`, ltr: true },
    { icon: "MessageCircle", label: isAr ? "واتساب" : "WhatsApp", value: company.phoneDisplay, href: `https://wa.me/${company.phoneIntl.replace("+", "")}`, ltr: true },
    { icon: "MapPin", label: isAr ? "الموقع" : "Location", value: company.address[locale], href: undefined, ltr: false },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        crumb={t.nav.contact[locale]}
        eyebrow={isAr ? "تواصل معنا" : "Get in Touch"}
        title={isAr ? "لنبدأ مشروعك القادم" : "Let's start your next project"}
        desc={isAr
          ? "نحن هنا لخدمتك، سواء كنت عميلاً أو مزوّد خدمة. تواصل معنا وسيرد فريقنا في أقرب وقت."
          : "We're here to help — whether you're a client or a supplier. Reach out and our team will respond promptly."}
        variant={1}
      />

      <section className="bg-white py-24 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* info */}
          <div>
            <span className="eyebrow"><span className="h-px w-8 bg-current" />{isAr ? "معلومات التواصل" : "Contact Info"}</span>
            <Reveal delay={0.05}>
              <h2 className="mt-4 h-display text-3xl text-ink sm:text-4xl">{isAr ? "نسعد بتواصلك معنا" : "We'd love to hear from you"}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-8 text-concrete">
                {isAr ? "فريقنا الهندسي جاهز لمناقشة تفاصيل مشروعك وتقديم استشارة مبدئية وعرض سعر مناسب." : "Our engineering team is ready to discuss your project, offer an initial consultation and a tailored quote."}
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => {
                const inner = (
                  <div className="group h-full rounded-2xl border border-ink/8 bg-sand-50 p-6 transition-all duration-500 hover:border-gold/40 hover:bg-white hover:shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon name={c.icon as any} size={22} />
                    </span>
                    <div className="mt-4 text-xs font-bold uppercase tracking-wider text-concrete">{c.label}</div>
                    <div className={`mt-1 text-sm font-bold text-ink ${c.ltr ? "force-ltr" : ""}`}>{c.value}</div>
                  </div>
                );
                return (
                  <Reveal key={i} delay={0.12 + i * 0.06}>
                    {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.35}>
              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/5 px-5 py-4 text-sm">
                <Icon name="Clock" size={18} className="text-gold-dark" />
                <span className="font-semibold text-ink">{isAr ? "أوقات العمل: الأحد – الخميس، ٨ ص – ٥ م" : "Working hours: Sun–Thu, 8 AM – 5 PM"}</span>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] border border-ink/8 bg-sand-50 p-8 shadow-card sm:p-10">
              <h3 className="font-display text-2xl font-extrabold text-ink">{isAr ? "أرسل طلبك" : "Send your request"}</h3>
              <p className="mt-2 text-sm text-concrete">{isAr ? "املأ النموذج وسنعاود التواصل معك مباشرة." : "Fill in the form and we'll get back to you directly."}</p>
              <div className="mt-7"><ContactForm locale={locale} /></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-ink/8">
            <div className="flex aspect-[16/6] items-center justify-center bg-gradient-to-br from-ink to-ink-800 text-center">
              <div>
                <Icon name="MapPin" size={40} className="mx-auto text-gold" />
                <p className="mt-3 font-display text-xl font-bold text-white">{company.address[locale]}</p>
                <p className="mt-1 text-sm text-white/50">{isAr ? "خريطة الموقع" : "Location map"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat locale={locale} />
    </>
  );
}
