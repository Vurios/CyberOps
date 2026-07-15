(function () {
  /* ============================================================
     PROGRESS MANAGEMENT & RECOMMENDED PATH SYSTEM
     Saves module completions to localStorage and recommends paths
     ============================================================ */

  const PROGRESS_KEY = 'cyberops_progress';

  const Progress = {
    getProgress() {
      try {
        return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
      } catch (e) {
        return {};
      }
    },

    saveProgress(progress) {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    },

    markComplete(moduleId) {
      const progress = this.getProgress();
      progress[moduleId] = { completed: true, timestamp: Date.now() };
      this.saveProgress(progress);

      // If we are on modules.html, reload completed views
      if (window.location.pathname.includes('modules.html')) {
        this.initModulesProgress();
      }
    },

    getRecommendedModule() {
      const progress = this.getProgress();
      // MODULE_DATA might not be loaded if on index.html, so we can use a basic array or wait for MODULE_DATA
      const modules = window.MODULE_DATA || [
        { id: '01', title: 'IT Assurance Foundations', number: 'MODULE 01', summary: 'Learn the fundamental components of IT Assurance, risk management models, and security control domains.' },
        { id: '02', title: 'Threat Modeling & Risk', number: 'MODULE 02', summary: 'Identify application assets, diagram trust boundaries, and calculate DREAD compound risk scores.' },
        { id: '03', title: 'Cryptography & PKI', number: 'MODULE 03', summary: 'Analyze symmetric/asymmetric encryptions, hashing algorithms, and public key certificate logic.' },
        { id: '04', title: 'Secure Virtualization & Sandboxing', number: 'MODULE 04', summary: 'Master virtualization sandboxes, container isolations, and malware detonation workflows.' },
        { id: '05', title: 'Linux CLI & Diagnostics', number: 'MODULE 05', summary: 'Navigate local filesystems, diagnose active network sockets, and manipulate text records.' },
        { id: '06', title: 'Network Mapping & Nmap', number: 'MODULE 06', summary: 'Perform target mapping, identify open ports, and analyze service vulnerabilities.' },
        { id: '07', title: 'Password Strength & Entropy', number: 'MODULE 07', summary: 'Understand password complexity parameters, Shannon entropy metrics, and brute-force timelines.' },
        { id: '08', title: 'Session & Authenticator Hygiene', number: 'MODULE 08', summary: 'Mitigate session hijacking, secure HTTP cookies, and implement token expiration.' },
        { id: '09', title: 'Web Injection & Client Headers', number: 'MODULE 09', summary: 'Analyze cross-site scripting (XSS), SQL injection pathways, and security response headers.' }
      ];

      for (const m of modules) {
        if (!progress[m.id] || !progress[m.id].completed) {
          return m;
        }
      }
      return null; // All completed
    },

    initModulesProgress() {
      const progress = this.getProgress();
      const cards = document.querySelectorAll('.module-card');
      cards.forEach(card => {
        const idAttr = card.getAttribute('id'); // e.g. "module-1"
        if (!idAttr) return;
        const num = idAttr.split('-')[1];
        const normalizedId = num.padStart(2, '0');

        // Remove existing completed badges if any (to avoid duplicates on dynamic markComplete)
        const existingBadge = card.querySelector('.module-completed-badge');
        if (existingBadge) {
          existingBadge.remove();
        }

        if (progress[normalizedId] && progress[normalizedId].completed) {
          const header = card.querySelector('.module-card__header');
          if (header) {
            const badge = document.createElement('span');
            badge.className = 'badge badge--green module-completed-badge';
            badge.textContent = '✓ Completed';
            header.appendChild(badge);
          }
        }
      });
    },

    initDashboardProgress() {
      const container = document.getElementById('continue-learning-section');
      if (!container) return;

      const progress = this.getProgress();
      let completedCount = 0;
      for (const id in progress) {
        if (progress[id] && progress[id].completed) {
          completedCount++;
        }
      }

      // Hide card for first-time visitors with zero progress to avoid clutter
      if (completedCount === 0) {
        container.style.display = 'none';
        return;
      }

      container.style.display = '';
      const rec = this.getRecommendedModule();
      container.innerHTML = '';

      if (rec) {
        container.className = 'continue-learning-bar';
        container.innerHTML = `
          <div class="continue-learning-container">
            <div class="continue-learning-info">
              <span class="badge badge--gradient" style="align-self: flex-start;">RECOMMENDED PATH</span>
              <h3 class="continue-learning-title">Continue: ${rec.number} — ${rec.title}</h3>
              <p class="continue-learning-summary">${rec.summary}</p>
            </div>
            <div class="continue-learning-action">
              <a href="module-detail.html?id=${rec.id}" class="btn btn--primary btn--sm">Continue Learning →</a>
            </div>
          </div>
        `;
      } else {
        container.className = 'continue-learning-bar';
        container.innerHTML = `
          <div class="continue-learning-container">
            <div class="continue-learning-info">
              <span class="badge badge--green" style="align-self: flex-start;">✓ ALL COMPLETED</span>
              <h3 class="continue-learning-title">Congratulations! You've completed all modules.</h3>
              <p class="continue-learning-summary">Head over to Cyber Labs or Interactive Simulations to put your security skills to the test.</p>
            </div>
            <div class="continue-learning-action">
              <a href="games.html" class="btn btn--primary btn--sm">Try Simulations</a>
            </div>
          </div>
        `;
      }
    }
  };

  window.CyberOpsProgress = Progress;

  // Run on DOM loaded
  function initProgress() {
    const path = window.location.pathname;
    if (path.includes('modules.html')) {
      Progress.initModulesProgress();
    } else if (path.includes('index.html') || path.endsWith('/') || path === '') {
      Progress.initDashboardProgress();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProgress);
  } else {
    initProgress();
  }
})();
