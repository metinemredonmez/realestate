import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";

const kanallar = [
  {
    icon: Phone,
    title: "TELEFON",
    lines: [{ text: "0533 745 34 58", href: "tel:+905337453458" }],
  },
  {
    icon: Mail,
    title: "E-POSTA",
    lines: [
      {
        text: "insaat.efendioglu@gmail.com",
        href: "mailto:insaat.efendioglu@gmail.com",
      },
    ],
  },
  {
    icon: MapPin,
    title: "ADRES",
    lines: [{ text: "Türkiye", href: undefined }],
  },
];

export function Contact() {
  return (
    <section id="iletisim" className="border-t border-white/5 bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-24 lg:px-6">
        <div className="text-center">
          <p className="section-eyebrow">İletişim</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            Bizimle İletişime Geçin
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-blue">
            Projeleriniz ve iş birliği talepleriniz için formu doldurun ya da
            iletişim kanallarımızdan bize ulaşın; en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
          <div className="flex flex-col gap-6">
            {kanallar.map((kanal) => (
              <div
                key={kanal.title}
                className="flex items-center gap-5 rounded-xl border border-white/10 bg-navy-800 px-6 py-6"
              >
                <div className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gold/60">
                  <kanal.icon className="size-5.5 text-gold" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-[0.2em] text-white">
                    {kanal.title}
                  </p>
                  {kanal.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="mt-1 block text-sm text-muted-blue transition-colors hover:text-gold"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text} className="mt-1 text-sm text-muted-blue">
                        {line.text}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-navy-800 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
