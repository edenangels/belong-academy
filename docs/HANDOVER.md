# Belong Academy — handover

Branch `restructure-hierarchy` · release `bel112` · not yet published.
The content map, the rules and the migration details are in [CONTENT-MAP.md](CONTENT-MAP.md).

## What it is

A bilingual (EN / pt-PT) training academy for Belong and Craveiral. Staff learn through
short video lessons, answer two questions after each one, and earn one certificate per
course. Every credited hour is recorded towards the 40 h/year of continuous training
(Código do Trabalho, art. 131.º).

The structure is **Academy → Courses → Modules → Lessons**:
- 3 courses, 9 modules, 20 lessons.
- The library is grouped by department: For everyone, Hosting & Guest Care, Houses &
  Housekeeping, Kitchen & Bar, Land & Farm, Maintenance, Team leaders.

## Try it (local)

1. Run the preview: `belong`, http://localhost:4190.
2. On the sign-in card, choose a test account: **Admin (test)**, **Team leader (test)** or
   **Learner (test)**. They need no password and only appear on a development host.
3. As a learner: Home, then a course, a module, a lesson. After the lesson come the
   takeaways, then two questions, then the next lesson.
4. As admin: ☰ → **Team**. It shows people, what each is doing now, progress per course,
   scores against the 70 % pass mark, training hours and an activity feed. Click a person
   for their courses, lesson by lesson.

## Reels

- **What's there:** three ~30-second vertical reels from the Vimeo folder "Belong shorts":
  - **Vision, animated** (published)
  - **Vision, estate footage** (published)
  - **Mission** (pending: only admins see it, marked "Pending review")
- **Where they appear:** the Home "Reels" row shows them as thumbnails. Tapping one opens a
  full-screen swipe feed at that reel, with sound, save, a short text version and the link
  to the deeper lesson. One question rises at the end of each reel.
- **Hours:** reels never credit training hours.
- **To add one:** add an entry to `REELS` in `brands/belong/content.js`, with an MP4 and a
  poster in `media/reels/`. There are two more Mission voice versions in the Vimeo folder if
  a different voice is wanted.

## Speed (AutoResearch, 5 Nov 2026)

On a mid-range phone, the Home screen now shows its main content in **3.7 s instead of
5.3 s (−30 %)**:
- 681 KB downloaded instead of 1.34 MB;
- 23 requests instead of 34.

This was measured by a locked scorer, so the content on screen is unchanged and no new
accessibility problem was added.
- **Details:** `~/autoresearch-lab/targets/belong-speed/REPORT.md`
- **New artwork:** run `python3 scripts/build-thumbs.py` after adding a cover or hero image.
- **Cloudflare deploy:** pass `core/curriculum.js core/team.js core/localdb.js` to `cfdeploy.sh`
  so they are minified.

## Settings that matter (`brands/belong/brand.js`)

| Setting | Now | Before real staff use it |
|---|---|---|
| `backend` | `'local'`: accounts live on this device only | `'firebase'`, so the team and the admin see each other across phones |
| `watchGate` | `false`: lessons can be completed without watching (testing) | delete the line, so a lesson needs real watch time |
| `markComplete` button | visible because of the testing gate | hidden again once `watchGate` is back on |
| `superadmins` | meridante.pt@gmail.com | add the emails of João, Pedro and the team leaders. With Firebase, also add them to `core/firestore.rules` and deploy the rules. |

## Checked before handover (5 Nov 2026)

- **Unit tests:** all 84 pass.
- **Screens:** every page swept as admin in EN and PT, at desktop width and at 390 px.
  - no console errors;
  - no sideways scroll or clipped panels;
  - no untranslated keys, "undefined" or old category labels;
  - no "certificado" in PT;
  - no EdenRise names or initials.
- **Certificate rules:** a 67 % score fails, 75 % passes, and one missing lesson blocks the
  certificate.
- **Lesson completion:** watching a module's last lesson first no longer completes the
  whole module. Records made before the new structure keep their progress.
- **Retakes:** each retake asks two new questions and adds no extra training hours.
- **Accounts:** switching accounts never mixes two people's progress. Reset demo resets only
  the person signed in.
- **Keyboard:** everything clickable can be reached with the keyboard, including the rows of
  the admin Team table.

## Open decisions (client)

1. **Quiz approval (Pedro).** 113 questions. Several keys were corrected and the Portuguese
   was rewritten in pt-PT. Some questions still need his judgement:
   - two scenario questions are not in the transcripts (a nearby resort, a private villa);
   - some answers are obvious, or two options are defensible.
2. **Two repeated lessons.** "The houses" and "FarmTable" repeat other lessons and are
   optional for now: keep both, or cut one of each pair.
3. **Department categories.** Confirm them. No video is about maintenance itself.
4. **Final test.** Is a separate final test per course wanted, or are the lesson questions
   enough? They are the assessment today.
5. **Team leaders' view.** Should team leaders see their own department? Today only admins
   see the Team view.

## Known limits

- **Admin console language:** most of it is English-only. The new Team panel is bilingual.
- **Lesson titles in the transcripts:** a few transcripts still say "module" where the new
  structure says lesson.
- **Search snippets:** some come from automatic transcription errors, e.g. "Raverello" for
  Craveiral.
