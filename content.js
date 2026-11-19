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
    ownerNumber: process.env.OWNER_NUMBER || "6289510214771",
    whatsappMessage: "Halo, saya tertarik menyewa IDAIDO BOT. Bisa bantu?",
  },

  // Paket harga
  packages: [
    {
      name: "Mingguan",
      duration: "7 hari",
      price: "Rp 5.000",
      popular: false,
      features: [
        "Balasan tak terbatas",
        "Semua fitur terbuka",
        "Katalog produk + template pesan",
        "Laporan order Excel",
        "Moderasi grup",
      ],
      cta: "Pilih Paket Mingguan",
    },
    {
      name: "Bulanan",
      duration: "30 hari",
      price: "Rp 10.000",
      popular: true,
      features: [
        "Semua fitur paket mingguan",
        "Hemat dibanding sewa per minggu",
        "Data katalog & pengaturan tersimpan",
        "Support langsung dari owner",
        "Bisa diperpanjang kapan saja",
      ],
      cta: "Pilih Paket Bulanan",
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
      description: "88 perintah siap pakai untuk semua kebutuhan jualan",
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
    { label: "Perintah", value: "88" },
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
      a: "Bisa. Tersedia trial gratis 7 hari dengan kuota 300 balasan per hari dan fitur premium terkunci. Hubungi owner untuk mengaktifkannya.",
    },
    {
      q: "Bot masih aktif setelah habis masa sewa?",
      a: "Tidak. Setelah masa sewa habis, bot berhenti melayani grup. Data grup tetap tersimpan selama 30 hari jika kamu memperpanjang.",
    },
  ],

  // FAQ lengkap (di halaman panduan)
  faqFull: [
    {
      q: "Apakah saya perlu menyiapkan VPS atau server?",
      a: "Tidak perlu. Bot berjalan 24/7 di server kami. Kamu hanya perlu mengundang bot ke grup, lalu owner mengaktifkan sewa dengan perintah addsewa. Setelah itu bot langsung aktif tanpa setting teknis dan tanpa biaya server tambahan.",
    },
    {
      q: "Bagaimana cara mulai menyewa bot?",
      a: "Proses sewa:\n\n1. Pilih paket atau minta trial 7 hari\n2. Hubungi owner via WhatsApp\n3. Owner mengundang bot ke grup kamu\n4. Owner mengaktifkan masa sewa\n5. Bot langsung siap dipakai\n\nTidak ada instalasi yang perlu kamu lakukan sendiri.",
    },
    {
      q: "Berapa lama durasi sewa?",
      a: "Fleksibel:\n\n• Trial gratis 7 hari (kuota 300 balasan/hari, fitur premium terkunci)\n• Sewa 7 hari\n• Sewa 30 hari\n• Durasi lebih panjang sesuai kesepakatan\n\nHarga dan durasi bisa didiskusikan langsung dengan owner.",
    },
    {
      q: "Satu sewa untuk berapa grup?",
      a: "Setiap sewa berlaku untuk satu grup. Setiap grup punya katalog, template, dan pengaturan sendiri. Jika kamu mengelola beberapa grup, hubungi owner untuk paket tambahan.",
    },
    {
      q: "Apa yang terjadi setelah masa sewa habis?",
      a: "Bot berhenti melayani grup. Data grup tetap tersimpan selama 30 hari, jadi jika kamu memperpanjang dalam masa itu katalog dan pengaturanmu kembali seperti semula.",
    },
    {
      q: "Apa yang terjadi kalau bot error atau tidak merespons?",
      a: "Hubungi owner via WhatsApp. Kami akan memeriksa, memperbaiki, dan melakukan restart bot jika diperlukan.",
    },
    {
      q: "Apakah data toko saya aman?",
      a: "Data hanya dipakai untuk operasional grup kamu. Bot tidak membaca atau menyimpan chat pribadi, dan setiap grup memiliki data yang terpisah.",
    },
    {
      q: "Apakah ada biaya tambahan selain sewa?",
      a: "Tidak ada. Biaya sewa sudah mencakup server dan operasional bot. Biaya transfer bank atau e-wallet ditanggung penyewa.",
    },
  ],

  // Contoh perintah (di halaman perintah, jika belum ada di registry)
  commandExamples: {
    ".menu": "Tampilkan menu bot",
    ".list": "Lihat katalog produk",
    ".addlist": "Tambah produk ke katalog",
    ".previewlist": "Pratinjau tampilan katalog",
    ".p": "Tandai pesanan sedang diproses (balas chat pelanggan)",
    ".d 50000": "Tandai pesanan selesai + catat nominal (balas chat pelanggan)",
    ".dataordernow": "Unduh laporan order hari ini (Excel)",
    ".dataorderweek": "Unduh laporan order minggu ini (Excel)",
    ".addblacklist": "Tambah nomor ke blacklist",
    ".antilink": "Aktifkan antilink mode 1",
    ".autoopen": "Aktifkan buka grup otomatis",
    ".autoopenset 08:00": "Atur jam buka otomatis",
    ".welcome": "Kelola pesan sambutan anggota baru",
    ".ceksewa": "Cek status sewa grup",
  },

  // Panduan setup (di halaman panduan)
  setupGuide: {
    quickstart: `
## Mulai Menggunakan Bot

Sebelum mulai, pastikan:
1. **Bot sudah diundang ke grup** oleh owner
2. **Masa sewa sudah aktif** (owner mengaktifkan dengan \`.addsewa\`)
3. **Anda admin grup**, dan **bot juga dijadikan admin** agar bisa moderasi dan mengubah info grup

### Langkah 1: Buka Menu
Kirim perintah berikut di grup:
\`\`\`
.menu
\`\`\`

### Langkah 2: Isi Katalog
Kirim \`.addlist\` lalu ikuti petunjuk bot untuk mengisi nama, harga, dan foto produk.
Cek hasilnya dengan:
\`\`\`
.list
.previewlist
\`\`\`

### Langkah 3: Pilih Template Pesan
Pilih gaya pesan proses dan pesan selesai:
\`\`\`
.setproses
.setdone
\`\`\`
Pesan buka dan tutup grup diatur dengan \`.setopen\` dan \`.setclose\`.

### Langkah 4: Pesan Sambutan
Kelola welcome dan goodbye:
\`\`\`
.welcome
.goodbye
.setwelcome
.setleft
\`\`\`

### Langkah 5: Moderasi Grup
Aktifkan proteksi grup dan catat nomor pengganggu:
\`\`\`
.antilink
.antiwame
.addblacklist
\`\`\`

Selesai! Bot siap beroperasi.
    `,
    dailyWorkflow: `
## Alur Kerja Harian

### Saat Ada Pesanan
1. Pelanggan mengetik \`.list\` atau nama produk di grup
2. Anda balas chat pelanggan lalu kirim \`.p\`
3. Bot mengirim template status diproses ke grup

### Saat Pesanan Selesai
1. Kirim akun/barang ke pelanggan
2. Balas chat pelanggan lalu kirim \`.d 25000\` sesuai nominal order
3. Bot mengirim nota selesai dan mencatat order ke laporan

### Buka & Tutup Grup
1. Buka grup dengan \`.open\`, tutup dengan \`.close\`
2. Atau aktifkan jadwal otomatis (\`.autoopen\`, \`.autoclose\`) agar bot mengunci grup sesuai jam operasional

### Laporan
Unduh rekap order dalam format Excel (.xlsx):
\`\`\`
.dataordernow
.dataorderlast
.dataorderweek
.dataordermonth
\`\`\`
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
        "Pastikan pesanan ditandai selesai dengan \\.d dan nominalnya ikut dikirim",
        "Perintah laporan hanya tersedia di paket berbayar, bukan trial",
        "Tunggu beberapa saat, bot mungkin sedang memproses file Excel",
      ],
    },
    {
      problem: "Harga di katalog tidak terupdate",
      solutions: [
        "Gunakan \\.updatelist atau \\.renamelist pada produk yang ingin diubah",
        "Pastikan Anda admin grup dan bot juga admin",
        "Cek hasil perubahan dengan \\.list atau \\.previewlist",
      ],
    },
  ],

  // Changelog
  changelog: [
    {
      version: "1.1.0",
      date: "17 November 2026",
      changes: [
        "Sistem paket trial dan berbayar, dengan kuota balasan harian pada trial",
        "Fitur premium terkunci di trial dan terbuka otomatis di paket berbayar",
        "Perintah owner baru: .trial, .setplan, dan .paket",
        "Harga sewa Rp5.000 / 7 hari dan Rp10.000 / 30 hari",
        "Perbaikan antilink dan antiwame sesuai mode peringatan atau kick",
        "Menu menyesuaikan hak akses anggota, admin, dan owner",
        "Perbaikan laporan Excel dalam membaca nomor telepon asli (LID WhatsApp)",
      ],
    },
    {
      version: "1.0.0",
      date: "18 Oktober 2026",
      changes: [
        "Rilis pertama: katalog produk dengan template teks dan foto",
        "Pencatatan transaksi proses dan selesai beserta nominal order",
        "Laporan order harian, mingguan, dan bulanan dalam format Excel",
        "Moderasi grup: antilink, antiwame, hidetag, dan blacklist",
        "Welcome dan goodbye kustom dengan variabel dinamis",
        "Sistem sewa per grup dengan pengingat menjelang kedaluwarsa",
      ],
    },
  ],

  // Uptime & stats
  stats_extended: {
    uptime: "24/7",
    commands: "88",
    supportHours: "24/7",
  },

  // Disclaimer
  disclaimer:
    "IDAIDO BOT adalah produk tidak resmi yang menggunakan library WhatsApp tidak resmi. Kami tidak berafiliasi dengan WhatsApp Inc. Penggunaan bot ini sepenuhnya tanggung jawab Anda. Kami tidak bertanggung jawab atas kehilangan data, suspend akun, atau dampak lainnya dari penggunaan bot.",
};
