/**
 * Vercel Serverless Function — POST /api/chat
 *
 * Calls the Gemini API directly via HTTP and streams the response
 * securely without needing any npm package dependencies.
 */

const GEMINI_MODEL = 'gemini-3.1-flash-lite';
const MAX_MESSAGE_LENGTH = 1000;

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

export default async function handler(req, res) {
  // ── Method guard ──────────────────────────────────────────────────────────
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  let message;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    message = body?.message;
  } catch {
    res.status(400).json({ error: 'Invalid JSON body.' });
    return;
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    res.status(400).json({ error: 'Message cannot be empty.' });
    return;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    res.status(400).json({ error: `Message exceeds the ${MAX_MESSAGE_LENGTH}-character limit.` });
    return;
  }

  // Ensure the server-side API key exists
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'GEMINI_API_KEY is not configured on Vercel.' });
    return;
  }

  // ── Stream response headers ───────────────────────────────────────────────
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.status(200);

  // ── Call Gemini REST API directly ─────────────────────────────────────────
  try {
    // We use ?alt=sse so Gemini returns clean, easy-to-parse Server-Sent Events
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents: [{ role: 'user', parts: [{ text: message.trim() }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');

      // Save the last potentially incomplete line back to the buffer
      buffer = lines.pop() || '';

      for (const line of lines) {
        const cleanedLine = line.trim();
        if (cleanedLine.startsWith('data:')) {
          try {
            const jsonStr = cleanedLine.slice(5).trim();
            const data = JSON.parse(jsonStr);
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              res.write(text); // Stream the chunk directly to the frontend
            }
          } catch (e) {
            // Ignore incomplete line chunks
          }
        }
      }
    }
  } catch (err) {
    console.error('Serverless stream error:', err.message);
    res.write('\n[ERROR: SENTINEL is temporarily offline. Please try again later.]');
  }

  res.end();
}