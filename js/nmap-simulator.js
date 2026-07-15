(function() {
  /* ============================================================
     NMAP PORT SCANNER SIMULATOR — Game A
     Interactive command-line simulation with port analysis
     ============================================================ */

  /* ── Scan Result Data ──────────────────────────────────────── */
  const SCAN_PROFILES = {
    'nmap -sV target.local': {
      header: 'Starting Nmap 7.95 ( https://nmap.org )\nNmap scan report for target.local (10.0.2.15)\nHost is up (0.0023s latency).\nNot shown: 993 closed tcp ports\n\nPORT      STATE    SERVICE        VERSION',
      ports: [
        { port: '22/tcp',   state: 'open',     service: 'ssh',       version: 'OpenSSH 9.2p1', vuln: 'OpenSSH 9.2p1 is susceptible to regreSSHion (CVE-2024-6387) — remote code execution in sshd. Upgrade to 9.8p1 or later. Risk: CRITICAL' },
        { port: '80/tcp',   state: 'open',     service: 'http',      version: 'Apache httpd 2.4.54', vuln: 'Apache 2.4.54 is vulnerable to source code disclosure (CVE-2024-38474) via proxy handler configuration errors. Update to 2.4.60+. Risk: HIGH' },
        { port: '443/tcp',  state: 'open',     service: 'ssl/http',  version: 'nginx 1.22.1', vuln: 'nginx 1.22.1 contains a HTTP/3 request processing denial of service (CVE-2025-21803). Patch to 1.26.1+. Risk: HIGH' },
        { port: '3306/tcp', state: 'filtered', service: 'mysql',     version: '', vuln: null },
        { port: '5432/tcp', state: 'open',     service: 'postgresql', version: 'PostgreSQL 14.3', vuln: 'PostgreSQL 14.3 contains PL/pgSQL environment variable privilege escalation (CVE-2024-10979). Upgrade to 14.13+. Risk: HIGH' },
        { port: '8080/tcp', state: 'open',     service: 'http-proxy', version: 'Squid 5.7', vuln: 'Squid 5.7 is susceptible to HTTP request smuggling and cache poisoning (CVE-2024-5138). Upgrade to 6.9+. Risk: HIGH' },
        { port: '8443/tcp', state: 'closed',   service: 'https-alt', version: '', vuln: null },
      ],
      footer: '\nService detection performed. Nmap done: 1 IP address (1 host up) scanned in 14.32 seconds'
    },
    'nmap -sn 192.168.1.0/24': {
      header: 'Starting Nmap 7.95 ( https://nmap.org )\n',
      ports: [],
      hosts: [
        'Nmap scan report for 192.168.1.1   — Host is up (0.0010s latency).  [Gateway]',
        'Nmap scan report for 192.168.1.5   — Host is up (0.0031s latency).  [DNS Server]',
        'Nmap scan report for 192.168.1.10  — Host is up (0.0047s latency).  [Workstation]',
        'Nmap scan report for 192.168.1.22  — Host is up (0.0089s latency).  [IoT Device]',
        'Nmap scan report for 192.168.1.50  — Host is up (0.0125s latency).  [File Server]',
        'Nmap scan report for 192.168.1.100 — Host is up (0.0200s latency).  [Unknown]',
      ],
      footer: '\nNmap done: 256 IP addresses (6 hosts up) scanned in 3.42 seconds'
    },
    'nmap -O target.local': {
      header: 'Starting Nmap 7.95 ( https://nmap.org )\nNmap scan report for target.local (10.0.2.15)\nHost is up (0.0019s latency).\nNot shown: 995 closed tcp ports\n\nPORT     STATE SERVICE',
      ports: [
        { port: '22/tcp',  state: 'open', service: 'ssh',      version: '', vuln: null },
        { port: '80/tcp',  state: 'open', service: 'http',     version: '', vuln: null },
        { port: '443/tcp', state: 'open', service: 'ssl/http', version: '', vuln: null },
      ],
      os: '\nOS details: Linux 5.15 - 6.1 (Ubuntu 22.04 LTS)\nNetwork Distance: 1 hop',
      footer: '\nOS detection performed. Nmap done: 1 IP address (1 host up) scanned in 8.71 seconds'
    },
    'nmap -p- target.local': {
      header: 'Starting Nmap 7.95 ( https://nmap.org )\nNmap scan report for target.local (10.0.2.15)\nHost is up (0.0015s latency).\n\nPORT       STATE    SERVICE',
      ports: [
        { port: '22/tcp',    state: 'open',     service: 'ssh',        version: '', vuln: null },
        { port: '80/tcp',    state: 'open',     service: 'http',       version: '', vuln: null },
        { port: '443/tcp',   state: 'open',     service: 'ssl/http',   version: '', vuln: null },
        { port: '3306/tcp',  state: 'filtered', service: 'mysql',      version: '', vuln: null },
        { port: '5432/tcp',  state: 'open',     service: 'postgresql', version: '', vuln: null },
        { port: '8080/tcp',  state: 'open',     service: 'http-proxy', version: '', vuln: null },
        { port: '8443/tcp',  state: 'closed',   service: 'https-alt',  version: '', vuln: null },
        { port: '9090/tcp',  state: 'open',     service: 'zeus-admin', version: '', vuln: null },
        { port: '27017/tcp', state: 'filtered', service: 'mongod',     version: '', vuln: null },
        { port: '61616/tcp', state: 'open',     service: 'activemq',   version: '', vuln: null },
      ],
      footer: '\nNmap done: 1 IP address (1 host up) scanned in 127.84 seconds (65535 ports scanned)'
    },
    'nmap -A target.local': {
      header: 'Starting Nmap 7.95 ( https://nmap.org )\nNmap scan report for target.local (10.0.2.15)\nHost is up (0.0018s latency).\nNot shown: 993 closed tcp ports\n\nPORT      STATE    SERVICE        VERSION',
      ports: [
        { port: '22/tcp',   state: 'open',     service: 'ssh',         version: 'OpenSSH 9.2p1', vuln: 'OpenSSH 9.2p1 — regreSSHion (CVE-2024-6387): remote code execution in sshd. Upgrade to 9.8p1+. Risk: CRITICAL' },
        { port: '80/tcp',   state: 'open',     service: 'http',        version: 'Apache httpd 2.4.54', vuln: 'Apache 2.4.54 — CVE-2024-38474: source code disclosure via proxy handler configuration errors. Update to 2.4.60+. Risk: HIGH' },
        { port: '443/tcp',  state: 'open',     service: 'ssl/http',    version: 'nginx 1.22.1', vuln: 'nginx 1.22.1 — CVE-2025-21803: HTTP/3 request processing denial of service. Patch to 1.26.1+. Risk: HIGH' },
        { port: '3306/tcp', state: 'filtered', service: 'mysql',       version: '', vuln: null },
        { port: '5432/tcp', state: 'open',     service: 'postgresql',  version: 'PostgreSQL 14.3', vuln: 'PostgreSQL 14.3 — CVE-2024-10979: PL/pgSQL environment variable privilege escalation. Upgrade to 14.13+. Risk: HIGH' },
        { port: '8080/tcp', state: 'open',     service: 'http-proxy',  version: 'Squid 5.7', vuln: 'Squid 5.7 — CVE-2024-5138: HTTP request smuggling and cache poisoning. Upgrade to 6.9+. Risk: HIGH' },
        { port: '8443/tcp', state: 'closed',   service: 'https-alt',   version: '', vuln: null },
      ],
      os: '\nOS details: Linux 5.15 - 6.1 (Ubuntu 22.04 LTS)\nTraceroute:\n  HOP  RTT     ADDRESS\n  1    1.8 ms  10.0.2.15\n\nAggressive scan flags: -sV -sC -O --traceroute',
      footer: '\nNmap done: 1 IP address (1 host up) scanned in 32.19 seconds'
    }
  };

  /* ── Simulator Init ────────────────────────────────────────── */
  function initNmapSimulator() {
    const input = $('#nmap-input');
    const select = $('#nmap-select');
    const runBtn = $('#nmap-run');
    const clearBtn = $('#nmap-clear');
    const body = $('#nmap-output');
    const resultsTable = $('#nmap-results');

    if (!input || !body) return;

    // Sync select → input
    select?.addEventListener('change', () => {
      if (select.value) input.value = select.value;
    });

    // Run on button click
    runBtn?.addEventListener('click', () => runScan(input, body, resultsTable));

    // Run on Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') runScan(input, body, resultsTable);
    });

    // Clear
    clearBtn?.addEventListener('click', () => {
      body.innerHTML = '<div class="terminal__line terminal__line--muted">Awaiting scan command...</div>';
      if (resultsTable) resultsTable.innerHTML = '';
    });
  }

  async function runScan(input, body, resultsTable) {
    const cmd = input.value.trim();
    if (!cmd) return;

    const profile = SCAN_PROFILES[cmd];
    if (!profile) {
      body.innerHTML = '';
      
      const promptLine = document.createElement('div');
      promptLine.className = 'terminal__line';
      promptLine.innerHTML = `<span class="terminal__prompt">root@kali:~$ </span>${cmd}`;
      body.appendChild(promptLine);
      
      const errLine = document.createElement('div');
      errLine.className = 'terminal__line';
      errLine.style.color = 'var(--accent-red)';
      errLine.innerHTML = `Error: Unrecognized command. Try one of the preset commands.`;
      body.appendChild(errLine);
      
      if (resultsTable) resultsTable.innerHTML = '';
      return;
    }

    // Clear previous results
    body.innerHTML = '';
    if (resultsTable) resultsTable.innerHTML = '';

    // Show command
    const promptLine = document.createElement('div');
    promptLine.className = 'terminal__line';
    promptLine.innerHTML = `<span class="terminal__prompt">root@kali:~$ </span>${cmd}`;
    body.appendChild(promptLine);

    await delay(200);

    // Type header
    const headerLines = profile.header.split('\n');
    for (const line of headerLines) {
      appendLine(body, line);
      await delay(30);
    }

    // Render hosts if any
    if (profile.hosts) {
      for (const host of profile.hosts) {
        await delay(100);
        appendLine(body, host);
      }
    }

    // Render ports table if any
    if (profile.ports && profile.ports.length > 0) {
      await delay(200);
      renderPortTable(profile.ports, body, resultsTable);
    }

    // OS details if any
    if (profile.os) {
      await delay(100);
      const osLines = profile.os.split('\n');
      for (const line of osLines) {
        appendLine(body, line);
      }
    }

    // Footer if any
    if (profile.footer) {
      await delay(100);
      const footerLines = profile.footer.split('\n');
      for (const line of footerLines) {
        appendLine(body, line);
      }
    }
  }

  function renderPortTable(ports, body, resultsContainer) {
    if (!resultsContainer) return;

    const table = document.createElement('table');
    table.className = 'data-table nmap-port-results';

    // Header
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>Port</th><th>State</th><th>Service</th><th>Version (Click open rows to audit)</th></tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    ports.forEach((p) => {
      const tr = document.createElement('tr');
      tr.className = 'nmap-port-row';

      const stateClass = p.state === 'open' ? 'port-state--open' : p.state === 'closed' ? 'port-state--closed' : 'port-state--filtered';
      tr.innerHTML = `
        <td><code>${p.port}</code></td>
        <td><span class="port-state ${stateClass}">${p.state}</span></td>
        <td>${p.service}</td>
        <td>${p.version || '—'}</td>
      `;

      if (p.vuln) {
        tr.classList.add('is-clickable');
        tr.tabIndex = 0;
        tr.title = 'Press Enter or click to analyze vulnerability';

        const vulnRow = document.createElement('tr');
        vulnRow.className = 'nmap-vuln-info';
        vulnRow.innerHTML = `<td colspan="4">⚠ <strong>Vulnerability Analysis:</strong> ${p.vuln}</td>`;

        tr.addEventListener('click', () => {
          vulnRow.classList.toggle('is-visible');
        });

        tr.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            vulnRow.classList.toggle('is-visible');
          }
        });

        tbody.appendChild(tr);
        tbody.appendChild(vulnRow);
      } else {
        tbody.appendChild(tr);
      }
    });

    table.appendChild(tbody);
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(table);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNmapSimulator);
  } else {
    initNmapSimulator();
  }
})();
