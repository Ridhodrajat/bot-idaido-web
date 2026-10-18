// Konfigurasi konten website IDAIDO BOT
// Edit di sini untuk mengubah teks, harga, fitur, FAQ, dll

module.exports = {
  // Metadata
  site: {
    title: "IDAIDO BOT",
    description: "Bot WhatsApp multi-grup untuk mengelola penjualan online dan moderasi grup. Fitur lengkap, mudah dipakai, harga terjangkau.",
    language: "id",
    year: new Date().getFullYear(),
  },

  // Brand & kontak
  brand: {
    name: "IDAIDO BOT",
    tagline: "Bot WhatsApp terpercaya untuk jualan online",
    ownerNumber: process.env.OWNER_NUMBER || "62812xxxxx", // Ganti dengan nomor sebenarnya
    whatsappMessage: "Halo, saya tertarik menyewa IDAIDO BOT. Bisa bantu?",
  },

  // Paket harga (TODO: ganti dengan harga asli)
  packages: [
    {
      name: "Starter",
      duration: "30 hari",
      price: "Rp 50.000",
      popular: false,
      features: [
        "Multi-grup (hingga 5 grup)",
        "Katalog produk dasar",
        "Moderasi grup otomatis",
        "Laporan order Excel",
        "Support WhatsApp",
      ],
      cta: "Pesan Sekarang",
    },
    {
      name: "Professional",
      duration: "30 hari",
      price: "Rp 100.000",
      popular: true,
      features: [
        "Multi-grup (hingga 20 grup)",
        "Katalog produk lanjutan",
        "Moderasi + antilink otomatis",
        "Laporan detail & analisis",
        "Jadwal otomatis (buka/tutup)",
        "Support prioritas",
      ],
      cta: "Pesan Sekarang",
    },
    {
      name: "Enterprise",
      duration: "30 hari",
      price: "Hubungi Owner",
      popular: false,
      features: [
        "Multi-grup unlimited",
        "Semua fitur Professional",
        "Custom command",
        "Integrasi database (opsional)",
        "Dedicated support",
      ],
      cta: "Hubungi Owner",
    },
  ],

  // Fitur utama (di hero)
  features: [
    {
      icon: "📦",
      title: "Katalog Produk",
      description: "Kelola produk, harga, dan stok dengan mudah via katalog WhatsApp",
    },
    {
      icon: "🔐",
      title: "Moderasi Otomatis",
      description: "Antilink, antiwame, blacklist, dan kontrol grup tanpa henti",
    },
    {
      icon: "📊",
      title: "Laporan Penjualan",
      description: "Export laporan order ke Excel dengan sekali perintah",
    },
    {
      icon: "⏰",
      title: "Jadwal Otomatis",
      description: "Set bot untuk buka/tutup grup dan kirim notifikasi otomatis",
    },
    {
      icon: "👥",
      title: "Multi-Grup",
      description: "Jalankan di puluhan grup sekaligus dengan satu bot",
    },
    {
      icon: "⚡",
      title: "Perintah Lengkap",
      description: "82+ perintah siap pakai untuk semua kebutuhan jualan",
    },
  ],

  // Cara pesan (langkah)
  howToOrder: [
    {
      step: 1,
      title: "Pilih Paket",
      description: "Tentukan paket yang sesuai dengan kebutuhan Anda",
    },
    {
      step: 2,
      title: "Hubungi Owner",
      description: "Klik tombol WhatsApp atau hubungi langsung via chat",
    },
    {
      step: 3,
      title: "Konfirmasi & Pembayaran",
      description: "Diskusi detail, durasi sewa, dan cara pembayaran",
    },
    {
      step: 4,
      title: "Setup Bot",
      description: "Owner undang bot ke grup Anda dan berikan panduan setup",
    },
    {
      step: 5,
      title: "Bot Siap Digunakan",
      description: "Mulai gunakan semua fitur sesuai panduan yang diberikan",
    },
  ],

  // Statistik (opsional untuk hero)
  stats: [
    { label: "Perintah", value: "82+" },
    { label: "Kategori", value: "7" },
    { label: "Multi-Grup", value: "Unlimited" },
  ],

  // FAQ ringkas (di beranda)
  faqShort: [
    {
      q: "Apakah bot ini aman?",
      a: "Bot kami hanya menggunakan library tidak resmi WhatsApp. Gunakan dengan bijak dan tanggung jawab Anda sendiri.",
    },
    {
      q: "Berapa lama bot bisa dipakai?",
      a: "Sesuai durasi yang Anda sewa: 7 hari, 30 hari, atau lebih. Bisa diperpanjang kapan saja.",
    },
    {
      q: "Bisa dicoba dulu gratis?",
      a: "Hubungi owner untuk demo atau trial singkat. Tergantung ketersediaan.",
    },
    {
      q: "Bot masih aktif setelah habis masa sewa?",
      a: "Tidak. Setelah masa sewa habis, bot otomatis leave dari grup Anda.",
    },
  ],

  // FAQ lengkap (di halaman panduan)
  faqFull: [
    {
      q: "Apakah bot ini aman digunakan?",
      a: "Bot IDAIDO menggunakan library WhatsApp yang tidak resmi, bukan API resmi. Keamanan dan kestabilan bergantung pada perubahan WhatsApp. Kami rekomendasikan:\n\n• Gunakan bot di akun admin, bukan akun pribadi utama\n• Jangan bagikan sesi bot ke orang lain\n• Matikan 2FA jika menyebabkan masalah koneksi\n• Setujui disclaimer bahwa ini produk tidak resmi WhatsApp",
    },
    {
      q: "Bot bisa digunakan di berapa grup?",
      a: "Tergantung paket:\n\n• Starter: hingga 5 grup\n• Professional: hingga 20 grup\n• Enterprise: unlimited\n\nSetiap grup bisa diatur terpisah dengan perintah konfigurasi.",
    },
    {
      q: "Bagaimana cara sewa?",
      a: "Proses sewa:\n\n1. Pilih paket yang sesuai\n2. Hubungi owner via tombol WhatsApp di website atau chat langsung\n3. Diskusikan detail (durasi, grup, custom request)\n4. Lakukan pembayaran\n5. Owner undang bot ke grup Anda\n6. Ikuti panduan setup\n\nSetelah itu bot siap digunakan.",
    },
    {
      q: "Berapa lama durasi sewa?",
      a: "Durasi sewa fleksibel, contoh:\n\n• 7 hari (1 minggu)\n• 30 hari (1 bulan)\n• 60 hari (2 bulan)\n• Atau durasi custom sesuai negosiasi\n\nSetelah habis, bot otomatis leave. Bisa perpanjang kapan saja.",
    },
    {
      q: "Apa yang terjadi kalau bot error atau nggak merespons?",
      a: "Hubungi owner segera via WhatsApp. Owner akan:\n\n• Cek error log bot\n• Restart bot jika perlu\n• Lakukan troubleshooting\n• Ganti bot dengan yang baru jika tidak bisa diperbaiki\n\nGaransi uptime 95% (bisa down untuk update/maintenance).",
    },
    {
      q: "Bisa ganti nomor bot atau induk?",
      a: "Bisa, tapi perlu koordinasi dengan owner:\n\n• Ganti nomor induk (pemberi perintah) bisa di tengah masa sewa\n• Bot perlu restart dan re-login\n• Hubungi owner untuk proses gangti nomor",
    },
    {
      q: "Harga bisa berubah nggak?",
      a: "Ya, harga di website bisa berubah kapan saja tanpa notifikasi. Jika Anda sudah deal dengan owner pada harga tertentu, harga tersebut berlaku untuk sewa Anda.",
    },
    {
      q: "Apakah ada biaya tambahan selain sewa?",
      a: "Tidak ada biaya tambahan dari sisi bot. Biaya yang mungkin ada:\n\n• Biaya transfer (bank/e-wallet)\n• Biaya internet untuk menjalankan induk bot (jika pakai komputer/VPS pribadi)\n\nSemuanya ditanggung penyewa.",
    },
  ],

  // Contoh perintah (di halaman perintah, jika belum ada di registry)
  commandExamples: {
    ".list": "Lihat katalog produk",
    ".addlist netflix | Langganan Netflix 30 hari": "Tambah produk ke katalog",
    ".proses": "Tandai pesanan sedang diproses (balas chat pelanggan)",
    ".done 50000": "Tandai pesanan selesai + catat nominal (balas chat pelanggan)",
    ".dataordernow": "Laporan order hari ini ke Excel",
    ".addblacklist 62812xxxx Nama": "Tambah nomor ke blacklist",
    ".autoopen on": "Aktifkan buka grup otomatis",
    ".autoopenset 08:00": "Set jam buka otomatis",
  },

  // Panduan setup (di halaman panduan)
  setupGuide: {
    quickstart: `
## Quickstart untuk Admin Grup

Sebelum mulai, pastikan:
1. **Bot sudah di-invite ke grup** oleh owner
2. **Anda adalah admin grup** (atau buat grup baru dengan bot)
3. **Bot adalah admin** (berikan akses admin ke bot)

### Langkah 1: Jadikan Bot Admin
Kirim perintah ke grup:
\`\`\`
.setadmin on
\`\`\`

### Langkah 2: Setup Katalog
Buat katalog produk:
\`\`\`
.addlist Netflix | Langganan Netflix 30 hari | 50000
.addlist Spotify | Langganan Spotify 1 bulan | 30000
\`\`\`

Lihat katalog:
\`\`\`
.list
\`\`\`

### Langkah 3: Setup Template Pesan
Buat template untuk status pesanan:
\`\`\`
.tempproses Template: Pesanan sedang kami proses, mohon ditunggu ya 🙏
.tempdone Template: Pesanan selesai! Akun sudah dikirim 🎉
\`\`\`

### Langkah 4: Setup Jadwal
Setup jam buka dan tutup otomatis:
\`\`\`
.autoopen on
.autoopenset 08:00
.autoclose on
.autocloseset 22:00
\`\`\`

### Langkah 5: Aktifkan Moderasi
Setup antilink dan blacklist:
\`\`\`
.antilink on
.addblacklist 62812xxxx Nama Penipu
\`\`\`

Selesai! Bot siap beroperasi.
    `,
    dailyWorkflow: `
## Alur Kerja Harian

### Pagi (Saat Buka Grup)
1. Bot otomatis buka grup (jika jadwal aktif)
2. Kirim sapaan ke group dengan \`.announce Pagi! Grup sudah dibuka\`

### Saat Ada Pesanan
1. Pelanggan chat atau kirim ke grup
2. Anda balas chat pelanggan
3. Kirim perintah \`.proses\` (balas chat pelanggan)
4. Template otomatis terkirim

### Saat Pesanan Selesai
1. Kirim akun/barang ke pelanggan
2. Kirim perintah \`.done 50000\` (balas chat dengan nominal)
3. Bot otomatis catat ke laporan

### Malam (Saat Tutup Grup)
1. Bot otomatis tutup grup (jika jadwal aktif)
2. Laporan otomatis di-generate ke Excel dengan \`.dataordernow\`

### Akhir Hari
1. Ekspor laporan dengan \`.dataorderweek\` atau \`.dataordermonth\`
2. Rekap omset dan pesanan
    `,
  },

  // Troubleshooting
  troubleshooting: [
    {
      problem: "Bot tidak merespons perintah",
      solutions: [
        "Pastikan bot adalah admin grup",
        "Cek apakah bot masih online (server hosting masih aktif)",
        "Restart bot atau hubungi owner",
        "Pastikan format perintah benar (dimulai dengan .)",
      ],
    },
    {
      problem: "Bot keluar dari grup sendiri",
      solutions: [
        "Bot mungkin di-remove by another admin",
        "Bot crash karena error. Hubungi owner untuk restart",
        "Masa sewa sudah habis",
      ],
    },
    {
      problem: "Laporan order tidak tergenerate",
      solutions: [
        "Pastikan Anda mengirim perintah \\.done dengan benar",
        "Tunggu beberapa saat, bot mungkin sedang memproses",
        "Cek apakah bot bisa akses folder download (untuk file Excel)",
      ],
    },
    {
      problem: "Harga di katalog tidak terupdate",
      solutions: [
        "Gunakan \\.editlist untuk edit harga",
        "Format: \\.editlist Netflix | Harga Baru | 60000",
        "Pastikan Anda adalah owner atau yang punya akses edit",
      ],
    },
  ],

  // Changelog
  changelog: [
    {
      version: "2.5.0",
      date: "18 Oktober 2026",
      changes: [
        "✨ Fitur baru: Template nota custom dengan dynamic tags",
        "🐛 Perbaikan: Antilink detection lebih akurat",
        "⚡ Performa: Optimize command parsing lebih cepat",
      ],
    },
    {
      version: "2.4.5",
      date: "10 Oktober 2026",
      changes: [
        "🎨 UI improvement: Katalog tampilan lebih rapi",
        "🔒 Keamanan: Blacklist system lebih ketat",
      ],
    },
    {
      version: "2.4.0",
      date: "1 Oktober 2026",
      changes: [
        "✨ Fitur baru: Jadwal otomatis buka/tutup grup",
        "📊 Laporan order ke Excel support",
      ],
    },
  ],

  // Uptime & stats
  stats_extended: {
    uptime: "99.9%",
    activeStores: "500+",
    supportHours: "24/7",
  },

  // Disclaimer
  disclaimer:
    "IDAIDO BOT adalah produk tidak resmi yang menggunakan library WhatsApp tidak resmi. Kami tidak berafiliasi dengan WhatsApp Inc. Penggunaan bot ini sepenuhnya tanggung jawab Anda. Kami tidak bertanggung jawab atas kehilangan data, suspend akun, atau dampak lainnya dari penggunaan bot.",
};
