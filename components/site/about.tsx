import { LogoMark } from "@/components/site/logo";

export function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img
          src="/images/construction.jpg"
          alt="İnşaat sahası"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/55 to-navy-900/25" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 lg:px-6">
        <div className="max-w-xl">
          <p className="section-eyebrow">Efendioğlu Group</p>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-wide text-white">
            HAKKIMIZDA
          </h2>
          <p className="mt-4 text-lg font-medium text-gold">
            Geleceği Güvenle İnşa Ediyoruz
          </p>

          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-blue">
            <p>
              Efendioğlu Group, inşaat, otomotiv, lojistik ve sanayi
              sektörlerinde faaliyet göstermek amacıyla kurulmuş,{" "}
              <span className="font-semibold text-white">
                kaliteyi, güveni ve sürdürülebilir büyümeyi
              </span>{" "}
              ilke edinmiş bir kuruluştur.
            </p>
            <p>
              Her projede uzun vadeli değer üretmeyi hedefliyor; yenilikçi bakış
              açımız, güçlü iş ortaklıklarımız ve çözüm odaklı yaklaşımımızla
              müşterilerimize güvenilir hizmet sunuyoruz.
            </p>
            <p>
              Faaliyet gösterdiğimiz her alanda kalite standartlarını ön planda
              tutuyor, teknolojiyi yakından takip ederek verimli ve
              sürdürülebilir çözümler geliştiriyoruz.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4 rounded-xl border border-gold/40 bg-gold/5 px-6 py-5">
            <LogoMark className="size-9 shrink-0 text-gold" />
            <p className="text-sm font-medium leading-relaxed text-gold">
              Güven, kalite ve dürüstlük ilkeleriyle çıktığımız bu yolda
              ülkemize değer katacak projeler üretmeye devam ediyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
