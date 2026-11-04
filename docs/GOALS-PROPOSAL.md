# Belong Academy: goals, paths and naming (proposal)

Draft for Pedro and Lykke, following the 4 Nov 2026 meeting. No app code has changed.
Lesson numbers below are **0-based**, matching `moduleMedia[]` and `media/transcripts/<course>/m<N>.json`.

---

## 1. What is wrong today

`GOAL_PRESETS` in `data.js` has seven "goals", and each one is really a reordered list of the same seven courses. Five of them are named after a course ("From Farm to Table" is the `farm-to-table` course; "Lead the Belong Way" is mostly `voice-leadership`), and "The Belong Way" is simply all seven courses. All seven presets open with `welcome-belong` + `craveiral-places`. `craveiral-hospitality`, `guest-journey` and `houses-farm-sustainability` each appear in five of the seven. Each department in `ROLE_OPTIONS` is offered two of these presets, and for five departments one of the two is "The Belong Way" (everything). There is also a repeat inside the content that the presets can't see. `craveiral-places` re-records two of the onboarding lessons: `craveiral-places` lesson 2 (FarmTable) shares about 25% of its phrasing with `farm-to-table` lesson 0, and lesson 1 (the houses) shares about 18% with `houses-farm-sustainability` lesson 0 (trigram overlap of the transcripts; every other pair is ≤3%). The result: five of the seven paths play the houses tour twice, and three play the FarmTable talk twice. The goals tell the AI nothing about *why* a learner is there, so it can't tell which content serves which outcome.

## 2. Five meta-goals

These are outcomes a professional wants for themselves, not bundles of courses. Each name comes from the client's own words. Research supports framing them this way: in Statista/Booking.com's European survey, 69% of hospitality workers see the job as a long-term career, 83% want to move into leadership, and the main barrier is "insufficient skills development and progression options" [1][2].

| # | Goal (EN / PT) | One-line promise | Client's own words |
|---|---|---|---|
| G1 | **Become a trusted host** / **Tornar-me um anfitrião de confiança** | Make every guest feel they belong, and turn the moment that goes wrong into loyalty. | "Hospitality happens inside the guest"; "trust is the currency of this business"; "the moment any hospitality career is truly tested" |
| G2 | **Own the standard** / **Ser dono do padrão** | Keep one standard in every unit, whatever the setting. | "The register changes, the standard does not"; "a house made ready is not a clean room, it is a promise kept" |
| G3 | **Bring the guest closer to the land** / **Aproximar quem come de quem cultiva** | Know the farm, the plate and the producers well enough to tell their story and lead an experience. | "Bring those who eat closer to those who grow"; values video 08: "O que mostramos é o que existe" |
| G4 | **Work regeneratively** / **Trabalhar de forma regenerativa** | Make the mission real in water, energy, waste, linen and community, and know why profit is one of its legs. | Values video 01 closing line: "Deixar o território melhor do que o encontrámos"; video 03: "Três pernas. Nenhuma opcional." |
| G5 | **Grow into leadership** / **Crescer até liderar** | Decide in time, own mistakes, and grow into a role with more responsibility. | `voice-leadership` lesson 1: "We grow people, not just vegetables… we will always prefer to promote from within, and your ambition is welcome here." |

### Which filmed lesson serves which goal

Every lesson has **one owner** (where it lives in a path). The AI may also tag it as relevant to other goals, but that tag only affects ranking.

| Owner | Lessons (course id · lesson) | Count |
|---|---|---|
| **Foundation** (everyone) | `welcome-belong` · 0, 1; `craveiral-places` · 0 (One single house) | 3 |
| G1 Host | `craveiral-hospitality` · 1; `guest-journey` · 0, 1; `voice-leadership` · 0; `craveiral-places` · 7 | 5 |
| G2 Standard | `craveiral-places` · 1, 3, 4 | 3 |
| G3 Land & table | `craveiral-places` · 2, 6; `farm-to-table` · 1 | 3 |
| G4 Regenerate | `houses-farm-sustainability` · 1; `craveiral-places` · 5 (laundry, "circular economy in the plainest clothes") | 2 |
| G5 Lead | `craveiral-hospitality` · 0 (values as tools); `voice-leadership` · 1 | 2 |
| Twins (optional "deep dive" only) | `houses-farm-sustainability` · 0 (twin of places 1); `farm-to-table` · 0 (twin of places 2) | 2 |

That is all 20 filmed lessons. G4 and G5 are thin. Material that is already written would fill them:

