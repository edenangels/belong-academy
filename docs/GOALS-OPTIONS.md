# Belong Academy: how to structure learning goals (Option A vs Option B)

Requested in the review meeting on 9 Nov 2026 ("scan all the transcripts, simulate both, and tell us what you suggest").
Sources: `data.js` (GOAL_DEFS, ROLE_OPTIONS), `brands/belong/content.js` (CURRICULUM: 3 courses, 9 modules, 20 lessons), `knowledge/lessons.json` and all 20 transcripts in `media/transcripts/`. No app code was changed.

**Recommendation in one line:** launch **Option A**, built on **Option B's three axes**. Every department keeps three goals of its own, always in the same order: 1 Team, 2 Land & project, 3 Guests. Under the titles, each goal draws from the same small pool of modules for its axis. Learners get titles written for their work, and the content team gets one simple map with three buckets.

---

## 1. Simulation (only the 9 existing modules)

**How it was measured.** A path is the set of modules a goal unlocks. "Near-identical" means two goals in the same department share at least 80% of the shorter path, counting `welcome-belong`. Lesson counts include only required lessons: `csh-units` counts 3, because 2 of its 5 lessons are optional. "Continue" is how many new modules a learner gets on average when moving on to a second goal in their department.

| Metric | Today (36 goals) | Option A, improved (36 goals, below) | Option B (3 universal goals) |
|---|---|---|---|
| Goal titles a learner can see | 3 per dept, 36 in total | 3 per dept, 36 in total | the same 3 for everyone |
| Distinct paths (module sets) | 26 | 26 | 3 |
| Average path length | 3.97 modules / 7.9 lessons | 4.0 modules / 7.8 lessons | 4.0 modules / 8.0 lessons |
| Near-identical goal pairs in the same dept (out of 36 pairs) | **5** (4 of them 100% identical) | **0** | 0 |
| Modules never used | none | none | none |
| Modules covered once a dept's 3 goals are all done | 6.6 of 9 on average (range 5–9) | 6.8 of 9 (range 6–8) | 9 of 9 |
| New modules when continuing to a 2nd goal | 1.6 | 1.7 | 2.7 |
| Goals promising a topic no lesson teaches | 6 (see below) | 0 | 0 |

**Today's 5 near-identical pairs.** In each pair, the learner picks a different goal and gets the same videos:
- Housekeeping: *Prepare a house to standard* = *Turn houses over with less waste*
- Culinary: *Cook from what the farm gives* = *Run a kitchen that wastes nothing*
- Maintenance: *Keep every house working* = *Save water and energy*
- Laundry: *Run the São Teotónio laundry* = *Wash with less water and energy*
- Hosting: *Run a flawless arrival* / *Turn a complaint around* (80% shared)

**Promises with no lesson behind them.** I checked these against the transcripts with a keyword count over all 20 lessons: "machine", "tool", "repair", "fuel", "pollution", "safety", "allergen", "stock" and "inventory" each appear 0 to 2 times, and never as a topic.
- Today: *Keep every house working* (no lesson on repairs, pools or systems; the module only tours the houses). *Grow for the kitchen* (no growing practice; only what the farm supplies). *Run a kitchen that wastes nothing* and *Turn houses over with less waste* (no kitchen or turnover procedure; only the general sustainability lesson). *Run the São Teotónio laundry* (one 5-minute lesson, inside a 5-lesson module). The *Safety & Sustainability* department name (no safety, fire, first-aid or HACCP content anywhere).
- The meeting's draft Maintenance goals: *Keep the team's tools working* and *Run machines without pollution*. No lesson covers tools, machinery, fuel or pollution, so they can't be offered yet. Section 4 lists them as the first videos to commission.

