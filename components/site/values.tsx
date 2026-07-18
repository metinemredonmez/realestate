import {
  Award,
  BadgeCheck,
  Clock,
  Handshake,
  Leaf,
  Lightbulb,
  Network,
  Scale,
  Shield,
  ShieldCheck,
  Smile,
  Users,
} from "lucide-react";

const degerler = [
  {
    icon: Shield,
    title: "GÜVEN",
    text: "Attığımız her adımda güvenilirliği temel ilke olarak benimsiyoruz.",
  },
  {
    icon: Award,
    title: "KALİTE",
    text: "Uluslararası standartlarda hizmet ve üretim anlayışıyla çalışıyoruz.",
  },
  {
    icon: Scale,
    title: "DÜRÜSTLÜK",
    text: "Tüm iş süreçlerimizi etik kurallar ve şeffaflık çerçevesinde yürütüyoruz.",
  },
  {
    icon: Lightbulb,
    title: "YENİLİKÇİLİK",
    text: "Teknolojik gelişmeleri takip ederek sürekli kendimizi geliştiriyoruz.",
  },
  {
    icon: Leaf,
    title: "SÜRDÜRÜLEBİLİRLİK",
    text: "Çevreye ve gelecek nesillere karşı sorumluluğumuzun bilinciyle hareket ediyoruz.",
  },
  {
    icon: Users,
    title: "MÜŞTERİ ODAKLILIK",
    text: "Her projede müşterilerimizin beklentilerini aşan çözümler sunmayı hedefliyoruz.",
  },
];

const nedenler = [
  { icon: ShieldCheck, title: "GÜVENİLİR HİZMET" },
  { icon: BadgeCheck, title: "KALİTE ODAKLI YAKLAŞIM" },
  { icon: Handshake, title: "ŞEFFAF İŞ ANLAYIŞI" },
  { icon: Leaf, title: "SÜRDÜRÜLEBİLİR ÇÖZÜMLER" },
  { icon: Network, title: "YENİLİKÇİ TEKNOLOJİ KULLANIMI" },
  { icon: Users, title: "PROFESYONEL EKİP" },
  { icon: Clock, title: "ZAMANINDA TESLİM" },
  { icon: Smile, title: "MÜŞTERİ MEMNUNİYETİ" },
];

export function Values() {
  return (
    <section id="degerler" className="border-t border-white/5 bg-navy-850">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-24 lg:grid-cols-[6fr_6fr] lg:gap-0 lg:divide-x lg:divide-white/10 lg:px-6">
        <div className="lg:pr-14">
          <h2 className="section-eyebrow text-base">Değerlerimiz</h2>
          <div className="mt-10 space-y-8">
            {degerler.map((deger) => (
              <div key={deger.title} className="flex items-start gap-5">
                <deger.icon
                  className="mt-0.5 size-7 shrink-0 text-gold"
                  strokeWidth={1.3}
                />
                <div className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="text-sm font-semibold tracking-[0.12em] text-white">
                    {deger.title}
                  </p>
                  <p className="text-[13px] leading-relaxed text-muted-blue">
                    {deger.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-14">
          <h2 className="section-eyebrow text-base">Neden Efendioğlu Group?</h2>
          <div className="mt-10 grid grid-cols-2 border-l border-t border-white/10">
            {nedenler.map((neden) => (
              <div
                key={neden.title}
                className="flex flex-col items-center gap-4 border-b border-r border-white/10 px-4 py-10 text-center"
              >
                <neden.icon className="size-9 text-gold" strokeWidth={1.2} />
                <p className="text-[13px] font-semibold leading-relaxed tracking-[0.1em] text-white">
                  {neden.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
