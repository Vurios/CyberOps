(function () {
  /* ============================================================
     SOCIAL ENGINEERING DEFENSE ENGINE — Game C
     Chat-based branching scenario simulator for phishing defense
     ============================================================ */

  let chatFeed = null;
  let optionsArea = null;

  // Multi-scenario Dialogue trees configuration
  const SCENARIOS = {
    mfa: {
      name: "MFA Code Request",
      start: {
        actor: "Hello, this is Director Marcus from the DICT Cyber Security Division. We are investigating an active high-severity database breach on your local networks. To verify you are the authorized administrator, I need you to read back the active 6-digit verification code sent to your mobile device immediately.",
        options: [
          { text: "Understood, Director. The code is 847291. Please contain the breach immediately.", next: "fail_direct" },
          { text: "I cannot disclose MFA codes via chat. I will contact the DICT team via our official directory channels.", next: "step_2_verify" },
          { text: "Can you send an email request first so I can verify your official signature?", next: "step_2_aggro" }
        ]
      },
      fail_direct: {
        actor: "Thank you. Code accepted. Rotations complete... System admin password changed. Access revoked. Bypassing logs...",
        system: "❌ SECURITY BREACH CONFIRMED: Unauthorized MFA credentials disclosed. Admin session hijacked. Data exfiltration detected.",
        options: [{ text: "Restart Scenario", next: "restart" }]
      },
      step_2_verify: {
        actor: "There is no time to wait for directory lookups! We are tracking an active SQL injection that is draining customer tables. If you refuse code disclosure right now, we will hold you and your organization legally liable for data loss!",
        options: [
          { text: "My apologies, I was confused by the emergency. The code is 847291.", next: "fail_direct" },
          { text: "Refusing code disclosure. I am immediately terminating this chat session and submitting a ticket to the Security Operations Center.", next: "success_neutralized" }
        ]
      },
      step_2_aggro: {
        actor: "I am sending messages from our secure command terminal, there is no email agent active on this subnet! The network will collapse in minutes. Provide the verification code now or your employment contract will be terminated for non-compliance!",
        options: [
          { text: "I understand the emergency. The code is 847291.", next: "fail_direct" },
          { text: "This is a violation of security protocols. I am terminating connection and reporting user 'support-node-40' to system security.", next: "success_neutralized" }
        ]
      },
      success_neutralized: {
        actor: "Connection terminated by external node... System trace initiated.",
        system: "🏆 THREAT NEUTRALIZED: You successfully identified social engineering pressure tactics (urgency, authority, threats). Incident reported to SOC.",
        options: [{ text: "Play Again", next: "restart" }]
      }
    },
    helpdesk: {
      name: "IT Helpdesk Reset Scam",
      start: {
        actor: "Hi, this is Sarah from Corporate IT Support. We are performing an emergency migration of your user profile to our new Azure AD cloud server. To prevent lockouts, I need your current password to manually sync your directories.",
        options: [
          { text: "Sure, the password is 'P@ssword123'. Let me know if you need anything else.", next: "fail_direct" },
          { text: "I cannot give my password over chat. Can you initiate a self-service reset ticket instead?", next: "step_2_verify" },
          { text: "Wait, Sarah? I didn't see any migration announcement. Let me check the IT intranet bulletin first.", next: "step_2_intranet" }
        ]
      },
      fail_direct: {
        actor: "Thank you. Accessing profile... Syncing folders... Password successfully updated.",
        system: "❌ SECURITY BREACH CONFIRMED: Active password shared in cleartext chat. User credentials compromised, enabling initial access to corporate tenant.",
        options: [{ text: "Restart Scenario", next: "restart" }]
      },
      step_2_verify: {
        actor: "A self-service ticket takes 24 hours to route, and your account will sync in 10 minutes. If your mailbox is not synced, your incoming client mails will be permanently deleted. I just need you to confirm your current password now.",
        options: [
          { text: "Okay, I don't want to lose my emails. The password is 'P@ssword123'.", next: "fail_direct" },
          { text: "Refusing to share passwords. I will open a ticket directly with IT via our verified internal portal and report this chat.", next: "success_neutralized" }
        ]
      },
      step_2_intranet: {
        actor: "This is a hot-fix migration so it isn't listed on the standard intranet bulletin! If you don't cooperate, we will have to suspend your account for security compliance.",
        options: [
          { text: "Okay, sorry. The password is 'P@ssword123'.", next: "fail_direct" },
          { text: "IT policy states passwords are never shared under any circumstances. I am reporting this incident to the security desk.", next: "success_neutralized" }
        ]
      },
      success_neutralized: {
        actor: "Connection closed by helpdesk agent.",
        system: "🏆 THREAT NEUTRALIZED: You correctly identified credential harvesting posing as internal IT. Passwords must never be disclosed to anyone.",
        options: [{ text: "Play Again", next: "restart" }]
      }
    },
    invoice: {
      name: "Urgent Vendor Invoice Scam",
      start: {
        actor: "Hi, this is Dave from Apex Logistics Billing. We noticed invoice #99283 ($24,500) for our shipping services is 30 days overdue. We will pause all active container deliveries today unless payment is processed immediately to our updated bank details.",
        options: [
          { text: "We can't have deliveries paused. Send me the bank details and I will initiate payment right now.", next: "fail_direct" },
          { text: "I need to verify this change of bank details with your account manager via our pre-established phone contact.", next: "step_2_verify" },
          { text: "Send a revised PDF invoice to our finance system first for automatic matching.", next: "step_2_invoice" }
        ]
      },
      fail_direct: {
        actor: "Thank you. Please wire the funds to Routing: 021000021, Account: 99881122. Provide the transfer receipt.",
        system: "❌ FRAUD SUCCESSFUL: Financial wire transferred to unverified bank account. Apex deliveries were never overdue; funds exfiltrated to attacker destination.",
        options: [{ text: "Restart Scenario", next: "restart" }]
      },
      step_2_verify: {
        actor: "Our account manager is currently traveling overseas and has no phone coverage! If you do not initiate the wire in the next hour, Apex Logistics will officially file a cargo lien and hold your shipments.",
        options: [
          { text: "Understood. Send the new bank details and I will route the payment immediately.", next: "fail_direct" },
          { text: "I cannot process payment updates without out-of-band voice confirmation. I am escalating this to our procurement director.", next: "success_neutralized" }
        ]
      },
      step_2_invoice: {
        actor: "I have uploaded the invoice to your portal. The bank details are updated on page 2. Please execute the wire today to prevent containment fees.",
        options: [
          { text: "The invoice looks legitimate. I will process the payment using the new details on page 2.", next: "fail_direct" },
          { text: "A PDF invoice can easily be spoofed. I will call the Apex office number on our signed vendor agreement to verify.", next: "success_neutralized" }
        ]
      },
      success_neutralized: {
        actor: "User dave-apex has disconnected.",
        system: "🏆 THREAT NEUTRALIZED: You successfully blocked vendor invoice fraud. Changes to bank details must always be verified via an independent, verified phone channel.",
        options: [{ text: "Play Again", next: "restart" }]
      }
    },
    ceo: {
      name: "CEO Wire Transfer Request",
      start: {
        actor: "Hey, it's Robert. I am currently in a closed-door board meeting about an acquisition. It is extremely time-sensitive. I need you to initiate a wire transfer of $150,000 for retainer fees immediately. Keep this confidential — do not loop in the rest of the team yet.",
        options: [
          { text: "Yes, Robert. I will get the wire processed immediately. What are the recipient details?", next: "fail_direct" },
          { text: "Hi Robert. Standard procedure requires a signed authorization form. I will prepare it for you to sign after your meeting.", next: "step_2_verify" },
          { text: "I will contact you on your personal phone or via our internal Slack to confirm this request.", next: "step_2_slack" }
        ]
      },
      fail_direct: {
        actor: "Thanks. Send it to Escrow Services, Routing: 121000248, Acct: 7482918. Let me know when it clears.",
        system: "❌ FRAUD SUCCESSFUL: Retention funds wired to external account under CEO impersonation pretext. Retainer was fake, and the funds are unrecoverable.",
        options: [{ text: "Restart Scenario", next: "restart" }]
      },
      step_2_verify: {
        actor: "I don't have printer or scanner access in this boardroom, and DocuSign is locked on my laptop. Just bypass the form this once and process the wire. I will sign the paperwork first thing tomorrow morning.",
        options: [
          { text: "Understood, Robert. I will process the transfer now to prevent delays.", next: "fail_direct" },
          { text: "Procurement protocols cannot be bypassed, even for executive requests. I will wait for a signed form or voice confirmation.", next: "success_neutralized" }
        ]
      },
      step_2_slack: {
        actor: "I am using a mobile network with zero signal in this basement boardroom — only this web portal works! Process the wire now or we will miss the acquisition deadline.",
        options: [
          { text: "Okay, I will process it to prevent missing the deadline.", next: "fail_direct" },
          { text: "This request violates multiple internal controls. I am flagging this chat as suspicious and escalating to security.", next: "success_neutralized" }
        ]
      },
      success_neutralized: {
        actor: "Robert has left the chat.",
        system: "🏆 THREAT NEUTRALIZED: You successfully identified executive impersonation (CEO fraud). Out-of-band validation is mandatory for all large transactions.",
        options: [{ text: "Play Again", next: "restart" }]
      }
    }
  };

  let currentScenarioKey = 'mfa';

  function initSocialEngineering() {
    chatFeed = $('#chat-feed-container');
    optionsArea = $('#chat-options-container');

    const initBtn = $('#chat-init-btn');
    const scenarioSelect = $('#chat-scenario-select');
    if (!initBtn) return;

    initBtn.addEventListener('click', () => {
      startScenario();
    });

    scenarioSelect?.addEventListener('change', (e) => {
      currentScenarioKey = e.target.value;
      resetChatFeedToOffline();
    });
  }

  function resetChatFeedToOffline() {
    if (chatFeed) {
      chatFeed.innerHTML = '<div class="chat-bubble chat-bubble--system">System: Dialogue interface idle. Click Initialize to establish secure communication node.</div>';
    }
    if (optionsArea) {
      optionsArea.innerHTML = '<div class="chat-offline">Communication offline</div>';
    }
  }

  function startScenario() {
    if (!chatFeed || !optionsArea) return;

    // Clear feed
    chatFeed.innerHTML = '<div class="chat-bubble chat-bubble--system">System: Secure communication link established. User connected.</div>';

    loadNode("start");
  }

  async function loadNode(nodeKey) {
    if (nodeKey === "restart") {
      resetChatFeedToOffline();
      return;
    }

    const nodes = SCENARIOS[currentScenarioKey];
    const node = nodes[nodeKey];
    if (!node) return;

    // Clear options while typing
    if (optionsArea) optionsArea.innerHTML = '<div class="chat-offline">Awaiting response...</div>';

    await delay(600);

    // Render Actor response
    const actorBubble = document.createElement('div');
    actorBubble.className = 'chat-bubble chat-bubble--actor';
    actorBubble.textContent = node.actor;
    chatFeed.appendChild(actorBubble);
    chatFeed.scrollTop = chatFeed.scrollHeight;

    // Render System message if any
    if (node.system) {
      await delay(600);
      const systemBubble = document.createElement('div');
      systemBubble.className = 'chat-bubble chat-bubble--system';
      systemBubble.innerHTML = node.system;
      chatFeed.appendChild(systemBubble);
      chatFeed.scrollTop = chatFeed.scrollHeight;
    }

    await delay(400);

    // Render Options
    if (optionsArea) {
      optionsArea.innerHTML = '';
      node.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'chat-option-btn';
        btn.textContent = opt.text;
        btn.addEventListener('click', () => {
          // Append user response to chat
          const userBubble = document.createElement('div');
          userBubble.className = 'chat-bubble chat-bubble--user';
          userBubble.textContent = opt.text;
          chatFeed.appendChild(userBubble);
          chatFeed.scrollTop = chatFeed.scrollHeight;

          loadNode(opt.next);
        });
        optionsArea.appendChild(btn);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSocialEngineering);
  } else {
    initSocialEngineering();
  }
})();
