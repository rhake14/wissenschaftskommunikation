const header = document.querySelector('[data-header]');
const progressBar = document.querySelector('.scroll-progress span');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const updateScrollUi = () => {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
  header.classList.toggle('scrolled', scrollTop > 20);
};

updateScrollUi();
window.addEventListener('scroll', updateScrollUi, { passive: true });

if (navToggle && navLinks) {
  const closeMenu = () => {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Navigation öffnen');
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  navToggle.addEventListener('click', () => {
    const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(willOpen));
    navToggle.setAttribute('aria-label', willOpen ? 'Navigation schließen' : 'Navigation öffnen');
    navLinks.classList.toggle('open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

const revealItems = document.querySelectorAll('.reveal');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px' });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const numberFormatter = new Intl.NumberFormat('de-DE');
const metricNumbers = document.querySelectorAll('[data-count]');

const animateMetric = (element) => {
  const target = Number(element.dataset.count);
  const suffix = element.dataset.suffix || '';
  const duration = 1000;
  const start = performance.now();

  const tick = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - elapsed, 3);
    const value = Math.round(target * eased);
    element.textContent = `${numberFormatter.format(value)}${suffix}`;
    if (elapsed < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if (!reduceMotion && 'IntersectionObserver' in window) {
  const metricObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.7 });
  metricNumbers.forEach((number) => metricObserver.observe(number));
}

const challengeOptions = document.querySelectorAll('.challenge-option');
const challengeCode = document.querySelector('#challenge-code');
const challengeTitle = document.querySelector('#challenge-title');
const challengeDescription = document.querySelector('#challenge-description');
const challengeLink = document.querySelector('#challenge-link');

challengeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    challengeOptions.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    option.classList.add('active');
    option.setAttribute('aria-pressed', 'true');

    const { test, title, description } = option.dataset;
    challengeCode.textContent = `${test} · Demonstration`;
    challengeTitle.textContent = title;
    challengeDescription.textContent = description;
    challengeLink.href = `https://shiny.gold-msi.org/longgold_demo/?test=${encodeURIComponent(test)}`;
  });
});

const posterCarousel = document.querySelector('#poster-carousel');
const carouselButtons = document.querySelectorAll('[data-carousel-direction]');
const posterSlides = document.querySelectorAll('.poster-slide');
const posterDialog = document.querySelector('#poster-dialog');
const posterDialogImage = document.querySelector('#poster-dialog-image');
const posterDialogTitle = document.querySelector('#poster-dialog-title');
const posterDialogClose = document.querySelector('.dialog-close');

carouselButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!posterCarousel) return;
    const direction = button.dataset.carouselDirection === 'next' ? 1 : -1;
    posterCarousel.scrollBy({
      left: posterCarousel.clientWidth * 0.76 * direction,
      behavior: reduceMotion ? 'auto' : 'smooth'
    });
  });
});

posterSlides.forEach((slide) => {
  slide.addEventListener('click', () => {
    if (!posterDialog || !posterDialogImage || !posterDialogTitle) return;
    posterDialogImage.src = slide.dataset.posterSrc;
    posterDialogImage.alt = slide.dataset.posterTitle;
    posterDialogTitle.textContent = slide.dataset.posterTitle;
    posterDialog.showModal();
  });
});

if (posterDialog && posterDialogClose) {
  posterDialogClose.addEventListener('click', () => posterDialog.close());
  posterDialog.addEventListener('click', (event) => {
    const bounds = posterDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) posterDialog.close();
  });
  posterDialog.addEventListener('close', () => {
    posterDialogImage.src = '';
  });
}

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();
