/* ============================================================================
   INSTANCE · Belong Academy  (brand pack — pure config)
   Brand from the Belong Brandbook: terracotta #BE594D, warm palette,
   Source Serif Pro + Work Sans, the circle-over-bar symbol. Pillars:
   Foundations · Hospitality · Food & Farm · Sustainability · Community.
============================================================================ */
(window.EdenBrands = window.EdenBrands || {}).belong = {
  id: 'belong',
  name: 'Belong',
  academy: 'Belong Academy',
  company: 'Belong',   /* the name on certificates and documents ("Trained by Belong") */
  tagline: 'Giving Shape to Meaning',
  title: 'Belong Academy — Giving Shape to Meaning',
  ogDesc: 'Learn the Belong way — hospitality, seasonal food, nature and community, from a school born of a circular vision.',
  twDesc: 'Belong Academy — staying & feeling, growing & tasting, to nature. Learn by doing.',
  domain: 'belong-academy.pages.dev',
  hostnames: [],   /* single-brand deploy — the loader falls back to the only registered brand */
  lang: 'en',
  ethos: 'Belong, a community and school born in 2012 from a bond between place and being — giving shape to meaning across hospitality (staying & feeling), seasonal gastronomy (growing & tasting), nature (to nature) and a circular economy. The Academy teaches the Belong way: the craft of hospitality and presence, seasonal cooking and tasting, growing and regenerating, nature connection, and building community.',
  shortDesc: 'a community-and-hospitality school giving shape to meaning',
  realm: 'real Belong situations (hosting and making guests feel they belong, seasonal kitchens and tasting, growing and harvesting, caring for nature and place, building community and the circular economy)',
  location: 'Portugal',
  boardIndexed: true,   /* leaderboard composite index (companyId + xp) deployed 2026-09-17 */
  /* the storefront always leads with the filmed course — never with whatever a visitor opened last */
  askExamples: {
    en: ['How do I welcome a guest on arrival?', 'What do I do when a guest complains?', 'Where does the food we serve come from?'],
    pt: ['Como recebo um hóspede à chegada?', 'O que faço quando um hóspede se queixa?', 'De onde vem a comida que servimos?']
  },
  heroCourse: 'welcome-belong',
  /* TESTING (João, 5 Nov 2026): the watch-the-whole-video gate is OFF so the team can try every feature.
     Delete this line before the real launch. */
  watchGate: false,
  /* no tax id, contract, working-time or goal fields on the profile page (João, 16 Oct 2026) */
  leanProfile: true,
  /* 4 Nov 2026: certificates are COURSE level (core/curriculum.js), issued when every required lesson is
     completed and the lesson-question assessment reaches the pass mark. No per-module certificate. */
  certOnCompletion: false,
  /* the video ending opens the check; no separate "Mark module complete" button */
  markComplete: false,
  /* Backend (9 Nov 2026 — shipped without a login, for the simplest possible setup):
     'open'     = no sign-in at all. Open the link, give your name, choose a department, learn.
                  Progress, hours and certificates are kept in this browser on this device.
     'local'    = the internal test database in core/localdb.js (accounts on this device; demos).
     'firebase' = real accounts across devices — add a `firebase: { ... }` config block (see
                  docs/ship/BACKEND-LATER.md). Nothing else in the code changes. */
  backend: 'open',
  /* meeting 4 Nov 2026: the "knowledge verified · from quizzes" count is clutter; scores live on the course page */
  hideVerifiedStat: true,
  quickWinsShelf: false,   /* the home Reels rail already shows the reels; a second shelf repeated them */
  /* local mode only: test accounts shown on the sign-in card (no passwords; this device only) */
  localSeed: {
    adminEmails: ['admin@belong.test'],
    accounts: [
      { email: 'admin@belong.test',   name: 'Admin (test)',           role: 'admin' },
      { email: 'leader@belong.test',  name: 'Team leader (test)',     role: 'leader',  dept: 'hosting' },
      { email: 'learner@belong.test', name: 'Learner (test)',         role: 'learner', dept: 'housekeeping' }
    ]
  },
  /* The "Ask" assistant: a small keyless Cloudflare Worker (source in extras/ai-gateway). This default is
     Meridante's copy, which only answers the domains on its allow-list. On your own domain, deploy your
     own copy and put its address here (see docs/ship/SETUP.md, step 6). */
  aiGateway: 'https://academy-ai.edenrise.workers.dev/',
  /* where technical error reports go (no personal data). null = switched off. */
  errorBeacon: 'https://academy-watch.edenrise.workers.dev/beacon',
  superadmins: [],   /* platform-admin emails; only used with a sign-in backend */
  themeColor: '#211613',
  wordSub: 'Academy',
  /* the Belong symbol — a ring (the idea) over a bar (its place / the ground) */
  logoSvg: '<svg viewBox="0 0 34 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="14" r="9" stroke="#be594d" stroke-width="3.4"/><rect x="8.5" y="28.5" width="17" height="3.6" rx="1.8" fill="#be594d"/></svg>',
  favicon: 'favicon.svg',
  ogImage: null,
  content: 'brands/belong/content.js',
  fonts: {
    /* self-hosted (GDPR: no visitor IP to a third party) — scripts/selfhost-fonts.py */
    link: 'fonts/fonts.css',
    display: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
    body: '"Work Sans", system-ui, sans-serif'
  },
  theme: {
    '--bg': '#211613', '--bg-2': '#2d201c',
    '--surface': 'rgba(255,240,232,.055)', '--surface-2': 'rgba(255,240,232,.10)',
    '--line': 'rgba(255,240,232,.13)',
    '--text': '#f7efe9', '--text-dim': '#dac6bc', '--text-faint': '#a88d81',
    '--accent': '#c8655a'   /* was #be594d: 3.97:1 on the background, below AA for text; this is 4.6:1 */, '--accent-2': '#f8b556', '--glow': 'rgba(200,101,90,.42)',
    '--forest': '#8d907e', '--olive': '#8d907e', '--cork': '#b09189', '--clay': '#be594d',
    '--atlantic': '#759ba3', '--mist': '#cfc7b9', '--ivory': '#f7efe9', '--focus': '#f8b556',
    /* rgb channels + gradients the shared stylesheet mixes from — without these the chrome tinted EdenRise sage and gold */
    '--tint-rgb': '120,70,60', '--accent-2-rgb': '248,181,86', '--bg-rgb': '33,22,19', '--bg2-rgb': '45,32,28',
    '--grad-text': 'linear-gradient(95deg, #f3c9b8 0%, #c8655a 45%, #f8b556 100%)',
    '--orb-grad': 'conic-gradient(from 200deg, #c8655a, #f8b556, #b09189, #c8655a)'
  }
};
