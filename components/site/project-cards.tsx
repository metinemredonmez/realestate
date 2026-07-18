"use client";

import {
  ArrowRight,
  Building2,
  Car,
  CheckCircle2,
  Cog,
  Globe,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projeler = [
  {
    icon: Building2,
    title: "İnşaat",
    image: "/images/building.jpg",
    text: "Modern mimari, kaliteli malzeme ve mühendislik standartlarıyla yaşam alanları geliştiriyoruz.",
    detay:
      "Konut ve ticari projelerde; zemin etüdünden anahtar teslimine kadar tüm süreçleri kendi bünyemizde planlıyor, modern mimariyi kaliteli malzeme ve güncel mühendislik standartlarıyla buluşturuyoruz. Her projede iş güvenliğini, dayanıklılığı ve yaşam konforunu önceliklendiriyoruz.",
    hizmetler: [
      "Konut projeleri ve yaşam alanları",
      "Ticari ve karma kullanımlı yapılar",
      "Kentsel dönüşüm uygulamaları",
      "Proje geliştirme, taahhüt ve yönetim",
    ],
  },
  {
    icon: Car,
    title: "Otomotiv",
    image: "/images/car.jpg",
    text: "Güvenilir, yenilikçi ve müşteri odaklı otomotiv çözümleri sunuyoruz.",
    detay:
      "Otomotiv alanında güveni ve şeffaflığı merkeze alıyor; araç alım satımından filo çözümlerine kadar müşterilerimizin ihtiyacına uygun, sürdürülebilir hizmetler sunuyoruz. Satış öncesi ve sonrasında aynı özenle yanınızda oluyoruz.",
    hizmetler: [
      "Araç alım ve satımı",
      "Filo ve kurumsal araç çözümleri",
      "Yedek parça ve aksesuar tedariki",
      "Satış sonrası destek ve danışmanlık",
    ],
  },
  {
    icon: Globe,
    title: "Lojistik",
    image: "/images/truck.jpg",
    text: "Hızlı, planlı ve sürdürülebilir taşımacılık süreçleriyle iş ortaklarımıza kesintisiz hizmet sağlıyoruz.",
    detay:
      "Lojistik operasyonlarımızı hız, planlama ve süreklilik ilkeleri üzerine kuruyoruz. Taşımacılık süreçlerini uçtan uca takip ederek iş ortaklarımıza zamanında, izlenebilir ve sürdürülebilir bir tedarik akışı sağlıyoruz.",
    hizmetler: [
      "Yurt içi ve uluslararası taşımacılık",
      "Depolama ve dağıtım operasyonları",
      "Filo yönetimi ve rota planlama",
      "Tedarik zinciri danışmanlığı",
    ],
  },
  {
    icon: Cog,
    title: "Sanayi",
    image: "/images/sanayi.jpg",
    text: "Üretim süreçlerinde kaliteyi, verimliliği ve teknolojiyi ön planda tutarak katma değer oluşturuyoruz.",
    detay:
      "Üretim süreçlerimizde teknolojiyi yakından takip ediyor; verimliliği, iş güvenliğini ve kalite kontrolünü üretimin her aşamasına taşıyoruz. Katma değerli üretimle hem iş ortaklarımıza hem ülke ekonomisine değer katmayı hedefliyoruz.",
    hizmetler: [
      "Üretim ve imalat süreçleri",
      "Metal işleme ve montaj",
      "Endüstriyel tesis çözümleri",
      "Kalite kontrol ve verimlilik yönetimi",
    ],
  },
];

export function ProjectCards() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {projeler.map((proje) => (
        <Dialog key={proje.title}>
          <Card className="gap-0 overflow-hidden rounded-lg border-white/10 bg-navy-800 py-0">
            <div className="h-44 overflow-hidden">
              <img
                src={proje.image}
                alt={proje.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-1 flex-col px-6 py-6">
              <div className="flex items-center gap-3">
                <proje.icon className="size-6 text-gold" strokeWidth={1.4} />
                <h3 className="text-sm font-semibold tracking-[0.15em] text-white uppercase">
                  {proje.title}
                </h3>
              </div>
              <p className="mt-4 flex-1 text-[13px] leading-relaxed text-muted-blue">
                {proje.text}
              </p>
              <DialogTrigger asChild>
                <button className="mt-5 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-gold transition-colors hover:text-gold-light">
                  Detayları İncele
                  <ArrowRight className="size-3.5" />
                </button>
              </DialogTrigger>
            </CardContent>
          </Card>

          <DialogContent
            showCloseButton
            className="max-h-[85vh] gap-0 overflow-y-auto border-white/10 bg-navy-850 p-0 text-white sm:max-w-xl [&>[data-slot=dialog-close]]:text-white"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={proje.image}
                alt={proje.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-850 via-navy-850/30 to-transparent" />
            </div>

            <div className="px-8 pb-8">
              <div className="-mt-7 flex size-14 items-center justify-center rounded-full border border-gold/60 bg-navy-850">
                <proje.icon className="size-6 text-gold" strokeWidth={1.4} />
              </div>
              <DialogTitle className="mt-5 font-display text-xl font-semibold tracking-[0.12em] text-white uppercase">
                {proje.title}
              </DialogTitle>
              <div className="mt-3 h-px w-10 bg-gold" />
              <DialogDescription className="mt-5 text-sm leading-relaxed text-muted-blue">
                {proje.detay}
              </DialogDescription>

              <p className="section-eyebrow mt-8 text-xs">
                Sunduğumuz Hizmetler
              </p>
              <ul className="mt-4 space-y-3">
                {proje.hizmetler.map((hizmet) => (
                  <li key={hizmet} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-4.5 shrink-0 text-gold"
                      strokeWidth={1.6}
                    />
                    <span className="text-sm leading-relaxed text-muted-blue">
                      {hizmet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <DialogClose asChild>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-md border-gold/60 bg-transparent px-6 text-gold hover:bg-gold/10 hover:text-gold-light"
                  >
                    <a href="#iletisim">
                      İletişime Geçin
                      <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
