(function () {
  /* ============================================================
     PHISHING SANDBOX THREAT DETECTOR — Game B (Overhauled UI/UX)
     Sleek inbox with hover tooltips and premium feedback alerts
     ============================================================ */

  /* ── Email Data ────────────────────────────────────────────── */
  const EMAILS = [
    {
      id: 1,
      phishing: true,
      sender: 'security-team@amaz0n-support.com',
      senderDisplay: 'Amazon Security Team',
      senderIndicator: 'Lookalike domain spoofing — "amaz0n" uses digit "0" instead of letter "o". Genuine domain is amazon.com.',
      subject: 'URGENT: Your account has been compromised!',
      date: '2026-07-09 14:22',
      body: `
        <p>Dear Customer,</p>
        <p>We detected multiple failed login attempts on your account from an unrecognized IP address. To prevent unauthorized access, we have temporarily locked your account.</p>
        <p>You must verify your identity immediately by clicking the link below:</p>
        <p><span class="phishing-indicator" data-desc="Suspicious URL routing to a fraudulent domain 'amaz0n-security-portal.net'.">https://amaz0n-security-portal.net/login</span></p>
        <p>Failure to complete verification <span class="phishing-indicator" data-desc="Artificial urgency trigger designed to bypass critical thinking.">within 24 hours</span> will result in permanent account suspension and loss of all stored cloud backup assets.</p>
        <p>Best regards,<br>Amazon Support Services</p>
      `,
      attachment: null
    },
    {
      id: 2,
      phishing: true,
      sender: 'hr-department@company-benefits.net',
      senderDisplay: 'HR Department',
      senderIndicator: 'Spoofed HR communication on an external domain "company-benefits.net" instead of your corporate network.',
      subject: 'Action Required: Updated Benefits Enrollment',
      date: '2026-07-07 16:30',
      body: `
        <p>Dear Employee,</p>
        <p>Our records indicate you have not completed your annual benefits enrollment. The enrollment window closes soon.</p>
        <p>To complete your enrollment, please download and fill out the attached form and email it back with your:</p>
        <ul>
          <li>Full <span class="phishing-indicator" data-desc="Credentials Harvesting — requesting highly sensitive personal data over unencrypted email channels.">Social Security Number</span></li>
          <li>Date of Birth</li>
          <li>Bank routing and account numbers for direct deposit</li>
        </ul>
        <p>Return the completed form to this email address by end of business Friday.</p>
        <p>Best regards,<br>Human Resources</p>
      `,
      attachment: {
        name: 'Benefits_Enrollment_Form.pdf.exe',
        desc: 'Double extension (.pdf.exe) concealing a Windows executable malware payload (.exe).'
      }
    },
    {
      id: 3,
      phishing: false,
      sender: 'no-reply@github.com',
      senderDisplay: 'GitHub',
      senderIndicator: null,
      subject: 'Your repository "cyber-tools" received a star',
      date: '2026-07-06 09:12',
      body: `
        <p>Hi user101,</p>
        <p>User <strong>sec-analyst-9</strong> just starred your repository <strong>cyber-tools</strong>.</p>
        <p>You can manage your notification preferences in your Notification Settings.</p>
        <p>Thanks,<br>The GitHub Team</p>
      `,
      attachment: null
    },
    {
      id: 4,
      phishing: false,
      sender: 'noreply@slack.com',
      senderDisplay: 'Slack Notifications',
      senderIndicator: null,
      subject: 'New message in #security-alerts',
      date: '2026-07-05 11:45',
      body: `
        <p>Hello,</p>
        <p>You have one unread notification in the <strong>#security-alerts</strong> Slack channel from <strong>alex-admin</strong>:</p>
        <p class="mono" style="background: var(--bg-surface); padding: 8px; border-left: 2px solid var(--accent-primary);">"Confirmed containment of Module 06 network scanning exercises. Clean logs generated."</p>
        <p>Regards,<br>Slack Workspace Agent</p>
      `,
      attachment: null
    },
    {
      id: 5,
      phishing: true,
      sender: 'it-helpdesk@m1crosoft-support.org',
      senderDisplay: 'Microsoft Support Office',
      senderIndicator: 'Lookalike domain — "m1crosoft" uses digit "1" instead of letter "i".',
      subject: 'Password Expiry Notice — Immediate Action Needed',
      date: '2026-07-04 18:20',
      body: `
        <p>Dear Corporate User,</p>
        <p>Your Active Directory password is scheduled to expire in the next <span class="phishing-indicator" data-desc="Extremely short expiry window to force panic decisions and bypass security checks.">12 hours</span>. If you do not update your credentials immediately, you will lose access to Office 365, Teams, and corporate email resources.</p>
        <p>Click below to verify and retain your current password:</p>
        <p><span class="phishing-indicator" data-desc="Fraudulent URL on the spoofed domain 'm1crosoft-support.org'.">https://m1crosoft-support.org/auth/reset</span></p>
        <p>Microsoft Security Team</p>
      `,
      attachment: null
    },
    {
      id: 6,
      phishing: true,
      sender: 'notifications@g00gle-docs-share.com',
      senderDisplay: 'Google Workspace Docs',
      senderIndicator: 'Domain spoofing — "g00gle" with double zero instead of google.com.',
      subject: 'Document Shared with You: "Q3 Corporate Finances"',
      date: '2026-07-03 08:15',
      body: `
        <p>A document has been shared with you via Google Drive:</p>
        <p><strong>"Q3 Corporate Finances & Salary Allocations.xlsx"</strong></p>
        <p>Please open the link to review allocations and verify your group index:</p>
        <p><span class="phishing-indicator" data-desc="URL leads to the fraudulent document portal hosted on 'g00gle-docs-share.com'.">https://g00gle-docs-share.com/drive/view?id=9928</span></p>
        <p>System Admin</p>
      `,
      attachment: null
    },
    {
      id: 7,
      phishing: true,
      sender: 'support@pay-pa1-billing.net',
      senderDisplay: 'PayPal Billing Desk',
      senderIndicator: 'Lookalike domain — "pay-pa1" substitutes letter "l" with digit "1".',
      subject: 'Alert: Subscription Invoice Paid to Apex Vendor',
      date: '2026-07-02 10:05',
      body: `
        <p>You sent a payment of $849.00 USD to Apex Logistics.</p>
        <p>If you did not authorize this transaction, you must dispute the payment immediately to reverse the charge. Call our helpdesk agent or use the link below:</p>
        <p><span class="phishing-indicator" data-desc="URL leads to the fraudulent dispute page on 'pay-pa1-billing.net'.">https://pay-pa1-billing.net/dispute/882</span></p>
        <p>PayPal Help Center</p>
      `,
      attachment: null
    },
    {
      id: 8,
      phishing: false,
      sender: 'alerts@cisa.dhs.gov',
      senderIndicator: null,
      senderDisplay: 'CISA Cyber Alerts',
      subject: 'CISA Releases Security Advisory for OpenSSH Vulnerability',
      date: '2026-07-01 15:30',
      body: `
        <p>CISA has released a security advisory to address a critical remote code execution vulnerability in OpenSSH.</p>
        <p>We advise system administrators to review the security advisory and apply the recommended upgrades to systems running OpenSSH 9.2p1.</p>
        <p>Read the official advisory at cisa.gov/news-events/advisories</p>
        <p>Cybersecurity & Infrastructure Security Agency</p>
      `,
      attachment: null
    },
    {
      id: 9,
      phishing: false,
      sender: 'newsletter@securityweekly.com',
      senderIndicator: null,
      senderDisplay: 'Security Weekly',
      subject: 'Security Weekly Digest: Threat Modeling STRIDE Principles',
      date: '2026-06-30 09:00',
      body: `
        <p>Welcome to this week's newsletter digest!</p>
        <p>In this issue, we dive deep into the STRIDE threat modeling framework, discussing spoofing and repudiation mitigation strategies.</p>
        <p>Read the full article at securityweekly.com/stride-modeling</p>
        <p>Best regards,<br>The Editors</p>
      `,
      attachment: null
    },
    {
      id: 10,
      phishing: true,
      sender: 'alerts@shipping-apex.com',
      senderDisplay: 'Apex Logistics Notifications',
      senderIndicator: 'Unrecognized logistics domain shipping-apex.com. Genuine corporate domain is apex-logistics.com.',
      subject: 'Urgent: Package delivery failed — update details',
      date: '2026-06-29 11:10',
      body: `
        <p>We were unable to deliver your package #APX-99828 due to an incorrect destination address.</p>
        <p>Please update your delivery location details <span class="phishing-indicator" data-desc="Artificial urgency — forces rushed decisions before you can verify.">within 24 hours</span> to prevent the package from being returned to the vendor:</p>
        <p><span class="phishing-indicator" data-desc="URL leads to the fraudulent address update page on 'shipping-apex.com'.">https://shipping-apex.com/delivery/confirm</span></p>
        <p>Apex Logistics Support</p>
      `,
      attachment: null
    }
  ];

  /* ── State ─────────────────────────────────────────────────── */
  const state = {
    selectedEmailId: 1,
    correct: 0,
    incorrect: 0,
    completedEmails: {}
  };

  /* ── Init ──────────────────────────────────────────────────── */
  function initPhishingDetector() {
    const container = document.getElementById('phishing-container');
    if (!container) return;

    // Dynamically insert "Reset All" button in the header
    const header = document.querySelector('#phishing-sim .game-section__header');
    if (header && !document.getElementById('btn-reset-all')) {
      const resetBtn = document.createElement('button');
      resetBtn.id = 'btn-reset-all';
      resetBtn.className = 'btn-reset-email';
      resetBtn.style.marginLeft = 'auto';
      resetBtn.innerHTML = '↺ Reset All';
      resetBtn.addEventListener('click', resetAll);
      header.appendChild(resetBtn);
    }

    renderInbox();
    updateScore();
  }

  function resetAll() {
    state.correct = 0;
    state.incorrect = 0;
    state.completedEmails = {};
    renderInbox();
    updateScore();
  }

  function resetEmail(emailId) {
    const comp = state.completedEmails[emailId];
    if (!comp) return;

    if (comp.isCorrectVerdict) {
      state.correct = Math.max(0, state.correct - 1);
    } else {
      state.incorrect = Math.max(0, state.incorrect - 1);
    }
    delete state.completedEmails[emailId];
    renderInbox();
    updateScore();
  }

  function renderInbox() {
    const list = document.getElementById('inbox-list');
    if (!list) return;

    list.innerHTML = '';

    EMAILS.forEach((email) => {
      const item = document.createElement('div');
      item.className = 'inbox-item';
      if (email.id === state.selectedEmailId) {
        item.classList.add('inbox-item--active');
      }

      const comp = state.completedEmails[email.id];
      let statusBadge = '';
      if (comp) {
        statusBadge = comp.isCorrectVerdict
          ? '<span class="status-dot status-dot--green" title="Correct choice"></span>'
          : '<span class="status-dot status-dot--red" title="Incorrect choice"></span>';
      } else {
        statusBadge = '<span class="status-dot status-dot--blue" title="Unresolved"></span>';
      }

      item.innerHTML = `
        <div class="inbox-item__meta">
          ${statusBadge}
          <span class="inbox-item__sender">${email.senderDisplay}</span>
          <span class="inbox-item__date">${email.date.split(' ')[1]}</span>
        </div>
        <div class="inbox-item__subject">${email.subject}</div>
        <div class="inbox-item__snippet">${email.sender}</div>
      `;

      item.addEventListener('click', () => {
        state.selectedEmailId = email.id;
        renderInbox();
      });

      list.appendChild(item);
    });

    renderEmail();
  }

  /* Helper to format the email body with inline hover tooltips if submitted & phishing */
  function formatEmailBody(body, isSubmitted, isPhishing) {
    const regex = /<span class="phishing-indicator" data-desc="([^"]+)">([^<]+)<\/span>/g;
    if (isSubmitted && isPhishing) {
      return body.replace(regex, (match, desc, text) => {
        return `
          <span class="phishing-revealed-wrapper">
            <span class="phishing-revealed-text is-revealed">${text}</span>
            <span class="phishing-tooltip-bubble">⚠ <strong>Threat Indicator:</strong> ${desc}</span>
          </span>
        `;
      });
    } else {
      return body.replace(regex, '$2');
    }
  }

  function renderEmail() {
    const viewer = document.getElementById('email-viewer');
    if (!viewer) return;

    const email = EMAILS.find((e) => e.id === state.selectedEmailId);
    if (!email) {
      viewer.innerHTML = '<div class="email-viewer__empty">Select an email to audit</div>';
      return;
    }

    const comp = state.completedEmails[email.id];
    const isSubmitted = comp && comp.submitted;

    // Sender details with hover tooltip
    let senderHtml = '';
    if (isSubmitted && email.phishing && email.senderIndicator) {
      senderHtml = `
        ${email.senderDisplay} (
        <span class="phishing-revealed-wrapper">
          <span class="phishing-revealed-text is-revealed">${email.sender}</span>
          <span class="phishing-tooltip-bubble">⚠ <strong>Sender Domain:</strong> ${email.senderIndicator}</span>
        </span>
        )
      `;
    } else {
      senderHtml = `${email.senderDisplay} (${email.sender})`;
    }

    // Build attachment HTML
    let attachmentHtml = '';
    if (email.attachment) {
      const isMalicious = email.phishing && email.attachment.desc;
      const revealClass = (isSubmitted && isMalicious) ? 'is-revealed' : '';
      attachmentHtml = `
        <div class="email-viewer__attachment ${revealClass}">
          <svg class="email-viewer__attachment-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="2"/>
            <path d="M14 2v6h6" stroke="currentColor" stroke-width="2"/>
          </svg>
          <div class="email-viewer__attachment-info">
            <span class="email-viewer__attachment-name">${email.attachment.name}</span>
            <span class="email-viewer__attachment-size">Attachment (520 KB)</span>
          </div>
          ${(isSubmitted && isMalicious) ? `
            <div class="phishing-tooltip-bubble">
              ⚠ <strong>Suspicious Attachment:</strong> ${email.attachment.desc}
            </div>
          ` : ''}
        </div>
      `;
    }

    // Build verdict result bar if submitted
    let verdictHtml = '';
    if (isSubmitted) {
      const isCorrect = comp.isCorrectVerdict;
      const actualType = email.phishing ? 'PHISHING' : 'SAFE';
      verdictHtml = `
        <div class="verdict-bar verdict-bar--${isCorrect ? 'correct' : 'wrong'}">
          <span class="verdict-bar__icon">${isCorrect ? '✓' : '✗'}</span>
          <span class="verdict-bar__text">
            <strong class="verdict-status-text">${isCorrect ? 'Correct' : 'Incorrect'}:</strong> This email is <strong class="verdict-type-text verdict-type-text--${actualType.toLowerCase()}">${actualType}</strong>.
          </span>
          ${email.phishing ? '<span class="verdict-bar__hint">(Hover underlined items to inspect threats)</span>' : ''}
        </div>
      `;
    }

    const formattedBody = formatEmailBody(email.body, isSubmitted, email.phishing);

    viewer.innerHTML = `
      <div class="email-viewer__header">
        <h3 class="email-viewer__subject">${email.subject}</h3>
        <div class="email-viewer__meta">
          <div><span class="email-viewer__meta-label">From:</span> <span class="email-viewer__meta-val">${senderHtml}</span></div>
          <div><span class="email-viewer__meta-label">Date:</span> <span class="email-viewer__meta-val">${email.date}</span></div>
          <div><span class="email-viewer__meta-label">To:</span> <span class="email-viewer__meta-val">you@organization.com</span></div>
        </div>
      </div>
      <div class="email-viewer__body">
        ${formattedBody}
        ${attachmentHtml}
      </div>
      ${verdictHtml}
      <div class="email-viewer__actions">
        <button type="button" id="btn-mark-safe" class="btn-mark-safe" ${isSubmitted ? 'disabled' : ''}>✓ Mark as Safe</button>
        <button type="button" id="btn-report-phish" class="btn-report-phish" ${isSubmitted ? 'disabled' : ''}>🚩 Report Phishing</button>
        ${isSubmitted ? `<button type="button" id="btn-reset-email" class="btn-reset-email" style="margin-left: auto;">↺ Reset Email</button>` : ''}
      </div>
    `;

    // Bind action buttons
    const btnSafe = document.getElementById('btn-mark-safe');
    const btnPhish = document.getElementById('btn-report-phish');
    const btnResetEmail = document.getElementById('btn-reset-email');

    if (btnSafe) {
      btnSafe.addEventListener('click', function () {
        submitVerdict(email.id, 'safe');
      });
    }
    if (btnPhish) {
      btnPhish.addEventListener('click', function () {
        submitVerdict(email.id, 'phishing');
      });
    }
    if (btnResetEmail) {
      btnResetEmail.addEventListener('click', function () {
        resetEmail(email.id);
      });
    }
  }

  function submitVerdict(emailId, verdict) {
    const email = EMAILS.find((e) => e.id === emailId);
    if (!email) return;

    // Prevent double submission
    if (state.completedEmails[emailId] && state.completedEmails[emailId].submitted) return;

    const isCorrectVerdict = (verdict === 'phishing' && email.phishing) || (verdict === 'safe' && !email.phishing);

    state.completedEmails[emailId] = {
      submitted: true,
      verdict: verdict,
      isCorrectVerdict: isCorrectVerdict
    };

    if (isCorrectVerdict) {
      state.correct++;
    } else {
      state.incorrect++;
    }

    renderInbox();
    updateScore();
  }

  function updateScore() {
    const accEl = document.getElementById('phishing-accuracy');
    const flagsEl = document.getElementById('phishing-threats');
    const falseEl = document.getElementById('phishing-fp');

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

    if (flagsEl) {
      flagsEl.textContent = `${state.correct}/${EMAILS.length}`;
    }

    if (falseEl) {
      falseEl.textContent = state.incorrect;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhishingDetector);
  } else {
    initPhishingDetector();
  }
})();
