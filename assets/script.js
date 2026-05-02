// ═══ Aureus Social Pro — Site vitrine ═══

document.addEventListener('DOMContentLoaded', () => {

  // 1. Reveal au scroll via IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

  // 2. Nav scrolled state
  const nav = document.querySelector('.nav');
  if (nav) {
    let raf = 0;
    window.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        raf = 0;
      });
    });
  }

  // 3. Smooth scroll pour ancres internes
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
