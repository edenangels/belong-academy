# Belong Academy — open items

- [x] **Departments list** — João's Final 10 Departments landed 2026-10-16 (bel67): Hosting & Guest Care · Housekeeping & Houses · Culinary & Kitchen · Food & Beverage Service · Farm & Nature · Maintenance & Property Care · Wellness & Experiences · Office & Administration · People, Culture & Leadership · Safety & Sustainability (Beach Bar → F&B; A Mesa do CAM → F&B/Culinary; Events → F&B; Reservations → Hosting). PT names are drafts for Rita/Lykke to confirm (`ROLES_PT` / `DEPTS` in data.js).
- [ ] Film more courses. The five scripted-but-unfilmed shells (Art of Hospitality, Seasonal Table, Growing & Regenerating, Belong to Nature, Community & Circular) were removed from the catalogue on 2026-10-16 — the twelve filmed lessons now form six real courses. Restore from git (`brands/belong/content.js` before bel67) when footage exists.
- [ ] Send the proposal to Lykke.
- [ ] ClickUp Belong Curriculum: module 1 link still points at the old module-2 master.

## 16 Oct 2026 — Round 2 + 3 (bel67)
- Twelve lessons → six courses of two (thematic pairs): Welcome to Belong (1-2) · Hospitality, the Craveiral Way (3-4) · The Guest Journey (5, 9) · The Houses, the Farm & Sustainability (6, 10) · FarmTable & the Constellation (7-8) · Our Voice & How We Lead (11-12). Transcripts, quizzes, takeaways and the knowledge index moved with them; lesson 5 (guest journey) had no quiz in the bank — generated + verified. Covers are frames cut from each lesson's own b-roll (no faces).
- Goals per department (7 presets, every path opens with the welcome). Old stored roles/goals map through `ROLE_ALIASES` / `GOAL_ALIASES`.
- **Watch gate OFF for testing** (`watchGate: false` in brands/belong/brand.js) — the "watch the whole video" rule before the recap and the quiz. Turn it back on before launch.
- Profile: no NIF, contract, working-time or goal fields (`leanProfile: true`).
- Ask moved into the search bar (a question of 3+ words leads the list; Enter asks the lessons). Home lost the ask bar, the daily card and the "For you" eyebrow; library lost the hashtag band. Today's question now waits in the bell and opens a sheet with a time-of-day greeting. Voice no longer submits or speaks back by itself. No copy-link clip in ask results. Palette no longer offers the certification quiz. Live page has a month calendar. Leaderboard copy says only weekly points reset. Emojis stripped from learner surfaces. Drawer lost the XP chip. Footer uses the Belong mark. Channel pills wrap (Members was cut off). My learning page no longer shows two footers. Hero "Belong" no longer clips the g.
- Open: Rita/Lykke confirm the PT department names; re-enable the watch gate; Lykke proposal; ClickUp module-1 link; seed the community.

## 20 Oct 2026 — Belong staff answer (bel69)
- Departments now 12: added **Laundry** and **Logistics & Management Control**; "Maintenance & Property Care" is just **Maintenance** (their wording). PT: Lavandaria · Logística e Controlo de Gestão · Manutenção.
- **Who sees the team's progress:** all team leaders + Lykke + Pedro. Mechanism already exists: Admin console → Settings → company **admin emails** (one per line) — anyone listed gets the Team tab (members, path progress, hours, nudges). Needs their sign-in emails; João adds them as meridante.pt@gmail.com, or sends me the list.
- Fixed in the shared core: the admin gate was a hard-coded EdenRise email list, so EdenRise staff would have had the Belong admin console. Now each tenant's own `superadmins` from brand.js.
