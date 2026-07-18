"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const ALICI = "insaat.efendioglu@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${ALICI}`;

const inputStyles =
  "w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-muted-blue/60 outline-none transition-colors focus:border-gold";

type Durum = "bekliyor" | "gonderiliyor" | "gonderildi" | "hata";

export function ContactForm() {
  const [durum, setDurum] = useState<Durum>("bekliyor");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bot tuzağı
    setDurum("gonderiliyor");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Web] ${data.get("konu") || "İletişim Formu"}`,
          _template: "table",
          _replyto: data.get("eposta"),
          "Ad Soyad": data.get("ad"),
          "E-posta": data.get("eposta"),
          Telefon: data.get("telefon") || "-",
          Konu: data.get("konu") || "-",
          Mesaj: data.get("mesaj"),
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json || String(json.success) !== "true") throw new Error();
      form.reset();
      setDurum("gonderildi");
    } catch {
      setDurum("hata");
    }
  }

  if (durum === "gonderildi") {
    return (
      <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-xl border border-gold/40 bg-gold/5 px-8 text-center">
        <CheckCircle2 className="size-10 text-gold" strokeWidth={1.4} />
        <p className="text-sm leading-relaxed text-muted-blue">
          Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.
        </p>
        <button
          onClick={() => setDurum("bekliyor")}
          className="text-sm font-semibold text-gold hover:text-gold-light"
        >
          Yeni mesaj yaz
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* bot tuzağı — insanlar görmez */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
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

      {durum === "hata" && (
        <p className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm leading-relaxed text-red-300">
          Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan{" "}
          <a
            href={`mailto:${ALICI}`}
            className="font-semibold text-gold hover:text-gold-light"
          >
            {ALICI}
          </a>{" "}
          adresine yazın.
        </p>
      )}

      <Button
        type="submit"
        disabled={durum === "gonderiliyor"}
        className="w-full rounded-lg bg-gold px-8 py-5 text-sm font-semibold text-navy-900 hover:bg-gold-light sm:w-auto"
      >
        {durum === "gonderiliyor" ? "Gönderiliyor…" : "Mesaj Gönder"}
        <Send className="size-4" />
      </Button>
    </form>
  );
}