- **Values series:** 11 videos, not 12. The script says "onze vídeos": Vision, Mission and nine values. Owners: Visão and Missão go to the Foundation; Autenticidade and Conforto to G1; Simplicidade to G2; Criatividade to G3; Sustentabilidade, Modernidade and Integração to G4; Liberdade and Bem-estar to G5. Three short PT clips are already on Vimeo (01, 06, 07).
- **Mindset scripts** (`Scripts for courses.pages`, three of them also in PT): "Above the Line", "No Failure, Only Feedback", "Attention to Detail", "Be a Lifelong Learner", "Ownership" and others. All go to G5. Each one is a 5-minute lesson.

### Showing only 2-3 goals

Each department gets one **primary** goal (preselected), one **secondary** goal, and **G5 Grow into leadership** as the third option for everyone. Pedro's promise to promote from within applies to the whole team, and leadership is what 83% of workers say they want [2]. Departments whose primary goal is already G5 get two other goals instead.

| Department | Primary | Secondary | Third |
|---|---|---|---|
| Hosting & Guest Care | G1 | G3 | G5 |
| Housekeeping & Houses | G2 | G1 | G5 |
| Culinary & Kitchen | G3 | G4 | G5 |
| Food & Beverage Service | G1 | G3 | G5 |
| Farm & Nature | G4 | G3 | G5 |
| Maintenance | G2 | G4 | G5 |
| Laundry | G2 | G4 | G5 |
| Wellness & Experiences | G1 | G3 | G5 |
| Office & Administration | G1 | G2 | G5 |
| People, Culture & Leadership | G5 | G1 | G4 |
| Safety & Sustainability | G4 | G2 | G5 |
| Logistics & Management Control | G5 | G4 | G2 |

This follows the pattern of role-based paths in hospitality LMSs. The Forbes Travel Guide / Lobster Ink programme offers "department-specific courses and customizable learning paths" [3], and Lobster Ink lists paths per department (for example, Front Office: 10 courses, 4 paths) [4].

## 3. No-repeat rule

1. **The Foundation comes first, once.** It contains Welcome lessons 0-1, One Single House lesson 0, and the Visão and Missão clips. This matches the client's plan ("Onboarding, dia 1: Visão · Missão, antes de qualquer formação técnica") and the Ritz-Carlton approach, where senior leaders personally teach the standards at orientation before any on-the-job training [5].
2. **A path is built as Foundation + the lessons the primary goal owns, then the lessons a learner's added goals own.** It is a set union keyed by lesson id. A lesson can't enter a path twice.
3. **Twin lessons are one topic.** A twin group (places 1 / houses 0; places 2 / farm-to-table 0) plays the newer cut, the 27-28 Oct `craveiral-places` recording. The older cut appears only as an optional deep dive and never counts twice towards hours.
4. **Switching or adding a goal keeps what is done.** Completed lessons count towards every goal that owns or tags them, and are never served again. This also keeps the 40-hour record honest, because no hour is counted twice.
5. **Values clips are reinforcement, not path filler.** The client's own guidance says "não passar os onze seguidos… biblioteca de reforço ao longo do ano… nunca passar um vídeo sem uma pergunta a seguir." So the app releases them on that schedule (onboarding days 1-3, a leaders' briefing, then one a month), each followed by one reflection question. They are not stacked into the path.
6. The two existing **JOURNEYS** become the ending of a goal (field mission + capstone) rather than a third competing concept.

## 4. Hierarchy and naming

There is no industry standard for these words. Dokeos uses Learning Path > Course > Module, with the module as the smallest unit [6]. Sensei uses "module" only as a grouping inside a course. LearnDash uses Course > Lesson > Topic. FEMA's system uses Course > Module > Unit > Lesson [7]. Typsy, the hospitality reference, uses Course > Lesson: "each course is comprised of multiple lessons… and a quiz" [8]. The client's own documents don't agree either. Pedro says "this module" in every video, and the Vimeo folder is "Onboarding Course (8 Modules)". The mindset scripts say "Na próxima lição" / "In the next lesson". The meeting wants the module to be the bigger unit.

**Recommendation:** use four learner-facing words and drop "course" / "curso" from the interface.

| Level | EN | PT-PT | What it is | Today's items |
|---|---|---|---|---|
| 1 | **Goal** | **Objetivo** | What the learner wants to become (2-3 shown) | G1-G5 above |
| 2 | **Path** | **Percurso** | The personal sequence assembled from goals | today's goal paths |
| 3 | **Programme** | **Programa** | A published collection of modules | *Integração Belong* (the 12-lesson revised onboarding plus One Single House); *Valores Belong* (the 11 values clips); *Acima da Linha* (mindset scripts) |
| 4 | **Module** | **Módulo** | A themed unit with outcomes and a final check, and the line on the comprovativo | **"Craveiral: Uma Só Casa" is a module** (8 lessons). The six two-lesson "courses" become six modules. |
| 5 | **Lesson** | **Lição** | One video + its two questions | each of the 20 videos and each values clip |

