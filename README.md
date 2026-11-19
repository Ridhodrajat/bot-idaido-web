# Website Resmi IDAIDO BOT

Website informasi publik, simulasi demo interaktif, dan dokumentasi teknis perintah untuk **IDAIDO BOT** (Bot WhatsApp Rental Multi-Grup untuk Toko Online & Moderasi).

- **URL Live Website:** [https://idaido-bot.rf.gd/](https://idaido-bot.rf.gd/)
- **Repository GitHub:** [https://github.com/Ridhodrajat/bot-idaido-web](https://github.com/Ridhodrajat/bot-idaido-web)
- **Target Hosting:** InfinityFree (Shared Hosting Gratis: PHP/Apache murni statis)

---

## 📌 Ringkasan Proyek

Website ini dibangun murni menggunakan teknologi web statis (HTML5, CSS modern, dan Vanilla JavaScript) tanpa ketergantungan pada runtime Node.js di server, database, framework berat, maupun aset CDN pihak ketiga (seperti Google Fonts). Seluruh aset dioptimalkan untuk kecepatan akses tinggi (*high-performance*), ramah kuota, dan kompatibel 100% dengan lingkungan hosting InfinityFree.

### Fitur Website

1. **Beranda & Simulasi Interaktif (`index.html`):**
   - Penjelasan fitur bot toko: katalog gambar, nota proses & selesai (`.p` dan `.d`), rekap laporan Excel, serta moderasi grup.
   - Demo interaktif di peramban dengan 2 peran (Alur Pembeli dan Alur Admin).
   - Tabel harga transparan: Paket Trial gratis (kuota 300 balasan/hari), Paket Mingguan (Rp5.000 / 7 hari), dan Paket Bulanan (Rp10.000 / 30 hari).
   - Panduan alur sewa 5 langkah dan FAQ interaktif.
2. **Dokumentasi & Tabel Perintah (`dokumentasi.html`):**
   - Panduan teknis persiapan grup dan hak akses bot.
   - Tabel referensi 88 perintah bot lengkap dengan fitur pencarian instan, filter 7 kategori, filter hak akses, serta filter status paket (Trial vs 🔒 Berbayar).
   - Panduan alur transaksi harian, pembacaan bukti transfer (OCR), proteksi blacklist yang bisa dibatalkan, dan troubleshooting kendala umum.
3. **Catatan Rilis (`changelog.html`):**
   - Riwayat transparan pembaruan fitur bot dari v1.0.0 hingga rilis terbaru v1.1.0.
4. **Kebijakan Legal (`policy.html`):**
   - Syarat & Ketentuan Layanan (`#syarat`) serta Kebijakan Privasi (`#privasi`) yang menegaskan bahwa bot sama sekali tidak membaca obrolan pribadi (DM).
5. **Konfigurasi Server (`.htaccess`):**
   - Mengunci encoding UTF-8 untuk mencegah teks rusak di hosting.
   - Penataan cache peramban untuk aset statis agar pemuatan halaman instan.
   - Proteksi direktori dan security header standar Apache.

---

## 📂 Struktur Direktori

```text
idaido-bot-web/
├── public/                     # Folder siap unggah ke hosting (htdocs)
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css       # Stylesheet minimalis, WCAG AA, responsive
│   │   ├── js/
│   │   │   └── app.js         # Interaktivitas demo, filter perintah, akordeon FAQ
│   │   └── img/
│   │       ├── favicon-32.png
│   │       └── favicon-180.png
│   ├── .htaccess               # Konfigurasi Apache untuk InfinityFree
│   ├── index.html              # Halaman Beranda & Simulasi
│   ├── dokumentasi.html        # Halaman Panduan & 88 Perintah
│   ├── changelog.html          # Halaman Riwayat Pembaruan
│   ├── policy.html             # Halaman Syarat & Privasi
│   ├── command.html            # Pengalihan kompatibilitas ke dokumentasi
│   └── panduan.html            # Pengalihan kompatibilitas ke dokumentasi
├── assets/                     # Berkas sumber aset
├── .gitignore
└── README.md
```

---

## 🚀 Panduan Deployment ke InfinityFree

Karena website ini berarsitektur statis murni, proses *deploy* ke InfinityFree tidak membutuhkan perintah build di server:

1. Buka control panel akun InfinityFree (VistaPanel) atau hubungkan melalui FTP client (misalnya FileZilla).
2. Masuk ke direktori root website: **`htdocs/`**
3. Salin/unggah **seluruh berkas di dalam folder `public/`** (bukan folder `public`-nya, melainkan isinya) langsung ke dalam `htdocs/`:
   - Pastikan berkas `.htaccess` ikut terunggah (aktifkan opsi *Show hidden files* jika menggunakan File Manager).
   - Pastikan folder `assets/` beserta isinya (`css/`, `js/`, `img/`) berada di dalam `htdocs/assets/`.
4. Buka alamat domain [https://idaido-bot.rf.gd/](https://idaido-bot.rf.gd/) untuk memverifikasi tampilan.

---

## 🛠️ Pengembangan Lokal

Untuk melihat atau menguji website di komputer lokal:

1. Clone repositori:
   ```bash
   git clone https://github.com/Ridhodrajat/bot-idaido-web.git
   cd bot-idaido-web
   ```
2. Anda bisa langsung membuka berkas `public/index.html` di peramban web, atau menjalankan server lokal sederhana:
   ```bash
   # Menggunakan Python
   cd public
   python -m http.server 8080

   # Atau menggunakan ekstensi VS Code Live Server
   ```
3. Buka `http://localhost:8080` di browser.

### Regenerasi Halaman & PDF

`index.html` di root adalah halaman utama dan **diedit langsung** (bukan hasil generator). Halaman pendukung (`command.html`, `panduan.html`, `dokumentasi.html`, `changelog.html`) dihasilkan dari `content.js`:

```bash
npm run generate
```

Perintah diambil dari `commands-data.json` (hasil ekstraksi registry bot). Untuk memperbarui daftar perintah sekaligus PDF-nya:

```bash
npm run pdf   # menulis assets/pdf/daftar-perintah-idaido-bot.pdf
npm run generate
```

---

## 📄 Lisensi & Hak Cipta

© 2026 IDAIDO BOT. Hak cipta dilindungi.  
Bot ini dikembangkan menggunakan pustaka pihak ketiga dan bukan merupakan produk resmi WhatsApp Inc.
