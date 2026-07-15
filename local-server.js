import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleChatMessage, handleChatMessageStream } from './chat-handler.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

try {
  process.loadEnvFile(join(__dirname, '.env'));
} catch (e) {
  // Ignored if .env file is missing
}

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const MAX_BODY = 10 * 1024; // 10 KB

// ── MIME type map ─────────────────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.ico':  'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
};

// ── Read full request body ────────────────────────────────────
function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        reject(new Error('Body too large'));
        req.destroy();
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString()));
    req.on('error', reject);
  });
}

// ── Handle API route ──────────────────────────────────────────
async function handleApiChat(req, res) {
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    const raw = await readBody(req);
    const { message } = JSON.parse(raw);

    // Set headers for streaming text content chunk-by-chunk
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Content-Type-Options': 'nosniff'
    });

    try {
      for await (const chunk of handleChatMessageStream(message)) {
        res.write(chunk);
      }
    } catch (streamErr) {
      console.error('Stream error:', streamErr.message);
      res.write('\n[ERROR: SENTINEL is temporarily offline. Please try again later.]');
    }

    res.end();
  } catch (err) {
    console.error('API error:', err.message);
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid request.' }));
  }
}

// ── Serve static files ────────────────────────────────────────
async function serveStatic(req, res) {
  let filePath = req.url === '/' ? '/index.html' : req.url;

  // Strip query strings
  filePath = filePath.split('?')[0];

  // Resolve and jail to project root
  const absPath = resolve(join(__dirname, filePath));
  if (!absPath.startsWith(resolve(__dirname))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const fileStat = await stat(absPath);
    if (fileStat.isDirectory()) {
      // Try index.html inside the directory
      const indexPath = join(absPath, 'index.html');
      const data = await readFile(indexPath);
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
      return;
    }

    const ext = extname(absPath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';
    const data = await readFile(absPath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}

// ── Create server ─────────────────────────────────────────────
const server = createServer(async (req, res) => {
  if (req.url === '/api/chat') {
    await handleApiChat(req, res);
  } else {
    await serveStatic(req, res);
  }
});

// ── Error Handling & Listeners ─────────────────────────────────
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n[ERROR] Port ${PORT} is already in use.`);
    console.error(`Another instance of this server may still be running.`);
    console.error(`Stop the active process first, or run on a different port:`);
    console.error(`  PORT=3001 npm start\n`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});

// ── Graceful Shutdown ─────────────────────────────────────────
function shutdown() {
  console.log('\nShutting down server gracefully...');
  server.close(() => {
    console.log('Server stopped. Port released.');
    process.exit(0);
  });
  
  // Force exit after a small timeout if connections don't close
  setTimeout(() => {
    console.error('Forcing exit after timeout...');
    process.exit(1);
  }, 1000);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(PORT, () => {
  console.log(`\n  ┌──────────────────────────────────────────┐`);
  console.log(`  │  CyberOps local server running           │`);
  console.log(`  │  http://localhost:${PORT}                   │`);
  console.log(`  │  SENTINEL API: POST /api/chat            │`);
  console.log(`  └──────────────────────────────────────────┘\n`);
});
