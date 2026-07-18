// SADECE PM2 ile `next start` calistirmak istersen kullanilir.
// Once next.config.ts'ten `output: "export"` ve `images` satirlarini sil,
// sunucuda /var/www/efendioglu icinde `npm ci && npm run build` calistir.
// PORT'u sunucudaki diger uygulamalarla cakismayan bir degere ayarla.
//
//   pm2 start deploy/ecosystem.config.js
//   pm2 save
module.exports = {
  apps: [
    {
      name: "efendioglu",
      cwd: "/var/www/efendioglu",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3006,
      },
    },
  ],
};
