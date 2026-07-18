import { Award, Leaf, ShieldCheck, Users } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "GÜVEN", text: "Her projede güveni temel alıyoruz." },
  {
    icon: Award,
    title: "KALİTE",
    text: "Yüksek kalite standartları ile kalıcı değer üretiyoruz.",
  },
  {
    icon: Users,
    title: "DENEYİM",
    text: "Yıllara dayanan tecrübemizle doğru çözümler sunuyoruz.",
  },
  {
    icon: Leaf,
    title: "SÜRDÜRÜLEBİLİRLİK",
    text: "Gelecek nesillere daha iyi bir dünya bırakmak için çalışıyoruz.",
  },
];

export function ValueStrip() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border lg:px-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-4 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <item.icon className="mt-0.5 size-8 shrink-0 text-gold" strokeWidth={1.2} />
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] text-navy-900">
                {item.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
