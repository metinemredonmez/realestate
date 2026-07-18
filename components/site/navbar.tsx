"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const faaliyetler = [
  { label: "İnşaat", href: "#projeler" },
  { label: "Otomotiv", href: "#projeler" },
  { label: "Lojistik", href: "#projeler" },
  { label: "Sanayi", href: "#projeler" },
];

const kurumsal = [
  { label: "Misyonumuz", href: "#misyon" },
  { label: "Vizyonumuz", href: "#misyon" },
  { label: "Değerlerimiz", href: "#degerler" },
];

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold">
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-44 rounded-md border border-border bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm text-navy-900 hover:bg-secondary hover:text-gold"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#top"
            className="relative py-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-gold"
          >
            Ana Sayfa
          </a>
          <a
            href="#hakkimizda"
            className="py-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold"
          >
            Hakkımızda
          </a>
          <DesktopDropdown label="Faaliyet Alanlarımız" items={faaliyetler} />
          <a
            href="#projeler"
            className="py-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold"
          >
            Projeler
          </a>
          <DesktopDropdown label="Kurumsal" items={kurumsal} />
          <a
            href="#iletisim"
            className="py-2 text-sm font-medium text-navy-900 transition-colors hover:text-gold"
          >
            İletişim
          </a>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-md bg-navy-900 px-5 hover:bg-navy-800">
            <a href="#iletisim">
              İletişime Geçin
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <button
          className="text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-border bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4">
          {[
            { label: "Ana Sayfa", href: "#top" },
            { label: "Hakkımızda", href: "#hakkimizda" },
            { label: "Faaliyet Alanlarımız", href: "#projeler" },
            { label: "Projeler", href: "#projeler" },
            { label: "Kurumsal", href: "#misyon" },
            { label: "İletişim", href: "#iletisim" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3 text-sm font-medium text-navy-900 last:border-0 hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-3 rounded-md bg-navy-900 hover:bg-navy-800">
            <a href="#iletisim" onClick={() => setOpen(false)}>
              İletişime Geçin
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
