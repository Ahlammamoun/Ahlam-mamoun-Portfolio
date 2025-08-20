// ==== Apparition au scroll : SPIN & DROP ====
const cards = Array.from(document.querySelectorAll('.project-card'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('enter-spin'); // déclenche l'animation CSS
        obs.unobserve(el);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  // Stagger: petit délai progressif carte par carte
  cards.forEach((card, i) => {
    card.style.setProperty('--d', `${(i % 8) * 0.08}s`);
    io.observe(card);
  });
} else {
  // Fallback sans IO : on affiche direct
  cards.forEach(c => c.classList.add('enter-spin'));
}


// ---- Ripple boutons ----
function attachRipple(el) {
  el.addEventListener('pointerdown', e => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    el.classList.add('is-rippling');
    setTimeout(() => el.classList.remove('is-rippling'), 350);
  });
}
document.querySelectorAll('.btn, .btn-secondary').forEach(attachRipple);

// ---- Burger (optionnel) ----
const burger = document.querySelector('.hamburger');
if (burger) {
  const toggle = () => {
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', burger.classList.contains('active'));
    document.body.classList.toggle('nav-open', burger.classList.contains('active'));
  };
  burger.addEventListener('click', toggle);
  burger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });
}
