(function() {
  /* ============================================================
     CERTIFICATIONS SEARCH FILTER CONTROLLER
     Filters certification pathway cards dynamically on keyup.
     ============================================================ */

  function initCertificationsIndex() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('keyup', (e) => {
      const query = e.target.value.toLowerCase().trim();

      document.querySelectorAll('.cert-card').forEach(card => {
        const name = (card.querySelector('.cert-card__name')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.cert-card__description')?.textContent || '').toLowerCase();
        const org = (card.querySelector('.cert-card__org')?.textContent || '').toLowerCase();
        const value = (card.querySelector('.cert-card__detail-value')?.textContent || '').toLowerCase();

        if (name.includes(query) || desc.includes(query) || org.includes(query) || value.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCertificationsIndex);
  } else {
    initCertificationsIndex();
  }
})();
