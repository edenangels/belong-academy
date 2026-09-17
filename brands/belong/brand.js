/* ============================================================================
   INSTANCE · Belong Academy  (brand pack — pure config)
   Brand from the Belong Brandbook: terracotta #BE594D, warm palette,
   Source Serif Pro + Work Sans, the circle-over-bar symbol. Pillars:
   Staying & Feeling · Growing & Tasting · To Nature · School.
============================================================================ */
(window.EdenBrands = window.EdenBrands || {}).belong = {
  id: 'belong',
  name: 'Belong',
  academy: 'Belong Academy',
  tagline: 'Giving Shape to Meaning',
  title: 'Belong Academy — Giving Shape to Meaning',
  ogDesc: 'Learn the Belong way — hospitality, seasonal food, nature and community, from a school born of a circular vision.',
  twDesc: 'Belong Academy — staying & feeling, growing & tasting, to nature. Learn by doing.',
  domain: 'meridante-dev.github.io/belong-academy',
  hostnames: [],   /* single-brand deploy — the loader falls back to the only registered brand */
  lang: 'en',
  ethos: 'Belong, a community and school born in 2012 from a bond between place and being — giving shape to meaning across hospitality (staying & feeling), seasonal gastronomy (growing & tasting), nature (to nature) and a circular economy. The Academy teaches the Belong way: the craft of hospitality and presence, seasonal cooking and tasting, growing and regenerating, nature connection, and building community.',
  shortDesc: 'a community-and-hospitality school giving shape to meaning',
  realm: 'real Belong situations (hosting and making guests feel they belong, seasonal kitchens and tasting, growing and harvesting, caring for nature and place, building community and the circular economy)',
  location: 'Portugal',
  /* Belong's OWN Firebase project (created 2026-07-17). */
  boardIndexed: true,   /* leaderboard composite index (companyId + xp) deployed 2026-09-17 */
  firebase: {
    apiKey: 'AIzaSyCxZdTPs__USqmGcnf2dnKsYO6SmxHfd3w',
    authDomain: 'belong-academy.firebaseapp.com',
    projectId: 'belong-academy',
    storageBucket: 'belong-academy.firebasestorage.app',
    messagingSenderId: '306627126212',
    appId: '1:306627126212:web:6ab4b3732bc31a58bb7a91',
    measurementId: 'G-7WLF5ZMDPH'
  },
  superadmins: ['meridante.pt@gmail.com'],   /* Belong platform admin (client-side gate; mirrored in core/firestore.rules isSuper) */
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
    '--accent': '#be594d', '--accent-2': '#f8b556', '--glow': 'rgba(190,89,77,.42)',
    '--forest': '#8d907e', '--olive': '#8d907e', '--cork': '#b09189', '--clay': '#be594d',
    '--atlantic': '#759ba3', '--mist': '#cfc7b9', '--ivory': '#f7efe9', '--focus': '#f8b556'
  }
};
