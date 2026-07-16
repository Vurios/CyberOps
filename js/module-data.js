(function () {
  /* ============================================================
     MODULE DATA — Single Source of Truth
     Detailed definitions, explanations, quizzes, and interactives.
     ============================================================ */

  window.MODULE_DATA = [
    {
      id: "mobile-security",
      number: "MODULE 01",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Mobile Device Security",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <circle cx="12" cy="18" r="1" fill="currentColor"/>
        <path d="M10 6h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      summary: "Control which apps can access your camera, contacts, and location — and know exactly what to do the moment your phone goes missing.",
      explanation: `<p>Your phone is one of the most sensitive devices you own. It holds your bank apps, personal photos, contacts, messages, and email — and many of the apps on it quietly ask for permissions they don't actually need.</p>
      <p><strong>App permissions</strong> are the access rights you grant when an app is installed or first launched. A flashlight app asking for access to your contacts is a red flag. A game asking for your microphone should raise an eyebrow. Getting into the habit of reviewing and restricting these permissions limits how much any single app can expose about your life if it's compromised or sold to data brokers.</p>
      <p>Keeping your phone's operating system and apps updated is equally important — most updates patch security vulnerabilities that attackers actively exploit. Enabling automatic updates means you're protected without having to think about it.</p>`,
      biggerPicture: `<p>Mobile security connects directly to your accounts across every other service. A stolen or compromised phone can give an attacker access to your email, and with email access they can reset passwords on virtually everything else. The habits in this module reinforce topics covered in <strong>Module 08: SIM-Swapping & Account Recovery Hijacking</strong> and <strong>Module 07: QR Code Phishing</strong>, since phones are often the entry point for both attacks.</p>`,
      secondaryBreakdown: `<h4>App Permission Red Flags vs. Normal Requests</h4>
      <p>Not all permission requests are bad — but some patterns signal risk:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Suspicious Requests</div>
          <p class="compare-card__text">A calculator or game requesting microphone, contacts, or precise location access. Any utility app requesting SMS read access. Any app requesting "Device Administrator" rights without a clear reason.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Reasonable Requests</div>
          <p class="compare-card__text">A maps app requesting location. A scanner app requesting camera. A messaging app requesting contacts. A voice recorder requesting microphone. Match the permission to the app's actual purpose.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Lost or Stolen Phone — Act Fast</div>
          <p class="compare-card__text">1. Use "Find My Device" (Android/iOS) to locate or remotely wipe. 2. Change passwords for email and banking immediately from another device. 3. Contact your carrier to suspend the SIM. 4. Sign out of all active sessions via account security dashboards.</p>
        </div>
      </div>`,
      interactiveTitle: "Permission Risk Classifier",
      interactiveHtml: `<p class="quick-check__question">A newly installed app requests the following permissions. Classify each as <strong>Reasonable</strong> or <strong>Suspicious</strong> for the given app type:</p>
      <div class="classifier-interactive" id="classifier-mobile">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>App:</strong> Flashlight &mdash; requests access to your <strong>Contacts list</strong>
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Reasonable">Reasonable</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>App:</strong> Navigation/Maps app &mdash; requests access to your <strong>precise Location</strong>
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Reasonable">Reasonable</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>App:</strong> Casual puzzle game &mdash; requests <strong>Device Administrator</strong> rights
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Reasonable">Reasonable</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2023, a popular Android barcode scanner app with millions of downloads was found collecting user contacts and location data it had no functional need for. The permissions had been quietly requested on install and granted automatically by users who didn't read the prompt. Reviewing and denying such permissions — or uninstalling unused apps — eliminates these invisible data leaks entirely.</p>`,
      quiz: [
        {
          question: "A new free game on your phone requests access to your microphone and SMS messages. What is the most cautious and correct action?",
          options: [
            { text: "Grant both permissions — the game might need them for features", correct: false, feedback: "Incorrect. A game has no legitimate need for SMS or microphone access in most cases. Granting it exposes personal data unnecessarily." },
            { text: "Deny both permissions and check online reviews for known privacy issues", correct: true, feedback: "Correct! Deny unnecessary permissions and investigate the app. If it requires those permissions to run, consider removing it." },
            { text: "Only grant microphone access and deny SMS", correct: false, feedback: "Incorrect. Neither permission is justified for a game. Both should be denied and the app's reputation investigated." }
          ]
        },
        {
          question: "Your phone is stolen. What is the FIRST thing you should do?",
          options: [
            { text: "File a police report", correct: false, feedback: "Incorrect. While important, a police report can wait minutes. Your accounts can be accessed and drained in seconds — secure them first." },
            { text: "Remotely wipe or lock the device using Find My Device, and change your email password from another device", correct: true, feedback: "Correct! Wiping or locking the device and securing your email (which controls password resets) are the most urgent steps." },
            { text: "Wait 24 hours to see if it turns up", correct: false, feedback: "Incorrect. Waiting gives an attacker full access to your accounts. Act immediately." }
          ]
        },
        {
          question: "Why is keeping your phone's operating system updated one of the most important security habits?",
          options: [
            { text: "Updates only add new features and don't affect security", correct: false, feedback: "Incorrect. Security patches are often the primary reason for OS updates, closing vulnerabilities attackers actively exploit." },
            { text: "Updates patch security vulnerabilities that attackers exploit on unpatched devices", correct: true, feedback: "Correct! Many attacks specifically target known vulnerabilities in older OS versions. Staying updated eliminates these exposed entry points." },
            { text: "Updates improve battery life but don't affect app permissions", correct: false, feedback: "Incorrect. Updates frequently include security fixes unrelated to battery life." }
          ]
        }
      ]
    },
    {
      id: "home-wifi-security",
      number: "MODULE 02",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Home Wi-Fi & Router Security",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="20" r="1.5" fill="currentColor"/>
      </svg>`,
      summary: "Lock down your home router so that it doesn't become the weakest link between your devices and the internet.",
      explanation: `<p>Your home router is the gateway between every device in your house and the wider internet. If it's poorly configured, an attacker within radio range — or even remotely — could intercept your traffic, redirect you to fake websites, or use your connection to commit crimes.</p>
      <p>Most routers ship with <strong>default login credentials</strong> (often "admin" / "admin" or "admin" / "password") that are publicly documented online. Changing these is the single most important first step. Beyond that, using a strong Wi-Fi password and ensuring your router runs the latest firmware protects against known vulnerabilities that manufacturers patch regularly.</p>
      <p>The network your "smart" devices (bulbs, cameras, thermostats) connect to is a separate security concern. These devices often have poor security and can be compromised. Placing them on a separate <strong>guest/IoT network</strong> keeps them isolated from your computers and phones.</p>`,
      biggerPicture: `<p>A compromised router affects every device in your home simultaneously — it's the highest-leverage target for a local attacker. Securing it reduces risk for your mobile devices (covered in <strong>Module 01</strong>), and makes public Wi-Fi comparisons (covered in <strong>Module 04: Public Wi-Fi Safety</strong>) more meaningful since you'll understand what you're trading away when you leave your home network.</p>`,
      secondaryBreakdown: `<h4>Essential Router Security Checklist</h4>
      <p>Work through these settings in your router's admin panel (usually found at 192.168.1.1 or 192.168.0.1):</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Change Default Credentials</div>
          <p class="compare-card__text">Log into your router admin page and change the admin username and password immediately. Use a long, unique password — treat it like a banking password. Default credentials are published in public databases.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Use WPA3 or WPA2 Encryption</div>
          <p class="compare-card__text">In your wireless settings, ensure your security mode is set to WPA3 (preferred) or WPA2-AES. Avoid WEP and WPA — these are obsolete and trivially crackable. Set a strong Wi-Fi passphrase of at least 16 characters.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Update Firmware & Isolate IoT</div>
          <p class="compare-card__text">Check for router firmware updates in the admin panel. Enable automatic updates if available. Create a separate guest network for smart home devices so a compromised bulb or camera can't reach your laptop or phone.</p>
        </div>
      </div>`,
      interactiveTitle: "Router Security Risk Identifier",
      interactiveHtml: `<p class="quick-check__question">Each scenario describes a home router configuration. Click the one that is most immediately dangerous:</p>
      <div class="stride-interactive" id="router-risk-analyzer">
        <div class="stride-scenarios-list">
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Critical Risk" data-desc="Default credentials (admin/admin) are still in use. Anyone nearby who accesses your router admin page can redirect all your DNS queries, enable remote management, or change your Wi-Fi password — locking you out of your own network.">Scenario A: Default admin password never changed</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Moderate Risk" data-desc="WPA2 is not ideal — WPA3 is newer and stronger — but WPA2 with a strong password is still reasonable for most home users. Upgrade if your router and devices support WPA3.">Scenario B: Using WPA2 instead of WPA3</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Low Risk" data-desc="SSID hiding provides very little real security — any device actively scanning will still reveal the network name. It creates inconvenience without meaningfully reducing risk. Focus on stronger passwords and firmware updates instead.">Scenario C: SSID (network name) is not hidden</button>
        </div>
        <div class="stride-details-box hidden-element">
          <div class="stride-threat-type">Risk Level: <span class="text-accent-amber" id="stride-threat-name"></span></div>
          <p class="stride-threat-desc" id="stride-threat-desc"></p>
          <div class="stride-mitigation"><strong>Takeaway:</strong> <span id="stride-threat-mit">Review your router admin panel and apply the relevant fix.</span></div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Security researchers from Avast reported in 2019 that over 83% of home routers in Brazil were compromised using default credentials, with attackers changing DNS settings to redirect users to fake banking sites. The victims saw no visible warning — their browser showed the correct URL but they were actually on a fraudulent server. Changing the router admin password alone would have prevented the attack entirely.</p>`,
      quiz: [
        {
          question: "What is the most important first step when setting up a new home router?",
          options: [
            { text: "Hide the Wi-Fi network name (SSID)", correct: false, feedback: "Incorrect. SSID hiding provides almost no real security benefit and doesn't prevent attacks." },
            { text: "Change the default admin username and password", correct: true, feedback: "Correct! Default credentials are publicly known and are the first thing attackers try. Changing them immediately closes the easiest entry point." },
            { text: "Disable the firewall to improve speeds", correct: false, feedback: "Incorrect. Disabling the router firewall removes a critical protection layer and exposes your devices to the internet." }
          ]
        },
        {
          question: "Why should smart home devices (cameras, bulbs, thermostats) be placed on a separate guest network?",
          options: [
            { text: "To give them faster speeds than your main devices", correct: false, feedback: "Incorrect. Network isolation is a security measure, not a performance one. The goal is to limit damage if a device is compromised." },
            { text: "To isolate them so a compromised device cannot reach your computers and phones", correct: true, feedback: "Correct! IoT devices often have poor security. Isolating them on a guest network means a compromised smart bulb can't be used as a stepping stone to your laptop." },
            { text: "Because smart devices don't need internet access", correct: false, feedback: "Incorrect. Most smart devices require internet access to function, but they should be isolated from your main network." }
          ]
        },
        {
          question: "Which Wi-Fi security protocol should you use if your router supports it?",
          options: [
            { text: "WEP — it is the most widely supported", correct: false, feedback: "Incorrect. WEP was broken decades ago and can be cracked in minutes. Never use it." },
            { text: "WPA3 — it is the most current and secure standard", correct: true, feedback: "Correct! WPA3 is the current standard and offers stronger protection against password guessing attacks compared to WPA2." },
            { text: "No encryption — it doesn't matter on a home network", correct: false, feedback: "Incorrect. An unencrypted Wi-Fi network allows anyone nearby to intercept all traffic on that connection." }
          ]
        }
      ]
    },
    {
      id: "social-media-privacy",
      number: "MODULE 03",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Social Media Privacy & Oversharing",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="5" r="3" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <circle cx="6" cy="12" r="3" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <circle cx="18" cy="19" r="3" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      summary: "Understand what your social media posts reveal about you — and how to tighten your privacy settings before that information is used against you.",
      explanation: `<p>Social media profiles are a goldmine for attackers. Your birthdate, hometown, employer, family members' names, pet names, and school are all common password recovery answers — and many people post this information publicly without thinking twice.</p>
      <p>Beyond account security, <strong>oversharing location data</strong> (especially real-time check-ins, or photos with embedded GPS coordinates) tells strangers when you're away from home, which is useful for burglars. Posting photos of boarding passes, tickets, or ID documents leaks booking reference numbers and personal data that can be used to cancel reservations, access accounts, or commit identity fraud.</p>
      <p>Privacy settings on major platforms default to maximum visibility. Auditing them periodically — limiting who can see your posts, your friends list, and your profile details — dramatically reduces your attack surface without giving up the social connection itself.</p>`,
      biggerPicture: `<p>The information you share publicly on social media feeds directly into social engineering attacks (targeted phishing, spear-phishing, and impersonation attempts). Understanding what attackers harvest from social profiles makes the AI-generated scam awareness covered in <strong>Module 06: Deepfakes & AI Scams</strong> far more concrete — they need personal details to make fakes convincing.</p>`,
      secondaryBreakdown: `<h4>High-Risk Sharing Patterns vs. Safe Habits</h4>
      <p>Compare what's commonly shared vs. what's safe to share publicly:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">High-Risk Shares</div>
          <p class="compare-card__text">Real-time location check-ins. Photos taken at home that reveal your address or neighbourhood. Images of travel documents, concert tickets, or boarding passes. Announcing you're on holiday (signals an empty home). Posting pet names, mother's maiden name, or school names that match security questions.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Platform Privacy Settings to Review</div>
          <p class="compare-card__text">Set post visibility to "Friends Only" or a custom list. Hide your friends list from public view. Disable location tagging on posts by default. Remove your phone number and birthdate from your public profile. Turn off search engine indexing of your profile if available.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Photo Metadata (EXIF Data)</div>
          <p class="compare-card__text">Photos taken on smartphones embed GPS coordinates, device model, and timestamp into the image file. Most platforms strip this data on upload, but messaging apps and email often don't. Use an EXIF remover before sharing photos directly to reduce location exposure.</p>
        </div>
      </div>`,
      interactiveTitle: "Oversharing Risk Assessor",
      interactiveHtml: `<p class="quick-check__question">Rate each post as <strong>Low Risk</strong> or <strong>High Risk</strong> from a privacy and security perspective:</p>
      <div class="classifier-interactive" id="classifier-social">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>Post:</strong> "Just checked in at the airport ✈️ — off to Bali for 2 weeks! House-sitter fell through so flying solo 😅"
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="High Risk">High Risk</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Low Risk">Low Risk</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>Post:</strong> A photo of a home-cooked meal shared with friends-only visibility, no location tag
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="High Risk">High Risk</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Low Risk">Low Risk</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>Post:</strong> A photo of a boarding pass with the barcode visible, captioned "Finally heading home!"
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="High Risk">High Risk</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Low Risk">Low Risk</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2010, the website "PleaseRobMe.com" was created as a public demonstration — it aggregated real-time Foursquare check-ins to show how many people were publicly announcing they weren't home. Though the site was shut down quickly, it proved that combining real-time location data with public profiles creates a practical directory of empty homes. This tactic is still used by burglars who monitor social media to plan break-ins around announced holidays and trips.</p>`,
      quiz: [
        {
          question: "Why is posting a photo of your boarding pass on social media a security risk?",
          options: [
            { text: "Airlines can cancel your ticket if they see it posted", correct: false, feedback: "Incorrect. Airlines don't monitor social media for this. The risk is from other users." },
            { text: "The barcode encodes your booking reference and name, which can be used to access or cancel your reservation", correct: true, feedback: "Correct! Barcodes on boarding passes encode booking references that allow anyone to access your reservation, view personal details, or even cancel your flight." },
            { text: "Only your flight number is visible, which isn't sensitive", correct: false, feedback: "Incorrect. Boarding pass barcodes contain far more than just the flight number, including your full name and booking reference code." }
          ]
        },
        {
          question: "Which of the following social media habits best reduces your risk of being targeted by a social engineering attack?",
          options: [
            { text: "Using a nickname on your profile instead of your real name", correct: false, feedback: "Incorrect. Pseudonyms can be useful but don't address the core risk of information leakage through post content and shared details." },
            { text: "Reviewing and restricting who can see your posts, friends list, and profile details", correct: true, feedback: "Correct! Limiting the visibility of your profile and posts removes the publicly accessible information attackers use to craft convincing, personalized attacks." },
            { text: "Only posting about work-related topics", correct: false, feedback: "Incorrect. Professional information (employer, role, colleagues) is also valuable to attackers for business email compromise and phishing." }
          ]
        },
        {
          question: "What is EXIF data and why does it matter for photos you share?",
          options: [
            { text: "The image file format — it affects photo quality but not privacy", correct: false, feedback: "Incorrect. EXIF is metadata embedded in the image file, not the format itself." },
            { text: "Metadata embedded in photos that can include GPS coordinates, device model, and timestamp", correct: true, feedback: "Correct! EXIF data in unstripped photos can reveal exactly where and when a photo was taken, potentially exposing your home location or daily patterns." },
            { text: "A photo editing filter that changes image colours", correct: false, feedback: "Incorrect. EXIF is metadata, not a visual feature of the image." }
          ]
        }
      ]
    },
    {
      id: "public-wifi-safety",
      number: "MODULE 04",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Public Wi-Fi Safety",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round"/>
        <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="12" cy="20" r="1.5" fill="currentColor"/>
        <line x1="4" y1="4" x2="20" y2="20" stroke="var(--accent-red, #e05252)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      summary: "Using café or airport Wi-Fi exposes you to real risks — learn what's actually dangerous and what a VPN actually protects you from.",
      explanation: `<p>Public Wi-Fi networks — in cafés, airports, hotels, and libraries — are convenient but come with security trade-offs. The biggest risk is not that someone will hack you just for connecting; it's the specific attack types that become easier on shared networks.</p>
      <p>The most practical threat is the <strong>evil twin attack</strong>: an attacker sets up a Wi-Fi hotspot with a name identical to the legitimate network (e.g. "Starbucks_WiFi") and captures all traffic from devices that connect. A second concern is <strong>unencrypted traffic interception</strong> — though less relevant today since most websites use HTTPS, some older services and apps still transmit data in plaintext.</p>
      <p>A <strong>VPN (Virtual Private Network)</strong> encrypts the tunnel between your device and the VPN server, making your traffic unreadable to anyone on the same local network — including a café owner or evil twin. It doesn't make you invisible to websites you visit, but it does protect you on the local network segment.</p>`,
      biggerPicture: `<p>Public Wi-Fi risk connects to your understanding of encryption from the core modules — when traffic isn't encrypted end-to-end, it's readable by network intermediaries. The VPN concepts here complement the home router isolation discussed in <strong>Module 02: Home Wi-Fi Security</strong>, since understanding what your router does makes the value of a VPN on public networks clearer.</p>`,
      secondaryBreakdown: `<h4>What a VPN Does (and Doesn't) Protect</h4>
      <p>VPNs are widely misunderstood. Here's an honest breakdown:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">VPN Does Protect</div>
          <p class="compare-card__text">Traffic interception on the local network (café, hotel, airport). Your ISP seeing which sites you visit. Evil twin network traffic snooping. Location-based content restrictions (for streaming services).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">VPN Does NOT Protect</div>
          <p class="compare-card__text">Against malware already on your device. Against websites tracking you via cookies and fingerprinting. Against phishing — you can still click a malicious link. Against a VPN provider that logs and sells your data. Your VPN provider can see your traffic, so choose a reputable one.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Safe Habits Without a VPN</div>
          <p class="compare-card__text">Only use HTTPS sites (look for the padlock). Avoid logging into banking or financial apps on public Wi-Fi. Use your phone's mobile data hotspot instead of public Wi-Fi for sensitive tasks. Forget the network after use so your device doesn't auto-connect next time.</p>
        </div>
      </div>`,
      interactiveTitle: "Public Wi-Fi Risk Scenario Checker",
      interactiveHtml: `<p class="quick-check__question">Select each scenario to understand the actual risk level on public Wi-Fi:</p>
      <div class="stride-interactive" id="wifi-risk-analyzer">
        <div class="stride-scenarios-list">
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="High Risk" data-desc="Connecting to a network named 'Airport_Free_WiFi' without verifying it's the official network. An evil twin attack uses a matching name. All your unencrypted traffic and login attempts on HTTP sites are visible to the attacker's device.">Scenario A: Connecting to unverified 'Airport_Free_WiFi'</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Low Risk" data-desc="HTTPS encrypts traffic between your browser and the website's server, so even if someone intercepts it on the local network they only see encrypted data. Browsing HTTPS sites on public Wi-Fi is generally safe — though still avoid entering sensitive data if possible.">Scenario B: Browsing an HTTPS news website at a café</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="High Risk" data-desc="Logging into your bank on public Wi-Fi, even over HTTPS, is risky. Session cookies could be intercepted if any part of the bank's site falls back to HTTP. Use mobile data or a VPN for banking tasks.">Scenario C: Logging into online banking at a hotel</button>
        </div>
        <div class="stride-details-box hidden-element">
          <div class="stride-threat-type">Risk Level: <span class="text-accent-amber" id="stride-threat-name"></span></div>
          <p class="stride-threat-desc" id="stride-threat-desc"></p>
          <div class="stride-mitigation"><strong>Recommendation:</strong> <span id="stride-threat-mit">Use mobile data or a reputable VPN for any sensitive tasks on public networks.</span></div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>Security researchers at DEF CON (an annual hacker conference) operate a "Wall of Sheep" — a public display of usernames and partial passwords intercepted from conference attendees who connect to unencrypted networks or services. Even at a security conference, dozens of attendees have their credentials captured every year. The lesson: treat any network you don't control as hostile, and adjust your behaviour accordingly.</p>`,
      quiz: [
        {
          question: "What is an 'evil twin' attack in the context of public Wi-Fi?",
          options: [
            { text: "A virus that creates duplicate files on your device", correct: false, feedback: "Incorrect. An evil twin attack is a network-level attack, not a file-level malware." },
            { text: "A fake Wi-Fi hotspot with a name matching a legitimate network, designed to intercept your traffic", correct: true, feedback: "Correct! An attacker creates a hotspot with the same name as a trusted network. Devices that auto-connect or users who manually connect route all their traffic through the attacker's equipment." },
            { text: "An attacker who creates a copy of your social media profile", correct: false, feedback: "Incorrect. That would be a social media impersonation attack, not an evil twin." }
          ]
        },
        {
          question: "Which of the following tasks is SAFEST to perform on a public Wi-Fi network without a VPN?",
          options: [
            { text: "Logging into your online bank account", correct: false, feedback: "Incorrect. Banking on public Wi-Fi — even over HTTPS — carries risk from session hijacking and network-level interception. Use mobile data instead." },
            { text: "Reading articles on an HTTPS news website", correct: true, feedback: "Correct! Browsing HTTPS content that doesn't require you to log in or enter sensitive data is the lowest-risk activity on a public network." },
            { text: "Making online purchases with your credit card", correct: false, feedback: "Incorrect. Entering payment details on public Wi-Fi is risky. Use mobile data or a trusted VPN." }
          ]
        },
        {
          question: "What does a VPN actually do to protect you on public Wi-Fi?",
          options: [
            { text: "It makes you completely anonymous online and hides you from all websites", correct: false, feedback: "Incorrect. VPNs don't make you anonymous — websites can still track you via cookies and browser fingerprinting. Your VPN provider can also see your traffic." },
            { text: "It encrypts the connection between your device and the VPN server, protecting your traffic from others on the local network", correct: true, feedback: "Correct! A VPN creates an encrypted tunnel so anyone on the same café or hotel network — including an evil twin — only sees encrypted data." },
            { text: "It blocks all malware and phishing attacks automatically", correct: false, feedback: "Incorrect. A VPN doesn't block phishing or malware. You can still click a bad link and get infected even with a VPN active." }
          ]
        }
      ]
    },
    {
      id: "backup-strategy",
      number: "MODULE 05",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Personal Backup Strategy",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="7 10 12 15 17 10" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
      summary: "One device failure or ransomware attack can wipe everything. A simple 3-2-1 backup plan protects your photos, documents, and memories permanently.",
      explanation: `<p>Losing irreplaceable photos, important documents, or years of work is devastating — and it happens regularly, not just to careless people. Hard drives fail mechanically. Ransomware encrypts everything on your device and demands payment. Phones get dropped, stolen, or water-damaged. Without a backup, any of these events causes permanent data loss.</p>
      <p>The industry-standard backup principle is the <strong>3-2-1 rule</strong>: keep <strong>3 copies</strong> of your data, on <strong>2 different types of storage media</strong>, with <strong>1 copy stored off-site</strong> (typically in cloud storage). This means a single disaster — a house fire, a ransomware infection, or a stolen laptop — can't destroy all copies simultaneously.</p>
      <p>Backups are only useful if they are <strong>tested</strong>. A backup you've never verified might be corrupted, incomplete, or stored in a format you can no longer open. Periodically restoring a test file ensures your backup actually works when you need it.</p>`,
      biggerPicture: `<p>Backup strategy is your last line of defence against ransomware — a type of attack where criminals encrypt your files and demand payment to restore access. If you have a clean, offline backup, ransomware loses almost all its leverage. This connects directly to the personal incident response steps in <strong>Module 09</strong>, where having verified backups is Step 1 of recovery.</p>`,
      secondaryBreakdown: `<h4>The 3-2-1 Backup Rule Explained</h4>
      <p>Here's how to apply the rule in practice for personal use:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">3 Copies of Your Data</div>
          <p class="compare-card__text">Original data on your primary device + one external hard drive backup + one cloud backup. Having three copies means two copies must fail simultaneously before you lose data — which is statistically very unlikely.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">2 Different Types of Media</div>
          <p class="compare-card__text">Don't rely on three copies on the same type of device. Combine: device storage + external drive + cloud. This protects against media-specific failure modes (e.g., a firmware bug that corrupts all SSDs of the same model).</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">1 Off-Site Copy</div>
          <p class="compare-card__text">A cloud service (iCloud, Google Drive, Backblaze, OneDrive) counts as an off-site copy. It protects against physical disasters: fire, flood, or theft that destroys everything in your home. Enable automatic cloud backup for photos specifically — they're the most irreplaceable files most people own.</p>
        </div>
      </div>`,
      interactiveTitle: "Backup Coverage Evaluator",
      interactiveHtml: `<p class="quick-check__question">Evaluate each backup setup. Choose whether it satisfies the 3-2-1 rule:</p>
      <div class="classifier-interactive" id="classifier-backup">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>Setup:</strong> Photos exist on your phone only. You have not set up any cloud backup or external drive.
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Fails 3-2-1">Fails 3-2-1</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Passes 3-2-1">Passes 3-2-1</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>Setup:</strong> Documents are saved on your laptop and automatically backed up to iCloud. You also have a weekly copy on an external hard drive stored at work.
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Fails 3-2-1">Fails 3-2-1</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Passes 3-2-1">Passes 3-2-1</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>Setup:</strong> You have two external hard drives with identical backups, both kept at home next to your computer.
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Fails 3-2-1">Fails 3-2-1</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Passes 3-2-1">Passes 3-2-1</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>The WannaCry ransomware attack in 2017 affected over 200,000 devices across 150 countries, including hospitals, businesses, and government agencies. Organisations that had clean, offline backups were able to restore systems within hours. Those that didn't faced a choice: pay the ransom (with no guarantee of recovery) or lose everything permanently. For individuals, the same principle applies: a single offline backup copy makes ransomware almost powerless against you.</p>`,
      quiz: [
        {
          question: "What does the '1' in the 3-2-1 backup rule refer to?",
          options: [
            { text: "One backup should be made per week", correct: false, feedback: "Incorrect. The 3-2-1 rule refers to the number and location of copies, not backup frequency." },
            { text: "One copy should be stored off-site or in the cloud", correct: true, feedback: "Correct! The off-site copy protects against physical disasters — fire, flood, or theft — that could destroy every copy in a single location." },
            { text: "One backup should use encryption", correct: false, feedback: "Incorrect. While encrypting backups is good practice, the '1' refers to off-site storage, not encryption." }
          ]
        },
        {
          question: "Why is it important to periodically test your backups by restoring a file?",
          options: [
            { text: "To practise using the backup software more efficiently", correct: false, feedback: "Incorrect. The primary reason is verification — backups can be corrupt or incomplete without you knowing." },
            { text: "Because backups can be corrupt, incomplete, or unreadable — and you won't know until you test them", correct: true, feedback: "Correct! An untested backup is an unreliable backup. Restoring a sample file regularly confirms that your backup system is actually working." },
            { text: "To keep your backup software license active", correct: false, feedback: "Incorrect. Software licensing is unrelated to backup integrity testing." }
          ]
        },
        {
          question: "How does having a clean offline backup reduce the impact of a ransomware attack?",
          options: [
            { text: "It prevents ransomware from being installed on your device", correct: false, feedback: "Incorrect. Backups don't prevent infection — they enable recovery. You still need antivirus and careful browsing habits to prevent installation." },
            { text: "It allows you to restore your files without paying the ransom, removing the attackers' leverage", correct: true, feedback: "Correct! Ransomware's power comes from having your only copies of files. If you have a clean backup, you can restore everything and ignore the ransom demand." },
            { text: "It automatically detects and quarantines ransomware", correct: false, feedback: "Incorrect. Backups are a recovery tool, not a detection tool. Detection is handled by antivirus and endpoint security software." }
          ]
        }
      ]
    },
    {
      id: "deepfake-ai-scams",
      number: "MODULE 06",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Deepfakes & AI-Generated Scams",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 5l4-3M9 5L5 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M17 12l3 1M7 12l-3 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      summary: "AI can now clone a voice in seconds and generate a convincing video of anyone. Learn to spot these fakes before they cost you money or your trust.",
      explanation: `<p>AI-generated media — commonly called <strong>deepfakes</strong> — use machine learning to create realistic fake images, videos, and audio. The technology has reached a point where a 10-second voice recording is enough to clone someone's voice convincingly, and a few photos are enough to create a video that appears to show that person saying or doing something they never did.</p>
      <p>Criminals use this technology in several ways. <strong>Voice cloning scams</strong> involve calling someone's elderly parent with a cloned voice of their child, claiming to be in an emergency and asking for an urgent bank transfer. <strong>Fake CEO fraud</strong> uses cloned executive voices or video calls to convince finance employees to wire money. <strong>Romance scams</strong> increasingly use AI-generated profile photos and even video calls where a deepfake overlays a real person's face.</p>
      <p>The good news: deepfakes still have tells — unnatural blinking, audio-video sync issues, weird lighting around the hairline, and a lack of contextual details the real person would know. Verification via a separate channel (calling back on a known number) defeats most AI voice scams regardless of quality.</p>`,
      biggerPicture: `<p>Deepfake and AI scam awareness connects to the oversharing risks covered in <strong>Module 03: Social Media Privacy</strong> — the photos, videos, and voice samples you post publicly are the raw material attackers use to create convincing fakes of you or your loved ones. The verification habits this module teaches also reinforce the personal incident response steps in <strong>Module 09</strong>.</p>`,
      secondaryBreakdown: `<h4>Common AI Scam Types & Detection Signals</h4>
      <p>Know the attack patterns and the signals that reveal them:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Voice Cloning Emergency Scam</div>
          <p class="compare-card__text">A panicked "family member" calls saying they're in jail, hospital, or an accident and need money urgently. Key tells: they won't call back on their real number, the story has emotional urgency to bypass thinking, and they ask for wire transfer or gift cards (irreversible payments). Always hang up and call the real person's known number directly.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Deepfake Video Tells</div>
          <p class="compare-card__text">Unnatural blinking or no blinking. Facial features blurring or warping at edges during movement. Lighting that doesn't match the environment. Teeth and ears that look slightly wrong. Audio that doesn't quite sync with lip movement. Background that stays unnaturally still or blurs.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Verification Protocol</div>
          <p class="compare-card__text">For any urgent financial request via call or video: (1) hang up or end the call, (2) call the person back using a number you already have saved — not one they provide, (3) ask something only the real person would know. This defeats nearly all AI voice and video scams, regardless of quality.</p>
        </div>
      </div>`,
      interactiveTitle: "AI Scam Red Flag Identifier",
      interactiveHtml: `<p class="quick-check__question">Identify whether each scenario contains red flags for an AI-generated scam:</p>
      <div class="classifier-interactive" id="classifier-deepfake">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> You receive a call from a voice that sounds exactly like your daughter. She says she's been in a car accident abroad and needs £1,200 transferred to a new account she gives you — and asks you not to worry her mother about it yet.
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Scam Red Flags">Scam Red Flags</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Likely Genuine">Likely Genuine</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> Your manager sends a calendar invite for a video call and then, during the call, discusses a project you're both working on with details only your team would know. They ask you to review a document after the call.
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Scam Red Flags">Scam Red Flags</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Likely Genuine">Likely Genuine</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> You receive an unexpected video call from someone claiming to be your bank's fraud team. The person's face looks slightly blurry around the hairline and they ask for your full card number to "verify your identity."
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Scam Red Flags">Scam Red Flags</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Likely Genuine">Likely Genuine</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2024, a Hong Kong finance employee was tricked into transferring HK$200 million (approximately US$25 million) after attending a video conference call where the "CFO" and several "colleagues" were entirely deepfake AI recreations. The employee had initial doubts after receiving a suspicious email but was convinced by the video call. The incident highlighted that even technically skilled professionals can be deceived by high-quality deepfakes — making the out-of-band verification protocol (hanging up and calling back on a known number) essential.</p>`,
      quiz: [
        {
          question: "You receive an urgent call from what sounds exactly like your parent's voice, saying they've been arrested abroad and need bail money wired immediately. What should you do?",
          options: [
            { text: "Wire the money immediately — it sounds genuinely like them", correct: false, feedback: "Incorrect. Voice cloning technology can reproduce voices from short recordings. The urgency and wire transfer request are classic manipulation tactics." },
            { text: "Hang up and call your parent back on their real saved number to verify", correct: true, feedback: "Correct! This single step defeats the scam entirely. Calling back on a known number reaches the real person and confirms whether the emergency is real." },
            { text: "Ask them to describe a memory to prove who they are, then wire the money", correct: false, feedback: "Incorrect. Scammers can research personal details from social media. The only safe verification is calling back independently on a known number." }
          ]
        },
        {
          question: "Which visual signal is a common tell that a video call is using a deepfake overlay?",
          options: [
            { text: "The person blinks too frequently", correct: false, feedback: "Incorrect. Blinking too infrequently (or unnaturally) is the common deepfake tell, not too frequently." },
            { text: "Facial edges appear blurry or the lighting on the face doesn't match the environment", correct: true, feedback: "Correct! Current deepfake technology often struggles with facial boundaries, hair edges, and matching environmental lighting precisely." },
            { text: "The person speaks too clearly without background noise", correct: false, feedback: "Incorrect. Clear audio is not a deepfake indicator — it's simply a sign of a good microphone." }
          ]
        },
        {
          question: "Why does a scammer insist that the money be transferred via wire transfer or gift cards rather than standard bank transfer?",
          options: [
            { text: "Because these methods are faster and the person is in a genuine emergency", correct: false, feedback: "Incorrect. The method is chosen specifically because it cannot be reversed or traced, which protects the scammer, not the victim." },
            { text: "Because wire transfers and gift cards are irreversible, leaving victims with no way to recover the money", correct: true, feedback: "Correct! Scammers specify irreversible payment methods specifically because chargebacks or cancellations are impossible, eliminating the victim's recourse." },
            { text: "Because bank accounts are too slow for international transactions", correct: false, feedback: "Incorrect. International bank transfers work fine. Gift cards and wire transfers are chosen for their irreversibility, not speed." }
          ]
        }
      ]
    },
    {
      id: "qr-phishing",
      number: "MODULE 07",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "QR Code Phishing (Quishing)",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="2"/>
        <rect x="5" y="5" width="3" height="3" fill="currentColor"/>
        <rect x="16" y="5" width="3" height="3" fill="currentColor"/>
        <rect x="5" y="16" width="3" height="3" fill="currentColor"/>
        <path d="M14 14h3v3M17 17h3v3M14 20h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "QR codes are just URLs in disguise — and attackers are printing fake ones over legitimate ones in public places to steal your credentials.",
      explanation: `<p>A QR code is nothing more than a visual encoding of a URL. Scanning one is exactly the same as clicking an unknown link — except your brain can't read the URL before your phone opens it. This makes QR codes a particularly effective phishing tool.</p>
      <p><strong>Quishing</strong> (QR code phishing) works in several ways: attackers print fraudulent QR code stickers and paste them over legitimate codes on parking meters, restaurant menus, or public posters. They also send QR codes via email to bypass text-based phishing filters (since the malicious URL is embedded in an image rather than text). Scanning takes you to a convincing fake website — a parking payment portal, a bank login page, or a parcel tracking form — where you enter your credentials or payment details.</p>
      <p>The key defence is the same as all phishing: <strong>preview the URL before acting on it</strong>. Most phone camera apps show a preview of where the QR code leads before you tap to open it. Check that the domain matches what you expect — a parking meter QR code claiming to go to "xn--prkng-pay.ru" is not a legitimate parking service.</p>`,
      biggerPicture: `<p>Quishing is a variation of the phishing attacks that underpin most account compromises. The principles here connect directly with the general phishing awareness concepts elsewhere in the curriculum, and the credential theft that QR phishing enables feeds into the account recovery hijacking covered in <strong>Module 08: SIM-Swapping & Account Recovery Hijacking</strong>.</p>`,
      secondaryBreakdown: `<h4>Common Quishing Attack Scenarios</h4>
      <p>Knowing where these attacks occur helps you stay alert in the right contexts:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Physical Overlay Attacks</div>
          <p class="compare-card__text">A fake QR sticker is placed over a legitimate one on a parking meter, EV charging station, restaurant table, or public poster. Always inspect the physical area around a QR code — if the sticker looks misaligned, layered, or unofficial, don't scan it. Use the official app or website instead.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Email Quishing</div>
          <p class="compare-card__text">A QR code is embedded in an email claiming you need to verify your account, pay an overdue invoice, or collect a parcel. Email security tools filter URLs in text but often miss malicious URLs hidden inside images. Treat any emailed QR code with the same scepticism you would an unfamiliar link.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Before You Scan — Check List</div>
          <p class="compare-card__text">1. Preview the URL in your camera app before tapping. 2. Verify the domain matches the expected service. 3. Look for physical signs of tampering on the code itself. 4. For important transactions (parking, payments), use the official app directly instead of scanning. 5. Never enter credentials on a page reached via a QR code in an email.</p>
        </div>
      </div>`,
      interactiveTitle: "QR Destination URL Safety Check",
      interactiveHtml: `<p class="quick-check__question">You scan a QR code and your camera shows you the destination URL before opening it. Classify each URL as <strong>Safe to Open</strong> or <strong>Suspicious</strong>:</p>
      <div class="classifier-interactive" id="classifier-qr">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>QR Source:</strong> Restaurant table tent &mdash; URL preview shows: <code>https://menu.restaurant-xyz.com/table/12</code>
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Safe to Open">Safe to Open</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>QR Source:</strong> Parking meter &mdash; URL preview shows: <code>http://park-pay-secure-meter.xyz/pay</code>
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Safe to Open">Safe to Open</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>QR Source:</strong> Email from "your bank" &mdash; URL preview shows: <code>https://1ogin-secure.barclays-verification.com/verify</code>
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Safe to Open">Safe to Open</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Suspicious">Suspicious</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2023, the US Federal Trade Commission warned that QR code scams had become widespread at parking meters across multiple US cities. Fake payment stickers were placed directly over official city-issued QR codes, directing drivers to fraudulent payment pages that captured card numbers. The FBI subsequently reported that quishing had become one of the fastest-growing phishing vectors, specifically because most email security tools filter text-based URLs but pass image-embedded QR codes through unchecked.</p>`,
      quiz: [
        {
          question: "Why is scanning a QR code considered the same risk as clicking an unknown link?",
          options: [
            { text: "QR codes always download malware immediately when scanned", correct: false, feedback: "Incorrect. QR codes simply encode a URL — the risk is the same as clicking any link, not an automatic malware download." },
            { text: "A QR code is just a visual URL — scanning it opens a website you haven't had a chance to evaluate first", correct: true, feedback: "Correct! The difference is that you can read a text link and evaluate it, but a QR code hides the destination URL until you scan it." },
            { text: "QR codes bypass phone security settings", correct: false, feedback: "Incorrect. QR codes don't bypass phone security — they simply redirect you to a URL, which your browser then opens normally." }
          ]
        },
        {
          question: "You find a QR code on a parking meter. What is the safest approach before paying?",
          options: [
            { text: "Scan the QR code and enter your payment details if the page looks official", correct: false, feedback: "Incorrect. Fraudulent pages are designed to look official. The page's appearance is not a reliable trust signal." },
            { text: "Preview the URL in your camera app, verify the domain matches the official parking provider, or use the official app instead", correct: true, feedback: "Correct! Previewing the URL and comparing it against the expected official domain catches most overlay attacks. Using the official app bypasses the QR code entirely." },
            { text: "Only scan if the QR code is printed, not a sticker", correct: false, feedback: "Incorrect. Fraudulent stickers are designed to look printed and official. Physical appearance alone is insufficient." }
          ]
        },
        {
          question: "Why do attackers use QR codes in phishing emails instead of plain text links?",
          options: [
            { text: "Because QR codes load faster than text links in email", correct: false, feedback: "Incorrect. Loading speed is not a factor — QR codes and text links both resolve to the same web page." },
            { text: "Because many email security filters scan text URLs but don't analyse URLs hidden inside images", correct: true, feedback: "Correct! Embedding a malicious URL inside a QR code image allows it to bypass text-based URL filtering tools in email security gateways." },
            { text: "Because users are more likely to trust a QR code than a text link", correct: false, feedback: "Partially true psychologically, but the technical evasion of email filters is the primary attacker motivation." }
          ]
        }
      ]
    },
    {
      id: "sim-swapping",
      number: "MODULE 08",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "SIM-Swapping & Account Recovery Hijacking",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="url(#hero-brand-grad)" stroke-width="2"/>
        <path d="M9 7h6M9 11h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M15 17l2-2-2-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17 15H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
      summary: "Attackers can take over your phone number with a single call to your carrier — and then use it to reset every account that uses SMS for verification.",
      explanation: `<p>A SIM swap attack happens when an attacker convinces your mobile carrier to transfer your phone number to a SIM card they control. They do this by impersonating you using personal information gathered from data breaches, social media, or previous phishing attacks — answering your carrier's security questions with details they've found online.</p>
      <p>Once they control your number, every service that uses <strong>SMS-based two-factor authentication (2FA)</strong> is instantly vulnerable. They request a "forgot password" on your email, the SMS code is sent to their SIM, and they reset your email password. With email access, they can reset passwords on your bank, social media, and any other account linked to that email address.</p>
      <p>The defence has two layers: (1) use an <strong>authenticator app</strong> (like Google Authenticator or Authy) instead of SMS for 2FA wherever possible — these are tied to the physical device, not the phone number; and (2) call your carrier to add a <strong>SIM lock or port freeze</strong>, requiring a PIN or in-person verification before any number transfer can occur.</p>`,
      biggerPicture: `<p>SIM swapping is the attacker's way of circumventing even strong account security. This attack connects to mobile security habits from <strong>Module 01</strong> (protecting the physical device where your authenticator app lives) and the personal incident response in <strong>Module 09</strong>, which covers what to do if you suspect your SIM has been swapped.</p>`,
      secondaryBreakdown: `<h4>SMS 2FA vs. Authenticator App vs. Hardware Key</h4>
      <p>Not all two-factor authentication methods offer the same protection:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">SMS 2FA — Weakest</div>
          <p class="compare-card__text">A code is texted to your phone number. Vulnerable to SIM swapping (your number is hijacked), SS7 network attacks (SMS is intercepted at the network level), and SIM cloning. Better than no 2FA, but use it only when no alternative exists.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Authenticator App — Recommended</div>
          <p class="compare-card__text">Generates time-based codes (TOTP) tied to the physical device, not the phone number. A SIM swap doesn't help an attacker because they don't have your device. Use Google Authenticator, Authy, or Microsoft Authenticator. Back up your seeds when setting up.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Hardware Security Key — Strongest</div>
          <p class="compare-card__text">A physical device (like a YubiKey) you plug in or tap to authenticate. Immune to SIM swapping, phishing, and most remote attacks. Requires physical possession of the key to log in. The gold standard for high-value accounts.</p>
        </div>
      </div>`,
      interactiveTitle: "Account Recovery Attack Chain Analyser",
      interactiveHtml: `<p class="quick-check__question">Follow the attack chain. Select the step where the attacker first gains full account access:</p>
      <div class="stride-interactive" id="simswap-analyzer">
        <div class="stride-scenarios-list">
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Step 1 — Reconnaissance" data-desc="The attacker researches the victim using LinkedIn, social media, and data breach databases to collect: full name, date of birth, address, last 4 digits of the previous phone, and the carrier's name. Not yet a breach — just information gathering.">Step 1: Attacker researches victim details from social media</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Step 2 — SIM Hijack (Critical)" data-desc="The attacker calls the carrier, impersonates the victim using the researched details, and convinces a support agent to transfer the phone number to a new SIM. The victim's phone immediately loses signal. The attacker now controls the victim's phone number.">Step 2: Attacker calls carrier and transfers victim's number</button>
          <button type="button" class="btn btn--secondary btn--xs stride-scenario-btn" data-threat="Step 3 — Account Takeover" data-desc="With the phone number, the attacker triggers 'forgot password' on the victim's email. The SMS code arrives on their SIM. They reset the email password and then cascade to bank, social media, and other accounts linked to that email.">Step 3: Attacker resets email using SMS code to new SIM</button>
        </div>
        <div class="stride-details-box hidden-element">
          <div class="stride-threat-type">Phase: <span class="text-accent-amber" id="stride-threat-name"></span></div>
          <p class="stride-threat-desc" id="stride-threat-desc"></p>
          <div class="stride-mitigation"><strong>Defence:</strong> <span id="stride-threat-mit">Add a SIM lock with your carrier and switch to authenticator-app-based 2FA immediately.</span></div>
        </div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2019, Twitter CEO Jack Dorsey's Twitter account was compromised via a SIM swap attack. The attackers gained control of his phone number and used it to post offensive messages through a linked third-party service that used SMS authentication. Despite being a high-profile technology executive, the attack succeeded because his account relied on SMS-based verification. The incident led to Twitter deprecating SMS-based 2FA for free accounts and prompting broader industry conversation about the dangers of SMS authentication.</p>`,
      quiz: [
        {
          question: "What happens to your phone immediately after a successful SIM swap attack?",
          options: [
            { text: "Your phone receives a flood of spam messages", correct: false, feedback: "Incorrect. The attacker's goal is to redirect your number, not spam you." },
            { text: "Your phone loses signal because your number is now active on the attacker's SIM", correct: true, feedback: "Correct! When your number is transferred to a new SIM, your physical SIM is deactivated and you immediately lose cellular service — a clear warning sign." },
            { text: "Your phone is remotely wiped by the attacker", correct: false, feedback: "Incorrect. A SIM swap doesn't give the attacker access to your device — only to your phone number." }
          ]
        },
        {
          question: "Why is an authenticator app more secure than SMS 2FA against SIM swapping?",
          options: [
            { text: "Authenticator apps generate longer codes than SMS", correct: false, feedback: "Incorrect. Code length is not the security advantage — the binding to a physical device is." },
            { text: "Authenticator app codes are tied to the physical device, not the phone number — a SIM swap doesn't give access to them", correct: true, feedback: "Correct! Authenticator app codes are generated locally on your phone using a secret seed. Swapping your SIM to another device doesn't transfer the seed or the codes." },
            { text: "Authenticator apps encrypt SMS messages", correct: false, feedback: "Incorrect. Authenticator apps don't interact with SMS at all — they generate codes locally using time-based cryptographic algorithms." }
          ]
        },
        {
          question: "What is the most effective carrier-level defence against SIM swap attacks?",
          options: [
            { text: "Changing your phone number regularly", correct: false, feedback: "Incorrect. Changing your number frequently is impractical and doesn't prevent an attacker from targeting your new number using the same social engineering tactics." },
            { text: "Calling your carrier to add a SIM lock or port freeze requiring a PIN before any number transfer", correct: true, feedback: "Correct! A SIM lock or port freeze means your carrier requires an additional PIN or in-person verification before transferring your number — blocking most social engineering attempts on support agents." },
            { text: "Using a prepaid SIM card instead of a contract", correct: false, feedback: "Incorrect. SIM swap attacks work against prepaid and contract SIMs alike — the carrier's authentication process is the vulnerability, not the account type." }
          ]
        }
      ]
    },
    {
      id: "personal-incident-response",
      number: "MODULE 09",
      category: "Everyday Awareness",
      badge: "Personal Safety",
      title: "Personal Incident Response",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linejoin="round"/>
        <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>`,
      summary: "Something's wrong — you've been hacked, your account is locked, or your card is being used. Here's your step-by-step personal response plan.",
      explanation: `<p>Most people have no plan for what to do when a security incident happens to them personally. They panic, make impulsive decisions (like paying a ransom or calling back a scammer), and often make things worse. Having a simple, practised response plan means you act quickly and correctly when seconds matter.</p>
      <p>A personal incident is any event where your security has been — or might have been — compromised. This includes: receiving a notification that your password was changed without your input, seeing purchases on your card you didn't make, noticing that friends received messages from you that you didn't send, or discovering your phone has lost signal unexpectedly (a SIM swap indicator). Each scenario has a distinct response priority order.</p>
      <p>The core principle of personal incident response mirrors professional security operations: <strong>contain, assess, recover, and report</strong>. Stop the bleeding first (revoke access, freeze accounts), then figure out what happened and how, then restore normal function, then report to relevant parties.</p>`,
      biggerPicture: `<p>This module is the capstone for the Everyday Awareness series — it draws together the specific threats covered in Module 01 through Module 08 and gives you a unified framework to respond to any of them. Understanding what happened (which earlier module's threat was exploited) helps you explain it correctly to your bank, carrier, or local authorities.</p>`,
      secondaryBreakdown: `<h4>Incident Response by Scenario</h4>
      <p>Different incidents need different first responses — but containment always comes first:</p>
      <div class="module__comparison">
        <div class="compare-card">
          <div class="compare-card__title">Account Compromised (Email / Social Media)</div>
          <p class="compare-card__text">1. Change the password immediately from a trusted device. 2. Revoke all active sessions (most account security pages offer this). 3. Change your email recovery address and phone number if they've been altered. 4. Enable authenticator-app 2FA if not already active. 5. Check for forwarding rules or connected apps the attacker may have added.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Fraudulent Card Charges</div>
          <p class="compare-card__text">1. Call your bank's fraud line immediately (number on the back of the card). 2. Freeze or cancel the compromised card — most banking apps let you do this in seconds. 3. Request a chargeback for fraudulent transactions. 4. Change your online banking password and enable 2FA. 5. Check your credit report for signs of broader identity fraud.</p>
        </div>
        <div class="compare-card">
          <div class="compare-card__title">Ransomware / Device Infection</div>
          <p class="compare-card__text">1. Disconnect the device from all networks immediately (Wi-Fi off, unplug ethernet). 2. Do NOT pay the ransom — payment doesn't guarantee recovery and funds further attacks. 3. Restore from your clean offline backup (why Module 05 matters). 4. Report to your country's cybercrime reporting body. 5. Scan all other devices that shared the same network.</p>
        </div>
      </div>`,
      interactiveTitle: "Incident Response Priority Sequencer",
      interactiveHtml: `<p class="quick-check__question">You wake up to a notification: "Your email password was changed." Select the correct FIRST action to take:</p>
      <div class="classifier-interactive" id="classifier-ir">
        <div class="classifier-stage" data-stage="0">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> You receive an email: "Your Gmail password was successfully changed." You did not make this change. What do you do FIRST?
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Use Google's account recovery to regain access and change the password">Use Google's account recovery to regain access and change the password</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Reply to the email to report the change">Reply to the email to report the change</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="1">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> Your phone loses signal suddenly with no explanation. All other phones in the area work fine. This may be a SIM swap. What do you do FIRST?
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Call your carrier immediately from another device to report a suspected SIM swap and freeze your number">Call your carrier from another device to report a SIM swap</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Wait to see if the signal returns on its own">Wait to see if the signal returns</button>
          </div>
        </div>
        <div class="classifier-stage hidden-element" data-stage="2">
          <div class="classifier-card-item">
            <strong>Scenario:</strong> Your laptop screen displays a ransomware message stating all files are encrypted and demands payment within 48 hours. What do you do FIRST?
          </div>
          <div class="classifier-options">
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Disconnect the device from Wi-Fi and ethernet immediately to stop spread">Disconnect from all networks immediately to stop further spread</button>
            <button type="button" class="btn btn--secondary btn--xs classifier-opt" data-ans="Pay the ransom to recover files quickly">Pay the ransom to get files back</button>
          </div>
        </div>
        <div class="classifier-feedback hidden-element"></div>
      </div>`,
      realWorldExample: `<h4>Real-World Case Study</h4>
      <p>In 2021, a UK resident discovered their email account had been accessed and used to request password resets on their bank and PayPal. Because they had never set up 2FA, the attacker had chained account takeovers within 20 minutes. When the victim found out, they panicked and called a number found in a Google search for "hacked account help" — which turned out to be a scam helpline that charged £150 for fake recovery support. The incident illustrates two key lessons: acting on the correct first step (account recovery directly through the provider) and ignoring third-party "support" numbers found through searches are both critical to not making a bad situation worse.</p>`,
      quiz: [
        {
          question: "Your laptop displays a ransomware message saying your files are encrypted. What is the single most important FIRST step?",
          options: [
            { text: "Pay the ransom immediately before the timer expires", correct: false, feedback: "Incorrect. Paying rarely guarantees recovery, funds further attacks, and marks you as a willing victim. Your first priority is containment." },
            { text: "Disconnect the device from the internet and all networks to prevent the ransomware from spreading to other devices", correct: true, feedback: "Correct! Disconnecting immediately prevents the ransomware from propagating to network shares, other connected devices, or calling back to the attacker's server. Then restore from a clean backup." },
            { text: "Run a full antivirus scan before doing anything else", correct: false, feedback: "Incorrect. While antivirus scans are useful, scanning a ransomware-active machine while it's still networked can allow it to spread further. Disconnect first." }
          ]
        },
        {
          question: "After regaining access to a compromised email account, what is the most critical secondary step?",
          options: [
            { text: "Delete any emails the attacker sent to prevent embarrassment", correct: false, feedback: "Incorrect. Deleting emails removes evidence and may delete account recovery communications. The priority is security, not tidying up." },
            { text: "Check for and remove any forwarding rules, connected apps, or altered recovery addresses the attacker may have added", correct: true, feedback: "Correct! Attackers often set up email forwarding rules or add their own recovery contact details so they maintain persistent access even after you change the password. These must be removed." },
            { text: "Immediately reset passwords for all accounts using the same email as the username", correct: false, feedback: "Incorrect. Password resets are important, but first you need to secure the email account fully — if the attacker still has a backdoor into your email, resetting passwords elsewhere achieves little." }
          ]
        },
        {
          question: "What does the personal incident response sequence 'Contain, Assess, Recover, Report' mean in practice for a compromised bank card?",
          options: [
            { text: "Wait for the bank to contact you, then fill out their forms", correct: false, feedback: "Incorrect. Waiting is the worst option — fraudulent charges compound over time. Contain means acting immediately to stop further damage." },
            { text: "Freeze the card immediately, identify the fraudulent charges, request chargebacks, and file a report with the bank's fraud team", correct: true, feedback: "Correct! Contain (freeze the card), Assess (identify what transactions are fraudulent), Recover (chargeback requests), Report (file with fraud team and optionally credit reporting agencies)." },
            { text: "Change your banking password and monitor the account for the next 30 days", correct: false, feedback: "Incorrect. Monitoring without acting on the fraudulent charges doesn't contain the damage. Active containment — freezing the card — must happen first." }
          ]
        }
      ]
    },
    {
      id: "10",
      number: "MODULE 10",
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
      biggerPicture: `<p>This module establishes the foundational vocabulary of security risk and management. The concepts introduced here (such as threats, vulnerabilities, and administrative controls) map directly to how you analyze systems in <strong>Module 11: Threat Modeling</strong>, and choose cryptographic implementations in <strong>Module 12: Cryptography & PKI</strong>.</p>`,
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
      id: "11",
      number: "MODULE 11",
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
      biggerPicture: `<p>Threat modeling defines the architectural parameters that dictate the cryptographic controls of <strong>Module 12: Cryptography & PKI</strong>. It also guides the configuration of isolation sandboxes in <strong>Module 13: Virtualization & Sandboxes</strong>, based on where trust boundaries reside.</p>`,
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
      id: "12",
      number: "MODULE 12",
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
      biggerPicture: `<p>Cryptography provides the underlying mechanisms that support secure session cookies in <strong>Module 17: Session & Authenticator Hygiene</strong>, and browser security layers like HTTPS which we configure using headers in <strong>Module 18: Web Injection & Client Headers</strong>.</p>`,
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
      id: "13",
      number: "MODULE 13",
      category: "Host & Network Security",
      badge: "Infrastructure & Audit",
      title: "Secure Virtualization & Sandboxing",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5M12 2L2 7l10 5 10-5-10-5z" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "Study hypervisor architectures, virtual machine configuration, and sandbox containment practices.",
      explanation: `<p>Virtualization isolates workloads by running simulated OS instances on top of a single hardware chassis. This containment paradigm is essential for cloud computing architectures, security isolation, and running untrusted software safely.</p>
      <p>Sandboxing takes isolation further by wrapping processes in constrained execution cells, restricting access to system calls, storage pathways, and networks. This prevents malicious binaries from escaping and compromising the host server.</p>`,
      biggerPicture: `<p>Virtualization and sandbox configuration provide the secure laboratories used to audit applications. The terminal commands and diagnostics explored in <strong>Module 14: Linux CLI & Diagnostics</strong> are practiced within sandboxed containers to prevent damage to host systems.</p>`,
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
      id: "14",
      number: "MODULE 14",
      category: "Host & Network Security",
      badge: "Infrastructure & Audit",
      title: "Linux CLI & Diagnostics",
      icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17l6-5-6-5M12 19h8" stroke="url(#hero-brand-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      summary: "Master fundamental command-line utilities for security investigations, audits, and configuration.",
      explanation: `<p>A security professional's efficiency depends on their ability to command system shells. The Linux Command Line Interface (CLI) is the primary workspace for system audits, log diagnostics, and incident triage.</p>
      <p>Through terminal commands, analysts can quickly inspect file permissions, review system daemon logs, and trace active processes. A deep understanding of configuration security and permissions prevents privilege escalation attacks.</p>`,
      biggerPicture: `<p>Linux CLI skills provide the troubleshooting foundation needed to execute active network audits in <strong>Module 15: Network Mapping & Nmap</strong>, and configure service boundary rules for web applications.</p>`,
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
      id: "15",
      number: "MODULE 15",
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
      biggerPicture: `<p>Network mapping discovers the service endpoints that host web servers. The security of these services depends on authenticator logic (<strong>Module 17: Session & Authenticator Hygiene</strong>) and defensive headers (<strong>Module 18: Web Injection & Client Headers</strong>) configured on the web application.</p>`,
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
      id: "16",
      number: "MODULE 16",
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
      biggerPicture: `<p>Password strength is the front line of authentication. Strong password generation rules must be paired with secure back-end hashing implementations, which we explore in <strong>Module 17: Session & Authenticator Hygiene</strong>.</p>`,
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
      id: "17",
      number: "MODULE 17",
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
      biggerPicture: `<p>Session security relies on encryption standards from <strong>Module 12: Cryptography & PKI</strong>. It is also reinforced by client-side headers configured in <strong>Module 18: Web Injection & Client Headers</strong> to defend cookies against XSS-based theft.</p>`,
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
      id: "18",
      number: "MODULE 18",
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
      biggerPicture: `<p>Injection defense is the culmination of application security. Safe query patterns protect the databases discovered during mapping in <strong>Module 15: Network Mapping & Nmap</strong>, while security headers defend session tokens from <strong>Module 17: Session & Authenticator Hygiene</strong>.</p>`,
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
