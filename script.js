/* ═══════════════════════════════════════════════════════════════════════
   Agafay Camels — script.js
   Static-ready: no build step, no Node.js, no dependencies
   Works on GitHub Pages, Cloudflare Pages, or any static host
═══════════════════════════════════════════════════════════════════════ */

'use strict';

const HEADER_HEIGHT = 70;


/* ── 1. NAVBAR — scroll shadow + active link tracking ────────────────── */
(function initNavbar() {
  const header   = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - HEADER_HEIGHT - 40) {
        current = sec.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── 2. HAMBURGER — mobile nav overlay ──────────────────────────────── */
(function initHamburger() {
  const btn    = document.querySelector('.hamburger');
  const header = document.getElementById('header');
  if (!btn) return;

  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('role', 'menu');

  document.querySelectorAll('.nav-links .nav-link').forEach(link => {
    const a = link.cloneNode(true);
    a.setAttribute('role', 'menuitem');
    mobileNav.appendChild(a);
  });

  const ctaClone = document.querySelector('.nav-cta')?.cloneNode(true);
  if (ctaClone) {
    ctaClone.className = 'btn btn--primary nav-cta';
    mobileNav.appendChild(ctaClone);
  }

  header.appendChild(mobileNav);

  function close() {
    btn.classList.remove('open');
    mobileNav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = btn.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('click', e => { if (!header.contains(e.target)) close(); });
})();


/* ── 3. FADE-IN ON SCROLL — IntersectionObserver ────────────────────── */
(function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10 }
  );

  els.forEach(el => io.observe(el));
})();


/* ── 4. CONTACT FORM — static hosting placeholder ───────────────────── */
/*
   STATIC HOSTING NOTE:
   This form cannot send emails on GitHub Pages / Cloudflare Pages.

   TO CONNECT A REAL FORM SERVICE (e.g. Formspree):
   1. Sign up at https://formspree.io
   2. Create form and copy the endpoint URL
   3. In index.html, set on the <form> tag:
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
   4. Remove or comment out this initForm() function
   5. The form will submit natively to Formspree

   OTHER SERVICES:
   - Getform:       https://getform.io
   - Web3Forms:     https://web3forms.com
   - Netlify Forms: Requires hosting on Netlify
   - Google Forms:  Embed an iframe from Google Forms
*/
(function initForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const action = form.getAttribute('action');
  if (action && action !== '#') return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();

    if (!name || !email) {
      alert('Please fill in your name and email address.');
      return;
    }

    alert(
      'Thank you! Please contact us by email or WhatsApp to confirm your Agafay camel ride.\n\n' +
      'Email: contact@agafaycamels.com\n\n' +
      'We look forward to welcoming you to the Agafay Desert!'
    );

    form.reset();
  });
})();


/* ── 5. BACK TO TOP ─────────────────────────────────────────────────── */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* ── 6. SMOOTH SCROLL for all anchor links ───────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── 7. EXPERIENCE CARD image hover zoom ─────────────────────────────── */
(function initExpCardHover() {
  document.querySelectorAll('.exp-card').forEach(card => {
    const img = card.querySelector('.exp-img');
    if (!img) return;
    card.addEventListener('mouseenter', () => {
      img.style.transition = 'transform 0.5s ease';
      img.style.transform  = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
})();


/* ── 8. GALLERY — show labels on mobile ─────────────────────────────── */
(function initGalleryMobile() {
  if (window.innerWidth <= 640) {
    document.querySelectorAll('.gl-overlay').forEach(o => { o.style.opacity = '1'; });
  }
})();