**What the simulation shows.**
1. Option A does not make paths thinner than they are today. Both use 9 modules, so both give about 4 modules per path. What actually needed fixing was the 5 identical pairs and the 6 empty promises. The improved A set fixes both: 0 identical pairs and 0 empty promises.
2. Option A repeats across departments, but learners don't see it. The Land axis has only 6 distinct paths for 12 departments, because every land goal needs `houses-farm-sustainability` + `csh-one-house`. Learners only see their own department's three goals, and within a department every path differs. The Team axis has 9 distinct paths and the Guests axis has 11.
3. Option B is honest and simple but generic. With 3 goals, every learner covers all 9 modules, and a second goal adds the most new material (2.7 modules). But "Work as one team" says nothing to a laundry worker, and the AI coach has no department intent to tailor to.
4. The overlap helps a multi-goal pathway. A learner who finishes goal 1 already holds about half of goal 2, so "continue to the next goal" costs only 1–2 new modules (3–4 lessons). That keeps the next goal attractive.

---

## 2. Recommendation

**Launch now: Option A, structured as Team / Land / Guests (the set in section 3).**

- **Why:** A gives the personal, department-specific titles. B gives the structure underneath. Every department lists its goals in the same order (1 Team, 2 Land & project, 3 Guests), and each goal combines a shared core of 2 modules for its axis with 1–2 modules specific to the department. For a team taking over the platform this week, it changes data only: same shape as GOAL_DEFS, same engine, and aliases keep stored profiles working.
- **Multi-goal pathway (to build next, small change):** when a goal's path is complete, show "Continue: <next goal>", going Team → Land → Guests and back to the start. Modules already done stay ticked, because progress is stored per lesson. Switching goal at any time from the profile is already supported (`#pfGoal`). Finishing all three should award the existing *Pathfinder* badge. Learners whose goal title doesn't change keep their old `pathMods` until they pick a goal again. That doesn't matter much before launch, but the build should note it.
- **Content mapping:** each new video gets two tags, an axis (Team / Land / Guests) and a department (or "all"). The team then adds it to the matching goal's `mods`. They have 3 buckets to plan against, not 36.

**At 50–70 videos:**
1. Give each department its own module per axis: 12 depts × 3 axes = 36 slots of 1–2 lessons each. The Land axis then stops converging, and the department titles carry real, distinct content. Section 4 marks the first video to film for each slot (★).
2. Add a 4th goal type, **Craft** (the technical work of the role), once the safety and technical videos exist: food safety and allergens, cleaning chemicals, machinery and fuel, fire and first aid, stock control. These don't fit Team, Land or Guests, and today nothing covers them.
3. Keep the three Option B axes as the content team's permanent planning map, even when learners see 48 goals.

---

## 3. The improved Option A set (paste-ready)

All titles are 6 words or fewer in both EN and PT-PT. Icons come only from the set GOAL_DEFS already uses. Every path starts with `welcome-belong`. Each module was checked against `lessons.json` summaries and chapters, and against the transcripts. Order inside each department: Team, Land, Guests.

