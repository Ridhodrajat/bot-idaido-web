/* ==========================================================================
   IDAIDO BOT - app.js
   Minimalist, accessible, no external dependencies
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic WhatsApp CTA links
  const ownerNumber = document.body.dataset.ownerNumber || '6289510214771';
  const defaultMsg = encodeURIComponent(
    document.body.dataset.message ||
      'Halo, saya menemukan website IDAIDO BOT. Saya ingin bertanya soal sewa bot untuk grup WhatsApp saya.'
  );

  document.querySelectorAll('.btn-whatsapp').forEach((btn) => {
    const customText = btn.dataset.waText ? encodeURIComponent(btn.dataset.waText) : defaultMsg;
    btn.setAttribute('href', `https://wa.me/${ownerNumber}?text=${customText}`);
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener');
  });

  // 2. Mobile Navigation Drawer
  const btnMenu = document.querySelector('.btn-menu');
  const nav = document.querySelector('header nav');
  if (btnMenu && nav) {
    const toggleNav = (open) => {
      const isOpen = open !== undefined ? open : !nav.classList.contains('open');
      nav.classList.toggle('open', isOpen);
      btnMenu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btnMenu.textContent = isOpen ? '✕' : '☰';
    };

    btnMenu.addEventListener('click', () => toggleNav());

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleNav(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggleNav(false);
      }
    });

    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !btnMenu.contains(e.target)) {
        toggleNav(false);
      }
    });
  }

  // 3. FAQ Accordion with Keyboard Support
  document.querySelectorAll('.faq-item').forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      questionBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // 4. Toast Notification & Copy to Clipboard
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  document.querySelectorAll('.pre-code').forEach((pre) => {
    if (!pre.querySelector('.btn-copy-code')) {
      const copyBtn = document.createElement('button');
      copyBtn.type = 'button';
      copyBtn.className = 'btn-copy-code';
      copyBtn.textContent = 'Salin';
      copyBtn.setAttribute('aria-label', 'Salin kode contoh');
      copyBtn.addEventListener('click', () => {
        const text = pre.innerText.replace(/Salin|Tersalin!/g, '').trim();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = 'Tersalin!';
            showToast('Perintah berhasil disalin');
            setTimeout(() => {
              copyBtn.textContent = 'Salin';
            }, 1800);
          });
        }
      });
      pre.appendChild(copyBtn);
    }
  });

  // 5. Interactive Chat Simulation
  const chatBody = document.getElementById('demo-chat-body');
  const nextStepBtn = document.getElementById('demo-next-btn');
  const demoStepLabel = document.getElementById('demo-step-label');
  const roleTabs = document.querySelectorAll('.role-tab');

  const simulationScripts = {
    buyer: [
      { role: 'user', sender: 'Pembeli', text: '.list' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '📦 <b>KATALOG PRODUK</b>\n• <code>netflix</code>: Netflix Premium 1 Bulan (Rp50.000)\n• <code>spotify</code>: Spotify Premium 1 Bulan (Rp25.000)\n• <code>canva</code>: Canva Pro 1 Bulan (Rp15.000)\nKetik nama produk untuk melihat rincian harga.'
      },
      { role: 'user', sender: 'Pembeli', text: 'netflix' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '🎬 <b>Netflix Premium 1 Bulan</b>\nHarga: Rp50.000 (Garansi Penuh)\nSilakan transfer ke rekening/QRIS toko lalu kirim buktinya ke grup.'
      },
      { role: 'admin', sender: 'Admin Toko', text: '.p (membalas pesan pembeli)' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '✅ <b>STATUS: DIPROSES</b>\nPesanan Kakak sedang kami siapkan, mohon ditunggu sebentar ya!'
      },
      { role: 'admin', sender: 'Admin Toko', text: '.d 50000 (membalas bukti transfer)' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '✨ <b>PESANAN SELESAI!</b>\nTerima kasih sudah order. Nominal Rp50.000 otomatis tercatat ke pembukuan grup.'
      }
    ],
    admin: [
      { role: 'admin', sender: 'Owner/Admin', text: '.paket' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '📋 <b>INFORMASI PAKET GRUP</b>\nStatus: 💎 Berbayar (Aktif)\nMingguan (7 hari): Rp5.000\nBulanan (30 hari): Rp10.000\nSemua fitur premium terbuka tanpa batas kuota balasan harian.'
      },
      { role: 'admin', sender: 'Admin Toko', text: '.antilink on' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '🛡️ <b>Antilink Aktif (Mode 1)!</b> Pesan tautan lain akan langsung dihapus dan pengirim diberi peringatan.'
      },
      { role: 'admin', sender: 'Admin Toko', text: '.autoopenset 08:00' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '⏰ Jadwal buka grup otomatis berhasil diatur ke pukul <b>08:00 WIB</b>.'
      },
      { role: 'admin', sender: 'Admin Toko', text: '.dataordernow' },
      {
        role: 'bot',
        sender: 'IDAIDO BOT',
        text: '📊 <b>Laporan_Order_Hari_Ini.xlsx</b> siap diunduh! Berisi rekapan lengkap transaksi dan total omset hari ini.'
      }
    ]
  };

  let currentRole = 'buyer';
  let currentStepIndex = 2;

  function renderSimulation() {
    if (!chatBody) return;
    const script = simulationScripts[currentRole] || [];
    chatBody.innerHTML = '';
    const visibleSteps = script.slice(0, currentStepIndex);

    visibleSteps.forEach((msg) => {
      const bubble = document.createElement('div');
      bubble.className = `bubble ${msg.role}`;
      bubble.innerHTML = `<span class="bubble-sender">${msg.sender}</span>${msg.text.replace(/\n/g, '<br>')}`;
      chatBody.appendChild(bubble);
    });

    chatBody.scrollTop = chatBody.scrollHeight;

    const totalSteps = Math.ceil(script.length / 2);
    const activeStep = Math.min(Math.ceil(currentStepIndex / 2), totalSteps);

    if (demoStepLabel) {
      demoStepLabel.textContent = `Langkah ${activeStep} dari ${totalSteps}`;
    }

    if (nextStepBtn) {
      nextStepBtn.textContent = currentStepIndex >= script.length ? 'Ulangi Simulasi' : 'Lanjut Langkah';
    }
  }

  if (roleTabs.length > 0 && chatBody) {
    roleTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        roleTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        currentRole = tab.dataset.role || 'buyer';
        currentStepIndex = 2;
        renderSimulation();
      });
    });

    if (nextStepBtn) {
      nextStepBtn.addEventListener('click', () => {
        const script = simulationScripts[currentRole] || [];
        currentStepIndex = currentStepIndex >= script.length ? 2 : currentStepIndex + 2;
        renderSimulation();
      });
    }

    renderSimulation();
  }

  // 6. Command Table Search & Filter (in dokumentasi.html)
  const searchInput = document.getElementById('search-commands');
  const categoryFilter = document.getElementById('filter-category');
  const accessFilter = document.getElementById('filter-access');
  const planFilter = document.getElementById('filter-plan');
  const cmdCounter = document.getElementById('cmd-counter');
  const noResults = document.querySelector('.no-results');
  const commandRows = document.querySelectorAll('table tbody tr[data-category]');

  function applyCommandFilter() {
    if (!commandRows || commandRows.length === 0) return;

    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const selectedCat = categoryFilter ? categoryFilter.value : 'all';
    const selectedAccess = accessFilter ? accessFilter.value : 'all';
    const selectedPlan = planFilter ? planFilter.value : 'all';

    let count = 0;

    commandRows.forEach((row) => {
      const text = row.innerText.toLowerCase();
      const cat = row.dataset.category || '';
      const access = row.dataset.access || '';
      const plan = row.dataset.plan || ''; // 'trial' or 'premium'

      const matchQuery = text.includes(query);
      const matchCat = selectedCat === 'all' || cat === selectedCat;
      const matchAccess = selectedAccess === 'all' || access === selectedAccess;
      const matchPlan = selectedPlan === 'all' || plan === selectedPlan;

      if (matchQuery && matchCat && matchAccess && matchPlan) {
        row.style.display = '';
        count++;
      } else {
        row.style.display = 'none';
      }
    });

    if (cmdCounter) {
      cmdCounter.textContent = `Menampilkan ${count} dari ${commandRows.length} perintah yang terdaftar di bot.`;
    }

    if (noResults) {
      noResults.classList.toggle('hidden', count > 0);
    }
  }

  if (searchInput) searchInput.addEventListener('input', applyCommandFilter);
  if (categoryFilter) categoryFilter.addEventListener('change', applyCommandFilter);
  if (accessFilter) accessFilter.addEventListener('change', applyCommandFilter);
  if (planFilter) planFilter.addEventListener('change', applyCommandFilter);

  if (commandRows.length > 0) {
    applyCommandFilter();
  }
});
