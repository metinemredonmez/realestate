import { CalendarClock } from "lucide-react";

import { ProjectCards } from "@/components/site/project-cards";

export function Projects() {
  return (
    <section id="projeler" className="border-t border-white/5 bg-navy-900">
      <div className="mx-auto max-w-6xl px-4 py-24 lg:px-6">
        <div className="text-center">
          <p className="section-eyebrow">Projeler</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            Değer Üreten Çözümler
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-blue">
            Efendioğlu Group olarak her projeyi yalnızca bir yatırım değil,
            geleceğe bırakılan kalıcı bir değer olarak görüyoruz.
          </p>
        </div>

        <ProjectCards />

        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-3 rounded-xl border border-gold/40 bg-gold/5 px-6 py-4">
          <CalendarClock className="size-5 shrink-0 text-gold" strokeWidth={1.5} />
          <p className="text-sm font-medium text-gold">
            Yakında yeni projelerimiz bu alanda yer alacaktır.
          </p>
        </div>
      </div>
    </section>
  );
}
