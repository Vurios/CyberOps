(function() {
  /* ============================================================
     NAVIGATION & THREAT FEED — Top Navigation Menu & Live Log Feed
     ============================================================ */

  /**
   * Initialize navigation and status pings
   */
  function initNavigation() {
    highlightActivePage();
    initMobileToggle();
    initLogFeed();
    initDynamicCounts();
  }

  /* ── Active Page Highlighting ──────────────────────────────── */
  function highlightActivePage() {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Highlight horizontal links
    $$('.nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav-link--active');
      } else {
        link.classList.remove('nav-link--active');
      }
    });

    // Highlight mobile dropdown links
    $$('.nav-dropdown__link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav-dropdown__link--active');
      } else {
        link.classList.remove('nav-dropdown__link--active');
      }
    });
  }


  /* ── Mobile Hamburger Menu ─────────────────────────────────── */
  function initMobileToggle() {
    const hamburger = $('.nav-hamburger');
    const dropdown = $('#nav-dropdown');

    if (!hamburger || !dropdown) return;

    hamburger.addEventListener('click', () => {
      const isOpen = dropdown.classList.contains('is-open');
      dropdown.classList.toggle('is-open');
      hamburger.classList.toggle('is-active');
      hamburger.setAttribute('aria-expanded', !isOpen);
    });

    // Close dropdown on resize if it crosses back to desktop width
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        dropdown.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ── Live Threat Activity Feed (Dashboard only) ──────────────── */
  const LOG_ENTRIES = [
    { tag: 'OK', cls: 'ok', msg: 'TLS handshake completed on port 443 — cipher: ECDHE-RSA-AES256' },
    { tag: 'INFO', cls: 'info', msg: 'Session token rotated — admin logged in' },
    { tag: 'INFO', cls: 'info', msg: 'DNS query: security-service.internal → 10.0.1.5' },
    { tag: 'WARN', cls: 'warn', msg: 'Failed SSH query from 192.168.1.47 (3/5 attempts)' },
    { tag: 'OK', cls: 'ok', msg: 'Malware definition DB sync completed (v2.6.0)' },
    { tag: 'INFO', cls: 'info', msg: 'Firewall rules #47 check completed — PASS' },
    { tag: 'WARN', cls: 'warn', msg: 'Unusual outbound query spike on interface eth0' },
    { tag: 'OK', cls: 'ok', msg: 'System audit logs compressed & archived' },
    { tag: 'ERR', cls: 'err', msg: 'CRITICAL: Certificate expiry alert on subnode *.internal.lan (7d)' },
    { tag: 'INFO', cls: 'info', msg: 'SIEM aggregation engine: 0 warning correlation flags' },
    { tag: 'OK', cls: 'ok', msg: 'Agent check-in: 48/48 endpoints active' },
    { tag: 'WARN', cls: 'warn', msg: 'Geofence warning: user admin connection from unrecognized region' },
    { tag: 'INFO', cls: 'info', msg: 'Software patch update cycle: 100% compliant' }
  ];

  function initLogFeed() {
    const feed = $('#threat-feed-container');
    if (!feed) return;

    // Add initial entries
    LOG_ENTRIES.slice(0, 5).forEach((entry) => addLogEntry(feed, entry));

    // Add new logs periodically
    let idx = 5;
    setInterval(() => {
      const entry = LOG_ENTRIES[idx % LOG_ENTRIES.length];
      addLogEntry(feed, entry);
      idx++;

      // Limit log rows to 20
      while (feed.children.length > 20) {
        feed.removeChild(feed.firstChild);
      }

      feed.scrollTop = feed.scrollHeight;
    }, 4500);
  }

  function addLogEntry(container, entry) {
    const row = document.createElement('div');
    row.className = 'threat-feed-row';
    
    row.innerHTML = `
      <span class="mono threat-feed-row__time">[${timestamp()}]</span>
      <span class="threat-feed-row__tag threat-feed-row__tag--${entry.cls}">${entry.tag}</span>
      <span class="threat-feed-row__msg">${entry.msg}</span>
    `;
    
    container.appendChild(row);
  }


  /* ── Dynamic Nav Counts (data accuracy sync) ────────────────── */
  const SITE_COUNTS = {
    modules: 9,
    simulations: 5,
    labs: 9,
    certifications: 9
  };

  function initDynamicCounts() {
    updateDashboardStats();
    updatePageSubtitleCounts();
  }

  function updateDashboardStats() {
    const statsElements = $$('.stats-strip__value');
    if (!statsElements.length) return;

    const pages = [
      { key: 'modules', label: 'Modules' },
      { key: 'simulations', label: 'Simulations' },
      { key: 'labs', label: 'Labs' },
      { key: 'certifications', label: 'Certifications' }
    ];

    pages.forEach((page, index) => {
      statsElements[index].textContent = `${SITE_COUNTS[page.key]} ${page.label}`;
    });
  }

  function updatePageSubtitleCounts() {
    const descEl = $('.hero-desc');
    if (!descEl) return;

    const path = window.location.pathname.split('/').pop() || 'index.html';
    
    if (path.includes('labs.html')) {
      const count = $$('.lab-card').length;
      descEl.textContent = `// lab_status: operational — platforms_indexed: ${count} — access: public`;
    } else if (path.includes('certifications.html')) {
      const count = $$('.cert-card').length;
      descEl.textContent = `// pathways_indexed: ${count} — target_level: professional — status: active`;
    } else if (path.includes('games.html')) {
      const count = $$('.game-section').length;
      descEl.textContent = `// simulation_engine: active — scenarios_loaded: ${count} — mode: training`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
