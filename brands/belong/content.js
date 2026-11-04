/* ============================================================================
   INSTANCE CONTENT · Belong Academy — course catalog (pure data)
   Six filmed courses, two lessons each: Craveiral's own onboarding, recorded in
   twelve lessons (Vimeo folder "New with Music", unlisted; each id carries its
   h= hash, which the player needs). One course was twelve lessons long until
   16 Oct 2026; João asked three times for the videos to be spread across the
   path, so the lessons are now paired by theme so each course fits a
   department. lesson numbers below are the trainer's original numbering. 29 Oct 2026: the twelve lessons were re-cut by the trainer (Vimeo folder 'Revised Course 1'); ids, hashes and transcripts follow the revised cut.
============================================================================ */
const CATALOG = [
  {
    id: 'welcome-belong', title: 'Welcome to Belong', cat: 'School', grad: 1, icon: 'compass',
    outcomes: ['Tell Craveiral\'s story, and why Belong exists', 'Explain the vision, the mission and the chain in your own words', 'See why local suppliers and the land come first in every decision'],
    outcomes_pt: ['Contar a história do Craveiral, e porque existe a Belong', 'Explicar a visão, a missão e a cadeia por palavras suas', 'Perceber porque os fornecedores locais e a terra vêm primeiro em cada decisão'],
    level: 'All levels', learners: 0, ai: true, updated: '2026-09', featured: true,
    poster: 'media/covers/welcome-belong.webp', posterPos: 'left center', heroArt: 'media/covers/welcome-belong-hero.webp',
    hook: 'Why we\'re here, and how we do it.', hookSub: 'The story of Craveiral, and the vision, mission and chain behind Belong.',
    desc: 'Where Belong comes from and why: the founder\'s story and the story of Craveiral, then the vision, the mission and the chain that turns a farmhouse into a circular economy.',
    modules: ['Why we\'re here: my story, and the story of Craveiral', 'Our vision, our mission, and the chain'],
    moduleDurations: [5,6],
    moduleMedia: [
      {"type":"vimeo","id":"1239551152","h":"6a36628b37"}   /* lesson  1 · Why we're here: my story, and the story of Crave */,
      {"type":"vimeo","id":"1239565028","h":"700ca88458"}   /* lesson  2 · Our vision, our mission, and the chain */
    ]
  },
  {
    id: 'craveiral-places', title: 'Craveiral: One Single House', cat: 'School', grad: 8, icon: 'sun',
    outcomes: ['Know every unit well enough to answer a guest without hesitating', 'Keep the Craveiral standard when the register changes, from the restaurant to the beach bar', 'Lead an experience on purpose and recover a stay when something goes wrong'],
    outcomes_pt: ['Conhecer cada unidade o suficiente para responder a um hóspede sem hesitar', 'Manter o padrão Craveiral quando o registo muda, do restaurante ao bar da praia', 'Conduzir uma experiência com intenção e recuperar uma estadia quando algo corre mal'],
    /* the trainer's second filmed course (Vimeo folder "Onboarding Course (8 Modules)", 27-28 Oct 2026): a visit to each unit of the operation */
    level: 'All levels', learners: 0, ai: true, updated: '2026-10',
    poster: 'media/covers/craveiral-places.webp',
    hook: 'Five units, one house.', hookSub: 'Every place a guest meets Craveiral, and the standard that holds them together.',
    desc: 'A visit to each unit of the operation: the houses and their standards, FarmTable, the beach bar at Carvalhal, the shop, the São Teotónio laundry, the experiences we lead, and the wellbeing a stay should leave behind, with what to do when something goes wrong.',
    modules: ['One single house', 'The houses', 'FarmTable', 'Bar da Praia do Carvalhal', 'The Shop', 'The São Teotónio laundry', 'Experiential tourism', 'Wellbeing and service recovery'],
    moduleDurations: [5, 5, 5, 5, 5, 5, 5, 5],
    moduleMedia: [
      {"type":"vimeo","id":"1239805951","h":"ab466a94ba"},
      {"type":"vimeo","id":"1239898003","h":"3ae5a9716c"},
      {"type":"vimeo","id":"1239916698","h":"4529ab5e02"},
      {"type":"vimeo","id":"1240256891","h":"23ecd03405"},
      {"type":"vimeo","id":"1240301456","h":"969e280865"},
      {"type":"vimeo","id":"1240302267","h":"4a3d7f35ff"},
      {"type":"vimeo","id":"1240314382","h":"67936379d1"},
      {"type":"vimeo","id":"1240315976","h":"3b29fbe389"}
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
      {"type":"vimeo","id":"1239566179","h":"693ad10860"}   /* lesson  3 · Our values, in practice */,
      {"type":"vimeo","id":"1239567226","h":"b4245824f3"}   /* lesson  4 · Hospitality, the Craveiral way */
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
      {"type":"vimeo","id":"1239567973","h":"452b414663"}   /* lesson  5 · The guest journey: from first click to farewell */,
      {"type":"vimeo","id":"1239572261","h":"1cc93eb1ad"}   /* lesson  9 · When things go wrong: complaints and service rec */
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
      {"type":"vimeo","id":"1239569429","h":"868ac20262"}   /* lesson  6 · The houses, the farm, and the standards we keep */,
      {"type":"vimeo","id":"1239572871","h":"3b3afccf13"}   /* lesson 10 · Sustainability in daily practice: what the missi */
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
      {"type":"vimeo","id":"1239570763","h":"176d32ebe2"}   /* lesson  7 · FarmTable: where the philosophy becomes food */,
      {"type":"vimeo","id":"1239571082","h":"918e28be91"}   /* lesson  8 · The constellation: Beach Bar, A Mesa do CAM, eve */
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
      {"type":"vimeo","id":"1239574205","h":"474cc23f3c"}   /* lesson 11 · How we speak: the Craveiral voice */,
      {"type":"vimeo","id":"1239574902","h":"acbbcc066e"}   /* lesson 12 · Leadership, autonomy, and how we work together */
    ]
  }
];

