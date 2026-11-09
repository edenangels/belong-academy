# CLAUDE.md: Belong Academy

You are taking over **Belong Academy**, the bilingual (English / European Portuguese)
training academy for the Belong and Craveiral team. This file is your map. Read it fully
before changing anything. For a first setup, follow `docs/SETUP.md` step by step.

## What it is

- Short filmed lessons from Belong's trainer (streamed from Vimeo). After each lesson come
  two questions. Each person has a path built from their department and goal. There are
  10 vertical reels, course certificates, and a yearly record of training hours toward
  the 40 hours of continuous training a year (Portuguese Labour Code, art. 131.º).
- **Structure:** 3 courses → 9 modules → 20 lessons. Each lesson has a summary, chapters
  and two questions, in EN and PT.
- **No login** (`backend: 'open'` in `brands/belong/brand.js`). Onboarding asks for the
  person's name (used on certificates), department and goal. Everything is stored in the
  browser's `localStorage` on that device. There is no server and no database.

## Stack, in one breath

Plain static site: no framework, no bundler and no `npm install` needed to run it.
`index.html` loads ordinary `<script>` files in order. All state is the global `S`,
persisted to `localStorage` under the key `belong-state-v2`. A service worker (`sw.js`)
caches the app for offline use.

Run it locally with `python3 -m http.server 8080`, then open http://localhost:8080.
Run the tests with `node test/run.mjs` (expect 84 passed). Build for hosting with
`bash scripts/build.sh`, which writes `dist/`.

## Where things are

| File | What it holds |
|---|---|
| `brands/belong/brand.js` | **Settings.** Name, colours, fonts, logo, backend mode, `watchGate`, `aiGateway`, `errorBeacon`, `domain` |
| `brands/belong/content.js` | **Content.** `CATALOG` (modules and their lessons, with Vimeo ids), `CURRICULUM` (courses that group modules, departments, pass mark), `REELS`, `LESSON_THUMBS`, PT translations (`COURSE_PT`) |
| `data.js` | Departments and goals (`GOAL_DEFS`, `ROLE_OPTIONS`) and **every UI string** in EN and PT (`t('key')`) |
| `knowledge/quizzes/<module-id>.json` | The two questions per lesson: `a` = index of the correct option, `t0` = second of the video that teaches it, `en`/`pt` with `q`, `opts`, `why` |
| `knowledge/lessons.json` | Per lesson: summary and chapters (`[seconds, title]`), EN and PT |
| `media/transcripts/<module-id>/m<N>.json` | Lesson transcripts (search, the Ask assistant, the transcript panel) |
| `knowledge/search.json`, `index.json`, `tags.json`, `graph.json` | Search index, rebuilt from transcripts and quizzes (see below) |
| `media/covers/` | Course and module cover images (`.webp`) |
| `core/app.js` | The app: screens, player, onboarding, questions, reels, certificates |
| `core/curriculum.js` | Courses → modules → lessons, the path, the lesson gate, "Module complete" |
| `core/localdb.js` | The no-login / on-device backend |
| `core/auth.js`, `core/firestore.rules` | The Firebase backend, **not in use**. Kept for when accounts are wanted (`docs/ACCOUNTS-LATER.md`) |
| `core/styles.css` | All styles |
| `privacy.html` | Privacy policy (PT and EN) |
| `extras/ai-gateway/` | Source of the Ask assistant's Cloudflare Worker |

**Naming trap:** in `content.js`, a `CATALOG` entry is what the UI calls a **module**,
and its `modules: [...]` array lists that module's **lessons**. A lesson's id is
`<module-id>:<index>`, e.g. `welcome-belong:0`. `CURRICULUM.courses[].modules[]` groups
modules into the 3 **courses**.

## Rules that matter to Belong (keep them)

1. **European Portuguese**, never Brazilian: "equipa" not "time", "ecrã" not "tela",
   "telemóvel" not "celular", "utilizador" not "usuário", "contacto" not "contato".
2. In Portuguese UI text, a certificate is a **"comprovativo"**, never "certificado".
3. **Every change in both languages.** UI strings live in `data.js` (EN block and PT block).
   Content has `en`/`pt` pairs or `_pt` / `COURSE_PT` twins.
4. **Never reveal the answer** after a wrong question. The person reviews the moment in the
   video, then answers again. Missed questions wait under My learning → Review.