```js
const GOAL_DEFS = [
  /* Hosting & Guest Care */
  { k: 'Link the guest to every team', icon: 'people', pt: 'Ligar o hóspede a cada equipa',
    en_d: 'Who does what across five units: solve on the spot, tell after.', pt_d: 'Quem faz o quê nas cinco unidades: resolver no momento, contar depois.',
    mods: ['welcome-belong', 'csh-one-house', 'voice-leadership', 'guest-journey'] },
  { k: 'Tell the story of the place', icon: 'compass', pt: 'Contar a história do lugar',
    en_d: 'Houses, farm and the circular chain, precisely enough to build trust.', pt_d: 'Casas, quinta e a cadeia circular, com a precisão que cria confiança.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'csh-units'] },
  { k: 'Run a flawless arrival', icon: 'sun', pt: 'Uma chegada sem falhas',
    en_d: 'Booking to farewell, and a complaint turned around within the hour.', pt_d: 'Da reserva à despedida, e uma reclamação resolvida dentro da hora.',
    mods: ['welcome-belong', 'guest-journey', 'craveiral-hospitality', 'csh-care'] },
  /* Housekeeping & Houses */
  { k: 'Keep the standard as a team', icon: 'hands', pt: 'Manter o padrão em equipa',
    en_d: 'Standards as respect, mistakes raised early, every unit known.', pt_d: 'Padrões como respeito, erros ditos cedo, cada unidade conhecida.',
    mods: ['welcome-belong', 'craveiral-hospitality', 'voice-leadership', 'csh-units'] },
  { k: 'Turn houses over with less waste', icon: 'leaf', pt: 'Preparar casas com menos desperdício',
    en_d: 'Water, energy and waste routed right, house after house.', pt_d: 'Água, energia e resíduos bem encaminhados, casa após casa.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'csh-units'] },
  { k: 'Prepare a house to standard', icon: 'sun', pt: 'Preparar uma casa no padrão',
    en_d: 'Each house type, its details and the guest\'s sleep: no detail is small.', pt_d: 'Cada tipo de casa, os seus detalhes e o sono do hóspede: nenhum detalhe é pequeno.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-units', 'csh-care'] },
  /* Culinary & Kitchen */
  { k: 'One kitchen, many tables, one team', icon: 'basket', pt: 'Uma cozinha, muitas mesas, uma equipa',
    en_d: 'Work with the farm, the floor and every unit the kitchen feeds.', pt_d: 'Trabalhar com a quinta, a sala e cada unidade que a cozinha alimenta.',
    mods: ['welcome-belong', 'farm-to-table', 'csh-one-house', 'voice-leadership'] },
  { k: 'Cook from what the farm gives', icon: 'leaf', pt: 'Cozinhar ao ritmo da quinta',
    en_d: 'Over 70% grown here, the rest local, and waste routed, not thrown.', pt_d: 'Mais de 70% cultivado aqui, o resto local, e resíduos encaminhados, não deitados fora.',
    mods: ['welcome-belong', 'farm-to-table', 'houses-farm-sustainability', 'csh-one-house'] },
  { k: 'Tell the story behind every dish', icon: 'sprout', pt: 'Contar a história de cada prato',
    en_d: 'The chain from grower to plate, in a few honest sentences.', pt_d: 'A cadeia do produtor ao prato, em poucas frases honestas.',
    mods: ['welcome-belong', 'farm-to-table', 'craveiral-hospitality', 'voice-leadership'] },
  /* Food & Beverage Service */
  { k: 'Keep service flowing as a team', icon: 'hands', pt: 'Um serviço fluido, em equipa',
    en_d: 'Solve at the table, tell after, and recommend every Belong unit.', pt_d: 'Resolver à mesa, contar depois, e recomendar cada unidade Belong.',
    mods: ['welcome-belong', 'voice-leadership', 'csh-units', 'farm-to-table'] },
  { k: 'Serve the land, table to beach', icon: 'waves', pt: 'A origem, da mesa à praia',
    en_d: 'Origin in one sentence, local wine, and a beach left cleaner.', pt_d: 'A origem numa frase, o vinho local e uma praia deixada mais limpa.',
    mods: ['welcome-belong', 'farm-to-table', 'csh-units', 'houses-farm-sustainability'] },
  { k: 'Serve the FarmTable way', icon: 'basket', pt: 'Servir à maneira do FarmTable',
    en_d: 'Never rush a table, and save a service that slipped.', pt_d: 'Nunca apressar uma mesa, e salvar um serviço que correu mal.',
    mods: ['welcome-belong', 'farm-to-table', 'guest-journey', 'craveiral-hospitality'] },
  /* Farm & Nature */
  { k: 'Grow for the kitchen', icon: 'sprout', pt: 'Cultivar para a cozinha',
    en_d: 'What the farm supplies the kitchen, and the chain that links you.', pt_d: 'O que a quinta fornece à cozinha, e a cadeia que vos liga.',
    mods: ['welcome-belong', 'farm-to-table', 'csh-one-house', 'voice-leadership'] },
  { k: 'Keep the land regenerating', icon: 'tree', pt: 'Manter a terra a regenerar',
    en_d: 'Water, waste and compost: the circular economy in practice.', pt_d: 'Água, resíduos e composto: a economia circular na prática.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'farm-to-table'] },
  { k: 'Show guests the farm', icon: 'compass', pt: 'Mostrar a quinta aos hóspedes',
    en_d: 'Turn a farm visit into an experience, not a lecture.', pt_d: 'Transformar uma visita à quinta numa experiência, não numa aula.',
    mods: ['welcome-belong', 'csh-care', 'farm-to-table', 'craveiral-hospitality'] },
  /* Maintenance */
  { k: 'Back every team, unit by unit', icon: 'mountain', pt: 'Apoiar cada equipa, unidade a unidade',
    en_d: 'Know every house and unit, raise problems early, fix and tell.', pt_d: 'Conhecer cada casa e unidade, levantar problemas cedo, resolver e contar.',
    mods: ['welcome-belong', 'csh-units', 'csh-one-house', 'voice-leadership'] },
  { k: 'Save water and energy', icon: 'drop', pt: 'Poupar água e energia',
    en_d: 'Leaks, wasted energy and the end-of-shift test, every day.', pt_d: 'Fugas, energia desperdiçada e o teste do fim de turno, todos os dias.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'csh-units'] },
  { k: 'Fix it before guests notice', icon: 'hands', pt: 'Resolver antes que o hóspede note',
    en_d: 'Friction points in a stay, spotted early and solved on the spot.', pt_d: 'Os pontos de atrito de uma estadia, vistos cedo e resolvidos no momento.',
    mods: ['welcome-belong', 'guest-journey', 'houses-farm-sustainability', 'csh-care'] },
  /* Laundry */
  { k: 'Linen the houses can count on', icon: 'drop', pt: 'Roupa com que as casas contam',
    en_d: 'Four linen standards, and a demanding team that looks after itself.', pt_d: 'Quatro padrões da roupa, e uma equipa exigente que cuida de si.',
    mods: ['welcome-belong', 'csh-units', 'voice-leadership', 'csh-one-house'] },
  { k: 'Wash with less water and energy', icon: 'leaf', pt: 'Lavar com menos água e energia',
    en_d: 'A local laundry as circular economy, not a metaphor.', pt_d: 'Uma lavandaria local como economia circular, não como metáfora.',
    mods: ['welcome-belong', 'csh-units', 'houses-farm-sustainability', 'csh-one-house'] },
  { k: 'Protect every guest\'s sleep', icon: 'sun', pt: 'Proteger o sono de cada hóspede',
    en_d: 'Linen, quiet and care, for guests and village customers alike.', pt_d: 'Roupa, silêncio e cuidado, para hóspedes e clientes da aldeia por igual.',
    mods: ['welcome-belong', 'csh-units', 'csh-care', 'craveiral-hospitality'] },
  /* Wellness & Experiences */
  { k: 'Bring wellbeing to the team too', icon: 'flower', pt: 'Levar o bem-estar também à equipa',
    en_d: 'Wellbeing starts at home: pace, rest and speaking up early.', pt_d: 'O bem-estar começa em casa: ritmo, descanso e falar cedo.',
    mods: ['welcome-belong', 'craveiral-hospitality', 'voice-leadership', 'csh-care'] },
  { k: 'Bring the land into every experience', icon: 'tree', pt: 'Trazer a terra a cada experiência',
    en_d: 'Know the farm and the place, not a script.', pt_d: 'Conhecer a quinta e o lugar, não um guião.',
    mods: ['welcome-belong', 'csh-care', 'houses-farm-sustainability', 'farm-to-table'] },
  { k: 'Lead an experience guests remember', icon: 'sun', pt: 'Uma experiência que fica na memória',
    en_d: 'Four registers, the first 90 seconds, a peak and a warm end.', pt_d: 'Quatro registos, os primeiros 90 segundos, um pico e um final caloroso.',
    mods: ['welcome-belong', 'csh-care', 'craveiral-hospitality', 'guest-journey'] },
  /* Office & Administration */
  { k: 'Keep the whole operation connected', icon: 'compass', pt: 'Manter toda a operação ligada',
    en_d: 'Five units, one house: who does what, said calmly and clearly.', pt_d: 'Cinco unidades, uma casa: quem faz o quê, dito com calma e clareza.',
    mods: ['welcome-belong', 'csh-one-house', 'csh-units', 'voice-leadership'] },
  { k: 'Know why regeneration must pay', icon: 'mountain', pt: 'Perceber a regeneração como negócio',
    en_d: 'Financial sustainability first, and how Belong grows without harm.', pt_d: 'A sustentabilidade financeira primeiro, e como a Belong cresce sem prejudicar.',
    mods: ['welcome-belong', 'craveiral-hospitality', 'csh-one-house', 'farm-to-table'] },
  { k: 'Write to guests in our voice', icon: 'people', pt: 'Escrever aos hóspedes na nossa voz',
    en_d: 'Bookings, emails and reviews: calm, warm, concrete.', pt_d: 'Reservas, emails e avaliações: calma, calorosa, concreta.',
    mods: ['welcome-belong', 'guest-journey', 'voice-leadership', 'craveiral-hospitality'] },
  /* People, Culture & Leadership */
  { k: 'Lead a team with autonomy', icon: 'hands', pt: 'Liderar uma equipa com autonomia',
    en_d: 'Solve it, tell after; mistakes early; standards as respect.', pt_d: 'Resolver e contar depois; erros cedo; padrões como respeito.',
    mods: ['welcome-belong', 'voice-leadership', 'craveiral-hospitality', 'csh-one-house'] },
  { k: 'Root every newcomer in the place', icon: 'tree', pt: 'Enraizar cada recém-chegado no lugar',
    en_d: 'The story, the land and the chain a new colleague needs.', pt_d: 'A história, a terra e a cadeia de que um novo colega precisa.',
    mods: ['welcome-belong', 'csh-one-house', 'houses-farm-sustainability', 'craveiral-hospitality'] },
  { k: 'Build a team guests can feel', icon: 'people', pt: 'Uma equipa que o hóspede sente',
    en_d: 'Treat the team as the team should treat guests.', pt_d: 'Tratar a equipa como a equipa deve tratar os hóspedes.',
    mods: ['welcome-belong', 'csh-care', 'guest-journey', 'voice-leadership'] },
  /* Safety & Sustainability */
  { k: 'Make sustainability every team\'s habit', icon: 'leaf', pt: 'Sustentabilidade como hábito de cada equipa',
    en_d: 'One end-of-shift test, shared by every unit.', pt_d: 'Um teste de fim de turno, partilhado por todas as unidades.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'voice-leadership'] },
  { k: 'Close the circle on waste', icon: 'sprout', pt: 'Fechar o círculo dos resíduos',
    en_d: 'From garden to kitchen to compost, nothing thrown away.', pt_d: 'Da horta à cozinha e ao composto, nada se deita fora.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'farm-to-table'] },
  { k: 'Explain our sustainability to guests', icon: 'compass', pt: 'Explicar a sustentabilidade aos hóspedes',
    en_d: 'With specifics, never lectures.', pt_d: 'Com factos concretos, nunca com sermões.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'craveiral-hospitality', 'voice-leadership'] },
  /* Logistics & Management Control */
  { k: 'Run the units as one house', icon: 'waves', pt: 'Gerir as unidades como uma casa',
    en_d: 'Five units, one promise, kept consistent across all of them.', pt_d: 'Cinco unidades, uma promessa, cumprida com coerência em todas.',
    mods: ['welcome-belong', 'csh-one-house', 'csh-units', 'farm-to-table'] },
  { k: 'Buy local and waste nothing', icon: 'basket', pt: 'Comprar local e não desperdiçar',
    en_d: 'Purchasing as a vote: local, seasonal, routed.', pt_d: 'Comprar como um voto: local, da época, bem encaminhado.',
    mods: ['welcome-belong', 'houses-farm-sustainability', 'csh-one-house', 'farm-to-table'] },
  { k: 'Keep the promise guests booked', icon: 'sun', pt: 'Cumprir a promessa da reserva',
    en_d: 'What guests expect at each step, and the units that deliver it.', pt_d: 'O que o hóspede espera em cada passo, e as unidades que o cumprem.',
    mods: ['welcome-belong', 'guest-journey', 'csh-units', 'csh-one-house'] }
];

/* ROLE_OPTIONS goals arrays: paste each array into that role's `goals:`. Order is always [Team, Land & project, Guests] */
const ROLE_GOALS = {
  hosting: ['Link the guest to every team', 'Tell the story of the place', 'Run a flawless arrival'],
  housekeeping: ['Keep the standard as a team', 'Turn houses over with less waste', 'Prepare a house to standard'],
  culinary: ['One kitchen, many tables, one team', 'Cook from what the farm gives', 'Tell the story behind every dish'],
  fnb: ['Keep service flowing as a team', 'Serve the land, table to beach', 'Serve the FarmTable way'],
  farm: ['Grow for the kitchen', 'Keep the land regenerating', 'Show guests the farm'],
  maintenance: ['Back every team, unit by unit', 'Save water and energy', 'Fix it before guests notice'],
  laundry: ['Linen the houses can count on', 'Wash with less water and energy', 'Protect every guest\'s sleep'],
  wellness: ['Bring wellbeing to the team too', 'Bring the land into every experience', 'Lead an experience guests remember'],
  office: ['Keep the whole operation connected', 'Know why regeneration must pay', 'Write to guests in our voice'],
  people: ['Lead a team with autonomy', 'Root every newcomer in the place', 'Build a team guests can feel'],
  safety: ['Make sustainability every team\'s habit', 'Close the circle on waste', 'Explain our sustainability to guests'],
  logistics: ['Run the units as one house', 'Buy local and waste nothing', 'Keep the promise guests booked']
};

/* GOAL_ALIASES replacement: retired titles point at a live goal, so stored profiles keep working */
const GOAL_ALIASES = { 'Belong Host': 'Run a flawless arrival', 'Seasonal Cook': 'Cook from what the farm gives', 'Nature Guide': 'Show guests the farm', 'Team Lead': 'Lead a team with autonomy',
  'The Belong Way': 'Run a flawless arrival', 'Houses & Standards': 'Prepare a house to standard', 'From Farm to Table': 'Cook from what the farm gives',
  'Rooted in the Land': 'Keep the land regenerating', 'Lead the Belong Way': 'Lead a team with autonomy', 'Safe & Sustainable': 'Make sustainability every team\'s habit',
  'Answer any guest question': 'Tell the story of the place', 'Turn a complaint around': 'Run a flawless arrival',
  'Run a kitchen that wastes nothing': 'Cook from what the farm gives', 'Run the beach bar and events': 'Serve the land, table to beach',
  'Save a service that slipped': 'Serve the FarmTable way', 'Keep every house working': 'Back every team, unit by unit',
  'Fix it before a guest notices': 'Fix it before guests notice', 'Run the São Teotónio laundry': 'Linen the houses can count on',
  'Linen to the house standard': 'Linen the houses can count on', 'Care for a guest\'s wellbeing': 'Lead an experience guests remember',
  'Handle bookings from first click': 'Write to guests in our voice', 'Know the whole operation': 'Keep the whole operation connected',
  'Welcome someone new to the team': 'Root every newcomer in the place', 'Keep the values alive day to day': 'Lead a team with autonomy',
  'Run sustainability every shift': 'Make sustainability every team\'s habit', 'Make regeneration pay': 'Know why regeneration must pay' };
```

