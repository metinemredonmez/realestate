# Production Kurulumu (Docker'sız)

Bu site **tamamen statik**tir: `npm run build` sonrası tüm sayfa `out/`
klasörüne HTML/CSS/JS olarak çıkar. Bu yüzden **önerilen kurulumda sunucuda
Node.js, PM2 veya systemd servisi gerekmez** — Nginx statik dosyaları servis
eder. Daha hızlı, daha güvenli, bakımı sıfırdır.

Repo: https://github.com/metinemredonmez/realestate

## Seçenek 1 — Statik + Nginx, git ile (ÖNERİLEN)

Sunucuda (Ubuntu/Debian) bir kez — Node 20+ gerekir (`node -v` ile kontrol et):

```bash
cd /var/www
git clone https://github.com/metinemredonmez/realestate.git efendioglu
cd efendioglu
npm ci && npm run build

# Nginx konfigurasyonu
sudo cp deploy/nginx-efendioglu.conf /etc/nginx/sites-available/efendioglu
sudo ln -s /etc/nginx/sites-available/efendioglu /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Her güncellemede (sunucuda):

```bash
cd /var/www/efendioglu && bash deploy/update.sh
```

Script `git pull` + `npm ci` + `npm run build` çalıştırır; Nginx aynı
`out/` klasörünü servis ettiği için başka bir şey gerekmez (PM2/systemd yok).

### HTTPS (Let's Encrypt, ücretsiz)

Alan adının DNS'i sunucuyu gösterdikten sonra:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d efendioglugroup.com.tr -d www.efendioglugroup.com.tr
```

Sertifika otomatik yenilenir; başka bir şey gerekmez.

## Seçenek 2 — Node.js + systemd (ileride SSR/API gerekirse)

Form bir backend'e bağlanır, API route ya da sunucu tarafı render eklenirse:

1. `next.config.ts` içindeki `output: "export"` ve `images` satırlarını sil.
2. Sunucuya Node.js 22 LTS kur (`https://github.com/nodesource/distributions`).
3. Projeyi sunucuya klonla → `/var/www/efendioglu` → `npm ci && npm run build`.
4. Servisi kur:
   ```bash
   sudo cp deploy/efendioglu.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable --now efendioglu
   ```
5. `deploy/nginx-efendioglu.conf` dosyasının altındaki yorumlu **proxy** bloğunu
   aktif edip statik bloğu kaldır, `sudo systemctl reload nginx`.

Loglar: `journalctl -u efendioglu -f` · Yeniden başlat: `sudo systemctl restart efendioglu`

### PM2 neden değil?

PM2 de çalışır; ancak tek uygulamalı bir sunucuda systemd zaten kurulu,
log'ları journald'de toplar ve ekstra global npm paketi gerektirmez.
Aynı sunucuda birden çok Node uygulaması yönetecek ve sık sık
sıfır-kesinti reload yapacaksan PM2 tercih edilebilir; bu projede gerek yok.

## Güvenlik

Nginx konfigürasyonu şunları içerir: `server_tokens off`, sadece GET/HEAD/OPTIONS,
gizli dosya (`/.git` vb.) erişim engeli, `X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` ve `Content-Security-Policy`
başlıkları. HTTPS kurulduktan sonra config içindeki yorumlu **HSTS** satırını
certbot'un oluşturduğu 443 bloğuna taşıyın.

Bağımlılık tarafında `npm audit` temizdir (Next'in içindeki eski postcss,
package.json `overrides` ile güvenli sürüme sabitlendi). Güncel tutmak için
arada bir: `npm audit` ve `npm outdated`.

Sunucu geneli için önerilen (bir kez, tüm siteleri korur):

```bash
# Guvenlik duvari: sadece SSH + web
ufw allow OpenSSH && ufw allow "Nginx Full" && ufw enable

# SSH brute-force korumasi
apt install -y fail2ban && systemctl enable --now fail2ban

# Guvenlik yamalarini otomatik kur
apt install -y unattended-upgrades
dpkg-reconfigure -plow unattended-upgrades
```

SSH'ta şifreyle giriş açıksa anahtar kurulumundan sonra kapatmak en etkili
adımdır (`/etc/ssh/sshd_config` → `PasswordAuthentication no`) — ama önce
anahtarla girebildiğinden emin olmadan yapma, kilitli kalırsın.

## Diğer öneriler

- **En kolay yol:** Bu repo GitHub'a atılıp **Vercel**'e bağlanırsa sunucu,
  Nginx, sertifika hiçbiri gerekmez; her `git push` otomatik yayınlanır
  (hobby planı ücretsiz). Statik site olduğu için Cloudflare Pages /
  Netlify de aynı şekilde ücretsiz çalışır.
- Sunucuda güvenlik duvarı: `sudo ufw allow OpenSSH && sudo ufw allow "Nginx Full" && sudo ufw enable`
- Form şu an `mailto:` ile çalışıyor (ziyaretçinin e-posta uygulamasını açar).
  Sunucusuz form servisi (Formspree, Web3Forms vb.) bağlanırsa statik yapı
  bozulmadan form doğrudan e-posta gönderebilir.
