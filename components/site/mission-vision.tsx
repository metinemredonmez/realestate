import { CheckCircle2, Eye, Target } from "lucide-react";

const misyon = [
  "Kaliteli ve güvenilir hizmet sunmak",
  "Müşteri memnuniyetini en üst seviyede tutmak",
  "Yenilikçi ve sürdürülebilir çözümler geliştirmek",
  "Etik değerlere bağlı, şeffaf ve sorumlu bir yönetim anlayışıyla hareket etmek",
  "Ülke ekonomisine ve istihdama katkı sağlayan projeler üretmek",
];

export function MissionVision() {
  return (
    <section id="misyon" className="border-t border-white/5 bg-navy-850">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-24 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-white/10 lg:px-6">
        <div className="lg:pr-14">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-gold/60">
              <Target className="size-7 text-gold" strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold tracking-[0.15em] text-white">
              MİSYONUMUZ
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
          </div>
          <ul className="mt-10 space-y-5">
            {misyon.map((madde) => (
              <li key={madde} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  strokeWidth={1.6}
                />
                <span className="text-[15px] leading-relaxed text-muted-blue">
                  {madde}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-14">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-16 items-center justify-center rounded-full border border-gold/60">
              <Eye className="size-7 text-gold" strokeWidth={1.4} />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold tracking-[0.15em] text-white">
              VİZYONUMUZ
            </h2>
            <div className="mt-4 h-px w-12 bg-gold" />
          </div>
          <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-blue">
            <p>
              İnşaat, otomotiv, lojistik ve sanayi sektörlerinde güvenilirliği,
              kalite anlayışı ve yenilikçi yaklaşımıyla örnek gösterilen, ulusal
              ve uluslararası pazarda tercih edilen güçlü bir marka olmak.
            </p>
            <p>
              Teknolojiyi ve sürdürülebilirliği merkeze alarak geleceğin
              ihtiyaçlarına bugünden çözüm üreten, kalıcı değerler oluşturan
              lider bir şirket olmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
