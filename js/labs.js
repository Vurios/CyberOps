(function() {
  /* ============================================================
     LABS SEARCH FILTER CONTROLLER
     Filters labs card list dynamically on keyup search events.
     ============================================================ */

  function initLabsIndex() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {
      const query = e.target.value.toLowerCase().trim();

      document.querySelectorAll('.lab-card').forEach(card => {
        const title = (card.querySelector('.lab-card__title')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.lab-card__description')?.textContent || '').toLowerCase();
        const tag = (card.querySelector('.lab-card__tag')?.textContent || '').toLowerCase();

        if (title.includes(query) || desc.includes(query) || tag.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLabsIndex);
  } else {
    initLabsIndex();
  }
})();
