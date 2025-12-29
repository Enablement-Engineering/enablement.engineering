/**
 * Navigation module - handles mobile menu toggle and scroll-based visibility
 * Extracted from Navigation.astro for better maintainability
 */

// Constants for icon paths
const HAMBURGER_ICON = 'M4 6h16M4 12h16M4 18h16';
const CLOSE_ICON = 'M6 18L18 6M6 6l12 12';

// Element references
interface NavElements {
  nav: HTMLElement;
  toggle: HTMLElement;
  menu: HTMLElement;
  icon: SVGPathElement;
}

function getElements(): NavElements | null {
  const nav = document.getElementById('navigation');
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menu-icon') as SVGPathElement | null;

  if (!nav || !toggle || !menu || !icon) return null;
  return { nav, toggle, menu, icon };
}

// Mobile menu state management
function closeMenu(elements: NavElements) {
  const { toggle, menu, icon } = elements;
  menu.classList.add('hidden');
  menu.setAttribute('aria-hidden', 'true');
  toggle.setAttribute('aria-expanded', 'false');
  icon.setAttribute('d', HAMBURGER_ICON);
}

function openMenu(elements: NavElements) {
  const { toggle, menu, icon } = elements;
  menu.classList.remove('hidden');
  menu.setAttribute('aria-hidden', 'false');
  toggle.setAttribute('aria-expanded', 'true');
  icon.setAttribute('d', CLOSE_ICON);
}

function isMenuOpen(elements: NavElements): boolean {
  return !elements.menu.classList.contains('hidden');
}

// Initialize mobile menu behavior
function initMobileMenu(elements: NavElements) {
  const { toggle, menu } = elements;

  // Toggle on button click
  toggle.addEventListener('click', () => {
    if (isMenuOpen(elements)) {
      closeMenu(elements);
    } else {
      openMenu(elements);
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    const target = e.target as Node;
    if (!toggle.contains(target) && !menu.contains(target) && isMenuOpen(elements)) {
      closeMenu(elements);
    }
  });

  // Close on Escape key with focus return
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen(elements)) {
      closeMenu(elements);
      toggle.focus();
    }
  });
}

// Initialize scroll-based nav visibility (mobile only)
function initScrollBehavior(elements: NavElements) {
  const { nav } = elements;
  let lastScrollY = window.scrollY;
  let ticking = false;

  function updateVisibility() {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;
    const isDesktop = window.innerWidth >= 768;
    const isNearTop = currentScrollY <= 50;

    // Show nav on desktop, near top, or scrolling up
    const shouldShow = isDesktop || isNearTop || !isScrollingDown;
    nav.style.transform = shouldShow ? 'translateY(0)' : 'translateY(-100%)';

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  }, { passive: true });

  // Ensure nav is visible when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      nav.style.transform = 'translateY(0)';
    }
  });
}

// Main initialization function
export function initNavigation() {
  const elements = getElements();
  if (!elements) return;

  initMobileMenu(elements);
  initScrollBehavior(elements);
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
}
