(function () {
  /* ============================================================
     MODULE INDEX CONTROLLER
     Simplified for static routing grid index cards.
     ============================================================ */

  function initModulesIndex() {
    const searchInput = document.querySelector('.search-input');
    const trackTabs = document.querySelectorAll('.track-tab');
    let currentTrack = 'everyday'; // 'everyday' or 'technical'

    function filterModules() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

      document.querySelectorAll('.module-group').forEach(group => {
        const isEverydayGroup = group.querySelector('.module-group__title')?.textContent.includes('Everyday Awareness');
        const belongsToCurrentTrack = (currentTrack === 'everyday' && isEverydayGroup) || 
                                      (currentTrack === 'technical' && !isEverydayGroup);

        if (!belongsToCurrentTrack) {
          group.style.display = 'none';
          return;
        }

        const cards = group.querySelectorAll('.module-card');
        let visibleCount = 0;

        cards.forEach(card => {
          const title = (card.querySelector('.module-card__title')?.textContent || '').toLowerCase();
          const summary = (card.querySelector('.module-card__summary')?.textContent || '').toLowerCase();
          const label = (card.querySelector('.module-card__label')?.textContent || '').toLowerCase();

          if (query === '' || title.includes(query) || summary.includes(query) || label.includes(query)) {
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
    }

    if (searchInput) {
      searchInput.addEventListener('keyup', filterModules);
      searchInput.addEventListener('input', filterModules);
    }

    trackTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        trackTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTrack = tab.getAttribute('data-track');
        filterModules();
      });
    });

    // Run initial filter
    filterModules();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModulesIndex);
  } else {
    initModulesIndex();
  }
})();
