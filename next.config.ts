import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site tamamen statik: `next build` çıktıyı ./out klasörüne verir,
  // sunucuda Node.js gerekmez (Nginx doğrudan servis eder).
  // İleride SSR / API route eklenirse bu iki satırı silip
  // deploy/efendioglu.service (systemd) ile `next start` kullanın.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