5. **No checks during a video.** Questions appear only after the lesson.
6. Answers must be the lesson's main rule or fact, stated objectively (no "Pedro says…").
   Keep options short and similar in length.
7. **Check every UI change at phone width (390 px)** as well as desktop, in EN and PT.
8. Never add tracking, analytics or third-party scripts. Fonts are self-hosted on purpose
   (GDPR).

## Releasing a change (important)

Browsers keep the old files in the offline cache until the version changes. For every
release:

1. In `index.html`, replace every `?v=belNNN` with the next number (e.g. `bel127` → `bel128`).
2. In `sw.js`, bump `VERSION` to match (`belong-v127` → `belong-v128`).
3. Run `node test/run.mjs`.
4. Commit and push. GitHub Pages and Cloudflare Pages redeploy by themselves. On an FTP
   host: run `bash scripts/build.sh` and upload `dist/`.

## Common tasks

**Add a lesson to an existing module**
1. Upload the video to Belong's Vimeo as Unlisted. From its share link
   `vimeo.com/<id>/<hash>`, take the `id` and the `hash`.
2. In `content.js`, add to the module's `CATALOG` entry: the title in `modules`, the
   minutes in `moduleDurations`, `{"type":"vimeo","id":"<id>","h":"<hash>"}` in
   `moduleMedia`, and the PT title in `COURSE_PT[<module>].modules`.
3. Thumbnail: add `LESSON_THUMBS['<module>:<index>']`, the Vimeo thumbnail base URL. The
   Vimeo oEmbed `thumbnail_url` without its `_WxH` size suffix.
4. Transcript: save it as `media/transcripts/<module>/m<index>.json` in the same shape as
   the existing files.
5. Questions: add two to `knowledge/quizzes/<module>.json` under the lesson index, each
   with a `t0` pointing to the moment that teaches the answer.
6. Summary and chapters: add them to `knowledge/lessons.json`.
7. Rebuild search: `node scripts/build-knowledge.mjs && node scripts/build-tags.mjs && node scripts/build-graph.mjs`.
8. Release (above).

**Add a reel:** copy an entry in `REELS` (`content.js`). Set `media: { type: 'vimeo', id,
h }`, `poster` (the Vimeo 720x1280 thumbnail), `head` and `why` (EN and PT), `deeper` (the
module it leads to) and `approved: true`. Reel 03 · Sustainability is waiting in
`REELS_AWAITING_VIDEO`: add its new Vimeo id and hash and move it into `REELS` after
`belong-mission`.

**Change departments or goals:** `GOAL_DEFS` / `ROLE_OPTIONS` in `data.js`. Each department
has three goals in a fixed order (team · land & project · guests). Each goal maps to the
modules of its path. Keep `GOALS_PT` in step.

**Rename or regroup courses:** `CURRICULUM.courses` in `content.js` (EN fields plus its `pt`
block).

**Trainer name on certificates:** certificates print a "Trainer / Formador" line from the
module's `educator` (see `educatorFor()` in `core/app.js`). Add the trainer's entry and set
`educator` on the modules.

**Turn the watch rule on before daily use:** delete `watchGate: false` from `brand.js`.
A lesson then counts only after 75 % of it has been watched.

## How to verify a change

- `node test/run.mjs`, which must stay green.
- Serve locally and walk the flow at **390 px and 1280 px, EN and PT**: onboarding, then a
  lesson, two questions (answer one wrong: there must be no answer reveal, Continue leads
  to answering again), then Module complete, the path, a reel, then My learning → Record /
  certificate.
- The browser console must show no errors.
- If Playwright is available, script that same walk and run it headless.

## Hosting and the website

See `docs/SETUP.md`: GitHub, GitHub Pages / Cloudflare Pages / any host, a sub-domain
such as `academy.your-site.com`, linking from the main site, and Vimeo embed settings.
The site works from a sub-folder too, because every path is relative.

## Things that need a person (ask, don't guess)

- Signing in to GitHub, Cloudflare, the domain provider or Vimeo.
- DNS changes on the company domain. Touch only the new `academy` record, never the
  existing website or email (MX) records.
- The trainer's full name, the privacy policy's operator details (NIPC, address), and
  approval of new questions by the trainer.
