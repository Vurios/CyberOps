(function () {
  /* ============================================================
     MODULE INDEX CONTROLLER
     Simplified for static routing grid index cards.
     ============================================================ */

  function initModulesIndex() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {
      const query = e.target.value.toLowerCase().trim();

      document.querySelectorAll('.module-group').forEach(group => {
        const cards = group.querySelectorAll('.module-card');
        let visibleCount = 0;

        cards.forEach(card => {
          const title = (card.querySelector('.module-card__title')?.textContent || '').toLowerCase();
          const summary = (card.querySelector('.module-card__summary')?.textContent || '').toLowerCase();
          const label = (card.querySelector('.module-card__label')?.textContent || '').toLowerCase();

          if (title.includes(query) || summary.includes(query) || label.includes(query)) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        // Hide group section if no modules match
        if (visibleCount === 0 && query !== '') {
          group.style.display = 'none';
        } else {
          group.style.display = '';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModulesIndex);
  } else {
    initModulesIndex();
  }
})();
