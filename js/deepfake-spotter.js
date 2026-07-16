(function () {
  'use strict';

  /* ── Deepfake Scenarios Data ────────────────────────────────── */
  const SCENARIOS = [
    {
      id: 1,
      title: 'Grandchild Urgently Calling',
      medium: 'Voicemail Transcribed',
      text: '"Grandma, it is me! I am in trouble. I was in a car accident and the police arrested me. They say I need $2,000 for bail immediately. Please do not call Mom or Dad, they will get so mad. A lawyer is going to call you. Please wire the money right away."',
      scam: true,
      indicators: [
        'High urgency and pressure to act immediately.',
        'Secrecy demand — explicitly begging not to contact parents (to prevent verification).',
        'Request for immediate wire transfer or untraceable payment channels.'
      ],
      explanation: 'This is a classic family emergency scam. Attackers use voice-cloning AI to copy a grandchild\'s voice from a short social media video, then fabricate a crisis to bypass critical thinking.'
    },
    {
      id: 2,
      title: 'Daughter Locked Out',
      medium: 'Phone Call Dialogue',
      text: '"Hey Dad, I am so sorry to call while you are working. I am locked out of the house. Did you leave the spare key under the rock or in the mailbox? Can you check your phone and text me the code for the garage door?"',
      scam: false,
      indicators: [
        'Requests access to her own house/keys (natural context).',
        'No pressure for financial transactions or wire transfers.',
        'Can be easily verified by asking a personal question only she would know.'
      ],
      explanation: 'This is a legitimate request. The request is highly specific to local physical environment, doesn\'t request monetary action, and lacks typical scam pressure tells.'
    },
    {
      id: 3,
      title: 'CEO Gift Card Request',
      medium: 'Text Message',
      text: '"Hi, this is the CEO. I am in a board meeting right now and cannot take calls. I need you to purchase 10 Google Play gift cards of $100 each for a client reward scheme. Send me the codes here as soon as you get them. Treat this as highly confidential."',
      scam: true,
      indicators: [
        'Adversary posing as an authority figure to override standard procedures.',
        'Urgency and confidentiality pressure.',
        'Use of untraceable gift cards as payment method.'
      ],
      explanation: 'This is a typical executive impersonation scam (Business Email / Text Compromise). CEOs do not request employees to buy gift cards via text message, and the demand for secrecy is a major red flag.'
    },
    {
      id: 4,
      title: 'Bank Fraud Video Call',
      medium: 'Video Call Interview',
      text: '"We detected a suspicious charge of $1,200 on your account. I need you to confirm your identity by reading the 6-digit code we just sent to your phone. Additionally, please read out your full card number and CVV so we can block the transaction."',
      scam: true,
      indicators: [
        'Bank asking for a 2FA code (banks will never ask for 2FA verification codes).',
        'Request for card details including full number and CVV over call.',
        'Visual glitches — blurry hairline and unsynced lips suggesting a real-time deepfake video filter.'
      ],
      explanation: 'This is a bank impersonation scam using synthetic voice and real-time deepfake filters. Banks never call to ask for full card numbers, CVVs, or 2FA codes.'
    },
    {
      id: 5,
      title: 'Manager Slack Invite',
      medium: 'Slack Message',
      text: '"Hi team, can we do a quick sync at 3 PM today to go over the Q3 slides before the client demo? I\'ve attached the calendar invite link below. Let me know if you can make it."',
      scam: false,
      indicators: [
        'Standard business meeting request within corporate communication channels.',
        'Context aligns with standard workflow and calendar synchronization.',
        'Calendar link matches internal corporate domain structures.'
      ],
      explanation: 'This is a legitimate workflow communication. Routine business scheduling lacking urgency traps or payment requests is standard.'
    }
  ];

  /* ── State ─────────────────────────────────────────────────── */
  const state = {
    currentIndex: 0,
    correct: 0,
    incorrect: 0,
    completed: {} // index -> { userVerdict: 'scam'/'safe', isCorrect: true }
  };

  /* ── Init ──────────────────────────────────────────────────── */
  function initDeepfakeSpotter() {
    const container = document.getElementById('deepfake-container');
    if (!container) return;

    // Reset All button in header
    const header = document.querySelector('#deepfake-spotter-sim .game-section__header');
    if (header && !document.getElementById('df-btn-reset-all')) {
      const resetBtn = document.createElement('button');
      resetBtn.id = 'df-btn-reset-all';
      resetBtn.className = 'btn-reset-email';
      resetBtn.style.marginLeft = 'auto';
      resetBtn.innerHTML = '↺ Reset All';
      resetBtn.addEventListener('click', resetAll);
      header.appendChild(resetBtn);
    }

    renderScenario();
    updateScore();
  }

  function resetAll() {
    state.currentIndex = 0;
    state.correct = 0;
    state.incorrect = 0;
    state.completed = {};
    renderScenario();
    updateScore();
  }

  function renderScenario() {
    const container = document.getElementById('deepfake-container');
    if (!container) return;

    const s = SCENARIOS[state.currentIndex];
    const comp = state.completed[state.currentIndex];
    const isAnswered = comp !== undefined;

    let indicatorsHtml = '';
    if (isAnswered) {
      s.indicators.forEach(ind => {
        indicatorsHtml += `<li>⚠ ${ind}</li>`;
      });
    }

    let feedbackHtml = '';
    if (isAnswered) {
      const isCorrect = comp.isCorrect;
      const actualType = s.scam ? 'DEEPFAKE SCAM' : 'LEGITIMATE';
      feedbackHtml = `
        <div class="verdict-bar verdict-bar--${isCorrect ? 'correct' : 'wrong'} mt-4">
          <span class="verdict-bar__icon">${isCorrect ? '✓' : '✗'}</span>
          <span class="verdict-bar__text">
            <strong>${isCorrect ? 'Correct' : 'Incorrect'}:</strong> This scenario is actually <strong>${actualType}</strong>.
          </span>
        </div>
        <div class="df-explanation-box mt-4">
          <h4>Vulnerability & Threat Analysis</h4>
          <p>${s.explanation}</p>
          <h4 class="mt-3">Scam Red Flags & Context Analysis:</h4>
          <ul class="df-indicators-list">
            ${indicatorsHtml}
          </ul>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="df-card">
        <div class="df-card__header">
          <span class="badge badge--gradient">${s.medium}</span>
          <h3 class="df-card__title">Challenge ${state.currentIndex + 1} of ${SCENARIOS.length}: ${s.title}</h3>
        </div>
        <div class="df-card__body">
          <div class="df-quote-box">
            <p>${s.text}</p>
          </div>
          ${feedbackHtml}
        </div>
        <div class="df-card__footer">
          <div class="df-actions">
            <button type="button" id="df-btn-scam" class="btn btn--secondary btn--sm btn-df-scam" ${isAnswered ? 'disabled' : ''}>🚩 Deepfake Scam</button>
            <button type="button" id="df-btn-legit" class="btn btn--secondary btn--sm btn-df-legit" ${isAnswered ? 'disabled' : ''}>✓ Legitimate Client</button>
            
            ${isAnswered ? `
              <button type="button" id="df-btn-next" class="btn btn--primary btn--sm" style="margin-left: auto;">
                ${state.currentIndex === SCENARIOS.length - 1 ? 'Finish Simulation' : 'Next Scenario →'}
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    // Bind buttons
    const btnScam = document.getElementById('df-btn-scam');
    const btnLegit = document.getElementById('df-btn-legit');
    const btnNext = document.getElementById('df-btn-next');

    if (btnScam) {
      btnScam.addEventListener('click', () => {
        submitVerdict('scam');
      });
    }
    if (btnLegit) {
      btnLegit.addEventListener('click', () => {
        submitVerdict('legit');
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (state.currentIndex < SCENARIOS.length - 1) {
          state.currentIndex++;
          renderScenario();
        } else {
          // Finished all
          showFeedbackToast(true, 'Deepfake simulation complete! Review your overall accuracy.');
          state.currentIndex = 0; // wrap around or keep screen
          renderScenario();
        }
      });
    }
  }

  function submitVerdict(verdict) {
    if (state.completed[state.currentIndex]) return;

    const s = SCENARIOS[state.currentIndex];
    const isCorrect = (verdict === 'scam' && s.scam) || (verdict === 'legit' && !s.scam);

    state.completed[state.currentIndex] = {
      userVerdict: verdict,
      isCorrect: isCorrect
    };

    if (isCorrect) {
      state.correct++;
      showFeedbackToast(true, 'Correct identification!');
    } else {
      state.incorrect++;
      showFeedbackToast(false, 'Incorrect identification. Review red flags.');
    }

    renderScenario();
    updateScore();
  }

  function updateScore() {
    const accEl = document.getElementById('df-accuracy');
    const scoreEl = document.getElementById('df-score');

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
      scoreEl.textContent = `${state.correct}/${SCENARIOS.length}`;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeepfakeSpotter);
  } else {
    initDeepfakeSpotter();
  }
})();
