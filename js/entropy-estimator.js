(function() {
  /* ============================================================
     BRUTE-FORCE ENTROPY ESTIMATOR — Game C (Utility)
     Shannon entropy calculation + crack time estimates
     ============================================================ */

  /* ── Character Pool Sizes ──────────────────────────────────── */
  const POOLS = {
    lower: { pattern: /[a-z]/, size: 26, label: 'Lowercase' },
    upper: { pattern: /[A-Z]/, size: 26, label: 'Uppercase' },
    digits: { pattern: /[0-9]/, size: 10, label: 'Digits' },
    special: { pattern: /[^a-zA-Z0-9]/, size: 33, label: 'Special' },
  };

  /* ── Attack Speeds (guesses/second) ────────────────────────── */
  const ATTACK_SPEEDS = {
    wordlist: 1.5e7,       // ~15 million/sec (John + fast hash)
    incremental: 1e9,      // ~1 billion/sec (GPU-accelerated brute force)
  };

  /* ── Common Passwords Check ────────────────────────────────── */
  const COMMON_PASSWORDS = [
    'password', '123456', '12345678', 'qwerty', 'abc123', 'monkey',
    'letmein', 'dragon', 'master', 'admin', 'login', 'welcome',
    'password1', 'iloveyou', 'sunshine', 'princess', 'shadow',
    'trustno1', 'batman', 'football', 'passw0rd', 'hello123',
  ];

  /* ── Init ──────────────────────────────────────────────────── */
  function initEntropyEstimator() {
    const input = $('#entropy-input');
    if (!input) return;

    input.addEventListener('input', () => {
      const pw = input.value;
      analyze(pw);
    });

    function triggerFeedback() {
      const pw = input.value;
      if (!pw) return;

      // Calculate pool size
      let poolSize = 0;
      for (const [key, pool] of Object.entries(POOLS)) {
        if (pool.pattern.test(pw)) {
          poolSize += pool.size;
        }
      }
      const entropy = pw.length * Math.log2(poolSize || 1);
      const isCommon = COMMON_PASSWORDS.includes(pw.toLowerCase());

      // Toast removed per user request
    }

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        triggerFeedback();
      }
    });

    input.addEventListener('blur', () => {
      triggerFeedback();
    });

    // Initial state
    analyze('');
  }

  function analyze(pw) {
    if (!pw || pw.length === 0) {
      updateMeter(0);
      updateLabel(0, '');
      updateStats(0, 0, 0, 0, '—', false);
      return;
    }

    // Calculate character pool size
    let poolSize = 0;
    const usedPools = [];
    for (const [key, pool] of Object.entries(POOLS)) {
      if (pool.pattern.test(pw)) {
        poolSize += pool.size;
        usedPools.push(pool.label);
      }
    }

    // Shannon Entropy
    // H = L * log2(R)
    const len = pw.length;
    const entropy = len * Math.log2(poolSize || 1);

    // Total search space
    const poolCombinations = Math.pow(poolSize, len);

    // Crack times
    const timeWordlist = poolCombinations / ATTACK_SPEEDS.wordlist;
    const timeIncremental = poolCombinations / ATTACK_SPEEDS.incremental;

    // Check if in common password list
    const isCommon = COMMON_PASSWORDS.includes(pw.toLowerCase());

    updateMeter(entropy);
    updateLabel(entropy, pw);
    updateStats(entropy, poolSize, poolCombinations, timeIncremental, timeWordlist, isCommon, usedPools);
  }

  function updateMeter(entropy) {
    // 1. Fill-based meter (module detail page)
    const fill = $('#entropy-fill');
    if (fill) {
      const pct = Math.min(100, (entropy / 80) * 100);
      fill.style.width = `${pct}%`;

      // Colors
      if (entropy < 28) {
        fill.style.background = 'var(--accent-red)';
      } else if (entropy < 56) {
        fill.style.background = 'var(--accent-amber)';
      } else if (entropy < 80) {
        fill.style.background = 'var(--accent-blue)';
      } else {
        fill.style.background = 'var(--accent-green)';
      }
    }

    // 2. Segment-based meter (games page)
    const segs = $$('.entropy-meter__seg');
    if (segs && segs.length > 0) {
      let numActive = 0;
      let activeClass = '';
      if (entropy === 0) {
        numActive = 0;
      } else if (entropy < 28) {
        numActive = 1;
        activeClass = 'is-active-weak';
      } else if (entropy < 45) {
        numActive = 2;
        activeClass = 'is-active-fair';
      } else if (entropy < 65) {
        numActive = 3;
        activeClass = 'is-active-fair';
      } else if (entropy < 80) {
        numActive = 4;
        activeClass = 'is-active-good';
      } else {
        numActive = 5;
        activeClass = 'is-active-strong';
      }

      segs.forEach((seg, idx) => {
        seg.classList.remove('is-active-weak', 'is-active-fair', 'is-active-good', 'is-active-strong');
        if (idx < numActive) {
          seg.classList.add(activeClass);
        }
      });
    }
  }

  function updateLabel(entropy, pw) {
    const label = $('#entropy-strength-label') || $('#entropy-label');
    if (!label) return;

    const isCommon = COMMON_PASSWORDS.includes(pw.toLowerCase());

    if (isCommon) {
      label.textContent = 'CRITICAL (Common Dictionary Password)';
      label.style.color = 'var(--accent-red)';
    } else if (entropy === 0) {
      label.textContent = 'Enter a password to analyze';
      label.style.color = 'var(--text-secondary)';
    } else if (entropy < 28) {
      label.textContent = 'Very Weak (Easily Guessable)';
      label.style.color = 'var(--accent-red)';
    } else if (entropy < 56) {
      label.textContent = 'Weak (Susceptible to GPU Brute Force)';
      label.style.color = 'var(--accent-amber)';
    } else if (entropy < 80) {
      label.textContent = 'Strong (Requires dedicated cracking rig)';
      label.style.color = 'var(--accent-blue)';
    } else {
      label.textContent = 'Excellent (Industry Standard Compliance)';
      label.style.color = 'var(--accent-green)';
    }
  }

  function updateStats(entropy, poolSize, space, timeGpu, timeWord, isCommon, usedPools = []) {
    const entropyVal = $('#stat-entropy-val') || $('#stat-entropy');
    const poolVal = $('#stat-pool-val') || $('#stat-pool');
    const spaceVal = $('#stat-space-val');
    const charsetsVal = $('#stat-charsets');
    const timeGpuVal = $('#stat-time-gpu') || $('#stat-incremental');
    const timeWordVal = $('#stat-time-word') || $('#stat-wordlist');

    if (entropyVal) entropyVal.textContent = entropy === 0 ? '—' : `${entropy.toFixed(1)} bits`;
    if (poolVal) poolVal.textContent = poolSize === 0 ? '—' : `${poolSize} characters`;
    if (spaceVal) {
      spaceVal.textContent = space === 0 ? '—' : space.toExponential(2);
    }
    if (charsetsVal) {
      charsetsVal.textContent = usedPools.length === 0 ? '—' : usedPools.join(', ');
    }

    if (timeGpuVal) {
      if (entropy === 0) {
        timeGpuVal.textContent = '—';
        timeGpuVal.style.color = '';
      } else if (isCommon) {
        timeGpuVal.textContent = '< 0.001 seconds (instant)';
        timeGpuVal.style.color = 'var(--accent-red)';
      } else {
        timeGpuVal.textContent = fmtNum(timeGpu);
        timeGpuVal.style.color = '';
      }
    }

    if (timeWordVal) {
      if (entropy === 0) {
        timeWordVal.textContent = '—';
        timeWordVal.style.color = '';
      } else if (isCommon) {
        timeWordVal.textContent = '< 0.001 seconds (instant)';
        timeWordVal.style.color = 'var(--accent-red)';
      } else {
        timeWordVal.textContent = typeof timeWord === 'string' ? timeWord : fmtNum(timeWord);
        timeWordVal.style.color = '';
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEntropyEstimator);
  } else {
    initEntropyEstimator();
  }
})();
