// ----- Nav mobile -----
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Ferme le menu quand on clique sur un lien
  links.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (!a) return;
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

// ----- Thème (dark/light) -----
const root = document.documentElement;
const themeBtn = document.querySelector(".theme-toggle");
const THEME_KEY = "ahlam_theme";

function setTheme(mode) {
  if (mode === "light") root.setAttribute("data-theme", "light");
  else root.removeAttribute("data-theme");

  localStorage.setItem(THEME_KEY, mode);
  const icon = document.querySelector(".theme-icon");
  if (icon) icon.textContent = mode === "light" ? "☀" : "☾";
}

const saved = localStorage.getItem(THEME_KEY);
if (saved) setTheme(saved);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(current === "light" ? "dark" : "light");
  });
}

// ----- Reveal on scroll -----
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-in");
    io.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// ----- Skills bars animation (fill) -----
const bars = document.querySelectorAll(".bar > div");
const ioBars = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    // la width est déjà inline dans le HTML, on la relance pour l'anim
    const w = entry.target.style.width;
    entry.target.style.width = "0%";
    requestAnimationFrame(() => (entry.target.style.width = w));
    ioBars.unobserve(entry.target);
  });
}, { threshold: 0.3 });

bars.forEach(b => ioBars.observe(b));

// ----- Fake contact send -----
const fakeSend = document.getElementById("fakeSend");
const fakeMsg = document.getElementById("fakeMsg");
if (fakeSend && fakeMsg) {
  fakeSend.addEventListener("click", () => {
    fakeMsg.textContent = "✅ Merci ! Pour un vrai envoi, je peux brancher un formulaire (PHP ou service).";
  });
}

// ----- Year -----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


const emailBtn = document.getElementById("copyEmail");

if (emailBtn) {
  emailBtn.addEventListener("click", () => {
    const email = "mestar.ale@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
      emailBtn.textContent = "✅ Email copié !";

      setTimeout(() => {
        emailBtn.textContent = "📋 Copier email";
      }, 2000);
    });
  });
}