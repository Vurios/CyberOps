(function () {
  'use strict';

  /* ── App Permissions Data ───────────────────────────────────── */
  const APPS = [
    {
      id: 1,
      name: 'SuperFlash Flashlight',
      category: 'Utility',
      icon: '🔦',
      permissions: [
        { name: 'Camera & Flashlight LED', description: 'Access flashlight control APIs to toggle the camera flash.', excessive: false },
        { name: 'Access Contacts list', description: 'Read and query your contacts and address book.', excessive: true },
        { name: 'Send and Read SMS messages', description: 'Allow app to send and receive text messages.', excessive: true }
      ]
    },
    {
      id: 2,
      name: 'QuickCalc Calculator',
      category: 'Finance / Math',
      icon: '🧮',
      permissions: [
        { name: 'Local CPU Processing', description: 'Core access to run mathematical calculations.', excessive: false },
        { name: 'Precise GPS Location', description: 'Read precise latitude and longitude from device GPS.', excessive: true },
        { name: 'Access device Microphone', description: 'Listen and capture audio input from device.', excessive: true }
      ]
    },
    {
      id: 3,
      name: 'RunTracker GPS Sport',
      category: 'Health & Fitness',
      icon: '🏃',
      permissions: [
        { name: 'Access Location in Background', description: 'Query GPS coordinates to map active running routes.', excessive: false },
        { name: 'Read & Write Local Storage', description: 'Save run histories and export track logs.', excessive: false },
        { name: 'Access Phone Call logs', description: 'Query log of incoming, outgoing, and missed phone calls.', excessive: true }
      ]
    },
    {
      id: 4,
      name: 'BubblePopper Puzzle Game',
      category: 'Entertainment',
      icon: '🎈',
      permissions: [
        { name: 'Display overlays', description: 'Draw UI components over other active applications.', excessive: false },
        { name: 'Device Administrator Access', description: 'Grant complete low-level administrative control over the OS.', excessive: true },
        { name: 'Query Contacts list', description: 'Access contact records to search for social friends.', excessive: true }
      ]
    }
  ];

  /* ── State ─────────────────────────────────────────────────── */
  const state = {
    selectedId: 1,
    correct: 0,
    incorrect: 0,
    completed: {}, // appId -> { submitted: true, flags: [indices] }
    tempFlags: {} // appId -> [indices of flagged permissions]
  };

  /* ── Init ──────────────────────────────────────────────────── */
  function initPermissionAuditor() {
    const container = document.getElementById('permission-container');
    if (!container) return;

    // Reset All button in header
    const header = document.querySelector('#permission-auditor-sim .game-section__header');
    if (header && !document.getElementById('perm-btn-reset-all')) {
      const resetBtn = document.createElement('button');
      resetBtn.id = 'perm-btn-reset-all';
      resetBtn.className = 'btn-reset-email';
      resetBtn.style.marginLeft = 'auto';
      resetBtn.innerHTML = '↺ Reset All';
      resetBtn.addEventListener('click', resetAll);
      header.appendChild(resetBtn);
    }

    renderAppList();
    updateScore();
  }

  function resetAll() {
    state.correct = 0;
    state.incorrect = 0;
    state.completed = {};
    state.tempFlags = {};
    renderAppList();
    updateScore();
  }

  function renderAppList() {
    const list = document.getElementById('perm-app-list');
    if (!list) return;

    list.innerHTML = '';

    APPS.forEach((app) => {
      const item = document.createElement('div');
      item.className = 'inbox-item';
      if (app.id === state.selectedId) {
        item.classList.add('inbox-item--active');
      }

      const comp = state.completed[app.id];
      let statusBadge = '';
      if (comp) {
        statusBadge = comp.isCorrect
          ? '<span class="status-dot status-dot--green" title="Audit Correct"></span>'
          : '<span class="status-dot status-dot--red" title="Audit Flawed"></span>';
      } else {
        statusBadge = '<span class="status-dot status-dot--blue" title="Pending Audit"></span>';
      }

      item.innerHTML = `
        <div class="inbox-item__meta">
          ${statusBadge}
          <span class="inbox-item__sender">${app.category}</span>
        </div>
        <div class="inbox-item__subject">${app.icon} ${app.name}</div>
      `;

      item.addEventListener('click', () => {
        state.selectedId = app.id;
        renderAppList();
      });

      list.appendChild(item);
    });

    renderViewer();
  }

  function renderViewer() {
    const viewer = document.getElementById('perm-viewer');
    if (!viewer) return;

    const app = APPS.find((a) => a.id === state.selectedId);
    if (!app) {
      viewer.innerHTML = '<div class="email-viewer__empty">Select an application to audit</div>';
      return;
    }

    const comp = state.completed[app.id];
    const isSubmitted = comp && comp.submitted;

    if (!state.tempFlags[app.id]) {
      state.tempFlags[app.id] = [];
    }

    let permListHtml = '';
    app.permissions.forEach((perm, idx) => {
      const isFlagged = state.tempFlags[app.id].includes(idx);
      const flagClass = isFlagged ? 'active' : '';
      
      let revealFeedbackHtml = '';
      if (isSubmitted) {
        const wasExcessive = perm.excessive;
        const wasFlagged = comp.flags.includes(idx);
        
        let statusText = '';
        let statusCls = '';
        if (wasExcessive && wasFlagged) {
          statusText = '✓ Correctly Flagged';
          statusCls = 'text-green';
        } else if (wasExcessive && !wasFlagged) {
          statusText = '✗ Missed Vulnerability';
          statusCls = 'text-red';
        } else if (!wasExcessive && wasFlagged) {
          statusText = '✗ False Positive (Needed)';
          statusCls = 'text-red';
        } else {
          statusText = '✓ Correctly Left Clean';
          statusCls = 'text-green';
        }

        revealFeedbackHtml = `
          <div class="perm-feedback ${statusCls}">
            <strong>${statusText}:</strong> ${perm.excessive ? 'This permission is excessive for this category.' : 'This permission is legitimately required for the core app functions.'}
          </div>
        `;
      }

      permListHtml += `
        <div class="perm-row">
          <div class="perm-row__info">
            <span class="perm-row__name">${perm.name}</span>
            <span class="perm-row__desc">${perm.description}</span>
          </div>
          <button type="button" class="btn btn--secondary btn--xs perm-toggle-btn ${flagClass}" data-idx="${idx}" ${isSubmitted ? 'disabled' : ''}>
            ${isFlagged ? '🚩 Flagged' : 'Flag Suspicious'}
          </button>
          ${revealFeedbackHtml}
        </div>
      `;
    });

    let verdictHtml = '';
    if (isSubmitted) {
      verdictHtml = `
        <div class="verdict-bar verdict-bar--${comp.isCorrect ? 'correct' : 'wrong'}">
          <span class="verdict-bar__icon">${comp.isCorrect ? '✓' : '✗'}</span>
          <span class="verdict-bar__text">
            <strong>${comp.isCorrect ? 'Audit Successful' : 'Audit Failed'}:</strong> Review the app permissions audit details below.
          </span>
        </div>
      `;
    }

    viewer.innerHTML = `
      <div class="email-viewer__header">
        <h3 class="email-viewer__subject">${app.icon} ${app.name}</h3>
        <div class="email-viewer__meta">
          <div><span class="email-viewer__meta-label">App Category:</span> <span class="email-viewer__meta-val">${app.category}</span></div>
          <div><span class="email-viewer__meta-label">Audit Status:</span> <span class="email-viewer__meta-val">${isSubmitted ? 'AUDITED' : 'PENDING ACTION'}</span></div>
        </div>
      </div>
      <div class="email-viewer__body">
        <p class="text-xs mb-4">Click "Flag Suspicious" next to any permissions that appear excessive or unsafe for an app in this category. Leave standard/reasonable permissions clean.</p>
        <div class="permissions-list-container">
          ${permListHtml}
        </div>
        ${verdictHtml}
      </div>
      <div class="email-viewer__actions">
        <button type="button" id="perm-btn-submit" class="btn-mark-safe" ${isSubmitted ? 'disabled' : ''}>🚩 Submit Permission Audit</button>
      </div>
    `;

    // Bind toggles
    $$('.perm-toggle-btn', viewer).forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-idx'), 10);
        const flaggedList = state.tempFlags[app.id];
        const existIdx = flaggedList.indexOf(idx);
        if (existIdx === -1) {
          flaggedList.push(idx);
        } else {
          flaggedList.splice(existIdx, 1);
        }
        renderViewer();
      });
    });

    const btnSubmit = document.getElementById('perm-btn-submit');
    if (btnSubmit) {
      btnSubmit.addEventListener('click', () => {
        submitAudit(app.id);
      });
    }
  }

  function submitAudit(appId) {
    const app = APPS.find((a) => a.id === appId);
    if (!app) return;

    if (state.completed[appId]) return;

    const userFlags = state.tempFlags[appId] || [];
    
    // Check if user flagged all excessive and did not flag any non-excessive
    let isCorrect = true;
    app.permissions.forEach((perm, idx) => {
      const wasFlagged = userFlags.includes(idx);
      if (perm.excessive !== wasFlagged) {
        isCorrect = false;
      }
    });

    state.completed[appId] = {
      submitted: true,
      flags: [...userFlags],
      isCorrect: isCorrect
    };

    if (isCorrect) {
      state.correct++;
    } else {
      state.incorrect++;
    }

    renderAppList();
    updateScore();
  }

  function updateScore() {
    const accEl = document.getElementById('perm-accuracy');
    const scoreEl = document.getElementById('perm-score');

    const totalAnswered = state.correct + state.incorrect;
    const accuracy = totalAnswered > 0 ? Math.round((state.correct / totalAnswered) * 100) : 100;

    if (accEl) {
      accEl.textContent = `${accuracy}%`;
      if (accuracy >= 80) {
        accEl.className = 'phishing-score__value text-green';
      } else if (accuracy >= 50) {
        accEl.className = 'phishing-score__value text-amber';
      } else {
        accEl.className = 'phishing-score__value text-red';
      }
    }

    if (scoreEl) {
      scoreEl.textContent = `${state.correct}/${APPS.length}`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPermissionAuditor);
  } else {
    initPermissionAuditor();
  }
})();
