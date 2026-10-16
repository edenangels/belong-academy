/* ============================================================================
   INSTANCE CONTENT · Belong Academy — course catalog (pure data)
   Six filmed courses, two lessons each: Craveiral's own onboarding, recorded in
   twelve lessons (Vimeo folder "New with Music", unlisted; each id carries its
   h= hash, which the player needs). One course was twelve lessons long until
   16 Oct 2026; João asked three times for the videos to be spread across the
   path, so the lessons are now paired by theme so each course fits a
   department. Lesson numbers below are the trainer's original numbering.
============================================================================ */
const CATALOG = [
  {
    id: 'welcome-belong', title: 'Welcome to Belong', cat: 'School', grad: 1, icon: 'compass',
    outcomes: ['Tell Craveiral\'s story, and why Belong exists', 'Explain the vision, the mission and the chain in your own words', 'See why local suppliers and the land come first in every decision'],
    outcomes_pt: ['Contar a história do Craveiral, e porque existe a Belong', 'Explicar a visão, a missão e a cadeia por palavras suas', 'Perceber porque os fornecedores locais e a terra vêm primeiro em cada decisão'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09', featured: true,
    poster: 'media/covers/welcome-belong.webp', heroArt: 'media/covers/welcome-belong-hero.webp',
    hook: 'Why we\'re here, and how we do it.', hookSub: 'The story of Craveiral, and the vision, mission and chain behind Belong.',
    desc: 'Where Belong comes from and why: the founder\'s story and the story of Craveiral, then the vision, the mission and the chain that turns a farmhouse into a circular economy.',
    modules: ['Why we\'re here: my story, and the story of Craveiral', 'Our vision, our mission, and the chain'],
    moduleDurations: [5,6],
    moduleMedia: [
      {"type":"vimeo","id":"1221527400","h":"c3866a3f1f"}   /* lesson  1 · Why we're here: my story, and the story of Crave */,
      {"type":"vimeo","id":"1227370063","h":"65ab173171"}   /* lesson  2 · Our vision, our mission, and the chain */
    ]
  },
  {
    id: 'craveiral-hospitality', title: 'Hospitality, the Craveiral Way', cat: 'Staying & Feeling', grad: 4, icon: 'people',
    outcomes: ['Live the Belong values in everyday decisions', 'Welcome guests as friends and use their names naturally', 'Anticipate a guest\'s needs before they have to ask'],
    outcomes_pt: ['Viver os valores da Belong nas decisões de todos os dias', 'Acolher os hóspedes como amigos e usar os seus nomes com naturalidade', 'Antecipar as necessidades de um hóspede antes de ele pedir'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09',
    poster: 'media/covers/craveiral-hospitality.webp',   /* a frame from the lesson's own b-roll */
    hook: 'Guests as friends, not customers.', hookSub: 'Our values in practice, and the hospitality that makes people feel they belong.',
    desc: 'The Belong values as they show up in real decisions, from avoiding waste to being your real self with guests, and the Craveiral way of hospitality: names, anticipation, and small gestures of care.',
    modules: ['Our values, in practice', 'Hospitality, the Craveiral way'],
    moduleDurations: [6,6],
    moduleMedia: [
      {"type":"vimeo","id":"1227371951","h":"890f287236"}   /* lesson  3 · Our values, in practice */,
      {"type":"vimeo","id":"1227427000","h":"76cf6e7e23"}   /* lesson  4 · Hospitality, the Craveiral way */
    ]
  },
  {
    id: 'guest-journey', title: 'The Guest Journey', cat: 'Staying & Feeling', grad: 2, icon: 'sun',
    outcomes: ['Keep the promises the marketing makes, from the first email to the first fifteen minutes', 'Listen fully and acknowledge honestly when a guest is upset', 'Recover a stay with a fix bigger than expected'],
    outcomes_pt: ['Cumprir as promessas que o marketing faz, do primeiro e-mail aos primeiros quinze minutos', 'Ouvir até ao fim e reconhecer com honestidade quando um hóspede está descontente', 'Recuperar uma estadia com uma solução maior do que a esperada'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09',
    poster: 'media/covers/guest-journey.webp',   /* a frame from the lesson's own b-roll */
    hook: 'From first click to farewell.', hookSub: 'Every step of a stay, and what to do when something goes wrong.',
    desc: 'The whole arc of a stay, from the first email to the last goodbye, and the moments that decide it: the first fifteen minutes, a promise kept, and a complaint turned into loyalty.',
    modules: ['The guest journey: from first click to farewell', 'When things go wrong: complaints and service recovery'],
    moduleDurations: [7,6],
    moduleMedia: [
      {"type":"vimeo","id":"1227372746","h":"c1900e20be"}   /* lesson  5 · The guest journey: from first click to farewell */,
      {"type":"vimeo","id":"1227372976","h":"dc0bb4f742"}   /* lesson  9 · When things go wrong: complaints and service rec */
    ]
  },
  {
    id: 'houses-farm-sustainability', title: 'The Houses, the Farm & Sustainability', cat: 'To Nature', grad: 5, icon: 'tree',
    outcomes: ['Know the estate and each house well enough to answer any guest question', 'Keep the standards that connect field and plate', 'Practise sustainability every day: water, energy, waste'],
    outcomes_pt: ['Conhecer a propriedade e cada casa para responder a qualquer pergunta de um hóspede', 'Manter os padrões que ligam o campo ao prato', 'Praticar a sustentabilidade todos os dias: água, energia, desperdício'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09',
    poster: 'media/covers/houses-farm-sustainability.webp',   /* a frame from the lesson's own b-roll */
    hook: 'Know the place. Keep its standards.', hookSub: 'Nine hectares, thirty-eight houses, a farm, and what the mission asks of you every day.',
    desc: 'The estate as a whole: the houses and their character, the farm that feeds the restaurant, the standards we keep, and the daily habits around water, energy and waste that make the mission real.',
    modules: ['The houses, the farm, and the standards we keep', 'Sustainability in daily practice: what the mission asks of you before lunch'],
    moduleDurations: [7,6],
    moduleMedia: [
      {"type":"vimeo","id":"1227430198","h":"414021ba4d"}   /* lesson  6 · The houses, the farm, and the standards we keep */,
      {"type":"vimeo","id":"1227373149","h":"1dbdf258c8"}   /* lesson 10 · Sustainability in daily practice: what the missi */
    ]
  },
  {
    id: 'farm-to-table', title: 'FarmTable & the Constellation', cat: 'Growing & Tasting', grad: 6, icon: 'sprout',
    outcomes: ['Explain why over 70% of what we serve grows on the property', 'Tell the story of the seasonal menu and local sourcing', 'Cross-recommend the beach bar, events and the wider constellation'],
    outcomes_pt: ['Explicar porque mais de 70% do que servimos cresce na propriedade', 'Contar a história do menu sazonal e dos fornecedores locais', 'Recomendar o beach bar, os eventos e o resto da constelação'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09',
    poster: 'media/covers/farm-to-table.webp',   /* a frame from the lesson's own b-roll */
    hook: 'Where the philosophy becomes food.', hookSub: 'FarmTable, the beach bar, A Mesa do CAM and events: one same gesture.',
    desc: 'Why most of what we serve grows on the property, how the seasonal menu and local sourcing tell the story of the place, and how the beach bar, A Mesa do CAM and events carry the same gesture.',
    modules: ['FarmTable: where the philosophy becomes food', 'The constellation: Beach Bar, A Mesa do CAM, events, and one same gesture'],
    moduleDurations: [6,6],
    moduleMedia: [
      {"type":"vimeo","id":"1220166660","h":"7cc9ce409c"}   /* lesson  7 · FarmTable: where the philosophy becomes food */,
      {"type":"vimeo","id":"1225586175","h":"244ba73b9d"}   /* lesson  8 · The constellation: Beach Bar, A Mesa do CAM, eve */
    ]
  },
  {
    id: 'voice-leadership', title: 'Our Voice & How We Lead', cat: 'Community', grad: 3, icon: 'hands',
    outcomes: ['Speak in the Craveiral voice: calm, warm, like a friend\'s parents visiting your home', 'Promise only what we control', 'Use the Belong values as a compass and speak early about mistakes'],
    outcomes_pt: ['Falar com a voz do Craveiral: calma, calorosa, como para os pais de um amigo em sua casa', 'Prometer só o que controlamos', 'Usar os valores da Belong como bússola e falar cedo sobre os erros'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09',
    poster: 'media/covers/voice-leadership.webp',   /* a frame from the lesson's own b-roll */
    hook: 'Calm, warm, honest.', hookSub: 'How we speak to guests, and how we lead with autonomy as one team.',
    desc: 'The Craveiral voice, calm and warm, promising only what we control, and the way we work: values as a compass, autonomy with high standards, and speaking early about mistakes.',
    modules: ['How we speak: the Craveiral voice', 'Leadership, autonomy, and how we work together'],
    moduleDurations: [6,7],
    moduleMedia: [
      {"type":"vimeo","id":"1227413580","h":"0309264292"}   /* lesson 11 · How we speak: the Craveiral voice */,
      {"type":"vimeo","id":"1227665184","h":"467877ad3b"}   /* lesson 12 · Leadership, autonomy, and how we work together */
    ]
  }
];

/* No invented sessions (13 Oct 2026, John: no fiction on the storefront). Real ones come from the
   studio (studioMeta.live) the day someone schedules one; the page shows an honest empty state. */
const LIVE_SESSIONS = [];

const COURSE_HOOKS = {};
const COURSE_HOOKS_PT = {"welcome-belong":["Porque estamos aqui, e como fazemos as coisas.","A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong."],"craveiral-hospitality":["Hóspedes como amigos, não como clientes.","Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem."],"guest-journey":["Do primeiro clique à despedida.","Cada passo de uma estadia, e o que fazer quando algo corre mal."],"houses-farm-sustainability":["Conhecer o lugar. Manter os padrões.","Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias."],"farm-to-table":["Onde a filosofia vira comida.","FarmTable, o beach bar, A Mesa do CAM e os eventos: um mesmo gesto."],"voice-leadership":["Calma, calorosa, honesta.","Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa."]};
const COURSE_QUIZ = {};
/* generated from the lesson transcripts by scripts/build-takeaways.mjs (2026-10-14), re-keyed per course 2026-10-16; edit freely */
const TAKEAWAYS = {
 "welcome-belong": {
  "en": [["Remember Craveiral was built to sustain a relationship with the land, not just to be a hotel, for guest experience","Respect the land in every decision, like using raised wooden walkways, to preserve its natural state, for sustainability","Prioritize leaving the land better than found, with better soil and water, as part of belonging to it, for long-term impact"],
   ["Remember Craveiral Farmhouse is the heart of Belong to understand its significance","Recall the vision to regenerate the territory through a circular economy matters for sustainability","Choose local suppliers like the shepherd to turn the circular economy wheel"]],
  "pt": [["Lembre-se de que o Craveiral foi construído para manter uma relação com a terra, não apenas para ser um hotel, para a experiência do hóspede","Respeite a terra em cada decisão, como usar passadiços de madeira elevados, para preservar o seu estado natural, para a sustentabilidade","Priorize deixar a terra melhor do que a encontrou, com solo e água melhores, como parte de pertencer a ela, para o impacto a longo prazo"],
   ["Lembre-se de que a Craveiral Farmhouse é o coração da Belong para entender a sua importância","Recorde a visão de regenerar o território através de uma economia circular para a sustentabilidade","Escolha fornecedores locais como o pastor para fazer girar a roda da economia circular"]]
 },
 "craveiral-hospitality": {
  "en": [["Protect the mission by avoiding waste at Craveiral because financial sustainability is crucial","Simplify the guest's experience with clear answers and honest food to make sense","Preserve authenticity by being your real self with guests, not performing a corporate role"],
   ["Treat guests as friends, not customers, to create a welcoming atmosphere at Craveiral.","Use guests' names to make them feel recognized and valued during their stay.","Anticipate guests' needs, like lighting fire pits on cold nights, to show attention and care."]],
  "pt": [["Proteja a missão evitando o desperdício em Craveiral porque a sustentabilidade financeira é crucial","Simplifique a experiência do hóspede com respostas claras e comida honesta para fazer sentido","Preserve a autenticidade sendo você mesmo com os hóspedes, não representando um papel corporativo"],
   ["Trate os hóspedes como amigos, não como clientes, para criar uma atmosfera acolhedora em Craveiral.","Use os nomes dos hóspedes para fazê-los sentir reconhecidos e valorizados durante a sua estadia.","Antecipe as necessidades dos hóspedes, como acender as lareiras nas noites frias, para mostrar atenção e cuidado."]]
 },
 "guest-journey": {
  "en": [["Ensure reality matches the dream shown in Craveiral's marketing to keep promises","Answer emails quickly and warmly to build guest confidence before arrival","Make the first 15 minutes at Craveiral a genuine welcome to set the tone"],
   ["Listen completely to upset guests at Craveiral to understand their concerns.","Acknowledge feelings honestly to show empathy and recognize disappointment.","Fix issues bigger than expected to create loyalty and show genuine care."]],
  "pt": [["Certifique-se de que a realidade corresponde ao sonho mostrado no marketing do Craveiral para manter as promessas","Responda aos e-mails rapidamente e com calor para construir a confiança do hóspede antes da chegada","Faça dos primeiros 15 minutos no Craveiral um verdadeiro acolhimento para definir o tom"],
   ["Ouça completamente os hóspedes descontentes no Craveiral para entender as suas preocupações.","Reconheça os sentimentos honestamente para mostrar empatia e reconhecer a desilusão.","Resolva os problemas de forma mais ampla do que o esperado para criar lealdade e mostrar cuidado genuíno."]]
 },
 "houses-farm-sustainability": {
  "en": [["Know Craveiral's 9 hectares and 38 houses to confidently answer guest questions and create trust.","Remember each unit's character and amenities, like kitchens and private terraces, to personalize guest experiences.","Understand the farm's role in providing over 70% of the restaurant's ingredients to appreciate the connection between field and plate."],
   ["Report every leak immediately to conserve water at Craveiral","Follow dosing and full load washing routines to minimize waste","Turn off lights and air conditioning when not in use to reduce energy consumption"]],
  "pt": [["Conheça os 9 hectares e 38 casas do Craveiral para responder com confiança às perguntas dos hóspedes e criar confiança.","Lembre-se do caráter e das comodidades de cada unidade, como cozinhas e varandas privadas, para personalizar as experiências dos hóspedes.","Entenda o papel da quinta em fornecer mais de 70% dos ingredientes do restaurante para apreciar a ligação entre o campo e o prato."],
   ["Relate todos os vazamentos imediatamente para conservar água em Craveiral","Siga as rotinas de dosagem e lavagem de carga completa para minimizar o desperdício","Desligue as luzes e a ar condicionado quando não estiverem em uso para reduzir o consumo de energia"]]
 },
 "farm-to-table": {
  "en": [["Remember that over 70% of served food is grown on Craveiral property to ensure freshness and quality","Emphasize the importance of sourcing ingredients locally, such as cheeses from the region and fish from the coast","Highlight the seasonal menu rotation to showcase the authentic taste of food, like a tomato in August at Craveiral"],
   ["Recommend the beach bar to guests to move them inside the business","Embody Craveiral's philosophy at the beach bar with honest food and care","Cross-recommend services like weddings and events to connect guests to more of what they love"]],
  "pt": [["Lembre-se de que mais de 70% dos alimentos servidos são cultivados na propriedade do Craveiral para garantir frescura e qualidade","Enfatize a importância de adquirir ingredientes localmente, como queijos da região e peixe da costa","Destaque a rotação sazonal do menu para mostrar o sabor autêntico dos alimentos, como um tomate em agosto no Craveiral"],
   ["Recomende o beach bar aos hóspedes para movê-los dentro do negócio","Encarne a filosofia do Craveiral no beach bar com comida honesta e cuidado","Faça recomendações cruzadas de serviços como casamentos e eventos para conectar os hóspedes ao que já amam"]]
 },
 "voice-leadership": {
  "en": [["Use calm and warm tone when speaking to guests at Craveiral because it matters to our brand voice","Say it like you'd say it to a friend's parents visiting your home to sound respectful and real","Promise what we control like care and honesty when speaking with guests to avoid over-promising"],
   ["Solve guest problems using Belong values as a compass at Craveiral","Speak early about mistakes to avoid crises and maintain trust","Maintain high standards to respect guests, colleagues, and yourself"]],
  "pt": [["Use um tom calmo e quente quando fala com os hóspedes no Craveiral porque isso importa para a nossa voz de marca","Diga como diria a pais de um amigo que visita a sua casa para soar respeitoso e real","Prometa o que controlamos como cuidado e honestidade quando fala com os hóspedes para evitar promessas excessivas"],
   ["Resolva problemas de hóspedes utilizando os valores da Belong como bússola no Craveiral","Fale cedo sobre erros para evitar crises e manter a confiança","Mantenha padrões elevados para respeitar hóspedes, colegas e a si mesmo"]]
 }
};
const COURSE_PT = {"welcome-belong":{"title":"Bem-vindo à Belong","hook":"Porque estamos aqui, e como fazemos as coisas.","hookSub":"A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong.","desc":"De onde vem a Belong e porquê: a história do fundador e a história do Craveiral, depois a visão, a missão e a cadeia que transforma uma quinta numa economia circular.","modules":["Porque estamos aqui: a minha história e a história do Craveiral","A nossa visão, a nossa missão e a cadeia"]},"craveiral-hospitality":{"title":"Hospitalidade à Maneira do Craveiral","hook":"Hóspedes como amigos, não como clientes.","hookSub":"Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem.","desc":"Os valores da Belong tal como aparecem em decisões reais, de evitar o desperdício a ser você mesmo com os hóspedes, e a hospitalidade à maneira do Craveiral: nomes, antecipação e pequenos gestos de cuidado.","modules":["Os nossos valores, na prática","Hospitalidade à maneira do Craveiral"]},"guest-journey":{"title":"A Jornada do Hóspede","hook":"Do primeiro clique à despedida.","hookSub":"Cada passo de uma estadia, e o que fazer quando algo corre mal.","desc":"Todo o arco de uma estadia, do primeiro e-mail ao último adeus, e os momentos que a decidem: os primeiros quinze minutos, uma promessa cumprida e uma reclamação transformada em lealdade.","modules":["A jornada do hóspede: do primeiro clique à despedida","Quando algo corre mal: reclamações e recuperação do serviço"]},"houses-farm-sustainability":{"title":"As Casas, a Quinta e a Sustentabilidade","hook":"Conhecer o lugar. Manter os padrões.","hookSub":"Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias.","desc":"A propriedade como um todo: as casas e o seu caráter, a quinta que alimenta o restaurante, os padrões que mantemos, e os hábitos diários de água, energia e desperdício que tornam a missão real.","modules":["As casas, a quinta e os padrões que mantemos","Sustentabilidade no dia a dia: o que a missão lhe pede antes do almoço"]},"farm-to-table":{"title":"FarmTable e a Constelação","hook":"Onde a filosofia vira comida.","hookSub":"FarmTable, o beach bar, A Mesa do CAM e os eventos: um mesmo gesto.","desc":"Porque a maior parte do que servimos cresce na propriedade, como o menu sazonal e os fornecedores locais contam a história do lugar, e como o beach bar, A Mesa do CAM e os eventos levam o mesmo gesto.","modules":["FarmTable: onde a filosofia vira comida","A constelação: Beach Bar, A Mesa do CAM, eventos e um mesmo gesto"]},"voice-leadership":{"title":"A Nossa Voz e Como Lideramos","hook":"Calma, calorosa, honesta.","hookSub":"Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa.","desc":"A voz do Craveiral, calma e calorosa, a prometer só o que controlamos, e a forma como trabalhamos: os valores como bússola, autonomia com padrões elevados, e falar cedo sobre os erros.","modules":["Como falamos: a voz do Craveiral","Liderança, autonomia e como trabalhamos juntos"]}};
const COURSE_SKILLS = {};
