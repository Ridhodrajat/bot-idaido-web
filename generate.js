#!/usr/bin/env node

/**
 * IDAIDO BOT Website Generator
 * Mengubah content.js menjadi file HTML statis di folder public/
 */

const fs = require("fs");
const path = require("path");

const content = require("./content.js");

// Helper: Sanitize HTML
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper: Convert markdown-like formatting
function formatText(text) {
  if (!text) return "";
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

// ===== TEMPLATE: Header =====
function renderHeader() {
  const navItems = [
    { href: "#fitur", label: "Fitur" },
    { href: "#harga", label: "Harga" },
    { href: "command.html", label: "Perintah" },
    { href: "panduan.html", label: "Panduan" },
  ];

  return `
    <header>
      <div class="container">
        <div class="logo">${escapeHtml(content.brand.name)}</div>
        <button class="btn-menu" aria-label="Menu">☰</button>
        <nav>
          <ul>
            ${navItems.map((item) => `<li><a href="${item.href}">${item.label}</a></li>`).join("")}
            <li><a href="#hubungi" class="btn btn-primary btn-whatsapp">Hubungi Owner</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}

// ===== TEMPLATE: Footer =====
function renderFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>${escapeHtml(content.brand.name)}</h3>
            <p>${escapeHtml(content.brand.tagline)}</p>
          </div>
          <div class="footer-section">
            <h3>Navigasi</h3>
            <ul>
              <li><a href="index.html">Beranda</a></li>
              <li><a href="command.html">Daftar Perintah</a></li>
              <li><a href="panduan.html">Panduan</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Kontak</h3>
            <ul>
              <li><a href="https://wa.me/${content.brand.ownerNumber.replace(/\D/g, "")}" target="_blank" rel="noopener">WhatsApp</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Legal</h3>
            <p style="font-size: 0.875rem;">${escapeHtml(content.disclaimer)}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${content.site.year} ${escapeHtml(content.brand.name)}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// ===== TEMPLATE: Hero =====
function renderHero() {
  return `
    <section class="hero">
      <div class="container">
        <h1>${escapeHtml(content.brand.name)}</h1>
        <p>${escapeHtml(content.brand.tagline)}</p>
        <div class="btn-group">
          <a href="command.html" class="btn btn-secondary">Lihat Perintah</a>
          <a href="#hubungi" class="btn btn-outline btn-whatsapp">Hubungi Owner</a>
        </div>
      </div>
    </section>
  `;
}

// ===== TEMPLATE: Stats =====
function renderStats() {
  if (!content.stats || content.stats.length === 0) return "";
  return `
    <div class="stats">
      ${content.stats
        .map(
          (stat) => `
        <div class="stat">
          <div class="stat-value">${escapeHtml(stat.value)}</div>
          <div class="stat-label">${escapeHtml(stat.label)}</div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// ===== TEMPLATE: Features Grid =====
function renderFeatures() {
  return `
    <section id="fitur">
      <div class="container">
        <h2 class="section-title">Fitur Utama</h2>
        <div class="features-grid grid-3">
          ${content.features
            .map(
              (feature) => `
            <div class="card">
              <div class="card-icon">${escapeHtml(feature.icon)}</div>
              <h3 class="card-title">${escapeHtml(feature.title)}</h3>
              <p>${escapeHtml(feature.description)}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

// ===== TEMPLATE: Packages =====
function renderPackages() {
  return `
    <section id="harga">
      <div class="container">
        <h2 class="section-title">Paket Harga</h2>
        <div class="packages-grid">
          ${content.packages
            .map(
              (pkg) => `
            <div class="package ${pkg.popular ? "popular" : ""}">
              ${
                pkg.popular
                  ? '<div class="package-badge">Populer ⭐</div>'
                  : ""
              }
              <h3 class="package-name">${escapeHtml(pkg.name)}</h3>
              <p class="package-duration">${escapeHtml(pkg.duration)}</p>
              <div class="package-price">${escapeHtml(pkg.price)}</div>
              <ul class="package-features">
                ${pkg.features
                  .map((f) => `<li>${escapeHtml(f)}</li>`)
                  .join("")}
              </ul>
              <a href="#hubungi" class="btn btn-primary btn-block btn-whatsapp">${escapeHtml(pkg.cta)}</a>
            </div>
          `
            )
            .join("")}
        </div>
        <p class="text-muted text-center mt-lg">
          <small>⚠️ Harga dapat berubah kapan saja tanpa pemberitahuan.</small>
        </p>
      </div>
    </section>
  `;
}

// ===== TEMPLATE: How to Order =====
function renderHowToOrder() {
  return `
    <section id="cara-pesan">
      <div class="container">
        <h2 class="section-title">Cara Pesan</h2>
        <div class="grid-3">
          ${content.howToOrder
            .map(
              (step) => `
            <div class="card text-center">
              <div style="font-size: 2.5rem; font-weight: bold; color: var(--color-primary); margin-bottom: var(--space-md);">
                ${step.step}
              </div>
              <h3 class="card-title">${escapeHtml(step.title)}</h3>
              <p>${escapeHtml(step.description)}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

// ===== TEMPLATE: FAQ Short =====
function renderFAQShort() {
  return `
    <section id="faq-ringkas">
      <div class="container">
        <h2 class="section-title">Pertanyaan Umum</h2>
        <div class="grid-2">
          ${content.faqShort
            .map(
              (item, idx) => `
            <div class="faq-item">
              <div class="faq-question">
                <strong>${escapeHtml(item.q)}</strong>
                <span class="faq-toggle">▼</span>
              </div>
              <div class="faq-answer">${formatText(escapeHtml(item.a))}</div>
            </div>
          `
            )
            .join("")}
        </div>
        <p class="text-center mt-lg">
          <a href="panduan.html#faq">Lihat FAQ lengkap →</a>
        </p>
      </div>
    </section>
  `;
}

// ===== TEMPLATE: CTA Section =====
function renderCTA() {
  return `
    <section id="hubungi" style="background: linear-gradient(135deg, var(--color-primary), var(--color-secondary)); color: white; text-align: center;">
      <div class="container">
        <h2 style="color: white;">Siap Mulai?</h2>
        <p style="font-size: 1.125rem; margin-bottom: var(--space-lg);">
          Hubungi kami di WhatsApp untuk diskusi dan penawaran khusus
        </p>
        <a href="https://wa.me/${content.brand.ownerNumber.replace(/\D/g, "")}?text=${encodeURIComponent(content.brand.whatsappMessage)}" 
           target="_blank" rel="noopener" class="btn btn-secondary">
          💬 Hubungi Owner via WhatsApp
        </a>
      </div>
    </section>
  `;
}

// ===== PAGE: INDEX (Beranda) =====
function generateIndex() {
  const html = `<!DOCTYPE html>
<html lang="${content.site.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(content.brand.name)} - ${escapeHtml(content.site.description)}</title>
  <meta name="description" content="${escapeHtml(content.site.description)}">
  <meta name="keywords" content="WhatsApp bot, bot jualan, IDAIDO, multi-grup">
  <meta name="language" content="${content.site.language}">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-owner-number="${content.brand.ownerNumber}" data-message="${content.brand.whatsappMessage}">
  ${renderHeader()}
  <main>
    ${renderHero()}
    ${renderStats()}
    ${renderFeatures()}
    ${renderPackages()}
    ${renderHowToOrder()}
    ${renderFAQShort()}
    ${renderCTA()}
  </main>
  ${renderFooter()}
  <script src="assets/js/app.js"></script>
</body>
</html>`;
  return html;
}

// ===== PAGE: COMMAND =====
function generateCommand() {
  // Note: Perintah akan dibaca dari registry bot nanti
  // Untuk sekarang, gunakan data placeholder dari content.commandExamples
  const commands = Object.entries(content.commandExamples).map(([cmd, desc]) => ({
    command: cmd,
    description: desc,
    category: "Umum",
    access: "Semua",
  }));

  const html = `<!DOCTYPE html>
<html lang="${content.site.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daftar Perintah - ${escapeHtml(content.brand.name)}</title>
  <meta name="description" content="Daftar lengkap perintah ${escapeHtml(content.brand.name)} dengan contoh penggunaan dan kategori">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-owner-number="${content.brand.ownerNumber}" data-message="${content.brand.whatsappMessage}">
  ${renderHeader()}
  <main>
    <section>
      <div class="container">
        <h1>Daftar Perintah</h1>
        <p>Berikut adalah seluruh perintah yang tersedia di ${escapeHtml(content.brand.name)}. Gunakan tombol cari untuk menemukan perintah yang Anda cari.</p>
        
        <div class="search-box">
          <input type="text" id="search-commands" placeholder="Cari perintah..." aria-label="Cari perintah">
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Perintah</th>
                <th>Deskripsi</th>
                <th>Kategori</th>
                <th>Akses</th>
              </tr>
            </thead>
            <tbody>
              ${commands
                .map(
                  (cmd) => `
                <tr data-category="${escapeHtml(cmd.category)}" data-access="${escapeHtml(cmd.access)}">
                  <td><code>${escapeHtml(cmd.command)}</code></td>
                  <td>${escapeHtml(cmd.description)}</td>
                  <td>${escapeHtml(cmd.category)}</td>
                  <td>${escapeHtml(cmd.access)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
        <div class="no-results hidden">
          <p>Tidak ada perintah yang cocok dengan pencarian Anda.</p>
        </div>
      </div>
    </section>
  </main>
  ${renderFooter()}
  <script src="assets/js/app.js"></script>
</body>
</html>`;
  return html;
}

// ===== PAGE: PANDUAN =====
function generatePanduan() {
  const html = `<!DOCTYPE html>
<html lang="${content.site.language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panduan - ${escapeHtml(content.brand.name)}</title>
  <meta name="description" content="Panduan lengkap menggunakan ${escapeHtml(content.brand.name)} dari setup hingga daily workflow">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-owner-number="${content.brand.ownerNumber}" data-message="${content.brand.whatsappMessage}">
  ${renderHeader()}
  <main>
    <section id="quickstart">
      <div class="container">
        <h1>Panduan Penggunaan</h1>
        <div>${formatText(content.setupGuide.quickstart)}</div>
      </div>
    </section>

    <section id="workflow">
      <div class="container">
        <h2>Alur Kerja Harian</h2>
        <div>${formatText(content.setupGuide.dailyWorkflow)}</div>
      </div>
    </section>

    <section id="faq">
      <div class="container">
        <h2>FAQ Lengkap</h2>
        ${content.faqFull
          .map(
            (item, idx) => `
          <div class="faq-item">
            <div class="faq-question">
              <strong>${escapeHtml(item.q)}</strong>
              <span class="faq-toggle">▼</span>
            </div>
            <div class="faq-answer">${formatText(escapeHtml(item.a))}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </section>

    <section id="troubleshooting">
      <div class="container">
        <h2>Troubleshooting</h2>
        ${content.troubleshooting
          .map(
            (item) => `
          <div class="card mb-lg">
            <h3>${escapeHtml(item.problem)}</h3>
            <ul>
              ${item.solutions.map((sol) => `<li>${escapeHtml(sol)}</li>`).join("")}
            </ul>
          </div>
        `
          )
          .join("")}
      </div>
    </section>
  </main>
  ${renderFooter()}
  <script src="assets/js/app.js"></script>
</body>
</html>`;
  return html;
}

// ===== MAIN GENERATE FUNCTION =====
function generate() {
  console.log("🚀 Generating IDAIDO BOT Website...");

  // Ensure public folder exists
  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Generate pages
  const pages = {
    "index.html": generateIndex(),
    "command.html": generateCommand(),
    "panduan.html": generatePanduan(),
  };

  Object.entries(pages).forEach(([filename, html]) => {
    const filePath = path.join(publicDir, filename);
    fs.writeFileSync(filePath, html, "utf-8");
    console.log(`✅ Generated: public/${filename}`);
  });

  // Copy assets
  const assetDirs = [
    { src: "assets/css", dest: "public/assets/css" },
    { src: "assets/js", dest: "public/assets/js" },
    { src: "assets/img", dest: "public/assets/img" },
  ];

  assetDirs.forEach(({ src, dest }) => {
    const srcPath = path.join(__dirname, src);
    const destPath = path.join(__dirname, dest);

    if (!fs.existsSync(destPath)) {
      fs.mkdirSync(destPath, { recursive: true });
    }

    if (fs.existsSync(srcPath)) {
      fs.readdirSync(srcPath).forEach((file) => {
        const srcFile = path.join(srcPath, file);
        const destFile = path.join(destPath, file);

        if (fs.statSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`📋 Copied: ${destPath}/${file}`);
        }
      });
    }
  });

  console.log("\n✨ Website generated successfully!");
  console.log("📁 Output: public/");
  console.log("🌐 Ready to upload to hosting\n");
}

// Run if called directly
if (require.main === module) {
  try {
    generate();
  } catch (err) {
    console.error("❌ Error generating website:", err.message);
    process.exit(1);
  }
}

module.exports = { generate };
