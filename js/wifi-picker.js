(function () {
  'use strict';

  /* ── Wi-Fi Networks Data ────────────────────────────────────── */
  const NETWORKS = [
    {
      id: 1,
      ssid: 'Transit_Airport_Official_Secure',
      security: 'WPA3 (Enterprise)',
      signal: 'Strong',
      verified: true,
      safe: true,
      desc: 'Official secure transit network using modern enterprise encryption and requiring a verified login certificate. Safe to connect.'
    },
    {
      id: 2,
      ssid: 'Free_Airport_WiFi',
      security: 'Open (No Encryption)',
      signal: 'Strong',
      verified: false,
      safe: false,
      desc: 'Unencrypted public hotspot. Anyone on this network can intercept your unencrypted traffic. High risk of data sniffing.'
    },
    {
      id: 3,
      ssid: 'Transit_Airport_Free_WiFi_Oflcial',
      security: 'Open (No Encryption)',
      signal: 'Very Strong',
      verified: false,
      safe: false,
      desc: 'Typo lookalike of the official airport network ("Oflcial" instead of "Official"). This is an evil-twin honeypot designed to capture credentials.'
    },
    {
      id: 4,
      ssid: 'Airport_Lounge_Guest_WPA2',
      security: 'WPA2 (Password Protected)',
      signal: 'Medium',
      verified: false,
      safe: true,
      desc: 'Lounge network requiring a password from the reception desk. Safe to connect for general use.'
    },
    {
      id: 5,
      ssid: 'Starbuck_Guest_Net',
      security: 'Open (No Encryption)',
      signal: 'Weak',
      verified: false,
      safe: false,
      desc: 'Open hotspot mimicking a retail brand. Unsecured and highly untrusted in a transit hub environment.'
    }
  ];

  /* ── State ─────────────────────────────────────────────────── */
  const state = {
    selectedId: 1,
    correct: 0,
    incorrect: 0,
    completed: {}
  };

  /* ── Init ──────────────────────────────────────────────────── */
  function initWifiPicker() {
    const container = document.getElementById('wifi-picker-container');
    if (!container) return;

    // Reset All button in header
    const header = document.querySelector('#wifi-picker-sim .game-section__header');
    if (header && !document.getElementById('wifi-btn-reset-all')) {
      const resetBtn = document.createElement('button');
      resetBtn.id = 'wifi-btn-reset-all';
      resetBtn.className = 'btn-reset-email';
      resetBtn.style.marginLeft = 'auto';
      resetBtn.innerHTML = '↺ Reset All';
      resetBtn.addEventListener('click', resetAll);
      header.appendChild(resetBtn);
    }

    renderNetworkList();
    updateScore();
  }

  function resetAll() {
    state.correct = 0;
    state.incorrect = 0;
    state.completed = {};
    renderNetworkList();
    updateScore();
  }

  function renderNetworkList() {
    const list = document.getElementById('wifi-list');
    if (!list) return;

    list.innerHTML = '';

    NETWORKS.forEach((net) => {
      const item = document.createElement('div');
      item.className = 'inbox-item';
      if (net.id === state.selectedId) {
        item.classList.add('inbox-item--active');
      }

      const comp = state.completed[net.id];
      let statusBadge = '';
      if (comp) {
        statusBadge = comp.isCorrect
          ? '<span class="status-dot status-dot--green" title="Correct Choice"></span>'
          : '<span class="status-dot status-dot--red" title="Incorrect Choice"></span>';
      } else {
        statusBadge = '<span class="status-dot status-dot--blue" title="Untested"></span>';
      }

      const secureIcon = net.security.includes('Open') ? '🔓' : '🔒';
      const shieldBadge = net.verified ? '<span class="badge badge--green" style="font-size: 9px; padding: 1px 4px; margin-left: 6px;">Verified</span>' : '';

      item.innerHTML = `
        <div class="inbox-item__meta">
          ${statusBadge}
          <span class="inbox-item__sender">${secureIcon} ${net.security}</span>
          <span class="inbox-item__date">Signal: ${net.signal}</span>
        </div>
        <div class="inbox-item__subject">${net.ssid} ${shieldBadge}</div>
      `;

      item.addEventListener('click', () => {
        state.selectedId = net.id;
        renderNetworkList();
      });

      list.appendChild(item);
    });

    renderInspector();
  }

  function renderInspector() {
    const inspector = document.getElementById('wifi-inspector');
    if (!inspector) return;

    const net = NETWORKS.find((n) => n.id === state.selectedId);
    if (!net) {
      inspector.innerHTML = '<div class="email-viewer__empty">Select a network to inspect</div>';
      return;
    }

    const comp = state.completed[net.id];
    const isSubmitted = comp && comp.submitted;

    let resultHtml = '';
    if (isSubmitted) {
      const isCorrect = comp.isCorrect;
      resultHtml = `
        <div class="verdict-bar verdict-bar--${isCorrect ? 'correct' : 'wrong'}">
          <span class="verdict-bar__icon">${isCorrect ? '✓' : '✗'}</span>
          <span class="verdict-bar__text">
            <strong>${isCorrect ? 'Safe choice' : 'Risky connection'}:</strong> ${net.desc}
          </span>
        </div>
      `;
    }

    inspector.innerHTML = `
      <div class="email-viewer__header">
        <h3 class="email-viewer__subject">${net.ssid}</h3>
        <div class="email-viewer__meta">
          <div><span class="email-viewer__meta-label">Security Protocol:</span> <span class="email-viewer__meta-val">${net.security}</span></div>
          <div><span class="email-viewer__meta-label">Signal Level:</span> <span class="email-viewer__meta-val">${net.signal}</span></div>
          <div><span class="email-viewer__meta-label">Status:</span> <span class="email-viewer__meta-val">${net.verified ? 'Verified Official' : 'Unverified / Generic'}</span></div>
        </div>
      </div>
      <div class="email-viewer__body">
        <p>This network segment is broadcasting in the immediate area. Connecting to open or unverified Wi-Fi networks exposes your device's raw web requests to local sniffing or interception.</p>
        ${resultHtml}
      </div>
      <div class="email-viewer__actions">
        <button type="button" id="wifi-btn-connect" class="btn-mark-safe" ${isSubmitted ? 'disabled' : ''}>🔌 Connect to Network</button>
      </div>
    `;

    const btnConnect = document.getElementById('wifi-btn-connect');
    if (btnConnect) {
      btnConnect.addEventListener('click', () => {
        submitVerdict(net.id);
      });
    }
  }

  function submitVerdict(netId) {
    const net = NETWORKS.find((n) => n.id === netId);
    if (!net) return;

    if (state.completed[netId]) return;

    const isCorrect = net.safe;
    state.completed[netId] = {
      submitted: true,
      isCorrect: isCorrect
    };

    if (isCorrect) {
      state.correct++;
    } else {
      state.incorrect++;
    }

    renderNetworkList();
    updateScore();
  }

  function updateScore() {
    const accEl = document.getElementById('wifi-accuracy');
    const scoreEl = document.getElementById('wifi-score');

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
      scoreEl.textContent = `${state.correct}/${NETWORKS.length}`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWifiPicker);
  } else {
    initWifiPicker();
  }
})();
