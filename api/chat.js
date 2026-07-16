import { handleChatMessageStream } from '../chat-handler.js';

/**
 * Vercel Serverless Function — POST /api/chat
 *
 * Reads the user's message from the request body, calls the Gemini API
 * using the server-side GEMINI_API_KEY environment variable (never exposed
 * to the browser), and streams the text response back to the client.
 */
export default async function handler(req, res) {
  // ── Method guard ──────────────────────────────────────────────────────────
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  // Vercel pre-parses JSON bodies when Content-Type is application/json.
  // Fall back to manual parsing just in case.
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

  // ── Stream response headers ───────────────────────────────────────────────
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.status(200);

  // ── Stream Gemini response ────────────────────────────────────────────────
  try {
    for await (const chunk of handleChatMessageStream(message.trim())) {
      res.write(chunk);
    }
  } catch (err) {
    console.error('Serverless stream error:', err.message);
    res.write('\n[ERROR: SENTINEL is temporarily offline. Please try again later.]');
  }

  res.end();
}
