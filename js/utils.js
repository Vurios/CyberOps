/* ============================================================
   UTILS — Shared DOM Helpers & Typing Effect
   ============================================================ */

/**
 * Shorthand querySelector
 * @param {string} sel - CSS selector
 * @param {Element} [ctx=document] - Context element
 * @returns {Element|null}
 */
function $(sel, ctx = document) {
  return ctx.querySelector(sel);
}

/**
 * Shorthand querySelectorAll as Array
 * @param {string} sel - CSS selector
 * @param {Element} [ctx=document] - Context element
 * @returns {Element[]}
 */
function $$(sel, ctx = document) {
  return [...ctx.querySelectorAll(sel)];
}

/**
 * Create an element with optional classes and attributes
 * @param {string} tag
 * @param {Object} [opts]
 * @param {string|string[]} [opts.cls]
 * @param {Object} [opts.attrs]
 * @param {string} [opts.text]
 * @param {string} [opts.html]
 * @returns {HTMLElement}
 */
function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.cls) {
    const classes = Array.isArray(opts.cls) ? opts.cls : [opts.cls];
    node.classList.add(...classes);
  }
  if (opts.attrs) {
    for (const [k, v] of Object.entries(opts.attrs)) {
      node.setAttribute(k, v);
    }
  }
  if (opts.text) node.textContent = opts.text;
  if (opts.html) node.innerHTML = opts.html;
  return node;
}

/**
 * Typing effect — append text character-by-character to an element
 * @param {HTMLElement} target - Container to append text into
 * @param {string} text - Text to type
 * @param {number} [speed=12] - Milliseconds per character
 * @returns {Promise<void>}
 */
function typeText(target, text, speed = 12) {
  return new Promise((resolve) => {
    let i = 0;
    const span = document.createElement('span');
    target.appendChild(span);
    const interval = setInterval(() => {
      if (i < text.length) {
        span.textContent += text[i];
        i++;
        // Auto-scroll parent
        if (target.parentElement) {
          target.parentElement.scrollTop = target.parentElement.scrollHeight;
        }
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

/**
 * Append a fully-formed line to a terminal body instantly
 * @param {HTMLElement} target
 * @param {string} text
 * @param {string} [cls='']
 */
function appendLine(target, text, cls = '') {
  const div = el('div', { cls: cls || 'terminal__line', text });
  target.appendChild(div);
  target.scrollTop = target.scrollHeight;
}

/**
 * Delay helper
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Generate a random integer between min and max (inclusive)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format a number with commas
 * @param {number} n
 * @returns {string}
 */
function fmtNum(n) {
  if (n >= 1e18) return '> 10¹⁸ years';
  if (n >= 1e15) return `~${(n / 1e15).toFixed(1)} quadrillion yrs`;
  if (n >= 1e12) return `~${(n / 1e12).toFixed(1)} trillion yrs`;
  if (n >= 1e9) return `~${(n / 1e9).toFixed(1)} billion yrs`;
  if (n >= 1e6) return `~${(n / 1e6).toFixed(1)} million yrs`;
  if (n >= 1e3) return `~${(n / 1e3).toFixed(1)} thousand yrs`;
  if (n >= 1) return `~${n.toFixed(1)} yrs`;
  if (n >= 1 / 12) return `~${(n * 12).toFixed(1)} months`;
  if (n >= 1 / 365) return `~${(n * 365).toFixed(1)} days`;
  if (n >= 1 / 8760) return `~${(n * 8760).toFixed(1)} hours`;
  if (n >= 1 / 525600) return `~${(n * 525600).toFixed(1)} minutes`;
  return '< 1 second';
}

/**
 * Get current timestamp string for log feed
 * @returns {string}
 */
function timestamp() {
  const d = new Date();
  return d.toISOString().slice(11, 19);
}

/**
 * Show a unified auto-dismissing feedback toast notification
 * @param {boolean} isCorrect - Whether it's a correct/success alert
 * @param {string} message - Message to display
 */
function showFeedbackToast(isCorrect, message) {
  const existing = document.querySelector('.phishing-feedback');
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement('div');
  toast.className = `phishing-feedback ${isCorrect ? 'phishing-feedback--correct' : 'phishing-feedback--wrong'}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Force reflow for CSS transition
  toast.offsetHeight;
  toast.classList.add('is-visible');

  setTimeout(() => {
    toast.classList.remove('is-visible');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

