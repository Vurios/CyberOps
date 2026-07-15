import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { GEMINI_API_KEY as CONFIG_API_KEY } from './local-config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  process.loadEnvFile(join(__dirname, '.env'));
} catch (e) {
  // Ignored if .env file is missing
}

const GEMINI_MODEL = 'gemini-3.1-flash-lite';

function getGeminiUrl() {
  const envKey = process.env.GEMINI_API_KEY;
  const apiKey = (envKey && envKey !== 'your_api_key_here') ? envKey : CONFIG_API_KEY;
  return `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;
}

const SYSTEM_INSTRUCTION = `You must keep all responses extremely brief, direct, and concise, limited to a maximum of 2 to 3 short sentences total instead of full paragraphs. You are SENTINEL, a strict Cybersecurity Awareness Assistant for the CyberOps platform.

Your behavior is strictly governed by the following guidelines:

1. STRICT CYBERSECURITY & PLATFORM GUARDRAILS:
- You must ONLY answer questions directly related to cybersecurity, online safety, data privacy, digital threats, or features of this CyberOps website.
- You are fully aligned with our platform's 9 learning modules:
  1) IT Assurance Foundations
  2) Threat Modeling & Risk
  3) Cryptography & PKI
  4) Secure Virtualization & Sandboxing
  5) Linux CLI & Diagnostics
  6) Network Mapping & Nmap
  7) Password Strength & Entropy
  8) Session & Authenticator Hygiene
  9) Web Injection & Client Headers
- You understand our interactive simulations (Nmap Port Scanner, Incident Response Playbook, Hacker Chat Defense, Phishing Sandbox Detector, and Brute-Force Entropy Estimator) and you can guide users toward our indexed professional certifications (CompTIA Security+, Network+, CySA+, PenTest+, A+, Cisco CCNA, (ISC)² SSCP, EC-Council CEH, and OffSec OSCP).
- If a user asks about completely unrelated topics (e.g., cooking recipes, pop culture, general non-security math, or general coding layout questions), you must politely decline to answer, restate your operational purpose as a CyberOps security assistant, and redirect them back to a relevant module, certification page, or lab simulation on our site.

2. AWARENESS & EDUCATION GUIDELINES:
- Break down highly complex technical terms into simple, everyday language suitable for beginners.
- Avoid overwhelming technical jargon unless it is explained immediately after.
- Whenever explaining a digital threat or mechanism, always include a quick, actionable safety or hygiene tip (e.g., enabling multi-factor authentication, verifying HTTPS domain padlocks, or utilizing high-entropy passphrases).

3. FORMATTING & LENGTH CONSTRAINTS:
- Maintain a professional, alert, and educational tone.
- Keep responses extremely short, direct, and concise: answers must be limited to a maximum of 2 to 3 brief sentences total instead of generating paragraphs.`;

const MAX_MESSAGE_LENGTH = 1000;

/**
 * Send a user message to the Gemini API and return SENTINEL's reply.
 * @param {string} message - The user's chat message
 * @returns {Promise<{reply?: string, error?: string}>}
 */
export async function handleChatMessage(message) {
  // ── Validate input ──────────────────────────────────────────
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return { error: 'Message cannot be empty.' };
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return { error: `Message exceeds the ${MAX_MESSAGE_LENGTH}-character limit.` };
  }

  // ── Build request payload ───────────────────────────────────
  const payload = {
    systemInstruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: message.trim() }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  };

  // ── Call Gemini API ─────────────────────────────────────────
  try {
    const res = await fetch(getGeminiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error(`Gemini API error ${res.status}:`, errBody);
      return { error: 'SENTINEL is temporarily unavailable. Please try again shortly.' };
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      console.error('Unexpected Gemini response shape:', JSON.stringify(data));
      return { error: 'Received an empty response. Please try again.' };
    }

    return { reply: reply.trim() };
  } catch (err) {
    console.error('Gemini fetch failed:', err.message);
    return { error: 'Network error — could not reach SENTINEL. Check your connection.' };
  }
}

/**
 * Send a user message to the Gemini API and yield reply chunks in real-time.
 * @param {string} message - The user's chat message
 * @returns {AsyncGenerator<string, void, unknown>}
 */
export async function* handleChatMessageStream(message) {
  // Validate input
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    yield 'Error: Message cannot be empty.';
    return;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    yield `Error: Message exceeds the ${MAX_MESSAGE_LENGTH}-character limit.`;
    return;
  }

  const payload = {
    systemInstruction: {
      parts: [{ text: SYSTEM_INSTRUCTION }]
    },
    contents: [
      {
        role: 'user',
        parts: [{ text: message.trim() }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1024
    }
  };

  const streamUrl = getGeminiUrl().replace(':generateContent', ':streamGenerateContent');

  const res = await fetch(streamUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`Gemini API error ${res.status}:`, errText);
    throw new Error('SENTINEL is temporarily unavailable.');
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Balanced brace incremental JSON parser
      let depth = 0;
      let start = -1;
      for (let i = 0; i < buffer.length; i++) {
        if (buffer[i] === '{') {
          if (depth === 0) start = i;
          depth++;
        } else if (buffer[i] === '}') {
          depth--;
          if (depth === 0 && start !== -1) {
            const objText = buffer.slice(start, i + 1);
            try {
              const obj = JSON.parse(objText);
              const text = obj?.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                yield text;
              }
            } catch (e) {
              // Ignore partial JSON parse errors
            }
            buffer = buffer.slice(i + 1);
            i = -1;
            start = -1;
          }
        }
      }
    }
  } finally {
    reader.releaseLock();
  }
}
