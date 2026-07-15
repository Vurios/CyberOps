(function() {
  /* ============================================================
     INCIDENT RESPONSE PLAYBOOK ENGINE — Game B
     Multi-scenario security response engine with live logs and debriefs
     ============================================================ */

  /* ── Scenario Definitions ───────────────────────────────────── */
  const SCENARIOS = {
    ransomware: {
      name: 'Ransomware Containment',
      steps: [
        { id: 1, label: 'Isolate Host interface', okText: '[OK] Host interface isolated. Local network traffic restricted.' },
        { id: 2, label: 'Restrict Backup network', okText: '[OK] Backups isolated. Encryption worm prevented from reaching backup vault.' },
        { id: 3, label: 'Extract Malware signature', okText: '[OK] File hash signature extracted: MD5 e99a1828.' },
        { id: 4, label: 'Submit hash to VirusTotal', okText: '[OK] Signature verified. Containment tools deployed successfully.' }
      ],
      ambientLogs: [
        'Lateral movement attempt blocked at firewall level.',
        'Alert: Windows Volume Shadow Copy deletion command intercepted.',
        'Warning: Mass file modification detected in directory /var/www/shares.'
      ],
      debriefSuccess: '🏆 <strong>DEBRIEF - SUCCESSFUL CONTAINMENT:</strong><br>Executing host isolation first cut off the ransomware\'s lateral transmission channels. Promptly restricting backup network access prevented encryption of offsite archives. The extracted MD5 hash allowed threat intel platforms to verify and neutralize the variant completely.',
      debriefFail: '⚡ <strong>DEBRIEF - INCIDENT FAILURE:</strong><br>Delayed host isolation allowed the ransomware to spread across the production network. Failing to isolate backup systems early resulted in the complete encryption of historical files. This forced the organization into recovery options or paying a ransom due to out-of-order containment.'
    },
    exfiltration: {
      name: 'Insider Data Exfiltration',
      steps: [
        { id: 1, label: 'Trace session logs', okText: '[OK] Anomalous database querying traced to compromised employee credentials.' },
        { id: 2, label: 'Revoke active API tokens', okText: '[OK] Access tokens invalidated. Threat actor blocked from API endpoints.' },
        { id: 3, label: 'Terminate login session', okText: '[OK] Account session force-closed. Attacker kicked off internal console.' },
        { id: 4, label: 'Block malicious egress IP', okText: '[OK] Outbound connection blocked. Data exfiltration pipeline severed.' }
      ],
      ambientLogs: [
        'High volumes of data read from customers_db tables.',
        'Warning: API key used outside regular working hours from unrecognized IP.',
        'Data flow analysis indicates large compressed archives prepared.'
      ],
      debriefSuccess: '🏆 <strong>DEBRIEF - SUCCESSFUL CONTAINMENT:</strong><br>Tracing the logs identified the compromised credentials. Invalidating the API tokens and terminating the login sessions locked the attacker out of the system. Finally, blocking the destination IP prevented the exfiltration of the remaining company files.',
      debriefFail: '⚡ <strong>DEBRIEF - INCIDENT FAILURE:</strong><br>Failure to trace credentials allowed the attacker to continue queries. Terminating the session without revoking API tokens first left an open back-door, resulting in the theft of 10GB of customer databases.'
    },
    bec: {
      name: 'Business Email Compromise (BEC)',
      steps: [
        { id: 1, label: 'Audit inbox forwarding rules', okText: '[OK] Found and deleted malicious rule redirecting mails to external address.' },
        { id: 2, label: 'Revoke account credentials', okText: '[OK] Account password reset. Threat actor locked out of Exchange mail server.' },
        { id: 3, label: 'Terminate sessions & enable MFA', okText: '[OK] Sessions cleared. Multi-factor authentication successfully enforced.' },
        { id: 4, label: 'Alert finance department', okText: '[OK] Alert sent. Payment requests stopped. Verification processes confirmed.' }
      ],
      ambientLogs: [
        'Alert: New inbox rule created on executive mailbox.',
        'Warning: Login detected from hosting provider subnet.',
        'Unusual external forwarding activity detected.'
      ],
      debriefSuccess: '🏆 <strong>DEBRIEF - SUCCESSFUL MITIGATION:</strong><br>Auditing the forwarding rules closed the visibility leak. Revoking credentials and terminating sessions evicted the intruder. Alerting finance immediately secured outbound funds.',
      debriefFail: '⚡ <strong>DEBRIEF - INCIDENT FAILURE:</strong><br>Bypassing credential revocation allowed the attacker to persist. The delay in alerting finance allowed a fraudulent invoice of $45,000 to be paid out.'
    },
    ddos: {
      name: 'DDoS Mitigation',
      steps: [
        { id: 1, label: 'Analyze packet structure', okText: '[OK] Identified massive influx of anomalous UDP/SYN packets.' },
        { id: 2, label: 'Rate-limit network stack', okText: '[OK] Basic threshold limits applied. Prevented CPU exhaustion on routers.' },
        { id: 3, label: 'Apply firewall blocks', okText: '[OK] Malicious source botnet IP subnets dropped at boundary level.' },
        { id: 4, label: 'Route through cloud scrub', okText: '[OK] Web traffic redirected. Scrubbing nodes separating bot traffic from users.' }
      ],
      ambientLogs: [
        'Alert: Inbound bandwidth usage exceeds 850% threshold.',
        'Warning: Connection queue overflow on port 443.',
        'High CPU utilization detected on front-end reverse proxy nodes.'
      ],
      debriefSuccess: '🏆 <strong>DEBRIEF - SUCCESSFUL MITIGATION:</strong><br>Identifying the packet structure confirmed a SYN flood attack. Rate limiting stabilized the network stack, and cloud scrubbing successfully separated botnet packets from legitimate client web connections.',
      debriefFail: '⚡ <strong>DEBRIEF - INCIDENT FAILURE:</strong><br>Failure to analyze the incoming packets meant incorrect firewall rules were applied. Redirection was delayed, causing the main gateway to crash and take the service offline for 4 hours.'
    }
  };

  /* ── State ─────────────────────────────────────────────────── */
  let gameInterval = null;
  let currentStep = 1;
  let corruption = 0;
  let isActive = false;
  let currentScenarioKey = 'ransomware';

  function initIncidentResponse() {
    const startBtn = $('#ir-start-btn');
    const scenarioSelect = $('#ir-scenario-select');

    if (!startBtn) return;

    // Initialize actions container placeholders
    renderScenarioButtons();

    startBtn.addEventListener('click', () => {
      if (isActive) {
        resetGame();
      } else {
        startGame();
      }
    });

    scenarioSelect?.addEventListener('change', (e) => {
      if (isActive) return;
      currentScenarioKey = e.target.value;
      renderScenarioButtons();
    });

    // Initial state: disable step buttons
    setButtonsState(true);
  }

  function renderScenarioButtons() {
    const container = $('#ir-actions-container');
    if (!container) return;

    const scenario = SCENARIOS[currentScenarioKey];
    container.innerHTML = '';

    // We want to randomize the button placement so it is not in the correct sequence!
    const steps = [...scenario.steps];
    
    // Shuffling the steps
    steps.sort(() => Math.random() - 0.5);
    
    steps.forEach((step) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'incident-btn';
      btn.setAttribute('data-step', step.id);
      btn.textContent = step.label;
      btn.disabled = true;

      btn.addEventListener('click', () => {
        if (!isActive) return;
        handleStepClick(step.id, btn);
      });

      container.appendChild(btn);
    });
  }

  function startGame() {
    isActive = true;
    corruption = 0;
    currentStep = 1;
    
    // Prevent changing scenarios during active game
    const scenarioSelect = $('#ir-scenario-select');
    if (scenarioSelect) scenarioSelect.disabled = true;

    setButtonsState(false);
    updateUI();

    const statusEl = $('#ir-status');
    if (statusEl) {
      statusEl.innerHTML = '';
      appendLogLine(`INF - Triage mission active: Neutralize the ${SCENARIOS[currentScenarioKey].name} vector...`, 'text-green');
    }

    const startBtn = $('#ir-start-btn');
    if (startBtn) {
      startBtn.textContent = 'Terminate & Restart';
      startBtn.classList.remove('btn--primary');
      startBtn.classList.add('btn--secondary');
    }

    // Ticker: increment corruption every 200ms (100% in 15 seconds)
    gameInterval = setInterval(() => {
      corruption += 1.33;
      if (corruption >= 100) {
        corruption = 100;
        handleFail();
      }
      
      // Periodically log ambient narrative lines
      if (Math.random() < 0.08 && corruption < 95) {
        const logs = SCENARIOS[currentScenarioKey].ambientLogs;
        const randomLog = logs[Math.floor(Math.random() * logs.length)];
        appendLogLine(`WRN - ${randomLog}`, 'text-amber');
      }
      
      updateUI();
    }, 200);
  }

  function resetGame() {
    clearInterval(gameInterval);
    isActive = false;
    corruption = 0;
    currentStep = 1;
    
    const scenarioSelect = $('#ir-scenario-select');
    if (scenarioSelect) scenarioSelect.disabled = false;

    const startBtn = $('#ir-start-btn');
    if (startBtn) {
      startBtn.textContent = 'Start Triage Mission';
      startBtn.classList.remove('btn--secondary');
      startBtn.classList.add('btn--primary');
    }

    const statusEl = $('#ir-status');
    if (statusEl) {
      statusEl.style.color = '';
      statusEl.innerHTML = '// Incident engine idle. Click Start to initialize.';
    }

    const fill = $('#ir-damage-fill');
    if (fill) fill.style.width = '0%';

    const percentText = $('#ir-damage-percent');
    if (percentText) percentText.textContent = '0%';

    renderScenarioButtons();
  }

  function setButtonsState(disabled) {
    const actionBtns = $$('.incident-btn');
    actionBtns.forEach((btn) => {
      btn.disabled = disabled;
    });
  }

  function handleStepClick(stepId, btn) {
    const scenario = SCENARIOS[currentScenarioKey];
    const stepData = scenario.steps.find((s) => s.id === stepId);

    if (stepId === currentStep) {
      // Correct step
      btn.classList.add('incident-btn--success');
      btn.disabled = true;

      appendLogLine(`ACT - User triggered containment task: ${stepData.label}`);
      
      if (stepData.okText) {
        appendLogLine(stepData.okText, 'text-green');
      }

      if (currentStep === scenario.steps.length) {
        handleSuccess();
        return;
      }
      currentStep++;
    } else {
      // Out of order step - Penalty
      corruption += 15.0;
      if (corruption >= 100) {
        corruption = 100;
        updateUI();
        handleFail();
        return;
      }
      
      // Visual error indication
      btn.classList.add('incident-btn--failed');
      appendLogLine(`ERR - Out of order action: ${stepData.label}. Out-of-order sequence penalty applied (+15% corruption).`, 'text-red');
      
      setTimeout(() => {
        if (isActive && stepId >= currentStep) {
          btn.classList.remove('incident-btn--failed');
        }
      }, 1200);
    }
    updateUI();
  }

  function appendLogLine(text, styleClass = '') {
    const statusEl = $('#ir-status');
    if (!statusEl) return;

    const div = document.createElement('div');
    div.className = `terminal__line ${styleClass}`;
    div.innerHTML = `<span class="text-muted">[${timestamp()}]</span> ${text}`;
    statusEl.appendChild(div);
    statusEl.scrollTop = statusEl.scrollHeight;
  }

  function updateUI() {
    const fill = $('#ir-damage-fill');
    const percentText = $('#ir-damage-percent');

    if (fill) fill.style.width = `${corruption}%`;
    if (percentText) percentText.textContent = `${Math.round(corruption)}%`;
  }

  function handleFail() {
    clearInterval(gameInterval);
    setButtonsState(true);
    isActive = false;

    const statusEl = $('#ir-status');
    if (statusEl) {
      statusEl.style.color = '';
      const scenario = SCENARIOS[currentScenarioKey];
      appendLogLine('⚡ CRITICAL FAILURE: Containment timeline breached.', 'text-red');
      
      const debriefDiv = document.createElement('div');
      debriefDiv.className = 'terminal__line mt-4';
      debriefDiv.style.borderTop = '1px solid rgba(244, 63, 94, 0.3)';
      debriefDiv.style.paddingTop = '10px';
      debriefDiv.innerHTML = scenario.debriefFail;
      statusEl.appendChild(debriefDiv);
      statusEl.scrollTop = statusEl.scrollHeight;
    }

    const startBtn = $('#ir-start-btn');
    if (startBtn) {
      startBtn.textContent = 'Restart Triage';
      startBtn.classList.remove('btn--secondary');
      startBtn.classList.add('btn--primary');
    }
  }

  function handleSuccess() {
    clearInterval(gameInterval);
    setButtonsState(true);
    isActive = false;

    const statusEl = $('#ir-status');
    if (statusEl) {
      statusEl.style.color = '';
      const scenario = SCENARIOS[currentScenarioKey];
      appendLogLine('🏆 MISSION ACCOMPLISHED: Containment successfully completed.', 'text-green');
      
      const debriefDiv = document.createElement('div');
      debriefDiv.className = 'terminal__line mt-4';
      debriefDiv.style.borderTop = '1px solid rgba(34, 197, 94, 0.3)';
      debriefDiv.style.paddingTop = '10px';
      debriefDiv.innerHTML = scenario.debriefSuccess;
      statusEl.appendChild(debriefDiv);
      statusEl.scrollTop = statusEl.scrollHeight;
    }

    const startBtn = $('#ir-start-btn');
    if (startBtn) {
      startBtn.textContent = 'Triage Another Scenario';
      startBtn.classList.remove('btn--secondary');
      startBtn.classList.add('btn--primary');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIncidentResponse);
  } else {
    initIncidentResponse();
  }
})();
