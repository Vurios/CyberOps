(function () {
  /* ============================================================
     MODULE DATA — Single Source of Truth
     Detailed definitions, explanations, quizzes, and interactives.
     ============================================================ */

  window.MODULE_DATA = [
    {
      id: "01",
      number: "MODULE 01",
      category: "Security Fundamentals",
      badge: "Assurance & Risk",
      title: "IT Assurance Foundations",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linejoin="round"/>
        <path d="M9 11l2 2 4-4" stroke="#EDEFF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "Learn the fundamental components of IT Assurance, risk management models, and security control domains.",
      explanation: `<p>Information Technology (IT) Assurance is the systematic process of validating that an organization's security infrastructure, controls, and policies adequately protect its digital assets. This discipline ensures that systems operate reliably, conform to compliance standards, and maintain the integrity of business processes.</p>
      <p>At the center of IT Assurance lies the <strong>CIA Triad</strong> (Confidentiality, Integrity, and Availability). Rather than being isolated concepts, these three components act as a balanced framework where the security professional must balance protective requirements against usability. Over-indexing on confidentiality through severe access restrictions, for example, can drastically degrade availability and disrupt legitimate workflow speeds.</p>`,
      biggerPicture: `<p>This module establishes the foundational vocabulary of security risk and management. The concepts introduced here (such as threats, vulnerabilities, and administrative controls) map directly to how you analyze systems in <strong>Module 02: Threat Modeling</strong>, and choose cryptographic implementations in <strong>Module 03: Cryptography & PKI</strong>.</p>`,
      secondaryBreakdown: `<h4>IT Assurance &amp; Compliance Frameworks</h4>
      <p>Modern enterprises validate their assurance status by mapping security controls to standardized industry compliance frameworks. These standards provide audited guidelines that verify an organization's cybersecurity posture:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">NIST SP 800-53</div>
          <p class="compare-card__text">The gold standard for federal agencies and contractors in the United States. It outlines a catalog of security and privacy controls categorized into 20 families (e.g., Access Control, Incident Response).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">ISO/IEC 27001</div>
          <p class="compare-card__text">An international standard specifying requirements for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">SOC 2 (Type II)</div>
          <p class="compare-card__text">A voluntary compliance standard for service organizations, audited by third parties, measuring security, availability, processing integrity, confidentiality, and privacy over a period of time.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive Security Controls Classifier",
      interactiveHtml: `<p class="quick-check__question">Security controls are categorized into three main classes. Classify each of the following controls by selecting the correct category:</p>
      <div class="classifier-interactive" id="classifier-mod1">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>Control Item:</strong> Fire suppression systems &amp; security fence boundary lines
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Physical">Physical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Technical">Technical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Administrative">Administrative</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>Control Item:</strong> Multi-Factor Authentication (MFA) &amp; firewall packet inspections
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Physical">Physical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Technical">Technical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Administrative">Administrative</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>Control Item:</strong> Information Security Policy documents &amp; onboarding NDA signatures
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Physical">Physical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Technical">Technical</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Administrative">Administrative</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Financial institutions utilize <strong>NIST SP 800-53</strong> guidelines to audit their transaction boundaries. To protect customer account data, they apply administrative policies (compulsory background checks for employees), physical controls (restricted data center badge checkpoints), and technical controls (AES-256 database encryption). A failure to audit these controls collectively can result in significant data leaks and regulatory penalties.</p>`,
      quiz: [
        {
          question: "Which of the following is a technical control rather than an administrative or physical one?",
          options: [
            { text: "Compulsory cybersecurity training", correct: false, feedback: "Incorrect. Policies and training are administrative controls." },
            { text: "Intrusion Detection System (IDS) alerts", correct: true, feedback: "Correct! Software/hardware solutions like IDS are technical controls." },
            { text: "Bio-metric locks on server racks", correct: false, feedback: "Incorrect. Bio-metric barriers and security gates are physical controls." }
          ]
        },
        {
          question: "If an organization wants to guarantee that database audit records have not been altered or tampered with, which pillar of the CIA Triad is the primary focus?",
          options: [
            { text: "Confidentiality", correct: false, feedback: "Incorrect. Confidentiality deals with keeping data secret from unauthorized users." },
            { text: "Integrity", correct: true, feedback: "Correct! Integrity ensures data remains accurate, unaltered, and trustworthy." },
            { text: "Availability", correct: false, feedback: "Incorrect. Availability ensures authorized users can access the data." }
          ]
        },
        {
          question: "How is Risk mathematically represented in standard security operational risk formulas?",
          options: [
            { text: "Risk = Vulnerability + Impact", correct: false, feedback: "Incorrect. The formula utilizes multiplication to signify compound risk factors." },
            { text: "Risk = Threat × Vulnerability × Impact", correct: true, feedback: "Correct! Threat, Vulnerability, and Impact compound to determine total Risk." },
            { text: "Risk = Threat + Breach Vector", correct: false, feedback: "Incorrect. The formula represents Threat, Vulnerability, and Impact." }
          ]
        }
      ]
    },
    {
      id: "02",
      number: "MODULE 02",
      category: "Security Fundamentals",
      badge: "Assurance & Risk",
      title: "Threat Modeling & Risk",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" />
        <path d="M12 3v5M12 16v5M3 12h5M16 12h5" stroke="currentColor" stroke-width="1.5" />
      </svg>`,
      summary: "Analyze system architectures, identify potential threat vectors, and apply STRIDE threat modeling methodologies.",
      explanation: `<p>Threat Modeling is a structural engineering discipline used to identify security requirements, pin-point vulnerabilities, and formulate architectural mitigations early in the development lifecycle. By thinking like an attacker, engineering teams proactively analyze data flows and trust boundaries before committing code or provisioning infrastructure.</p>
      <p>The industry-standard mnemonic <strong>STRIDE</strong> (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) serves as a taxonomy for categorizing threats. Systematically mapping STRIDE vectors against every system interface ensures complete coverage of possible attack modes.</p>`,
      biggerPicture: `<p>Threat modeling defines the architectural parameters that dictate the cryptographic controls of <strong>Module 03: Cryptography & PKI</strong>. It also guides the configuration of isolation sandboxes in <strong>Module 04: Virtualization & Sandboxes</strong>, based on where trust boundaries reside.</p>`,
      secondaryBreakdown: `<h4>DREAD Risk Rating System vs. CVSS</h4>
      <p>Once threats are identified, security professionals score and prioritize remediation using risk-assessment matrices:</p>
      <div class="module__comparison dread-comparison-grid">
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">D — Damage</div>
            <span class="compare-card__scale-badge">1–10 Scale</span>
          </div>
          <p class="compare-card__text">Measures the potential extent of damage resulting from a successful exploit.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">R — Reproducibility</div>
            <span class="compare-card__scale-badge">1–10 Scale</span>
          </div>
          <p class="compare-card__text">Quantifies how easy it is for an attacker to replicate the attack scenario.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">E — Exploitability</div>
            <span class="compare-card__scale-badge">1–10 Scale</span>
          </div>
          <p class="compare-card__text">Rates the amount of effort, skill, and resources required to carry out the exploit.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">A — Affected Users</div>
            <span class="compare-card__scale-badge">1–10 Scale</span>
          </div>
          <p class="compare-card__text">Tracks the proportion of the user base or systems impacted if the threat is realized.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">D — Discoverability</div>
            <span class="compare-card__scale-badge">1–10 Scale</span>
          </div>
          <p class="compare-card__text">Evaluates how easy it is for an external attacker to locate this vulnerability.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title-row">
            <div class="compare-card__title">CVSS Alternative</div>
            <span class="compare-card__scale-badge" style="color: var(--text-secondary); background: rgba(255, 255, 255, 0.05); border-color: var(--border-color);">Standard</span>
          </div>
          <p class="compare-card__text">Common Vulnerability Scoring System (CVSS) is an industry-standard open framework for communicating vulnerability severity based on metrics.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive STRIDE Threat Vector Analyzer",
      interactiveHtml: `<p class="quick-check__question">Click on different scenarios to identify the matching STRIDE threat category and learn its mitigation:</p>
      <div class="stride-interactive" id="stride-analyzer">
        <div class="stride-scenarios-list">
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Spoofing" data-desc="An attacker hijacks a user's session token and makes API calls as that user.">Scenario A: API Token Hijack</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Repudiation" data-desc="An employee deletes a critical audit file and claims their account was not logged in.">Scenario B: Denial of Audit Actions</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Elevation of Privilege" data-desc="A standard support employee enters special characters in a form and logs in as administrator.">Scenario C: Escalated Access</button>
        </div>
        <div class="stride-details-box hidden-element">
          <div class="stride-threat-type">Threat: <span class="text-accent-amber" id="stride-threat-name"></span></div>
          <p class="stride-threat-desc" id="stride-threat-desc"></p>
          <div class="stride-mitigation"><strong>Mitigation:</strong> <span id="stride-threat-mit"></span></div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>An administrative support cluster uses thread maps to prevent credential hijacking. System operators enforce role limits, validate inbound requests, and log account actions to ensure audit systems remain accurate and secure.</p>`,
      quiz: [
        {
          question: "An attacker intercepts a TCP packet and changes the recipient database address. Which STRIDE category does this threat belong to?",
          options: [
            { text: "Spoofing", correct: false, feedback: "Incorrect. Spoofing is claiming a false identity." },
            { text: "Tampering", correct: true, feedback: "Correct! Tampering is the unauthorized modification of data." },
            { text: "Repudiation", correct: false, feedback: "Incorrect. Repudiation is denying actions occurred." }
          ]
        },
        {
          question: "Which step in the Threat Modeling workflow focuses on mapping trust boundaries and data flow diagrams (DFDs)?",
          options: [
            { text: "Decompose the Application", correct: true, feedback: "Correct! Mapping flow boundaries and components falls under application decomposition." },
            { text: "Identify Threat Vectors", correct: false, feedback: "Incorrect. Mapping trust boundaries occurs before threat identification." },
            { text: "Validate Remediation", correct: false, feedback: "Incorrect. Validation happens after mitigations are applied." }
          ]
        },
        {
          question: "In the DREAD risk assessment system, what does the E stand for?",
          options: [
            { text: "Encryption Strength", correct: false, feedback: "Incorrect. DREAD rates threat attributes, not security defenses." },
            { text: "Exploitability", correct: true, feedback: "Correct! Exploitability measures how easily the vulnerability can be targeted." },
            { text: "Escalation Path", correct: false, feedback: "Incorrect. Exploitability is the metric represented by E." }
          ]
        }
      ]
    },
    {
      id: "03",
      number: "MODULE 03",
      category: "Security Fundamentals",
      badge: "Assurance & Risk",
      title: "Cryptography & PKI",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="url(#hero-brand-grad)" stroke-width="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>`,
      summary: "Understand encryption algorithms, symmetric vs. asymmetric systems, and PKI components.",
      explanation: `<p>Cryptography is the mathematical science of protecting information in transit and at rest. Security architectures depend on cryptographic algorithms to secure passwords, encrypt sensitive data, and verify the identity of communicating servers.</p>
      <p>Modern cryptosystems are split into symmetric algorithms (fast, single shared key for bulk data) and asymmetric algorithms (mathematically linked key pairs, solves key exchange). **Public Key Infrastructure (PKI)** orchestrates asymmetric cryptography across the internet by managing digital certificates, trust anchors, and key lifecycles.</p>`,
      biggerPicture: `<p>Cryptography provides the underlying mechanisms that support secure session cookies in <strong>Module 08: Session & Authenticator Hygiene</strong>, and browser security layers like HTTPS which we configure using headers in <strong>Module 09: Web Injection & Client Headers</strong>.</p>`,
      secondaryBreakdown: `<h4>Certificate Trust Chains &amp; TLS Handshakes</h4>
      <p>Digital certificates operate on a hierarchy of trust. To secure connection endpoints, browsers validate a signature path up to a trusted certificate authority:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Root Certificate</div>
          <p class="compare-card__text">The self-signed master certificate belonging to a trusted Certificate Authority (CA) pre-installed in your Operating System's trust store.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Intermediate CA</div>
          <p class="compare-card__text">A subordinate certificate signed by the Root CA used to issue end-entity certificates, protecting the Root from direct exposure.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">End-Entity Leaf</div>
          <p class="compare-card__text">The server certificate issued to a specific domain (e.g. google.com). Validated by confirming it links back to the Root.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive Cryptographic Cipher Simulator",
      interactiveHtml: `<p class="quick-check__question">Encrypt and decrypt messages dynamically by adjusting the shift parameter (Caesar Cipher):</p>
      <div class="cipher-interactive" id="cipher-sandbox">
        <div class="cipher-layout">
          <div class="cipher-input-group">
            <label for="cipher-plain">Plaintext Input (A-Z Only)</label>
            <input type="text" id="cipher-plain" class="cipher-input" value="CIPHERTEXT" maxlength="15" autocomplete="off" spellcheck="false">
          </div>
          <div class="cipher-controls">
            <button type="button" class="btn btn--secondary btn--xs" id="cipher-dec">&minus; Shift</button>
            <span class="cipher-key mono" id="cipher-shift-display">Shift Value: 3</span>
            <button type="button" class="btn btn--secondary btn--xs" id="cipher-inc">+ Shift</button>
          </div>
          <div class="cipher-result">
            <strong>Ciphertext Output:</strong>
            <div class="cipher-output-display mt-1">
              <code class="cipher-output text-accent-green" id="cipher-result-display">FLSKHUWHAW</code>
            </div>
          </div>
          <div class="cipher-alphabet-map">
            <div class="cipher-map-title mono text-xs text-accent-secondary mb-2">Interactive Shift Mapping:</div>
            <div class="cipher-map-grid" id="cipher-map-grid">
              <!-- Dynamically populated in module-detail.js -->
            </div>
          </div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Web browsers establish secure TLS channels using asymmetric key exchange (typically ECDHE) to negotiate a temporary, symmetric session key (AES-GCM). This hybrid system provides the scale benefits of fast symmetric encryption with the trust management features of public keys.</p>`,
      quiz: [
        {
          question: "Which encryption type requires both the sender and recipient to share the exact same key beforehand?",
          options: [
            { text: "Asymmetric Cryptography", correct: false, feedback: "Incorrect. Asymmetric cryptography uses a public/private key pair." },
            { text: "Symmetric Cryptography", correct: true, feedback: "Correct! Symmetric cryptography depends on a single shared key." },
            { text: "PKI Digital Signature", correct: false, feedback: "Incorrect. Signatures depend on asymmetric private key generation." }
          ]
        },
        {
          question: "What is the primary role of a Certificate Authority (CA)?",
          options: [
            { text: "To encrypt communications between a client and server", correct: false, feedback: "Incorrect. Encrypting traffic is handled by the server and client." },
            { text: "To issue and digitally sign public key certificates to verify server identity", correct: true, feedback: "Correct! CAs validate identities and issue signatures to verify certificates." },
            { text: "To store private keys on behalf of users in a public database", correct: false, feedback: "Incorrect. Private keys must remain private and are never shared with CAs." }
          ]
        },
        {
          question: "Why does HTTPS utilize hybrid encryption?",
          options: [
            { text: "Asymmetric key exchange is too slow to encrypt bulk traffic directly", correct: true, feedback: "Correct! Asymmetric key exchanges are slower, so they are only used to exchange keys for fast symmetric bulk data encryption." },
            { text: "Symmetric keys cannot be stored on servers securely", correct: false, feedback: "Incorrect. Symmetric keys are easily secured on servers." },
            { text: "Symmetric encryption is vulnerable to key exchange leaks", correct: false, feedback: "Incorrect. Hybrid encryption solves this issue." }
          ]
        }
      ]
    },
    {
      id: "04",
      number: "MODULE 04",
      category: "Host & Network Security",
      badge: "Infrastructure & Audit",
      title: "Secure Virtualization & Sandboxing",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "Study hypervisor architectures, virtual machine configuration, and sandbox containment practices.",
      explanation: `<p>Virtualization isolates workloads by running simulated OS instances on top of a single hardware chassis. This containment paradigm is essential for cloud computing architectures, security isolation, and running untrusted software safely.</p>
      <p>Sandboxing takes isolation further by wrapping processes in constrained execution cells, restricting access to system calls, storage pathways, and networks. This prevents malicious binaries from escaping and compromising the host server.</p>`,
      biggerPicture: `<p>Virtualization and sandbox configuration provide the secure laboratories used to audit applications. The terminal commands and diagnostics explored in <strong>Module 05: Linux CLI & Diagnostics</strong> are practiced within sandboxed containers to prevent damage to host systems.</p>`,
      secondaryBreakdown: `<h4>Virtualization vs. Containerization</h4>
      <p>Organizations isolate workloads using different architecture layers depending on their security and resource density constraints:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Virtual Machines (VMs)</div>
          <p class="compare-card__text">Isolates at the hardware level. Each VM runs its own full guest operating system on virtualized hardware managed by a hypervisor. Strongest isolation boundary but higher resource overhead.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Containers (Docker)</div>
          <p class="compare-card__text">Isolates at the OS kernel level. Containers share the host OS kernel and use namespaces and cgroups to segment resources. Lightweight but has a shared kernel attack surface.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">MicroVMs (Firecracker)</div>
          <p class="compare-card__text">Combines the security isolation of traditional virtual machines with the fast startup speeds and low memory footprints of modern containers.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive Sandbox Network Controller",
      interactiveHtml: `<p class="quick-check__question">Toggle between different network virtualization options to audit access rules and traffic pathways:</p>
      <div class="network-interactive" id="network-sandbox">
        <div class="network-toggles">
          <button type="button" class="btn btn--secondary btn--xs network-btn active" data-mode="nat">NAT (Network Address Translation)</button>
          <button type="button" class="btn btn--secondary btn--xs network-btn" data-mode="hostonly">Host-Only Mode</button>
          <button type="button" class="btn btn--secondary btn--xs network-btn" data-mode="internal">Internal Private Network</button>
        </div>
        <div class="network-display-area mt-4">
          <div class="network-diagram-box mono" id="network-diag-text">
            [VM] ===&gt; (Virtual Router/NAT) ===&gt; [Host Network Card] ===&gt; INTERNET
          </div>
          <div class="network-status-box mt-3">
            <strong>Security Profile:</strong> <span class="text-accent-red" id="network-sec-status">Medium Risk (Outbound egress allowed)</span>
          </div>
          <p class="network-desc-text text-sm mt-2" id="network-desc-msg">
            NAT allows the sandboxed virtual machine to establish outbound TCP connections (useful for downloading security packages), but exposes host egress channels if malware tries to connect to Command and Control (C2) servers.
          </p>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Malware analysts utilize Type-2 hypervisors configure in Host-Only or Internal network modes to inspect zero-day threats. If ransomware attempts to encrypt shares or contact external servers, the isolated virtual switch drops the traffic, keeping the corporate intranet secure.</p>`,
      quiz: [
        {
          question: "Which hypervisor architecture runs directly on the host hardware without an underlying operating system?",
          options: [
            { text: "Type 2 Hypervisor", correct: false, feedback: "Incorrect. Type 2 hypervisors run on top of an existing host operating system." },
            { text: "Type 1 Hypervisor", correct: true, feedback: "Correct! Type 1 (Bare-Metal) hypervisors run directly on the physical hardware." },
            { text: "Docker Daemon", correct: false, feedback: "Incorrect. Container runtimes share the host OS kernel and are not hypervisors." }
          ]
        },
        {
          question: "Which kernel feature is used in Linux containerization to cap resource consumption (like CPU and memory limiters)?",
          options: [
            { text: "Namespaces", correct: false, feedback: "Incorrect. Namespaces isolate visibility (processes, network interfaces)." },
            { text: "Control Groups (cgroups)", correct: true, feedback: "Correct! cgroups regulate resource allocation and throttle limits." },
            { text: "Chroot jail", correct: false, feedback: "Incorrect. Chroot isolates directories, not CPU or memory resources." }
          ]
        },
        {
          question: "Why is Host-Only mode preferred when testing a suspected ransomware executable?",
          options: [
            { text: "It prevents malware from communicating out to the internet or host subnet", correct: true, feedback: "Correct! Host-only mode drops egress traffic to the internet, neutralizing command-and-control connection attempts." },
            { text: "It speeds up guest OS virtualization speed", correct: false, feedback: "Incorrect. Networking modes do not affect processor speed." },
            { text: "It automatically decrypts folders", correct: false, feedback: "Incorrect. No virtualization mode decrypts files." }
          ]
        }
      ]
    },
    {
      id: "05",
      number: "MODULE 05",
      category: "Host & Network Security",
      badge: "Infrastructure & Audit",
      title: "Linux CLI & Diagnostics",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17l6-5-6-5M12 19h8" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "Master fundamental command-line utilities for security investigations, audits, and configuration.",
      explanation: `<p>A security professional's efficiency depends on their ability to command system shells. The Linux Command Line Interface (CLI) is the primary workspace for system audits, log diagnostics, and incident triage.</p>
      <p>Through terminal commands, analysts can quickly inspect file permissions, review system daemon logs, and trace active processes. A deep understanding of configuration security and permissions prevents privilege escalation attacks.</p>`,
      biggerPicture: `<p>Linux CLI skills provide the troubleshooting foundation needed to execute active network audits in <strong>Module 06: Network Mapping & Nmap</strong>, and configure service boundary rules for web applications.</p>`,
      secondaryBreakdown: `<h4>Linux Authentication and Permissions Safety</h4>
      <p>Linux manages identity and access control using core configuration files. Securing these files is critical for system hardening:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">/etc/passwd</div>
          <p class="compare-card__text">Contains basic user account details (UID, home directory, login shell). Must be readable by all users but writable only by root.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">/etc/shadow</div>
          <p class="compare-card__text">Stores hashed user passwords and expiration rules. Must be readable exclusively by root (chmod 600 or 400) to prevent brute-force cracking.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">/etc/sudoers</div>
          <p class="compare-card__text">Specifies which users are allowed to execute administrative tasks via 'sudo'. Must only be edited using the 'visudo' editor to validate syntax.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive Permissions & chmod Builder",
      interactiveHtml: `<p class="quick-check__question">Toggle read (4), write (2), and execute (1) permissions for the Owner, Group, and Others classes to generate chmod commands:</p>
      <div class="chmod-builder-interactive" id="chmod-sandbox">
        <div class="chmod-grid">
          <div class="chmod-group" data-class="owner">
            <div class="chmod-group-title text-accent-primary">Owner</div>
            <label><input type="checkbox" class="chmod-bit" value="4" checked> Read (r)</label>
            <label><input type="checkbox" class="chmod-bit" value="2" checked> Write (w)</label>
            <label><input type="checkbox" class="chmod-bit" value="1" checked> Execute (x)</label>
          </div>
          <div class="chmod-group" data-class="group">
            <div class="chmod-group-title text-accent-primary">Group</div>
            <label><input type="checkbox" class="chmod-bit" value="4" checked> Read (r)</label>
            <label><input type="checkbox" class="chmod-bit" value="2"> Write (w)</label>
            <label><input type="checkbox" class="chmod-bit" value="1" checked> Execute (x)</label>
          </div>
          <div class="chmod-group" data-class="others">
            <div class="chmod-group-title text-accent-primary">Others</div>
            <label><input type="checkbox" class="chmod-bit" value="4" checked> Read (r)</label>
            <label><input type="checkbox" class="chmod-bit" value="2"> Write (w)</label>
            <label><input type="checkbox" class="chmod-bit" value="1"> Execute (x)</label>
          </div>
        </div>
        <div class="chmod-output-box mt-4">
          <div class="mono chmod-result-cmd">Command: <span class="text-accent-green" id="chmod-cmd-display">chmod 754 script.sh</span></div>
          <div class="mono chmod-result-str mt-2">Symbolic: <span class="text-accent-blue" id="chmod-str-display">rwxr-xr--</span></div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>During system audits, administrators search for misconfigured file permissions. Finding a public file containing sensitive credentials set to <code>chmod 777</code> represents a critical finding; modifying it to <code>chmod 600</code> restricts read/write permissions exclusively to the owner, preventing data leakage.</p>`,
      quiz: [
        {
          question: "Which of the following commands searches recursively through a directory for files containing the string 'password', ignoring binary files?",
          options: [
            { text: "find -perm /etc/shadow", correct: false, feedback: "Incorrect. This command locates files by permission masks." },
            { text: "grep -rnI 'password' .", correct: true, feedback: "Correct! grep -rnI searches recursively (-r), prints line numbers (-n), and ignores binary files (-I)." },
            { text: "chmod 600 password.txt", correct: false, feedback: "Incorrect. chmod is used to alter permissions." }
          ]
        },
        {
          question: "What permission mask is set by running chmod 600 credentials.conf?",
          options: [
            { text: "Read/Write for owner, no access for group and others", correct: true, feedback: "Correct! Owner gets 6 (4+2 = r+w), while Group and Others get 0 (no permissions)." },
            { text: "Read/Execute for all users", correct: false, feedback: "Incorrect. Read/Execute for all would be chmod 555." },
            { text: "Read/Write/Execute for owner, read-only for others", correct: false, feedback: "Incorrect. That would be chmod 744." }
          ]
        },
        {
          question: "Why is it highly recommended to use visudo when editing the /etc/sudoers file?",
          options: [
            { text: "It automatically saves the file to a backup server", correct: false, feedback: "Incorrect. visudo does not perform remote backups." },
            { text: "It checks the syntax of the file before saving to prevent locking out administrative access", correct: true, feedback: "Correct! A syntax error in sudoers can break sudo access for all users; visudo checks the file for safety before writing." },
            { text: "It encrypts the file content", correct: false, feedback: "Incorrect. The file is saved as plain text." }
          ]
        }
      ]
    },
    {
      id: "06",
      number: "MODULE 06",
      category: "Host & Network Security",
      badge: "Infrastructure & Audit",
      title: "Network Mapping & Nmap",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M2 12h20" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,
      summary: "Learn port scanning methodologies, service detection, and Nmap firewall evasion flags.",
      explanation: `<p>Network Mapping is the process of scanning IP spaces to locate active hosts, identify exposed ports, and audit running services. **Nmap** (Network Mapper) is the industry-standard scanner used by auditors and penetration testers to discover entry points and verify firewall configurations.</p>
      <p>Understanding port states and scanning mechanics is essential. A port can be <code>OPEN</code> (accepting connections), <code>CLOSED</code> (host responds with TCP RST to refuse connections), or <code>FILTERED</code> (packets dropped silently by a firewall, causing probes to time out).</p>`,
      biggerPicture: `<p>Network mapping discovers the service endpoints that host web servers. The security of these services depends on authenticator logic (<strong>Module 08: Session & Authenticator Hygiene</strong>) and defensive headers (<strong>Module 09: Web Injection & Client Headers</strong>) configured on the web application.</p>`,
      secondaryBreakdown: `<h4>TCP Connect Scans vs. SYN Stealth Scans</h4>
      <p>Nmap scans endpoints using different network packet pathways depending on audit requirements and stealth constraints:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">TCP Connect Scan (-sT)</div>
          <p class="compare-card__text">Completes the full TCP Three-Way Handshake (SYN → SYN-ACK → ACK) with the target. Very reliable but logged by target applications, making it loud.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">SYN Stealth Scan (-sS)</div>
          <p class="compare-card__text">Performs a 'half-open' scan (SYN → SYN-ACK → RST). Closes the connection before completing the handshake. Faster and quieter, bypasses application-level logs.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">UDP Scans (-sU)</div>
          <p class="compare-card__text">Scans stateless UDP ports by sending empty UDP payloads. Very slow because it relies on ICMP Port Unreachable packets for verification.</p>
        </div>
      </div>`,
      interactiveTitle: "Live Network Scanner Sandbox",
      hasGameSimulator: true,
      simulatorScript: "js/nmap-simulator.js",
      interactiveHtml: `<p class="quick-check__question">Audit the local target subnet. Select a scan profile from the dropdown, customize it in the terminal input, and execute to analyze vulnerabilities:</p>
      <div class="nmap-controls">
        <select id="nmap-select" class="nmap-select" aria-label="Select scan profile">
          <option value="">— Select a preset scan —</option>
          <option value="nmap -sV target.local">nmap -sV target.local (Service Detection)</option>
          <option value="nmap -sn 192.168.1.0/24">nmap -sn 192.168.1.0/24 (Ping Scan)</option>
          <option value="nmap -O target.local">nmap -O target.local (OS Fingerprinting)</option>
          <option value="nmap -p- target.local">nmap -p- target.local (Full Port Audit)</option>
          <option value="nmap -A target.local">nmap -A target.local (Aggressive Scan)</option>
        </select>
        <button type="button" id="nmap-run" class="btn btn--primary btn--sm">Execute Scan</button>
        <button type="button" id="nmap-clear" class="btn btn--secondary btn--sm">Clear</button>
      </div>
      <div class="terminal mt-3">
        <div class="terminal__header">
          <span class="terminal__dot terminal__dot--red"></span>
          <span class="terminal__dot terminal__dot--yellow"></span>
          <span class="terminal__dot terminal__dot--green"></span>
          <span class="terminal__title">nmap-simulator — bash</span>
        </div>
        <div class="terminal__body" id="nmap-output" style="height: 220px;">
          <div class="terminal__line terminal__line--muted">Awaiting scan command...</div>
        </div>
        <div class="terminal__input-row">
          <span class="terminal__prompt">root@kali:~$ </span>
          <input type="text" id="nmap-input" class="terminal__input" placeholder="Enter nmap command..." autocomplete="off" spellcheck="false">
        </div>
      </div>
      <div id="nmap-results" class="nmap-results mt-4"></div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Security teams run regular network scans using Nmap inside corporate networks. Finding an unexpected database service listening on port <code>3306</code> with an outdated software version enables administrators to apply security updates before malicious nodes can exploit it.</p>`,
      quiz: [
        {
          question: "Which Nmap parameter is used to probe open ports to identify service names and exact version details?",
          options: [
            { text: "-sS", correct: false, feedback: "Incorrect. -sS is used for SYN stealth scans." },
            { text: "-sV", correct: true, feedback: "Correct! -sV determines service version details." },
            { text: "-O", correct: false, feedback: "Incorrect. -O is used for OS fingerprinting." }
          ]
        },
        {
          question: "What does a FILTERED port state indicate in an Nmap scan report?",
          options: [
            { text: "A firewall or filter is blocking the network probe packets, preventing Nmap from reaching the port", correct: true, feedback: "Correct! Filtered means the probes are blocked and Nmap cannot determine if the port is open or closed." },
            { text: "The port is active and accepting connections", correct: false, feedback: "Incorrect. Active ports are reported as OPEN." },
            { text: "The service is refusing connection requests", correct: false, feedback: "Incorrect. Refused connections are reported as CLOSED." }
          ]
        },
        {
          question: "Which packet sequence represents a TCP SYN scan (Stealth Scan) sequence on an open port?",
          options: [
            { text: "SYN → SYN-ACK → ACK", correct: false, feedback: "Incorrect. This is the sequence for a standard TCP Connect scan." },
            { text: "SYN → SYN-ACK → RST", correct: true, feedback: "Correct! The RST packet tears down the half-open connection before it is logged." },
            { text: "SYN → RST", correct: false, feedback: "Incorrect. A SYN followed by a RST indicates a CLOSED port." }
          ]
        }
      ]
    },
    {
      id: "07",
      number: "MODULE 07",
      category: "Web Application Defense",
      badge: "Defending the Stack",
      title: "Password Strength & Entropy",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z" stroke="url(#hero-brand-grad)" stroke-width="2"/>
      </svg>`,
      summary: "Estimate password strength mathematically using Shannon Entropy and study auditing tools.",
      explanation: `<p>Password security is governed by mathematics. Rather than relying on subjective guidelines, cybersecurity systems quantify password resilience using **Shannon Entropy** ($H = L \times \log_2(R)$), which measures the information density in bits.</p>
      <p>A password's complexity is determined by the size of the character pool ($R$) and its length ($L$). A 12-character password using only lowercase letters is exponentially weaker than a 16-character password using multiple character sets, because length acts as a geometric multiplier in password combination math.</p>`,
      biggerPicture: `<p>Password strength is the front line of authentication. Strong password generation rules must be paired with secure back-end hashing implementations, which we explore in <strong>Module 08: Session & Authenticator Hygiene</strong>.</p>`,
      secondaryBreakdown: `<h4>GPU Cracking Speeds &amp; Dictionary Attacks</h4>
      <p>Attackers exploit weak passwords using high-performance graphics card arrays. Understanding their methods helps guide password policy design:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Brute-Force Attacks</div>
          <p class="compare-card__text">Exhaustively tests every possible character combination. Resisted strictly by length and character complexity ($H \ge 80$).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Dictionary Attacks</div>
          <p class="compare-card__text">Tests pre-compiled lists of common passwords and variations. Neutralizes complex but common passwords (e.g. Pa$$w0rd1!).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">GPU Parallelism</div>
          <p class="compare-card__text">Modern cracking rigs run billions of MD5 or SHA-256 hashes per second. Strong key-stretching slows down this parallel computation.</p>
        </div>
      </div>`,
      interactiveTitle: "Live Brute-Force Entropy Estimator",
      hasGameSimulator: true,
      simulatorScript: "js/entropy-estimator.js",
      interactiveHtml: `<p class="quick-check__question">Enter passwords below to analyze character sets, calculate Shannon entropy bits, and estimate offline crack times:</p>
      <div class="entropy-panel">
        <div class="entropy-input-group">
          <label for="entropy-input">Test Password</label>
          <input type="text" id="entropy-input" class="entropy-input" placeholder="Enter a password..." autocomplete="off" spellcheck="false" style="width: 100%;">
        </div>
        <div class="entropy-meter mt-3" style="height: 12px; background: rgba(255, 255, 255, 0.05); border-radius: var(--radius-sm); overflow: hidden;">
          <div id="entropy-fill" style="width: 0%; height: 100%; transition: width 0.25s, background-color 0.25s;"></div>
        </div>
        <div class="entropy-label mt-2" id="entropy-strength-label" style="font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 700;">Enter a password to analyze</div>
        <div class="entropy-stats mt-4">
          <div class="entropy-stat">
            <div class="entropy-stat__label">Entropy</div>
            <div class="entropy-stat__value text-accent-primary" id="stat-entropy-val">—</div>
          </div>
          <div class="entropy-stat">
            <div class="entropy-stat__label">Pool Size</div>
            <div class="entropy-stat__value" id="stat-pool-val">—</div>
          </div>
          <div class="entropy-stat">
            <div class="entropy-stat__label">Search Space</div>
            <div class="entropy-stat__value" id="stat-space-val">—</div>
          </div>
          <div class="entropy-stat">
            <div class="entropy-stat__label">GPU Brute Force</div>
            <div class="entropy-stat__value" id="stat-time-gpu">—</div>
          </div>
          <div class="entropy-stat">
            <div class="entropy-stat__label">Wordlist Cracking</div>
            <div class="entropy-stat__value" id="stat-time-word">—</div>
          </div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Modern authentication guidelines (such as NIST SP 800-63B) favor long passphrases (e.g. <code>correct-horse-battery-staple</code>) over short, complex words (e.g. <code>P@$$w0rd</code>). Passphrases provide exceptionally high entropy ($H \gt 100$ bits) that is resistant to GPU cracking while remaining easy for users to remember.</p>`,
      quiz: [
        {
          question: "Which password attribute provides the largest increase in mathematical Shannon entropy?",
          options: [
            { text: "Adding a single uppercase letter at the start", correct: false, feedback: "Incorrect. Modifying a predictable character slightly increases the pool size, but length is the main multiplier." },
            { text: "Increasing the password length", correct: true, feedback: "Correct! Length acts as the multiplier outside the logarithm, yielding exponential strength gains." },
            { text: "Using a common dictionary word with character substitutions", correct: false, feedback: "Incorrect. Simple substitutions (like a to @) are easily guessed by dictionary rule tools." }
          ]
        },
        {
          question: "An offline attack speed is estimated at 1 billion guesses per second. A password has a search space of 1e12 combinations. Approximately how long would it take to brute force?",
          options: [
            { text: "1,000 seconds", correct: true, feedback: "Correct! 1e12 combinations / 1e9 guesses per second = 1,000 seconds (under 17 minutes)." },
            { text: "1 million seconds", correct: false, feedback: "Incorrect. Math: 1,000,000,000,000 / 1,000,000,000 = 1,000." },
            { text: "Less than 1 second", correct: false, feedback: "Incorrect. The combinations require 1,000 seconds of computation." }
          ]
        },
        {
          question: "What minimum entropy threshold is recommended for critical enterprise administrative passwords?",
          options: [
            { text: "28 Bits", correct: false, feedback: "Incorrect. 28 bits is very weak and easily brute-forced." },
            { text: "80 Bits", correct: true, feedback: "Correct! 80 bits is the industry standard baseline for strong passwords." },
            { text: "50 Bits", correct: false, feedback: "Incorrect. 50 bits provides only moderate protection." }
          ]
        }
      ]
    },
    {
      id: "08",
      number: "MODULE 08",
      category: "Web Application Defense",
      badge: "Defending the Stack",
      title: "Session & Authenticator Hygiene",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="16" r="1.5" fill="currentColor" />
      </svg>`,
      summary: "Implement secure login sessions, protect credentials in storage, and defend against brute-force attacks.",
      explanation: `<p>Authentication hygiene spans how systems verify user credentials and secure active login sessions. Passwords must never be stored in plaintext; instead, they must be hashed using key-stretching algorithms that require salt inputs to neutralize lookup table exploits.</p>
      <p>Once authenticated, the user receives a session cookie. Session management must prevent cookie hijacking. Configuring secure cookie attributes restricts browser transmission and shields session tokens from malicious client scripts.</p>`,
      biggerPicture: `<p>Session security relies on encryption standards from <strong>Module 03: Cryptography & PKI</strong>. It is also reinforced by client-side headers configured in <strong>Module 09: Web Injection & Client Headers</strong> to defend cookies against XSS-based theft.</p>`,
      secondaryBreakdown: `<h4>JWT Token Auth vs. Stateful Session Cookies</h4>
      <p>Web developers manage session states using different architecture approaches depending on scalability needs:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Stateful Cookies</div>
          <p class="compare-card__text">The server generates a session ID, stores it in a database, and sends it to the browser as a cookie. Secure and easily revoked, but requires database lookups for every request.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">JSON Web Tokens (JWT)</div>
          <p class="compare-card__text">Stateless authentication. The server signs user details into a token and sends it to the client. Scalable, but difficult to revoke before expiration.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Salt Hashing (bcrypt)</div>
          <p class="compare-card__text">Cryptographic stretching. Adding a unique salt value before hashing prevents rainbow table attacks on leaked database passwords.</p>
        </div>
      </div>`,
      interactiveTitle: "Interactive Cookie Builder & Auditor",
      interactiveHtml: `<p class="quick-check__question">Configure secure attributes for a session cookie and review the security audits in real-time:</p>
      <div class="cookie-builder-interactive" id="cookie-sandbox">
        <div class="cookie-options-list">
          <label><input type="checkbox" class="cookie-flag" data-attr="HttpOnly"> HttpOnly (Block JavaScript access)</label>
          <label><input type="checkbox" class="cookie-flag" data-attr="Secure"> Secure (Only transmit over HTTPS)</label>
          <label><input type="checkbox" class="cookie-flag" data-attr="SameSite=Strict"> SameSite=Strict (Neutralize CSRF)</label>
        </div>
        <div class="cookie-preview-area mt-4">
          <div class="mono cookie-header-text" id="cookie-header-display">Set-Cookie: session_id=token_value</div>
          <div class="cookie-feedback-box mt-3">
            <strong>Security Assessment:</strong> <span class="text-accent-red" id="cookie-audit-status">CRITICAL VULNERABILITY</span>
          </div>
          <p class="text-sm mt-2" id="cookie-audit-text">Cookie is vulnerable to script theft (XSS) and plaintext network interception (MitM).</p>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Web applications that store session IDs in cookies without the <code>HttpOnly</code> attribute allow attackers exploiting Cross-Site Scripting (XSS) vulnerabilities to steal user sessions via <code>document.cookie</code>. Configuring HttpOnly flags secures session tokens from script access.</p>`,
      quiz: [
        {
          question: "Which cookie attribute prevents client-side scripts (such as JavaScript) from accessing session tokens?",
          options: [
            { text: "Secure", correct: false, feedback: "Incorrect. The Secure attribute ensures the cookie is only sent over HTTPS." },
            { text: "HttpOnly", correct: true, feedback: "Correct! HttpOnly blocks client-side script access to the cookie." },
            { text: "SameSite", correct: false, feedback: "Incorrect. SameSite limits cross-site requests to mitigate CSRF." }
          ]
        },
        {
          question: "Why should MD5 or SHA-256 never be used directly to store user passwords in a database?",
          options: [
            { text: "They are too slow for server logins", correct: false, feedback: "Incorrect. They are actually too fast, which makes them secure." },
            { text: "They do not encrypt the password string", correct: false, feedback: "Incorrect. Hashing is a one-way function, not encryption." },
            { text: "They are too fast and easily targeted by GPU brute-force parallel cracking; slow stretching algorithms (bcrypt, Argon2id) are required", correct: true, feedback: "Correct! Slow hashing algorithms stretch processing times to throttle GPU brute force speeds." }
          ]
        },
        {
          question: "What is the primary security vulnerability mitigated by utilizing a cryptographic Salt when hashing passwords?",
          options: [
            { text: "SQL Injection query modification", correct: false, feedback: "Incorrect. SQLi is mitigated by query parameterization." },
            { text: "Precomputed lookup tables (Rainbow Tables) attacks", correct: true, feedback: "Correct! Unique salts guarantee that duplicate passwords produce different hashes, neutralizing precomputed lookup table attacks." },
            { text: "Session hijacking via cookie sniffing", correct: false, feedback: "Incorrect. Sniffing is mitigated by the Secure cookie flag." }
          ]
        }
      ]
    },
    {
      id: "09",
      number: "MODULE 09",
      category: "Web Application Defense",
      badge: "Defending the Stack",
      title: "Web Injection & Client Headers",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M3 9h18M9 20V9" stroke="currentColor" stroke-width="1.5"/>
      </svg>`,
      summary: "Protect applications against SQL Injection (SQLi) and Cross-Site Scripting (XSS) with validation and security headers.",
      explanation: `<p>Web Injection occurs when untrusted user input is concatenated directly into application commands or queries. The interpreter executes this malicious input as code, resulting in SQL Injection (SQLi) database breaches or Cross-Site Scripting (XSS) client attacks.</p>
      <p>Defending web applications requires a multi-layered approach: validating input via allow-lists, parameterizing queries, encoding outputs, and applying HTTP security headers to enforce safe browser policies.</p>`,
      biggerPicture: `<p>Injection defense is the culmination of application security. Safe query patterns protect the databases discovered during mapping in <strong>Module 06: Network Mapping & Nmap</strong>, while security headers defend session tokens from <strong>Module 08: Session & Authenticator Hygiene</strong>.</p>`,
      secondaryBreakdown: `<h4>Core Client Security Headers</h4>
      <p>Web applications instruct client browsers to enforce security behaviors using HTTP response headers. Each header targets a specific threat:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Content-Security-Policy (CSP)</div>
          <p class="compare-card__text">Declares authorized sources for scripts, styles, and assets. Restricting execution to 'self' and trusted domains mitigates XSS exploitation.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Strict-Transport-Security (HSTS)</div>
          <p class="compare-card__text">Forces the browser to interact with the host domain exclusively over encrypted HTTPS channels, preventing SSL stripping MitM attacks.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">X-Frame-Options</div>
          <p class="compare-card__text">Instructs the browser whether the page can be rendered inside an iframe, neutralizing Clickjacking interface overlays.</p>
        </div>
      </div>`,
      interactiveTitle: "Live SQL Injection Defense Sandbox",
      interactiveHtml: `<p class="quick-check__question">Input SQL queries and toggle between vulnerable and parameterized patterns to audit database outputs:</p>
      <div class="sqli-interactive-sandbox" id="sqli-sandbox">
        <div class="sqli-options-bar">
          <button type="button" class="btn btn--secondary btn--xs sqli-btn active" data-mode="vuln">Vulnerable Concatenation</button>
          <button type="button" class="btn btn--secondary btn--xs sqli-btn" data-mode="secure">Parameterized Query</button>
        </div>
        <div class="sqli-input-row mt-3">
          <label for="sqli-input" class="text-xs">User Input Filter:</label>
          <input type="text" id="sqli-input" class="cipher-input" value="admin' OR '1'='1" style="max-width: 100%; width: 100%;">
        </div>
        <div class="sqli-code-output mt-3">
          <div class="mono text-xs">Generated Query:</div>
          <code class="mono text-sm text-accent-red" id="sqli-query-text">SELECT * FROM users WHERE username = 'admin' OR '1'='1';</code>
        </div>
        <div class="sqli-result-box">
          <div class="mono text-xs text-secondary">Simulated Database Result:</div>
          <code class="sqli-db-output text-accent-green" id="sqli-db-result">[admin_user_row, user2_row, user3_row...] (AUTHENTICATION BYPASSED)</code>
        </div>
        <p class="text-xs mt-2" id="sqli-status-desc">Vulnerability: User input escaped the string boundary. The database executed the OR condition as SQL commands.</p>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Legacy web forms that construct queries using string concatenation allow attackers to bypass login forms by entering <code>' OR '1'='1</code>. Transitioning queries to parameterized frameworks (like Prepared Statements) treats user input exclusively as literal parameters, neutralizing injection attempts.</p>`,
      quiz: [
        {
          question: "Which developer practice is the most effective defense against SQL Injection (SQLi) vulnerabilities?",
          options: [
            { text: "Allow-list input validation", correct: false, feedback: "Incorrect. Validation helps, but is bypassable; parameterized queries are the primary defense." },
            { text: "Parameterized Queries (Prepared Statements)", correct: true, feedback: "Correct! Parameterization forces database engines to treat input strictly as parameters, never as executable code." },
            { text: "Encoding output before rendering to HTML", correct: false, feedback: "Incorrect. Output encoding protects against XSS, not SQLi." }
          ]
        },
        {
          question: "What security risk is specifically mitigated by deploying the Strict-Transport-Security (HSTS) header?",
          options: [
            { text: "Clickjacking frame overlays", correct: false, feedback: "Incorrect. Clickjacking is mitigated by X-Frame-Options or CSP frame-ancestors." },
            { text: "Man-in-the-Middle SSL Stripping attacks", correct: true, feedback: "Correct! HSTS forces browsers to connect exclusively over HTTPS, blocking attempts to downgrade connection security." },
            { text: "Cross-Site Scripting session theft", correct: false, feedback: "Incorrect. XSS is mitigated by CSP and HttpOnly cookies." }
          ]
        },
        {
          question: "How does a Content-Security-Policy (CSP) header mitigate Cross-Site Scripting (XSS) attacks?",
          options: [
            { text: "It filters database inputs for SQL commands", correct: false, feedback: "Incorrect. CSP is a browser-level policy, not a database filter." },
            { text: "It restricts the sources of executable scripts and stylesheets to trusted, declared origins", correct: true, feedback: "Correct! CSP restricts execution to authorized domains, preventing rogue injected scripts from running in the client." },
            { text: "It encrypts stored passwords", correct: false, feedback: "Incorrect. Password encryption is handled by server-side hashing." }
          ]
        }
      ]
    }
  ];
})();