Two of these goals sit on thin material, and the team should know: Laundry has one 5-minute lesson of its own, inside `csh-units`, and Maintenance has no technical lesson. Both goals are honest, but they are the first gaps to fill (section 4).

---

## 4. Content map: future videos per goal

★ marks the first video to film for each goal: 36 videos, one dedicated module per department and axis. Add the shared axis videos (last table) and the total reaches about 50 new lessons, the 50–70 target. Ideas are short, practical and filmed on site, in the same 4–6-minute format as today.

| Dept | Team goal | Land & project goal | Guests goal |
|---|---|---|---|
| Hosting | ★ The daily handover between reception and every unit · Passing a request so nothing drops · Radio and WhatsApp etiquette · When to call a manager | ★ The 10 facts every guest asks, and the true answers · Walking the circular chain in 5 minutes · The territory: beaches, villages, trails | ★ The first 15 minutes, filmed live · A complaint resolved, start to finish · Departure and the message after · Guests with special needs |
| Housekeeping | ★ The housekeeping–laundry–maintenance loop · Reporting a fault the right way · Pairing and peer checks | ★ A low-water, low-chemical turnover · Sorting waste in a house · Amenities without plastic | ★ Turnover checklist for each house type · The sleep details: blackout, quiet, bed · The guest's first look at a house |
| Culinary | ★ Weekly harvest meeting with the farm · Calling the pass with the floor team · Kitchen for events and the beach bar | ★ Menu planning from the harvest calendar · Preserving the surplus · Kitchen waste to compost, routed | ★ Telling a dish's story in 20 seconds · Allergens and dietary needs explained · The chef at the table |
| F&B Service | ★ Floor–kitchen communication in service · Cross-recommending CAM and events · Shift briefing in 5 minutes | ★ Local wines and producers: the five to know · Beach bar sourcing and the clean-beach routine · Zero-waste bar | ★ Breakfast service, filmed · Pacing a dinner table · Recovering a slow service |
| Farm & Nature | ★ What the kitchen needs this season and how to agree it · Farm–kitchen handover of produce · Working with volunteers | ★ Soil, compost and cover crops at Craveiral · Water on the farm: irrigation and storage · Biodiversity and the trees | ★ Leading a harvest experience · Children on the farm · Answering "is it organic?" |
| Maintenance | ★ Keeping the team's tools and vehicles working · The fault-ticket flow with housekeeping · Planned vs reactive jobs | ★ Running machines without pollution: fuel, oil, noise · Pools without waste · Solar, meters and leaks | ★ Working invisibly around guests · Fixing a fault while a guest is in the house · Pre-arrival house check |
| Laundry | ★ Inside the São Teotónio laundry: a day · Labelling and handover to housekeeping · Safe lifting and pace | ★ Water and energy per kilo: our numbers · Detergents and the land · Linen life cycle: repair and reuse | ★ Linen and sleep: what guests notice · Serving village customers · Stains and guest items |
| Wellness | ★ Team wellbeing practices that work · Planning experiences with farm and kitchen · Rest and rota | ★ Nature-based experiences on the 9 hectares · Seasonal experience calendar · Leave-no-trace on trails and beach | ★ The first 90 seconds, filmed · Designing the peak moment · An experience that went wrong, recovered |
| Office | ★ Who does what: the operation map · Internal messages in our voice · Bookings–hosting handover | ★ How Belong makes money and why it must · The numbers behind regeneration · Telling the project to partners | ★ A booking email, line by line · Replying to a bad review · Pre-arrival messages that set the promise |
| People | ★ Running a 10-minute team meeting · Giving feedback with high standards · Hiring for belonging | ★ Onboarding walk of the land for a new hire · Careers from within: real stories · Local hiring and the village | ★ Treating the team as guests: daily habits · Protecting the team from abusive guests · Recognising good service |
| Safety & Sust. | ★ The end-of-shift test, unit by unit · Sustainability champions in every team · Incident reporting | ★ Waste streams on site, mapped · Water budget of the estate · Fire prevention on the land | ★ Talking sustainability without lecturing · Guest questions: plastic, water, solar · Showing the compost to guests |
| Logistics | ★ Supplying five units from one plan · Stock counts and handovers · Ordering with the kitchen | ★ Choosing a local supplier · Seasonal buying calendar · Packaging and returnables | ★ The shop as a listening tool · What guests ask for that we lack · Delivery of the promise: pre-arrival readiness |

**Shared axis videos (one each, used by many goals; film early):**
- **Team:** how Belong's 12 departments fit together · solve it, tell after, in practice · giving and asking for help.
- **Land & project:** a walk of the circular chain · the 2030 vision for the estate · what regeneration looks like this year.
- **Guests:** the six things every guest should feel · names and anticipation · a perfect Craveiral day.
- **Craft (future 4th goal):** fire and first aid · food safety and HACCP · cleaning chemicals · machinery basics.

How to use it: when a script is written, tag it with an axis and departments, then add its module to the matching goals' `mods`. Re-run the simulation in section 1 each quarter. The aim is 0 near-identical pairs and at least 3 distinct Land paths' worth of dedicated content per department before adding the Craft goal.
