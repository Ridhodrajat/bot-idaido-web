#!/usr/bin/env node

/**
 * Membuat PDF "Daftar Perintah" dari commands-data.json.
 *
 * Pemakaian:
 *   node tools/generate-commands-pdf.js
 *
 * Butuh Microsoft Edge (atau set EDGE_PATH ke chrome/edge executable).
 * Output:
 *   tools/perintah-print.html  (sumber HTML untuk print)
 *   assets/pdf/daftar-perintah-idaido-bot.pdf
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.join(__dirname, "..");
const commands = require(path.join(root, "commands-data.json"));
const logo = fs.readFileSync(path.join(root, "assets/img/logo-mark.png")).toString("base64");

const CATEGORIES = [
  ["owner", "Owner & Info"],
  ["product", "Katalog Produk"],
  ["transaction", "Transaksi"],
  ["welcome", "Welcome / Goodbye"],
  ["moderation", "Moderasi Grup"],
  ["settings", "Pengaturan & Laporan"],
  ["utility", "Utilitas"],
];

const escape = (text) =>
  String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const accessOf = (cmd) => (cmd.owner ? "Owner" : cmd.admin ? "Admin Grup" : "Semua");

const sections = CATEGORIES.map(([key, label]) => {
  const items = commands.filter((cmd) => cmd.cat === key);
  const rows = items
    .map((cmd) => {
      const tags = [
        cmd.premium ? '<span class="t prem">Berbayar</span>' : "",
        cmd.hidden ? '<span class="t">Alias</span>' : "",
      ].join("");
      return `<tr><td class="cmd">.${escape(cmd.name)}</td><td>${escape(cmd.desc)} ${tags}</td><td class="acc">${accessOf(cmd)}</td></tr>`;
    })
    .join("");

  return `<section><h2>${label} <span>${items.length} perintah</span></h2>
<table><thead><tr><th style="width:26%">Perintah</th><th>Keterangan</th><th style="width:16%">Akses</th></tr></thead>
<tbody>${rows}</tbody></table></section>`;
}).join("\n");

const html = `<!DOCTYPE html>
<html lang="id"><head><meta charset="utf-8"><title>Daftar Perintah IDAIDO BOT</title>
<style>
@page{size:A4;margin:16mm 14mm 18mm}
*{box-sizing:border-box}
body{font:10.5pt/1.45 -apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#0f172a;margin:0}
.head{display:flex;align-items:center;gap:12px;border-bottom:2px solid #0f766e;padding-bottom:12px;margin-bottom:16px}
.logo{width:44px;height:44px;border-radius:9px}
.brand b{font-size:15pt;letter-spacing:-.02em;display:block}
.brand span{font-size:9pt;color:#475569}
.meta{margin-left:auto;text-align:right;font-size:8.5pt;color:#475569;line-height:1.5}
h1{font-size:14pt;margin:0 0 4px;letter-spacing:-.02em}
.lead{font-size:9.5pt;color:#475569;margin:0 0 10px;max-width:150mm}
.legend{font-size:8.5pt;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:7px 10px;margin-bottom:14px}
.legend b{color:#0f172a}
section{margin-bottom:14px;page-break-inside:auto}
h2{font-size:11pt;margin:0 0 6px;color:#0f766e;letter-spacing:-.01em;border-bottom:1px solid #e2e8f0;padding-bottom:4px}
h2 span{font-size:8pt;color:#64748b;font-weight:500;margin-left:4px}
table{width:100%;border-collapse:collapse}
thead{display:table-header-group}
tr{page-break-inside:avoid}
th{text-align:left;font-size:8pt;text-transform:uppercase;letter-spacing:.04em;color:#475569;border-bottom:1px solid #cbd5e1;padding:4px 6px;background:#f8fafc}
td{border-bottom:1px solid #eef2f7;padding:5px 6px;vertical-align:top}
td.cmd{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:9pt;font-weight:600;white-space:nowrap}
td.acc{font-size:8.5pt;color:#475569;white-space:nowrap}
.t{display:inline-block;font-size:7pt;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#475569;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:3px;padding:1px 4px;margin-left:4px;vertical-align:1px}
.t.prem{color:#0f766e;background:#f0fdfa;border-color:#ccfbf1}
.foot{margin-top:16px;border-top:1px solid #e2e8f0;padding-top:8px;font-size:8pt;color:#64748b;display:flex;justify-content:space-between;gap:10px}
</style></head><body>
<div class="head">
  <img class="logo" src="data:image/png;base64,${logo}" alt="IDAIDO BOT">
  <div class="brand"><b>IDAIDO BOT</b><span>Bot WhatsApp Otomatis untuk Rental &amp; Toko Digital</span></div>
  <div class="meta">Daftar Perintah<br>Versi 1.1.0 &middot; ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</div>
</div>
<h1>Daftar Perintah Lengkap</h1>
<p class="lead">Seluruh perintah dijalankan dengan awalan titik (.). Perintah hanya berfungsi di grup yang sudah terdaftar dan masa sewanya aktif.</p>
<div class="legend"><b>Akses:</b> <b>Semua</b> = seluruh anggota grup &middot; <b>Admin Grup</b> = admin grup dan owner &middot; <b>Owner</b> = pengelola bot. Perintah bertanda <b>Berbayar</b> hanya terbuka pada paket berbayar, bukan trial.</div>
${sections}
<div class="foot"><span>IDAIDO BOT &middot; idaido-bot.rf.gd</span><span>WhatsApp Owner: +62 895-1021-4771</span></div>
</body></html>`;

const htmlPath = path.join(__dirname, "perintah-print.html");
fs.writeFileSync(htmlPath, html, "utf-8");
console.log(`✅ HTML: tools/perintah-print.html (${commands.length} perintah)`);

const candidates = [
  process.env.EDGE_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

// Edge di Windows juga bisa terpasang sebagai EdgeCore\<versi>\msedge.exe
const edgeCore = "C:\\Program Files (x86)\\Microsoft\\EdgeCore";
if (fs.existsSync(edgeCore)) {
  fs.readdirSync(edgeCore)
    .filter((dir) => dir.includes("."))
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
    .forEach((dir) => candidates.push(path.join(edgeCore, dir, "msedge.exe")));
}

const browser = candidates.find((exe) => fs.existsSync(exe));
if (!browser) {
  console.error("⚠️  Browser tidak ditemukan. Set EDGE_PATH, lalu jalankan ulang.");
  process.exit(1);
}

const out = path.join(root, "assets/pdf/daftar-perintah-idaido-bot.pdf");
fs.mkdirSync(path.dirname(out), { recursive: true });

const result = spawnSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${out}`,
    "file:///" + htmlPath.replace(/\\/g, "/"),
  ],
  { stdio: "ignore", timeout: 60000 }
);

if (!fs.existsSync(out)) {
  console.error("❌ PDF gagal dibuat.", result.error || "");
  process.exit(1);
}

console.log(`✅ PDF: assets/pdf/daftar-perintah-idaido-bot.pdf (${fs.statSync(out).size} bytes)`);
