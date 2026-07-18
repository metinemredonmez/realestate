"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const inputStyles =
  "w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-muted-blue/60 outline-none transition-colors focus:border-gold";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const konu = encodeURIComponent(
      `[Web] ${data.get("konu") || "İletişim Talebi"}`
    );
    const body = encodeURIComponent(
      `Ad Soyad: ${data.get("ad")}\nE-posta: ${data.get("eposta")}\nTelefon: ${
        data.get("telefon") || "-"
      }\n\n${data.get("mesaj")}`
    );
    window.location.href = `mailto:info@efendioglugroup.com?subject=${konu}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-xl border border-gold/40 bg-gold/5 px-8 text-center">
        <CheckCircle2 className="size-10 text-gold" strokeWidth={1.4} />
        <p className="text-sm leading-relaxed text-muted-blue">
          E-posta uygulamanız açıldı. Mesajınızı oradan gönderebilirsiniz;
          açılmadıysa{" "}
          <a
            href="mailto:info@efendioglugroup.com"
            className="font-semibold text-gold hover:text-gold-light"
          >
            info@efendioglugroup.com
          </a>{" "}
          adresine yazabilirsiniz.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-gold hover:text-gold-light"
        >
          Yeni mesaj yaz
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="ad"
          required
          placeholder="Ad Soyad *"
          className={inputStyles}
        />
        <input
          name="eposta"
          type="email"
          required
          placeholder="E-posta *"
          className={inputStyles}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="telefon"
          type="tel"
          placeholder="Telefon"
          className={inputStyles}
        />
        <input name="konu" placeholder="Konu" className={inputStyles} />
      </div>
      <textarea
        name="mesaj"
        required
        rows={5}
        placeholder="Mesajınız *"
        className={inputStyles}
      />
      <Button
        type="submit"
        className="w-full rounded-lg bg-gold px-8 py-5 text-sm font-semibold text-navy-900 hover:bg-gold-light sm:w-auto"
      >
        Mesaj Gönder
        <Send className="size-4" />
      </Button>
    </form>
  );
}
