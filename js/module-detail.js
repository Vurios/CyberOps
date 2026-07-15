(function () {
  /* ============================================================
     MODULE DETAIL PAGE CONTROLLER
     Performs template rendering, quiz states, and interactive sandboxes.
     ============================================================ */

  // 1. Parse module ID from URL
  function getModuleId() {
    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    if (!id) return "01";
    // Normalize single digits (e.g., "1" -> "01")
    if (id.length === 1) id = "0" + id;
    return id;
  }

  // 2. Fetch and render module details
  function initModuleDetail() {
    const id = getModuleId();
    const module = window.MODULE_DATA.find(m => m.id === id);

    if (!module) {
      document.title = "CyberOps — Module Not Found";
      const main = $('.main-content');
      if (main) {
        main.innerHTML = `<div class="detail-container mt-8"><h2 class="text-red">Error: Module ${id} not found.</h2><p><a href="modules.html">Return to Curriculum Grid</a></p></div>`;
      }
      return;
    }

    // Set page title
    document.title = `CyberOps — ${module.number}: ${module.title}`;

    // Populate header
    const iconContainer = $('#detail-header-icon');
    const numContainer = $('#detail-header-num');
    const categoryContainer = $('#detail-header-category');
    const titleContainer = $('#detail-header-title');
    const summaryContainer = $('#detail-header-summary');

    if (iconContainer) iconContainer.innerHTML = module.icon;
    if (numContainer) numContainer.textContent = module.number;
    if (categoryContainer) categoryContainer.innerHTML = `${module.category} &bull; ${module.badge}`;
    if (titleContainer) titleContainer.textContent = module.title;
    if (summaryContainer) summaryContainer.textContent = module.summary;

    // Populate main sections
    const explanationContainer = $('#detail-explanation');
    const biggerPictureContainer = $('#detail-bigger-picture');
    const secondaryBreakdownContainer = $('#detail-secondary-breakdown');
    const caseStudyContainer = $('#detail-case-study');
    const interactiveTitleContainer = $('#detail-interactive-title');
    const interactiveContainer = $('#detail-interactive-container');

    if (explanationContainer) explanationContainer.innerHTML = module.explanation;
    if (biggerPictureContainer) biggerPictureContainer.innerHTML = module.biggerPicture;
    if (secondaryBreakdownContainer) secondaryBreakdownContainer.innerHTML = module.secondaryBreakdown;
    if (caseStudyContainer) caseStudyContainer.innerHTML = module.realWorldExample;
    if (interactiveTitleContainer) interactiveTitleContainer.textContent = module.interactiveTitle;
    if (interactiveContainer) interactiveContainer.innerHTML = module.interactiveHtml;

    // Populate Prev/Next navigation
    setupSequentialNav(id);

    // Initialize Quiz
    setupQuiz(module.quiz);

    // Initialize Interactive Sandbox
    setupInteractiveSandbox(id, module);

    // Initialize in-page navigation highlight
    initTOCActiveHighlight();
  }

  // 3. Set up bottom Prev/Next links
  function setupSequentialNav(currentId) {
    const curIdx = window.MODULE_DATA.findIndex(m => m.id === currentId);
    const prevLink = $('#seq-prev-link');
    const nextLink = $('#seq-next-link');
    const prevTitle = $('#seq-prev-title');
    const nextTitle = $('#seq-next-title');

    // Prev Navigation
    if (curIdx > 0) {
      const prevModule = window.MODULE_DATA[curIdx - 1];
      if (prevLink) {
        prevLink.classList.remove('hidden-element');
        prevLink.href = `module-detail.html?id=${prevModule.id}`;
      }
      if (prevTitle) prevTitle.textContent = prevModule.title;
    } else {
      if (prevLink) {
        prevLink.classList.add('hidden-element');
      }
    }

    // Next Navigation
    if (curIdx < window.MODULE_DATA.length - 1) {
      const nextModule = window.MODULE_DATA[curIdx + 1];
      if (nextLink) {
        nextLink.classList.remove('hidden-element');
        nextLink.href = `module-detail.html?id=${nextModule.id}`;
      }
      if (nextTitle) nextTitle.textContent = nextModule.title;
    } else {
      if (nextLink) {
        nextLink.classList.add('hidden-element');
      }
    }
  }

  // 4. Upgraded Quiz System
  function setupQuiz(quizData) {
    let curQ = 0;
    const progressFill = $('#quiz-progress');
    const qNum = $('#quiz-q-num');
    const qText = $('#quiz-q-text');
    const optionsContainer = $('#quiz-options-container');
    const feedback = $('#quiz-feedback');
    const prevBtn = $('#quiz-prev-btn');
    const nextBtn = $('#quiz-next-btn');

    if (!qText || !optionsContainer) return;

    function renderQuestion() {
      const q = quizData[curQ];
      qNum.textContent = `Question ${curQ + 1} of ${quizData.length}`;
      qText.textContent = q.question;
      optionsContainer.innerHTML = '';
      feedback.className = 'feedback-message hidden-element';

      // Update progress bar
      const progressPct = ((curQ + 1) / quizData.length) * 100;
      progressFill.style.width = `${progressPct}%`;

      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn--secondary btn--sm w-100 mb-2 text-left quiz-opt-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => {
          // Highlight active option
          $$('.quiz-opt-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Trim redundant prefix if present in the data source copy
          let feedbackText = opt.feedback || '';
          if (feedbackText.startsWith('Incorrect. ')) {
            feedbackText = feedbackText.substring(11);
          } else if (feedbackText.startsWith('Correct! ')) {
            feedbackText = feedbackText.substring(9);
          }

          // Show feedback
          feedback.className = `feedback-message ${opt.correct ? 'feedback-message--success' : 'feedback-message--error'}`;
          feedback.innerHTML = `<strong>${opt.correct ? '✓ Correct!' : '✗ Not quite —'}</strong> ${feedbackText}`;
          feedback.classList.remove('hidden-element');

          // Enable next button since user has answered
          nextBtn.disabled = false;
        });
        optionsContainer.appendChild(btn);
      });

      // Update navigation buttons
      prevBtn.disabled = curQ === 0;
      nextBtn.disabled = true; // Disabled by default until an answer is clicked
      if (curQ === quizData.length - 1) {
        nextBtn.textContent = 'Finish Quiz';
      } else {
        nextBtn.textContent = 'Next Question';
      }
    }

    prevBtn.addEventListener('click', () => {
      if (curQ > 0) {
        curQ--;
        renderQuestion();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (curQ < quizData.length - 1) {
        curQ++;
        renderQuestion();
      } else {
        feedback.className = 'feedback-message feedback-message--success';
        feedback.innerHTML = `<strong>✓ Assessment Completed!</strong> You've successfully finished the knowledge assessment for this module.`;
        feedback.classList.remove('hidden-element');

        // Persist completion state
        if (window.CyberOpsProgress) {
          const moduleId = getModuleId();
          window.CyberOpsProgress.markComplete(moduleId);
        }
      }
    });

    renderQuestion();
  }

  // 5. Upgraded Interactive Sandboxes per Module
  function setupInteractiveSandbox(id, module) {
    if (module.hasGameSimulator && module.simulatorScript) {
      // Dynamically load the games.html-style simulator script
      const script = document.createElement('script');
      script.src = module.simulatorScript;
      document.body.appendChild(script);
      return;
    }

    // Bespoke interactive logic for non-game modules
    switch (id) {
      case "01":
        initClassifierModule1();
        break;
      case "02":
        initStrideAnalyzerModule2();
        break;
      case "03":
        initCipherSandboxModule3();
        break;
      case "04":
        initNetworkSandboxModule4();
        break;
      case "05":
        initChmodBuilderModule5();
        break;
      case "08":
        initCookieAuditorModule8();
        break;
      case "09":
        initSqliSandboxModule9();
        break;
    }
  }

  /* ── MODULE 01: CONTROLS CLASSIFIER ── */
  function initClassifierModule1() {
    const parent = $('#classifier-mod1');
    if (!parent) return;

    const stages = $$('.classifier-stage', parent);
    const feedback = $('.classifier-feedback', parent);
    let score = 0;

    stages.forEach((stage, idx) => {
      const opts = $$('.classifier-opt', stage);
      opts.forEach(btn => {
        btn.addEventListener('click', () => {
          const ans = btn.getAttribute('data-ans');
          const isCorrect = (idx === 0 && ans === 'Physical') ||
            (idx === 1 && ans === 'Technical') ||
            (idx === 2 && ans === 'Administrative');

          if (isCorrect) score++;

          // Display intermediate feedback
          feedback.className = `classifier-feedback feedback-message ${isCorrect ? 'feedback-message--success' : 'feedback-message--error'}`;
          feedback.innerHTML = isCorrect ? `✓ Correct — that fits the category.` : `✗ Not quite — review the three control type definitions and try again.`;
          feedback.classList.remove('hidden-element');

          // Disable buttons in this stage
          opts.forEach(b => b.disabled = true);

          // Advance to next stage after a short delay
          setTimeout(() => {
            stage.classList.add('hidden-element');
            if (idx + 1 < stages.length) {
              stages[idx + 1].classList.remove('hidden-element');
              feedback.classList.add('hidden-element');
            } else {
              // Final stage reached
              feedback.className = 'classifier-feedback feedback-message feedback-message--success';
              feedback.innerHTML = `<strong>✓ Classification Complete!</strong> You correctly classified ${score} out of 3 control groups. Review the framework breakdown above for deeper context.`;
            }
          }, 1500);
        });
      });
    });
  }

  /* ── MODULE 02: STRIDE VECTOR ANALYZER ── */
  function initStrideAnalyzerModule2() {
    const parent = $('#stride-analyzer');
    if (!parent) return;

    const btns = $$('.stride-scenario-btn', parent);
    const details = $('.stride-details-box', parent);
    const name = $('#stride-threat-name', parent);
    const desc = $('#stride-threat-desc', parent);
    const mit = $('#stride-threat-mit', parent);

    const mitigations = {
      "Spoofing": "Deploy strong cryptography multi-factor credentials, API token expiration rules, and HTTP signatures.",
      "Repudiation": "Implement non-repudiation features like unified syslog logs, secure write-only audit trails, and cryptographic signing.",
      "Elevation of Privilege": "Strictly enforce the Principle of Least Privilege (PoLP) and apply thorough server-side input sanitization."
    };

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const threat = btn.getAttribute('data-threat');
        const scenarioDesc = btn.getAttribute('data-desc');

        name.textContent = threat;
        desc.textContent = scenarioDesc;
        mit.textContent = mitigations[threat] || "";

        details.classList.remove('hidden-element');
      });
    });
  }

  /* ── MODULE 03: CAESAR CIPHER SHIFT ── */
  function initCipherSandboxModule3() {
    const parent = $('#cipher-sandbox');
    if (!parent) return;

    const input = $('#cipher-plain', parent);
    const decBtn = $('#cipher-dec', parent);
    const incBtn = $('#cipher-inc', parent);
    const shiftDisplay = $('#cipher-shift-display', parent);
    const resultDisplay = $('#cipher-result-display', parent);
    const cipherMapGrid = $('#cipher-map-grid', parent);

    let shift = 3;

    function encrypt() {
      const text = (input.value || '').toUpperCase();
      let result = '';
      for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else {
          result += text[i];
        }
      }
      resultDisplay.textContent = result || '—';

      // Update interactive aligned alphabet mapping grid
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      const shifted = alphabet.map((ch, idx) => {
        const targetIdx = (idx + shift) % 26;
        return alphabet[targetIdx];
      });

      if (cipherMapGrid) {
        cipherMapGrid.innerHTML = alphabet.map((ch, idx) => `
          <div class="cipher-char-pair">
            <span class="cipher-char-plain">${ch}</span>
            <span class="cipher-char-arrow">&darr;</span>
            <span class="cipher-char-cipher">${shifted[idx]}</span>
          </div>
        `).join("");
      }
    }

    input.addEventListener('input', encrypt);
    decBtn.addEventListener('click', () => {
      shift = (shift - 1 + 26) % 26;
      shiftDisplay.textContent = `Shift Value: ${shift}`;
      encrypt();
    });
    incBtn.addEventListener('click', () => {
      shift = (shift + 1) % 26;
      shiftDisplay.textContent = `Shift Value: ${shift}`;
      encrypt();
    });

    encrypt();
  }

  /* ── MODULE 04: SANDBOX NETWORK CONTROLLER ── */
  function initNetworkSandboxModule4() {
    const parent = $('#network-sandbox');
    if (!parent) return;

    const btns = $$('.network-btn', parent);
    const diag = $('#network-diag-text', parent);
    const secStatus = $('#network-sec-status', parent);
    const descText = $('#network-desc-msg', parent);

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const mode = btn.getAttribute('data-mode');

        if (mode === 'nat') {
          diag.innerHTML = `[VM] ===&gt; (Virtual Router/NAT) ===&gt; [Host Network Card] ===&gt; INTERNET`;
          secStatus.className = "text-accent-amber";
          secStatus.textContent = "Medium Risk (Outbound egress allowed)";
          descText.textContent = "NAT allows the sandboxed virtual machine to establish outbound TCP connections (useful for downloading security packages), but exposes host egress channels if malware tries to connect to Command and Control (C2) servers.";
        } else if (mode === 'hostonly') {
          diag.innerHTML = `[VM] ===&gt; (Virtual Switch) ===&gt; [Host OS Loopback Interface] (BLOCKED)`;
          secStatus.className = "text-accent-green";
          secStatus.textContent = "Secure (Host Loopback Only)";
          descText.textContent = "Host-Only mode shuts down outer network bridges. The virtual machine shares connectivity with the host OS local loopback for debugging but cannot access outer subnets or load internet links.";
        } else if (mode === 'internal') {
          diag.innerHTML = `[VM 1] ===&gt; (Internal Isolated Switch) &lt;=== [VM 2] (NO HOST BRIDGE)`;
          secStatus.className = "text-accent-green";
          secStatus.textContent = "Secure (Isolated Intra-VM subnet)";
          descText.textContent = "Internal network mode restricts nodes strictly to their own virtual switch with zero access to the host or internet. Ideal for simulating client/server exploits inside a sealed multi-VM cage.";
        }
      });
    });
  }

  /* ── MODULE 05: PERMISSIONS CHMOD BUILDER ── */
  function initChmodBuilderModule5() {
    const parent = $('#chmod-sandbox');
    if (!parent) return;

    const checkboxes = $$('.chmod-bit', parent);
    const cmdDisplay = $('#chmod-cmd-display', parent);
    const strDisplay = $('#chmod-str-display', parent);

    function update() {
      let ownerSum = 0;
      let groupSum = 0;
      let othersSum = 0;

      checkboxes.forEach(cb => {
        const cls = cb.closest('.chmod-group').getAttribute('data-class');
        const val = parseInt(cb.value, 10);
        if (cb.checked) {
          if (cls === 'owner') ownerSum += val;
          else if (cls === 'group') groupSum += val;
          else if (cls === 'others') othersSum += val;
        }
      });

      cmdDisplay.textContent = `chmod ${ownerSum}${groupSum}${othersSum} script.sh`;

      // Build symbolic string
      function getSym(val) {
        let r = (val & 4) ? 'r' : '-';
        let w = (val & 2) ? 'w' : '-';
        let x = (val & 1) ? 'x' : '-';
        return r + w + x;
      }
      strDisplay.textContent = getSym(ownerSum) + getSym(groupSum) + getSym(othersSum);
    }

    checkboxes.forEach(cb => cb.addEventListener('change', update));
    update();
  }

  /* ── MODULE 08: COOKIE AUDITOR ── */
  function initCookieAuditorModule8() {
    const parent = $('#cookie-sandbox');
    if (!parent) return;

    const flags = $$('.cookie-flag', parent);
    const headerDisplay = $('#cookie-header-display', parent);
    const auditStatus = $('#cookie-audit-status', parent);
    const auditText = $('#cookie-audit-text', parent);

    function update() {
      let cookieStr = "Set-Cookie: session_id=token_value";
      let isHttp = false;
      let isSec = false;
      let isSite = false;

      flags.forEach(cb => {
        const attr = cb.getAttribute('data-attr');
        if (cb.checked) {
          cookieStr += `; ${attr}`;
          if (attr === 'HttpOnly') isHttp = true;
          if (attr === 'Secure') isSec = true;
          if (attr === 'SameSite=Strict') isSite = true;
        }
      });

      headerDisplay.textContent = cookieStr;

      // Audit logic
      if (!isHttp && !isSec) {
        auditStatus.className = "text-accent-red";
        auditStatus.textContent = "CRITICAL VULNERABILITY";
        auditText.textContent = "Cookie is vulnerable to script theft (XSS) and plaintext network interception (MitM).";
      } else if (!isHttp) {
        auditStatus.className = "text-accent-amber";
        auditStatus.textContent = "MEDIUM VULNERABILITY";
        auditText.textContent = "Session token can be read by rogue client scripts. Add the HttpOnly attribute.";
      } else if (!isSec) {
        auditStatus.className = "text-accent-amber";
        auditStatus.textContent = "MEDIUM VULNERABILITY";
        auditText.textContent = "Token will be transmitted over plaintext HTTP. Add the Secure attribute.";
      } else if (!isSite) {
        auditStatus.className = "text-accent-blue";
        auditStatus.textContent = "LOW HYGIENE WARNING";
        auditText.textContent = "Cookie lacks cross-origin defense. Add SameSite=Strict to mitigate CSRF.";
      } else {
        auditStatus.className = "text-accent-green";
        auditStatus.textContent = "SECURE LOG INTERFACE";
        auditText.textContent = "✓ Session cookie conforms to enterprise security header guidelines.";
      }
    }

    flags.forEach(cb => cb.addEventListener('change', update));
    update();
  }

  /* ── MODULE 09: SQL INJECTION DEFENSE SANDBOX ── */
  function initSqliSandboxModule9() {
    const parent = $('#sqli-sandbox');
    if (!parent) return;

    const btns = $$('.sqli-btn', parent);
    const input = $('#sqli-input', parent);
    const queryText = $('#sqli-query-text', parent);
    const dbResult = $('#sqli-db-result', parent);
    const statusDesc = $('#sqli-status-desc', parent);

    let mode = 'vuln';

    function update() {
      const val = input.value || '';

      if (mode === 'vuln') {
        queryText.textContent = `SELECT * FROM users WHERE username = '${val}';`;
        queryText.className = "mono text-sm text-accent-red";

        // Check if query is bypassed via tautology
        const hasTautology = val.includes("' OR") || val.includes("'or") || val.includes('" OR');
        if (hasTautology) {
          dbResult.textContent = `[ { id: 1, name: 'admin', pwd_hash: '...' }, { id: 2, name: 'user2' } ... ] (AUTHENTICATION BYPASSED)`;
          statusDesc.className = "text-accent-red text-xs mt-2";
          statusDesc.innerHTML = "Vulnerability Exploded: The tautology injected <code>OR '1'='1'</code> forces the database interpreter to return all rows, bypass authentication checks.";
        } else {
          dbResult.textContent = val ? `[ { name: '${val}' } ]` : "[0 rows returned]";
          statusDesc.className = "text-accent-amber text-xs mt-2";
          statusDesc.textContent = "Vulnerability Risk: Input is concatenated directly. Try entering 'admin' OR '1'='1' to bypass auth.";
        }
      } else {
        queryText.textContent = `SELECT * FROM users WHERE username = ?;  [Bound: "${val}"]`;
        queryText.className = "mono text-sm text-accent-green";
        dbResult.textContent = `[0 rows returned] (SAFE)`;
        statusDesc.className = "text-accent-green text-xs mt-2";
        statusDesc.textContent = "Safe implementation: Parameterized statement bounds the user input strictly as a parameter string, neutralizing malicious database operations.";
      }
    }

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mode = btn.getAttribute('data-mode');
        update();
      });
    });

    input.addEventListener('input', update);
    update();
  }

  // 6. Sticky Table of Contents Active Highlighting
  function initTOCActiveHighlight() {
    const tocLinks = $$('.toc-link');
    const sections = [
      $('#detail-overview-section'),
      $('#detail-bigger-picture-section'),
      $('#detail-secondary-breakdown-section'),
      $('#detail-interactive-section')
    ].filter(Boolean);

    if (!tocLinks.length || !sections.length) return;

    function onScroll() {
      let activeId = '';
      const scrollPos = window.scrollY + 160; // Offset for header + TOC bar height

      sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop) {
          activeId = sec.getAttribute('id');
        }
      });

      // Default to first section if at the very top of the page
      if (window.scrollY < 100) {
        activeId = sections[0].getAttribute('id');
      }

      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeId}`) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // initial call
  }

  // Initialize page on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModuleDetail);
  } else {
    initModuleDetail();
  }
})();
