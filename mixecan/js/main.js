/**
 * Mixecan deck interactions.
 * Native scrolling remains the primary interaction; JavaScript only adds
 * section state, keyboard navigation, subtle counters and restrained parallax.
 */
(() => {
  'use strict';

  const slides = [...document.querySelectorAll('.slide')];
  const navLinks = [...document.querySelectorAll('.deck-nav a')];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const activateSlide = (slide) => {
    slides.forEach((item) => item.classList.toggle('is-visible', item === slide));
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${slide.id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    animateCounters(slide);
  };

  const animateCounters = (slide) => {
    slide.querySelectorAll('.counter:not([data-complete])').forEach((counter) => {
      const target = Number(counter.dataset.value || 0);
      const decimals = Number(counter.dataset.decimals || 0);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      const duration = prefersReducedMotion ? 0 : 900;
      const start = performance.now();

      counter.dataset.complete = 'true';
      const tick = (now) => {
        const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    const mostVisible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (mostVisible) activateSlide(mostVisible.target);
  }, { threshold: [0.35, 0.6, 0.85] });

  slides.forEach((slide) => observer.observe(slide));
  activateSlide(slides[0]);

  // Arrow, Page Up/Down, Home and End navigation keeps the deck presentation-ready.
  window.addEventListener('keydown', (event) => {
    if (event.target.matches('input, textarea, select, button')) return;
    const current = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-visible')));
    let target = current;

    if (['ArrowDown', 'PageDown', ' '].includes(event.key)) target = Math.min(slides.length - 1, current + 1);
    if (['ArrowUp', 'PageUp'].includes(event.key)) target = Math.max(0, current - 1);
    if (event.key === 'Home') target = 0;
    if (event.key === 'End') target = slides.length - 1;

    if (target !== current) {
      event.preventDefault();
      slides[target].scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  });

  // The parallax is intentionally limited to six pixels and never runs on touch devices.
  if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
    let queued = false;
    window.addEventListener('scroll', () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        const hero = document.querySelector('.slide--hero');
        const offset = Math.max(-6, Math.min(6, window.scrollY * 0.015));
        hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
        queued = false;
      });
    }, { passive: true });
  }
})();
