// IDAIDO BOT Website - JavaScript
// Lightweight, no dependencies

document.addEventListener("DOMContentLoaded", function () {
  initMenu();
  initSearch();
  initFilter();
  initFAQ();
  initWhatsAppLinks();
});

// ===== Menu Toggle =====
function initMenu() {
  const btnMenu = document.querySelector(".btn-menu");
  const nav = document.querySelector("nav");

  if (!btnMenu || !nav) return;

  btnMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Close menu when link clicked
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });
}

// ===== Search Commands =====
function initSearch() {
  const searchInput = document.getElementById("search-commands");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    filterTable(query, null);
  });
}

// ===== Filter by Category & Access =====
function initFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length === 0) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filterType = this.dataset.filter;
      const filterValue = this.dataset.value;

      // Update active state
      const siblingBtns = document.querySelectorAll(
        `.filter-btn[data-filter="${filterType}"]`
      );
      siblingBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Apply filter
      filterTable(getSearchQuery(), filterValue);
    });
  });

  // Set first button as active
  if (filterBtns.length > 0) {
    filterBtns[0].classList.add("active");
  }
}

// ===== Filter Table Logic =====
function filterTable(searchQuery, categoryFilter) {
  const rows = document.querySelectorAll("tbody tr");
  let visibleCount = 0;

  rows.forEach((row) => {
    const text = row.textContent.toLowerCase();
    const category = row.dataset.category || "";
    const access = row.dataset.access || "";

    // Search filter
    const matchesSearch = searchQuery === "" || text.includes(searchQuery);

    // Category filter
    const matchesCategory =
      categoryFilter === null ||
      categoryFilter === "" ||
      category === categoryFilter;

    // Show/hide row
    if (matchesSearch && matchesCategory) {
      row.style.display = "";
      visibleCount++;
    } else {
      row.style.display = "none";
    }
  });

  // Show "no results" message
  const noResults = document.querySelector(".no-results");
  if (visibleCount === 0 && noResults) {
    noResults.style.display = "block";
  } else if (noResults) {
    noResults.style.display = "none";
  }
}

// ===== Get Current Search Query =====
function getSearchQuery() {
  const searchInput = document.getElementById("search-commands");
  return searchInput ? searchInput.value.toLowerCase() : "";
}

// ===== FAQ Accordion =====
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", function () {
      // Close other FAQs
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          if (otherAnswer) {
            otherAnswer.classList.remove("show");
            const toggle = otherItem.querySelector(".faq-toggle");
            if (toggle) toggle.textContent = "▼";
          }
        }
      });

      // Toggle current
      answer.classList.toggle("show");
      const toggle = question.querySelector(".faq-toggle");
      if (toggle) {
        toggle.textContent = answer.classList.contains("show") ? "▲" : "▼";
      }
    });
  });
}

// ===== WhatsApp Links =====
function initWhatsAppLinks() {
  const ownerNumber = document.querySelector("[data-owner-number]");
  if (!ownerNumber) return;

  const number = ownerNumber.dataset.ownerNumber;
  const message = ownerNumber.dataset.message || "Halo, saya tertarik menyewa IDAIDO BOT";

  const waLink = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  // Update all WhatsApp buttons
  const waButtons = document.querySelectorAll(".btn-whatsapp");
  waButtons.forEach((btn) => {
    btn.href = waLink;
  });
}

// ===== Smooth Scroll for Anchors (fallback) =====
document.addEventListener("click", function (e) {
  const target = e.target.closest("a[href^='#']");
  if (!target) return;

  const id = target.getAttribute("href").slice(1);
  const element = document.getElementById(id);

  if (element) {
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  }
});

// ===== Export untuk Testing =====
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    filterTable,
    getSearchQuery,
  };
}