/* No invented sessions (13 Oct 2026, John: no fiction on the storefront). Real ones come from the
   studio (studioMeta.live) the day someone schedules one; the page shows an honest empty state. */
const LIVE_SESSIONS = [];

const COURSE_HOOKS = {};
const COURSE_HOOKS_PT = {"craveiral-places":["Cinco unidades, uma só casa.","Cada lugar onde um hóspede encontra o Craveiral, e o padrão que os mantém juntos."],"welcome-belong":["Porque estamos aqui, e como fazemos as coisas.","A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong."],"craveiral-hospitality":["Hóspedes como amigos, não como clientes.","Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem."],"guest-journey":["Do primeiro clique à despedida.","Cada passo de uma estadia, e o que fazer quando algo corre mal."],"houses-farm-sustainability":["Conhecer o lugar. Manter os padrões.","Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias."],"farm-to-table":["Onde a filosofia vira comida.","FarmTable, o beach bar, A Mesa do CAM e os eventos: um mesmo gesto."],"voice-leadership":["Calma, calorosa, honesta.","Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa."]};
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
 },
 "craveiral-places": {
  "en": [["See each house as a single unit to match the guest's perspective at Craveiral","Regenerate the territory through circular economy to care for people and land","Ensure consistency across units to fulfill the promise of Craveiral"],
   ["Know Craveiral's houses by heart to confidently answer guest queries and build trust","Remember every house has a properly equipped kitchen and private terrace to ensure guest comfort","Details are everything at Craveiral, as they reflect the promise of care and coherence with the farm's values"],
   ["Emphasize local ingredients at Craveiral because they taste better and support the community","Explain the story behind each dish to enhance the guest experience at FarmTable","Prioritize presence over efficiency when serving guests to create a unique atmosphere"],
   ["Maintain high standards at Bar da Praia do Carvalhal because it represents Craveiral to new guests","Communicate wait times clearly to settle complaints before they exist at the beach bar","Reduce physical discomfort for guests at the beach by providing shade and cold water"],
   ["Remember to recommend shop products as you would to a friend to build genuine relationships with guests at Craveiral.","Recall that sharing a product's origin story turns a souvenir into a meaningful relationship with the guest.","Know that honesty about a product's origin gives it value and preserves the relationship with the guest."],
   ["Remember correct sorting to prevent damage before washing at Craveiral","Maintain machines on schedule to conserve water and energy efficiently","Treat all laundry customers with same courtesy, including villagers, on principle"],
   ["Lead harvests intentionally using four dimensions at Craveiral","Offer guests choices instead of a set program at Craveiral","Set expectations within the first 90 seconds of arrival at Craveiral"],
   ["Reduce friction to enhance guest wellbeing at Craveiral.","Ensure total blackout for better sleep quality.","Acknowledge complaints immediately without defending."]],
  "pt": [["Veja cada casa como uma unidade única para corresponder à perspetiva do hóspede em Craveiral","Regenere o território através da economia circular para cuidar das pessoas e da terra","Certifique-se da consistência entre as unidades para cumprir a promessa de Craveiral"],
   ["Conheça as casas do Craveiral de cor para responder com confiança às perguntas dos hóspedes e estabelecer confiança","Lembre-se de que cada casa tem uma cozinha bem equipada e uma varanda privada para garantir o conforto dos hóspedes","Os detalhes são tudo no Craveiral, pois refletem a promessa de cuidado e coerência com os valores da quinta"],
   ["Destaque os ingredientes locais em Craveiral porque têm melhor sabor e apoiam a comunidade","Explique a história por trás de cada prato para melhorar a experiência do hóspede na FarmTable","Priorize a presença sobre a eficiência ao servir os hóspedes para criar uma atmosfera única"],
   ["Mantenha os padrões elevados no Bar da Praia do Carvalhal porque representa o Craveiral para novos hóspedes","Comunique os tempos de espera de forma clara para resolver reclamações antes que elas existam no bar da praia","Reduza o desconforto físico dos hóspedes na praia fornecendo sombra e água fria"],
   ["Lembre-se de recomendar produtos da loja como faria a um amigo para construir relações genuínas com os hóspedes em Craveiral.","Recorde que partilhar a história de origem de um produto transforma um souvenir numa relação significativa com o hóspede.","Saiba que a honestidade sobre a origem de um produto lhe dá valor e preserva a relação com o hóspede."],
   ["Lembre-se da correta separação para prevenir danos antes da lavagem em Craveiral","Mantenha as máquinas de acordo com um calendário para conservar água e energia de forma eficiente","Trate todos os clientes de lavanderia com a mesma cortesia, incluindo os habitantes da vila, por princípio"],
   ["Lidar as colheitas de forma intencional utilizando quatro dimensões em Craveiral","Oferecer opções aos hóspedes em vez de um programa definido em Craveiral","Estabelecer expectativas nos primeiros 90 segundos de chegada a Craveiral"],
   ["Reduzir a fricção para melhorar o bem-estar do hóspede em Craveiral.","Garantir blackout total para melhor qualidade do sono.","Reconhecer as reclamações imediatamente sem se defender."]]
 }
};
const COURSE_PT = {"craveiral-places":{"title":"Craveiral: Uma Só Casa","hook":"Cinco unidades, uma só casa.","hookSub":"Cada lugar onde um hóspede encontra o Craveiral, e o padrão que os mantém juntos.","desc":"Uma visita a cada unidade da operação: as casas e os seus padrões, o FarmTable, o bar da praia do Carvalhal, a loja, a lavandaria de São Teotónio, as experiências que conduzimos, e o bem-estar que uma estadia deve deixar, com o que fazer quando algo corre mal.","modules":["Uma só casa","As casas","FarmTable","Bar da Praia do Carvalhal","A Loja","A Lavandaria de São Teotónio","Turismo experiencial","Bem-estar e recuperação do serviço"]},"welcome-belong":{"title":"Bem-vindo à Belong","hook":"Porque estamos aqui, e como fazemos as coisas.","hookSub":"A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong.","desc":"De onde vem a Belong e porquê: a história do fundador e a história do Craveiral, depois a visão, a missão e a cadeia que transforma uma quinta numa economia circular.","modules":["Porque estamos aqui: a minha história e a história do Craveiral","A nossa visão, a nossa missão e a cadeia"]},"craveiral-hospitality":{"title":"Hospitalidade à Maneira do Craveiral","hook":"Hóspedes como amigos, não como clientes.","hookSub":"Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem.","desc":"Os valores da Belong tal como aparecem em decisões reais, de evitar o desperdício a ser você mesmo com os hóspedes, e a hospitalidade à maneira do Craveiral: nomes, antecipação e pequenos gestos de cuidado.","modules":["Os nossos valores, na prática","Hospitalidade à maneira do Craveiral"]},"guest-journey":{"title":"A Jornada do Hóspede","hook":"Do primeiro clique à despedida.","hookSub":"Cada passo de uma estadia, e o que fazer quando algo corre mal.","desc":"Todo o arco de uma estadia, do primeiro e-mail ao último adeus, e os momentos que a decidem: os primeiros quinze minutos, uma promessa cumprida e uma reclamação transformada em lealdade.","modules":["A jornada do hóspede: do primeiro clique à despedida","Quando algo corre mal: reclamações e recuperação do serviço"]},"houses-farm-sustainability":{"title":"As Casas, a Quinta e a Sustentabilidade","hook":"Conhecer o lugar. Manter os padrões.","hookSub":"Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias.","desc":"A propriedade como um todo: as casas e o seu caráter, a quinta que alimenta o restaurante, os padrões que mantemos, e os hábitos diários de água, energia e desperdício que tornam a missão real.","modules":["As casas, a quinta e os padrões que mantemos","Sustentabilidade no dia a dia: o que a missão lhe pede antes do almoço"]},"farm-to-table":{"title":"FarmTable e a Constelação","hook":"Onde a filosofia vira comida.","hookSub":"FarmTable, o beach bar, A Mesa do CAM e os eventos: um mesmo gesto.","desc":"Porque a maior parte do que servimos cresce na propriedade, como o menu sazonal e os fornecedores locais contam a história do lugar, e como o beach bar, A Mesa do CAM e os eventos levam o mesmo gesto.","modules":["FarmTable: onde a filosofia vira comida","A constelação: Beach Bar, A Mesa do CAM, eventos e um mesmo gesto"]},"voice-leadership":{"title":"A Nossa Voz e Como Lideramos","hook":"Calma, calorosa, honesta.","hookSub":"Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa.","desc":"A voz do Craveiral, calma e calorosa, a prometer só o que controlamos, e a forma como trabalhamos: os valores como bússola, autonomia com padrões elevados, e falar cedo sobre os erros.","modules":["Como falamos: a voz do Craveiral","Liderança, autonomia e como trabalhamos juntos"]}};
const COURSE_SKILLS = {};

