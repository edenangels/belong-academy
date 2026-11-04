# Belong Academy — content map (Academy → Courses → Modules → Lessons)

Branch `restructure-hierarchy`, release `bel93`. Not published. The source of
truth is `CURRICULUM` in `brands/belong/content.js`; the engine is
`core/curriculum.js`. Deleting the `CURRICULUM` block (or not loading
`core/curriculum.js`) returns the app to the previous item-based screens. Nothing
in learner data is rewritten, so the change can be reversed.

## Definitions used

- **Course**: has outcomes, an audience, prerequisites, completion requirements,
  an assessment and a certificate. Certificates exist only at this level.
- **Module**: a group of related lessons. It has one outcome. It keeps the id of
  the catalogue item it came from, so learner history stays attached.
- **Lesson**: one video plus its two questions. Its id is `<itemId>:<index>`,
  which is the key the app already stored progress under.
- **Category**: a discovery label in the library only. It never defines structure.

## Map — 3 courses, 9 modules, 20 lessons (each lesson used exactly once)

### 1. Belong & Craveiral Foundations (`belong-foundations`)
Audience: everyone joining Craveiral or Belong, in any department. No prerequisites.

| Module | Lessons |
|---|---|
| Welcome to Belong (`welcome-belong`) | 1. My story and the story of Craveiral · 2. Our vision, our mission and the chain |
| Hospitality, the Craveiral Way (`craveiral-hospitality`) | 1. Our values, in practice · 2. Hospitality, the Craveiral way |
| Our Voice & How We Lead (`voice-leadership`) | 1. How we speak: the Craveiral voice · 2. Leadership, autonomy, and how we work together |

### 2. Guest Experience & Our Standards (`guest-standards`)
Prerequisite (recommended, not enforced): Foundations.

| Module | Lessons |
|---|---|
| The Guest Journey (`guest-journey`) | 1. From first click to farewell · 2. Complaints and service recovery |
| The Houses, the Farm & Sustainability (`houses-farm-sustainability`) | 1. The houses, the farm, and the standards we keep · 2. Sustainability in daily practice |
| FarmTable & the Constellation (`farm-to-table`) | 1. FarmTable: where the philosophy becomes food · 2. The constellation: Beach Bar, A Mesa do CAM, events |

### 3. Craveiral: One Single House (`one-single-house`)
This course is built from one catalogue item (`craveiral-places`, 8 videos), split into 3 modules.

| Module | Lessons |
|---|---|
| One House, Five Units (`csh-one-house`) | 1. One single house |
| The Units (`csh-units`) | 2. The houses *(optional)* · 3. FarmTable *(optional)* · 4. Bar da Praia do Carvalhal · 5. The Shop · 6. The São Teotónio laundry |
| Experiences & Care (`csh-care`) | 7. Experiential tourism · 8. Wellbeing and service recovery |

## Decisions, and why

- **The operational material is a separate course.** Guest Journey, Houses/Farm and
  FarmTable are mostly about procedures (an operational-signal count over the
  transcripts). They were split from the culture material instead of being
  added to Foundations. Voice & Leadership moved into Foundations because it is culture.
- **Two lessons are optional.** In One Single House, "The houses" and "FarmTable"
  repeat 28% and 37% of the text of lessons in Guest Experience & Our Standards
  (4-gram overlap; every other pair is under 6%). They don't count towards
  completion or the score. **Pedro to decide:** keep both, or cut one of each pair.
- **No lesson was invented and no video was re-cut.** Every split follows the
  existing video boundaries. The two Welcome titles are the ones you asked for.

## Rules

- **Lesson complete** = a recorded training-log entry for it. Legacy fallback: the
  item was already marked done under the old model.
- **Assessment** = the lesson questions. Your best attempt at each lesson counts.
  Course score = total right ÷ total asked. Pass mark: **70%**. Retakes rotate the
  question bank. A retake is stored in `S.checkRetakes` and never adds training hours.
- **Certificate earned** = every required lesson is complete, every required lesson
  has been answered, and the score is at least 70%. The screen labels the three
  states separately: Completed / Assessment passed / Certificate earned.
- **Time**: *Estimated* = video minutes + about 1 minute of questions per lesson.
  *Recorded* = sum of credited training hours. Video length is never shown as
  time spent.
