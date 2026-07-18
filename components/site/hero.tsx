import { ArrowRight, Building2, Car, Cog, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";

const alanlar = [
  { label: "İNŞAAT", icon: Building2, image: "/images/crane.jpg" },
  { label: "OTOMOTİV", icon: Car, image: "/images/car.jpg" },
  { label: "LOJİSTİK", icon: Globe, image: "/images/truck.jpg" },
  { label: "SANAYİ", icon: Cog, image: "/images/sanayi.jpg" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(/images/skyline.jpg)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-navy-900/40" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 lg:grid-cols-[5fr_7fr] lg:gap-8 lg:px-6">
        <div className="flex flex-col justify-center">
          <p className="section-eyebrow">Efendioğlu Group</p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-white sm:text-[2.75rem]">
            <span className="sm:whitespace-nowrap">Güvenle İnşa Edilen</span>
            <br />
            Yarınlar
          </h1>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted-blue">
            İnşaat, otomotiv, lojistik ve sanayi alanlarında sürdürülebilir
            çözümler üretiyor, değere dönüştürüyoruz.
          </p>
          <div className="mt-8 h-px w-16 bg-gold" />
          <div className="mt-8">
            <Button
              asChild
              variant="outline"
              className="rounded-md border-white/40 bg-transparent px-6 text-white hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <a href="#hakkimizda">
                Hakkımızda
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-0">
          {alanlar.map((alan) => (
            <div key={alan.label} className="flex flex-col items-center">
              <alan.icon className="size-9 text-gold" strokeWidth={1.2} />
              <p className="mt-3 text-sm font-semibold tracking-[0.2em] text-white">
                {alan.label}
              </p>
              <div className="mt-2 h-px w-8 bg-gold" />
              <div className="relative mt-5 h-64 w-full max-w-36 -skew-x-6 overflow-hidden rounded-sm border border-white/10 sm:h-80 lg:h-96">
                <img
                  src={alan.image}
                  alt={alan.label}
                  className="h-full w-full skew-x-6 scale-125 object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-navy-900/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