/* ===== CURRICULUM — Academy → Courses → Modules → Lessons (agreed 5 Nov 2026) ==========
   Each CATALOG item above is a MODULE and keeps its id; each of its videos is a LESSON,
   identified by "<item id>:<index>" exactly as learner records already store it. Nothing
   in a learner's history is renamed or rewritten — courses and modules are a layer on top,
   so deleting this block (and core/curriculum.js) restores the previous academy.
   Categories ("School", "Staying & Feeling"…) stay as discovery labels only.
   Grouping is grounded in the transcripts: culture and values for everyone → Foundations;
   procedural guest-service and standards material → a separate course; Pedro's unit-by-unit
   tour → its own course, split by learning outcome. Two lessons of that tour re-teach
   lessons in "Guest Experience & Our Standards" (FarmTable 37% shared phrasing, the houses
   28%); they are OPTIONAL there so no learning requirement is counted twice — which
   recording to keep is Pedro's call (flagged in docs/CONTENT-MAP.md). */
const CURRICULUM = {
  passMark: 70,   /* % across a course's lesson questions (best attempt per lesson) */
  courses: [
    {
      id: 'belong-foundations',
      title: 'Belong & Craveiral Foundations',
      promise: 'Who we are, what we believe, and how we welcome.',
      desc: 'Where Belong and Craveiral come from, the values behind every decision, the Craveiral way of hospitality, how we speak to guests and how we work together. The shared ground for everyone at Craveiral, in every department.',
      outcomes: ['Tell the story of Craveiral and explain why Belong exists', 'Explain the vision, the mission and the chain in your own words', 'Live the Belong values and the Craveiral way of hospitality with every guest', 'Speak in the Craveiral voice and work with autonomy as one team'],
      audience: 'Everyone joining Craveiral or Belong, in any department.',
      prerequisites: '',
      poster: 'media/covers/welcome-belong.webp', posterPos: 'left center',
      modules: [
        { id: 'welcome-belong' },
        { id: 'craveiral-hospitality' },
        { id: 'voice-leadership' }
      ],
      pt: {
        title: 'Fundamentos Belong e Craveiral',
        promise: 'Quem somos, em que acreditamos e como acolhemos.',
        desc: 'De onde vêm a Belong e o Craveiral, os valores por trás de cada decisão, a hospitalidade à maneira do Craveiral, como falamos com os hóspedes e como trabalhamos juntos. A base comum para toda a gente no Craveiral, em todos os departamentos.',
        outcomes: ['Contar a história do Craveiral e explicar porque existe a Belong', 'Explicar a visão, a missão e a cadeia por palavras suas', 'Viver os valores da Belong e a hospitalidade à maneira do Craveiral com cada hóspede', 'Falar com a voz do Craveiral e trabalhar com autonomia, como uma equipa'],
        audience: 'Toda a gente que entra no Craveiral ou na Belong, em qualquer departamento.'
      }
    },
    {
      id: 'guest-standards',
      title: 'Guest Experience & Our Standards',
      promise: 'Deliver the stay we promise, keep the standard, and recover when it slips.',
      desc: 'The practical side of the work: every stage of a guest\'s stay and what to do when something goes wrong, the houses, the farm and the standards we keep, the daily sustainability routines, and the food and places guests meet across the Craveiral constellation.',
      outcomes: ['Keep the promises made to guests from the first email to the farewell', 'Handle a complaint in sequence and recover the stay with a fix bigger than expected', 'Know the houses and the farm well enough to answer any guest, and keep their standards', 'Practise the daily water, energy and waste routines', 'Tell the story of what we grow and serve, and recommend the rest of the constellation'],
      audience: 'Guest-facing and operations teams: hosting, housekeeping, kitchen, food and beverage, maintenance, laundry.',
      prerequisites: 'Belong & Craveiral Foundations is recommended first.',
      poster: 'media/covers/guest-journey.webp',
      modules: [
        { id: 'guest-journey' },
        { id: 'houses-farm-sustainability' },
        { id: 'farm-to-table' }
      ],
      pt: {
        title: 'Experiência do Hóspede e os Nossos Padrões',
        promise: 'Entregar a estadia que prometemos, manter o padrão e recuperar quando falha.',
        desc: 'O lado prático do trabalho: cada fase da estadia de um hóspede e o que fazer quando algo corre mal, as casas, a quinta e os padrões que mantemos, as rotinas diárias de sustentabilidade, e a comida e os lugares que os hóspedes encontram na constelação do Craveiral.',
        outcomes: ['Cumprir as promessas feitas aos hóspedes, do primeiro e-mail à despedida', 'Tratar uma reclamação pela ordem certa e recuperar a estadia com uma solução maior do que a esperada', 'Conhecer as casas e a quinta para responder a qualquer hóspede, e manter os seus padrões', 'Praticar as rotinas diárias de água, energia e resíduos', 'Contar a história do que cultivamos e servimos, e recomendar o resto da constelação'],
        audience: 'Equipas de contacto com o hóspede e de operação: receção, limpezas, cozinha, restaurante e bar, manutenção, lavandaria.',
        prerequisites: 'Recomenda-se fazer primeiro os Fundamentos Belong e Craveiral.'
      }
    },
    {
      id: 'one-single-house',
      title: 'Craveiral: One Single House',
      promise: 'Five units, one house, and one standard across them.',
      desc: 'A tour of every place a guest meets Craveiral, from the houses and FarmTable to the beach bar, the shop and the São Teotónio laundry, followed by how we lead experiences and care for a guest\'s wellbeing, including when something goes wrong.',
      outcomes: ['See the five units as one house, as the guest does', 'Know each unit well enough to answer a guest and keep its standard', 'Lead an experience on purpose and recover a stay when something goes wrong'],
      audience: 'Everyone at Craveiral, especially guest-facing teams.',
      prerequisites: 'Belong & Craveiral Foundations is recommended first.',
      poster: 'media/covers/craveiral-places.webp',
      modules: [
        { id: 'csh-one-house', source: 'craveiral-places', lessons: [0],
          title: 'One House, Five Units', outcome: 'See the five units as one house, and explain the circular chain that links garden, kitchen and compost.',
          pt: { title: 'Uma Casa, Cinco Unidades', outcome: 'Ver as cinco unidades como uma só casa, e explicar a cadeia circular que liga a horta, a cozinha e o composto.' } },
        { id: 'csh-units', source: 'craveiral-places', lessons: [1, 2, 3, 4, 5], optional: [1, 2],
          title: 'The Units', outcome: 'Answer guests confidently about the houses, FarmTable, the beach bar, the shop and the laundry, and keep each unit\'s standard.',
          optionalNote: 'Optional here: "The houses" and "FarmTable" cover the same ground as lessons in Guest Experience & Our Standards.',
          pt: { title: 'As Unidades', outcome: 'Responder com confiança sobre as casas, o FarmTable, o bar da praia, a loja e a lavandaria, e manter o padrão de cada unidade.',
                optionalNote: 'Opcional aqui: "As casas" e "FarmTable" cobrem o mesmo terreno de lições em Experiência do Hóspede e os Nossos Padrões.' } },
        { id: 'csh-care', source: 'craveiral-places', lessons: [6, 7],
          title: 'Experiences & Care', outcome: 'Lead an experience through its four registers, protect a guest\'s wellbeing, and recover a stay when something goes wrong.',
          pt: { title: 'Experiências e Cuidado', outcome: 'Conduzir uma experiência pelos seus quatro registos, proteger o bem-estar do hóspede e recuperar uma estadia quando algo corre mal.' } }
      ],
      pt: {
        title: 'Craveiral: Uma Só Casa',
        promise: 'Cinco unidades, uma só casa, e um só padrão em todas.',
        desc: 'Uma visita a cada lugar onde um hóspede encontra o Craveiral, das casas e do FarmTable ao bar da praia, à loja e à lavandaria de São Teotónio, seguida de como conduzimos experiências e cuidamos do bem-estar do hóspede, incluindo quando algo corre mal.',
        outcomes: ['Ver as cinco unidades como uma só casa, como o hóspede as vê', 'Conhecer cada unidade o suficiente para responder a um hóspede e manter o seu padrão', 'Conduzir uma experiência com intenção e recuperar uma estadia quando algo corre mal'],
        audience: 'Toda a gente no Craveiral, sobretudo as equipas de contacto com o hóspede.',
        prerequisites: 'Recomenda-se fazer primeiro os Fundamentos Belong e Craveiral.'
      }
    }
  ],
  /* the two Welcome videos as lessons (agreed titles) */
  lessonTitles: {
    'welcome-belong:0': { en: 'My story and the story of Craveiral', pt: 'A minha história e a história do Craveiral' },
    'welcome-belong:1': { en: 'Our vision, our mission and the chain', pt: 'A nossa visão, a nossa missão e a cadeia' }
  }
};