- **"Certified · 50%" is resolved.** Old module certificates issued below 70% are
  not converted. They appear under "Earlier records" with their original scope
  and score, and admins see a flag on them. Only the course certificate is shown
  as a certificate.

## Migration behaviour

- Old ids are untouched: `S.progress`, `trainingLog`, `ledger`, `certs`.
- Old links redirect with `history.replaceState`:
  - `#/course/<moduleId>` goes to `#/module/<moduleId>`.
  - `#/course/craveiral-places` goes to the module that holds your next lesson.
- New ledger events: `check_retake` and `cert_issued {kind:'program'}`. Existing
  events keep their meaning.
- **Changes to the shared core** (they affect EdenRise and Taipa when synced):
  - A session with no watch evidence now credits 0 hours. It used to credit the
    full nominal minutes.
  - The quiz cache-buster recognises any `<letters><digits>` version, not only
    `edrNNN`. Belong and Taipa quiz files were being fetched without a version.

## Question-bank fixes in this branch (113 questions, still not approved by Pedro)

In five questions the marked answer contradicted the explanation the learner
reads. Each key was changed to match its explanation:

- `welcome-belong`
  - land-use "primary consideration": now *Preserving the natural beauty*.
  - nearby-resort proposal: now *Reject*.
  - private-villa request: now *Reject*.
- `craveiral-hospitality`, "simplicity and comfort": now *Balance simplicity and comfort*.
- `voice-leadership`, "hesitant guest": now *Both engage and respect boundaries,
  calibrated*.

The resort and villa answers are value judgements made by the generator. Pedro
should confirm them. "São Teotônio" was changed to European Portuguese "São Teotónio".

## Library categories, by department (meeting, 4 Nov 2026)

The categories used to come from the videos (School, Staying & Feeling, To Nature,
Growing & Tasting, Community). They are now grouped by who each module is useful
to. A worker outside maintenance can tap Maintenance and see what is relevant
there. These are discovery labels only, and a module can sit in several. They
were assigned from the 20 transcripts: a vocabulary score per department was the
hint, then each module was judged by hand.

| Category | Modules |
|---|---|
| For everyone | Welcome to Belong · Hospitality, the Craveiral Way · Our Voice & How We Lead · One House, Five Units |
| Hosting & Guest Care | Hospitality, the Craveiral Way · The Guest Journey · Experiences & Care |
| Houses & Housekeeping | The Houses, the Farm & Sustainability · The Units (houses, laundry) |
| Kitchen & Bar | FarmTable & the Constellation · The Units (FarmTable, Beach Bar) |
| Land & Farm | Welcome to Belong · The Houses, the Farm & Sustainability · FarmTable & the Constellation |
| Maintenance | The Houses, the Farm & Sustainability · The Units |
| Team leaders | Our Voice & How We Lead |

Gap: no video is about maintenance itself. The Maintenance tab shows the
house-standards material until one is recorded.

## Backend switch: internal database, or Firebase

`BRAND.backend` in `brands/belong/brand.js` controls it.

- `'local'` (current setting) loads `core/localdb.js`.
  - Sign-in, My learning, Admin team progress, forum and missions all run on one
    store in this browser, with no Firebase calls.
  - Three test accounts appear on the sign-in card: Admin, Team leader and
    Learner. They have no passwords. New accounts can still be created with
    email and password.
  - Accounts live on **this device only**. They are not shared between phones
    and laptops.
- `'firebase'` loads `core/auth.js` exactly as before. The Firebase config is kept
  in `brand.js`. Switch to this before a deploy where real staff sign in from their
  own devices.

## Gaps (not solved here)

1. There is no course-level final assessment. The lesson questions act as the
   assessment. A separate final test would need content from Pedro, so none was invented.
2. Pedro hasn't signed off the 113 questions.
3. The twin recordings: see the optional lessons above.
4. Learner data in Firestore wasn't inspected, so real historical inconsistencies
   are unknown. The admin flag on Earlier records will show them once it's live.
5. `watchGate: false` and the visible "Mark lesson complete" button are testing
   settings. Turn them back on before real learners use the Academy.
6. `backend: 'local'` is also a testing setting. Published like this, every
   device would be its own island of accounts.
