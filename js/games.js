(function() {
  'use strict';

  // Helper functions
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  function initTOCActiveHighlight() {
    const tocLinks = $$('.toc-link');
    const sections = [
      $('#nmap-sim'),
      $('#chat-sim'),
      $('#phishing-sim'),
      $('#wifi-picker-sim'),
      $('#permission-auditor-sim'),
      $('#deepfake-spotter-sim'),
      $('#entropy-sim')
    ].filter(Boolean);

    if (!tocLinks.length || !sections.length) return;

    function onScroll() {
      let activeId = '';
      const scrollPos = window.scrollY + 160; // Offset for header + TOC bar height

      sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop) {
          activeId = sec.getAttribute('id');
        }
      });

      // Default to first section if at the very top of the page
      if (window.scrollY < 100) {
        activeId = sections[0].getAttribute('id');
      }

      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Run initially to set active state
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTOCActiveHighlight();
  });
})();
