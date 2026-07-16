(function () {
  /* ============================================================
     CHATBOT — SENTINEL Floating Assistant Widget
     ============================================================ */

  const WELCOME_MESSAGE = 'Welcome to CyberOps. I\'m SENTINEL, your security awareness assistant. Ask me anything about cybersecurity concepts, the learning modules, labs, or certification pathways.';

  const QUICK_REPLIES = [
    'What\'s the difference between hashing and encryption?',
    'How do I create a strong password?',
    'Which module should I start with?',
    'What are the OWASP Top 10?'
  ];

  // ── Shield icon SVG paths ─────────────────────────────────
  const ICON_SHIELD = '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3" stroke-width="1.5"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
  const ICON_SEND = '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
  const ICON_AVATAR = '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';

  let panelOpen = false;
  let firstOpen = true;
  let isWaiting = false;

  // ── DOM refs (set after injection) ────────────────────────
  let toggleBtn, panel, messagesEl, chipsEl, inputEl, sendBtn;

  // ── Inject widget HTML ────────────────────────────────────
  function injectWidget() {
    // Toggle button
    const toggle = document.createElement('button');
    toggle.className = 'chatbot-toggle';
    toggle.setAttribute('aria-label', 'Open SENTINEL assistant');
    toggle.innerHTML = `
      <span class="chatbot-icon-shield">${ICON_SHIELD}</span>
      <span class="chatbot-icon-close">${ICON_CLOSE}</span>
    `;
    document.body.appendChild(toggle);
    toggleBtn = toggle;

    // Panel
    const panelEl = document.createElement('div');
    panelEl.className = 'chatbot-panel';
    panelEl.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-header__avatar">${ICON_AVATAR}</div>
        <div class="chatbot-header__info">
          <span class="chatbot-header__name">Sentinel</span>
          <span class="chatbot-header__status">Online</span>
        </div>
      </div>
      <div class="chatbot-body" id="chatbot-body">
        <div class="chatbot-messages" id="chatbot-messages"></div>
        <div class="chatbot-chips" id="chatbot-chips" style="display: none;"></div>
      </div>
      <div class="chatbot-input-row">
        <textarea class="chatbot-input" id="chatbot-input" placeholder="Ask SENTINEL..." rows="1"></textarea>
        <button class="chatbot-send" id="chatbot-send" aria-label="Send message">${ICON_SEND}</button>
      </div>
    `;
    document.body.appendChild(panelEl);
    panel = panelEl;

    // Cache refs
    messagesEl = document.getElementById('chatbot-messages');
    chipsEl = document.getElementById('chatbot-chips');
    inputEl = document.getElementById('chatbot-input');
    sendBtn = document.getElementById('chatbot-send');
  }

  // ── Event wiring ──────────────────────────────────────────
  function wireEvents() {
    toggleBtn.addEventListener('click', togglePanel);
    sendBtn.addEventListener('click', sendMessage);

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    // Auto-resize textarea
    inputEl.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 80) + 'px';
      scrollToBottom();
    });
  }

  // ── Toggle panel ──────────────────────────────────────────
  function togglePanel() {
    panelOpen = !panelOpen;
    panel.classList.toggle('is-open', panelOpen);
    toggleBtn.classList.toggle('is-open', panelOpen);
    toggleBtn.setAttribute('aria-label', panelOpen ? 'Close SENTINEL assistant' : 'Open SENTINEL assistant');

    if (panelOpen && firstOpen) {
      firstOpen = false;
      addBotMessage(WELCOME_MESSAGE);
      showChips();
    }

    if (panelOpen) {
      inputEl.focus();
    }
  }

  // ── Show quick-reply chips ────────────────────────────────
  function showChips() {
    chipsEl.style.display = 'flex';
    chipsEl.innerHTML = '';
    QUICK_REPLIES.forEach(function (text) {
      var chip = document.createElement('button');
      chip.className = 'chatbot-chip';
      chip.textContent = text;
      chip.addEventListener('click', function () {
        hideChips();
        addUserMessage(text);
        callApi(text);
      });
      chipsEl.appendChild(chip);
    });
  }

  function hideChips() {
    chipsEl.innerHTML = '';
    chipsEl.style.display = 'none';
  }

  // ── Format message text (bold & code elements) ──────────────
  function formatMessageText(text) {
    if (!text) return '';
    // Escape HTML to prevent XSS
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    
    // Convert **bold** to <strong>bold</strong>
    escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert `code` to <code class="mono text-xs">$1</code>
    escaped = escaped.replace(/`(.*?)`/g, '<code class="mono text-xs">$1</code>');
    
    // Convert newlines to <br>
    escaped = escaped.replace(/\n/g, '<br>');
    
    return escaped;
  }

  // ── Add message bubbles ───────────────────────────────────
  function addBotMessage(text) {
    var msg = document.createElement('div');
    msg.className = 'chatbot-msg chatbot-msg--bot';
    msg.innerHTML = formatMessageText(text);
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  function addUserMessage(text) {
    var msg = document.createElement('div');
    msg.className = 'chatbot-msg chatbot-msg--user';
    msg.innerHTML = formatMessageText(text);
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  function addErrorMessage(text) {
    var msg = document.createElement('div');
    msg.className = 'chatbot-msg chatbot-msg--error';
    msg.innerHTML = formatMessageText(text);
    messagesEl.appendChild(msg);
    scrollToBottom();
  }

  // ── Typing indicator ──────────────────────────────────────
  function showTyping() {
    var el = document.createElement('div');
    el.className = 'chatbot-typing';
    el.id = 'chatbot-typing';
    el.innerHTML = '<span class="chatbot-typing__dot"></span><span class="chatbot-typing__dot"></span><span class="chatbot-typing__dot"></span>';
    messagesEl.appendChild(el);
    scrollToBottom();
  }

  function hideTyping() {
    var el = document.getElementById('chatbot-typing');
    if (el) el.remove();
  }

  // ── Send message ──────────────────────────────────────────
  function sendMessage() {
    if (isWaiting) return;

    var text = inputEl.value.trim();
    if (!text) return;

    inputEl.value = '';
    inputEl.style.height = 'auto';
    hideChips();
    addUserMessage(text);
    callApi(text);
  }

  // ── API call & Stream Response ────────────────────────────
  async function callApi(message) {
    isWaiting = true;
    sendBtn.disabled = true;
    showTyping();

    // Create the bot message bubble container (empty)
    const msgEl = document.createElement('div');
    msgEl.className = 'chatbot-msg chatbot-msg--bot';
    
    let accumulatedText = '';

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
      });

      hideTyping();

      if (!res.ok) {
        const errText = await res.text().catch(() => '');
        console.error('SENTINEL API error:', res.status, errText);
        addErrorMessage(`SENTINEL is temporarily unavailable (${res.status}). Please try again.`);
        isWaiting = false;
        sendBtn.disabled = false;
        inputEl.focus();
        return;
      }

      // Append container to messages
      messagesEl.appendChild(msgEl);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulatedText += chunk;
        
        // Render updated accumulated text with formatting
        msgEl.innerHTML = formatMessageText(accumulatedText);
        scrollToBottom();
      }
    } catch (err) {
      hideTyping();
      if (accumulatedText) {
        msgEl.innerHTML += '<br><span style="color: var(--accent-red)">[Stream interrupted]</span>';
      } else {
        addErrorMessage('Could not reach SENTINEL. Make sure the local server is running.');
      }
    }

    isWaiting = false;
    sendBtn.disabled = false;
    inputEl.focus();
  }

  // ── Scroll helper ─────────────────────────────────────────
  function scrollToBottom() {
    requestAnimationFrame(function () {
      const bodyEl = document.getElementById('chatbot-body');
      if (bodyEl) {
        bodyEl.scrollTop = bodyEl.scrollHeight;
      }
    });
  }

  // ── Init ──────────────────────────────────────────────────
  function initChatbot() {
    injectWidget();
    wireEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