- The **12 onboarding lessons** and **One Single House** together make up one programme. The values series is a second programme, and the mindset scripts would be a third.
- **The legal record** keeps "comprovativo" and never "certificado". It should name each module as the *ação de formação*, with its hours (the term used in the Relatório Único training annex; for the lawyer to confirm). Today, 9 PT strings in `data.js` still say "certificado", including the buttons `comp_cert_btn: 'Certificado de formação'` and `jour_cert: 'Certificado da jornada'`. These should be fixed with the rename.
- This is also how Portugal's official vocational training reads. The national catalogue breaks each qualification into short units with their own hours and assessment (UFCD) [10], and the Escolas de Hotelaria run continuing training the same way [9]. So a *módulo* carrying hours will feel familiar to staff who trained there.
- **Spoken "this module"** in Pedro's videos can stay. A lesson is part of a module, so it isn't wrong, only looser.

**Rename size (`data.js` string literals):** 20 EN + 20 PT strings say module/módulo (where it means the video, this becomes lesson/lição). 54 EN + 48 PT strings say course/curso (this becomes module/módulo or programme/programa). 32 EN + 30 PT strings already say lesson/lição. Roughly **140 strings** change in `data.js`, plus a smaller set of hard-coded strings in `core/app.js`. Change only the visible strings. Keep the code keys (`modules: [...]`, course ids, stored progress) as they are, so no saved profile breaks. The house rule "a check only at the END of a module" becomes "at the end of a lesson" in the new wording, and the behaviour stays the same.

## 5. Open questions for Pedro / Lykke

1. Do the five goal names and promises sound like Craveiral? Is G5 "Grow into leadership" right to offer every department, given that it repeats the promise to promote from within?
2. Is Programme > Module > Lesson acceptable, given that Pedro's videos say "this module" aloud and the Vimeo folders say "8 Modules"?
3. For the twin recordings (houses tour, FarmTable talk), should the older onboarding cuts be retired or kept as optional deep dives?
4. When will the values series and the mindset scripts be filmed, and in which order? G4 and G5 depend on them.
5. Please sign off the department-to-goal table, especially the primaries for Office, F&B Service and Farm. Should team leads in any department see G5 as their primary goal?

---

### Sources

1. Statista / Booking.com, *Hospitality skills training and future need*: https://www.statista.com/chart/35672/hospitality-skills-training-and-future-need
2. Statista / Booking.com, *Working in hospitality is more than a summer job*: https://www.statista.com/chart/36085/working-in-hospitality-is-more-than-a-summer-job/
3. Forbes Travel Guide & Lobster Ink luxury service training (press release): https://www.journaldespalaces.com/en/pressrelease-53786-forbes-travel-guide-lobster-ink-launch-the-ultimate-online-luxury-service-training-program.html
4. Lobster Ink course adoption proposal (THE ICE): https://the-ice.org/wp-content/uploads/2020/11/THE-ICE-Lobster-Ink-Proposal.pdf
5. NIST Baldrige Award profile, The Ritz-Carlton Hotel Company (1992): https://www.nist.gov/system/files/documents/2017/10/11/1992_The_Ritz-Carlton_Hotel_Company.pdf
6. Dokeos LMS vocabulary: https://intercom.help/dokeos-lms/en/articles/10008296-the-basics-and-essential-vocabulary-for-creating-content-on-dokeos-lms
7. FEMA LCMS procedures: https://training.fema.gov/devres/docs/lcms%20procedures%20and%20best%20practices.docx; LearnDash hierarchy summary: https://eitca.org/e-learning/eitc-el-ldash-learndash-wordpress-lms/first-steps-in-learndash/an-introduction/examination-review-an-introduction/how-does-learndash-define-and-structure-the-hierarchy-of-courses-lessons-and-topics
8. Typsy help, *Course vs lesson*: https://intercom.help/typsy/en/articles/2280901-what-is-the-difference-between-a-course-a-lesson-and-a-mentor-session
9. Turismo de Portugal, training for professionals (Escolas de Hotelaria e Turismo, Academia Digital): https://business.turismodeportugal.pt/pt/Gerir/Formacao_Recrutamento/formacao/Paginas/default.aspx
10. DGERT, Catálogo Nacional de Qualificações (UC > UFCD structure; area 811 Hotelaria e Restauração): https://www.dgert.gov.pt/catalogo-nacional-de-qualificacoes
11. Client documents: `Belong_00_Guiao_Completo_Todos_os_Videos.docx` (byte-identical to `Belong_Guiao_Videos_Formacao.docx`), `Portuguese Scripts.docx`, `Scripts for courses.pages`; lesson transcripts in `media/transcripts/`.
