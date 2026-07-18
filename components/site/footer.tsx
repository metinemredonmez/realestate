import { Logo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row lg:px-6">
        <Logo dark />
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-blue">
          <a href="#top" className="hover:text-gold">Ana Sayfa</a>
          <a href="#hakkimizda" className="hover:text-gold">Hakkımızda</a>
          <a href="#projeler" className="hover:text-gold">Faaliyet Alanlarımız</a>
          <a href="#iletisim" className="hover:text-gold">İletişim</a>
        </nav>
        <p className="text-xs text-muted-blue/70">
          © 2026 Efendioğlu Group. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
