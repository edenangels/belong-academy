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
    outcomes_pt: ['Viver os valores da Belong nas decisões de todos os dias', 'Acolher os hóspedes como amigos e usar os seus nomes com naturalidade', 'Antecipar as necessidades de um hóspede antes de as pedir'],
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
    outcomes_pt: ['Explicar porque mais de 70% do que servimos cresce na propriedade', 'Contar a história do menu sazonal e dos fornecedores locais', 'Recomendar o Bar da Praia, os eventos e o resto da constelação'],
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
const COURSE_HOOKS_PT = {"craveiral-places":["Cinco unidades, uma só casa.","Cada lugar onde um hóspede encontra o Craveiral, e o padrão que os mantém juntos."],"welcome-belong":["Porque estamos aqui, e como fazemos as coisas.","A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong."],"craveiral-hospitality":["Hóspedes como amigos, não como clientes.","Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem."],"guest-journey":["Do primeiro clique à despedida.","Cada passo de uma estadia, e o que fazer quando algo corre mal."],"houses-farm-sustainability":["Conhecer o lugar. Manter os padrões.","Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias."],"farm-to-table":["Onde a filosofia se torna comida.","FarmTable, o Bar da Praia, A Mesa do CAM e os eventos: um mesmo gesto."],"voice-leadership":["Calma, calorosa, honesta.","Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa."]};
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
  "pt": [["Proteja a missão evitando o desperdício no Craveiral porque a sustentabilidade financeira é crucial","Simplifique a experiência do hóspede com respostas claras e comida honesta para fazer sentido","Preserve a autenticidade sendo autêntico com os hóspedes, não representando um papel corporativo"],
   ["Trate os hóspedes como amigos, não como clientes, para criar uma atmosfera acolhedora no Craveiral.","Use os nomes dos hóspedes para fazê-los sentir reconhecidos e valorizados durante a sua estadia.","Antecipe as necessidades dos hóspedes, como acender as lareiras nas noites frias, para mostrar atenção e cuidado."]]
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
   ["Comunique de imediato todas as fugas de água, para a conservar no Craveiral","Siga as rotinas de dosagem e lavagem de carga completa para minimizar o desperdício","Desligue as luzes e o ar condicionado quando não estiverem em uso para reduzir o consumo de energia"]]
 },
 "farm-to-table": {
  "en": [["Remember that over 70% of served food is grown on Craveiral property to ensure freshness and quality","Emphasize the importance of sourcing ingredients locally, such as cheeses from the region and fish from the coast","Highlight the seasonal menu rotation to showcase the authentic taste of food, like a tomato in August at Craveiral"],
   ["Recommend the beach bar to guests to move them inside the business","Embody Craveiral's philosophy at the beach bar with honest food and care","Cross-recommend services like weddings and events to connect guests to more of what they love"]],
  "pt": [["Lembre-se de que mais de 70% dos alimentos servidos são cultivados na propriedade do Craveiral para garantir frescura e qualidade","Enfatize a importância de adquirir ingredientes localmente, como queijos da região e peixe da costa","Destaque a rotação sazonal do menu para mostrar o sabor autêntico dos alimentos, como um tomate em agosto no Craveiral"],
   ["Recomende o Bar da Praia aos hóspedes, para os levar a conhecer o resto da casa","Encarne a filosofia do Craveiral no Bar da Praia com comida honesta e cuidado","Faça recomendações cruzadas de serviços como casamentos e eventos para ligar os hóspedes ao que já amam"]]
 },
 "voice-leadership": {
  "en": [["Use calm and warm tone when speaking to guests at Craveiral because it matters to our brand voice","Say it like you'd say it to a friend's parents visiting your home to sound respectful and real","Promise what we control like care and honesty when speaking with guests to avoid over-promising"],
   ["Solve guest problems using Belong values as a compass at Craveiral","Speak early about mistakes to avoid crises and maintain trust","Maintain high standards to respect guests, colleagues, and yourself"]],
  "pt": [["Use um tom calmo e caloroso quando fala com os hóspedes no Craveiral porque isso importa para a nossa voz de marca","Diga como diria aos pais de um amigo que o visitam em casa para soar respeitoso e real","Prometa o que controlamos como cuidado e honestidade quando fala com os hóspedes para evitar promessas excessivas"],
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
  "pt": [["Veja cada casa como uma unidade única para corresponder à perspetiva do hóspede no Craveiral","Regenere o território através da economia circular para cuidar das pessoas e da terra","Certifique-se da consistência entre as unidades para cumprir a promessa de Craveiral"],
   ["Conheça as casas do Craveiral de cor para responder com confiança às perguntas dos hóspedes e estabelecer confiança","Lembre-se de que cada casa tem uma cozinha bem equipada e uma varanda privada para garantir o conforto dos hóspedes","Os detalhes são tudo no Craveiral, pois refletem a promessa de cuidado e coerência com os valores da quinta"],
   ["Destaque os ingredientes locais no Craveiral porque têm melhor sabor e apoiam a comunidade","Explique a história por trás de cada prato para melhorar a experiência do hóspede na FarmTable","Priorize a presença sobre a eficiência ao servir os hóspedes para criar uma atmosfera única"],
   ["Mantenha os padrões elevados no Bar da Praia do Carvalhal porque representa o Craveiral para novos hóspedes","Comunique os tempos de espera de forma clara para resolver reclamações antes que elas existam no bar da praia","Reduza o desconforto físico dos hóspedes na praia fornecendo sombra e água fria"],
   ["Lembre-se de recomendar produtos da loja como faria a um amigo para construir relações genuínas com os hóspedes no Craveiral.","Recorde que partilhar a história de origem de um produto transforma uma lembrança numa relação significativa com o hóspede.","Saiba que a honestidade sobre a origem de um produto lhe dá valor e preserva a relação com o hóspede."],
   ["Lembre-se da correta separação para prevenir danos antes da lavagem no Craveiral","Mantenha as máquinas de acordo com um calendário para conservar água e energia de forma eficiente","Trate todos os clientes da lavandaria com a mesma cortesia, incluindo os habitantes da vila, por princípio"],
   ["Conduzir as colheitas de forma intencional utilizando quatro dimensões no Craveiral","Oferecer opções aos hóspedes em vez de um programa definido no Craveiral","Estabelecer expectativas nos primeiros 90 segundos de chegada a Craveiral"],
   ["Reduzir a fricção para melhorar o bem-estar do hóspede no Craveiral.","Garantir blackout total para melhor qualidade do sono.","Reconhecer as reclamações imediatamente sem se defender."]]
 }
};
const COURSE_PT = {"craveiral-places":{"title":"Craveiral: Uma Só Casa","hook":"Cinco unidades, uma só casa.","hookSub":"Cada lugar onde um hóspede encontra o Craveiral, e o padrão que os mantém juntos.","desc":"Uma visita a cada unidade da operação: as casas e os seus padrões, o FarmTable, o bar da praia do Carvalhal, a loja, a lavandaria de São Teotónio, as experiências que conduzimos, e o bem-estar que uma estadia deve deixar, com o que fazer quando algo corre mal.","modules":["Uma só casa","As casas","FarmTable","Bar da Praia do Carvalhal","A Loja","A Lavandaria de São Teotónio","Turismo experiencial","Bem-estar e recuperação do serviço"]},"welcome-belong":{"title":"Boas-vindas à Belong","hook":"Porque estamos aqui, e como fazemos as coisas.","hookSub":"A história do Craveiral, e a visão, a missão e a cadeia por trás da Belong.","desc":"De onde vem a Belong e porquê: a história do fundador e a história do Craveiral, depois a visão, a missão e a cadeia que transforma uma quinta numa economia circular.","modules":["Porque estamos aqui: a minha história e a história do Craveiral","A nossa visão, a nossa missão e a cadeia"]},"craveiral-hospitality":{"title":"Hospitalidade à Maneira do Craveiral","hook":"Hóspedes como amigos, não como clientes.","hookSub":"Os nossos valores na prática, e a hospitalidade que faz as pessoas sentirem que pertencem.","desc":"Os valores da Belong tal como aparecem em decisões reais, de evitar o desperdício a ser autêntico com os hóspedes, e a hospitalidade à maneira do Craveiral: nomes, antecipação e pequenos gestos de cuidado.","modules":["Os nossos valores, na prática","Hospitalidade à maneira do Craveiral"]},"guest-journey":{"title":"A Jornada do Hóspede","hook":"Do primeiro clique à despedida.","hookSub":"Cada passo de uma estadia, e o que fazer quando algo corre mal.","desc":"Todo o arco de uma estadia, do primeiro e-mail ao último adeus, e os momentos que a decidem: os primeiros quinze minutos, uma promessa cumprida e uma reclamação transformada em lealdade.","modules":["A jornada do hóspede: do primeiro clique à despedida","Quando algo corre mal: reclamações e recuperação do serviço"]},"houses-farm-sustainability":{"title":"As Casas, a Quinta e a Sustentabilidade","hook":"Conhecer o lugar. Manter os padrões.","hookSub":"Nove hectares, trinta e oito casas, uma quinta, e o que a missão lhe pede todos os dias.","desc":"A propriedade como um todo: as casas e o seu caráter, a quinta que alimenta o restaurante, os padrões que mantemos, e os hábitos diários de água, energia e desperdício que tornam a missão real.","modules":["As casas, a quinta e os padrões que mantemos","Sustentabilidade no dia a dia: o que a missão lhe pede antes do almoço"]},"farm-to-table":{"title":"FarmTable e a Constelação","hook":"Onde a filosofia se torna comida.","hookSub":"FarmTable, o Bar da Praia, A Mesa do CAM e os eventos: um mesmo gesto.","desc":"Porque a maior parte do que servimos cresce na propriedade, como o menu sazonal e os fornecedores locais contam a história do lugar, e como o Bar da Praia, A Mesa do CAM e os eventos levam o mesmo gesto.","modules":["FarmTable: onde a filosofia se torna comida","A constelação: Bar da Praia, A Mesa do CAM, eventos e um mesmo gesto"]},"voice-leadership":{"title":"A Nossa Voz e Como Lideramos","hook":"Calma, calorosa, honesta.","hookSub":"Como falamos com os hóspedes, e como lideramos com autonomia, como uma equipa.","desc":"A voz do Craveiral, calma e calorosa, a prometer só o que controlamos, e a forma como trabalhamos: os valores como bússola, autonomia com padrões elevados, e falar cedo sobre os erros.","modules":["Como falamos: a voz do Craveiral","Liderança, autonomia e como trabalhamos juntos"]}};
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
/* ===== REELS — short vertical reels (9:16, ~30 s), the swipe feed at #/reels ==========
   Source: Vimeo folder "Belong shorts". Served as small MP4s from media/reels/ (720p, sound,
   faststart) rather than the Vimeo player: the feed's sound button and its end-of-reel
   check only work on a <video>, and a muted background iframe would play a narrated
   reel in silence. vimeoId is kept so the master can be found again.
   A reel never credits training hours (it is not in CATALOG); `deeper` points at the
   lesson where the same idea lives at depth. Copy and checks are written from each
   reel's own captions, quoted in `lesson`. */
const REELS = [
  /* The "Belong shorts" series, Reels 01–11, one Belong value or idea each (Vimeo folder
     31166999, female voice ×1.12). The order follows the series. The earlier Vision
     (1242453517) and Mission (1242450043 / 1242449498) cuts were replaced by Reels 01 and 02. */
  { id: 'belong-vision', seconds: 31, vimeoId: '1243785831',
    title: { en: 'What is left of this land?', pt: 'O que fica desta terra?' },
    hook:  { en: 'One question behind everything we do here.', pt: 'Uma pergunta por trás de tudo o que fazemos aqui.' },
    line:  { en: 'We do not run a hotel in the countryside. We look after a place that outlives us.', pt: 'Não gerimos um hotel no campo. Cuidamos de um lugar que vai durar mais do que nós.' },
    lesson: { en: "Belong's vision is simple to state and demanding to live: to regenerate the territory through a circular economy. What the land gives returns to the land, and what the house takes, the house gives back. The question behind every decision is what is left of this land after we pass through it.",
              pt: 'A visão da Belong é simples de dizer e exigente de viver: regenerar o território através de uma economia circular. O que a terra dá volta à terra, e o que a casa tira, a casa devolve. A pergunta por trás de cada decisão é o que fica desta terra depois de passarmos por ela.' },
    videoLang: 'en',
    check: { type: 'recall', a: 1,
      en: { q: "What is Belong's vision?", opts: ['To run the best hotel in the countryside', 'To regenerate the territory through a circular economy', 'To grow every ingredient the kitchen uses'], why: 'The reel states it directly: to regenerate the territory through a circular economy. What the land gives returns to the land.' },
      pt: { q: 'Qual é a visão da Belong?', opts: ['Gerir o melhor hotel do campo', 'Regenerar o território através de uma economia circular', 'Produzir todos os ingredientes que a cozinha usa'], why: 'O reel di-lo diretamente: regenerar o território através de uma economia circular. O que a terra dá volta à terra.' } },
    media: { type: 'mp4', src: 'media/reels/belong-vision.mp4' }, poster: 'media/reels/belong-vision.webp',
    approved: true,
    deeper: 'welcome-belong' },
  { id: 'belong-mission', seconds: 34, vimeoId: '1243785928',
    title: { en: 'Four things that rarely travel together', pt: 'Quatro coisas que raramente andam juntas' },
    hook:  { en: 'The vision says where we are going. The mission says what we do every day.', pt: 'A visão diz para onde vamos. A missão diz o que fazemos todos os dias.' },
    line:  { en: 'Every gesture is a thread. Our job is to leave none of them loose.', pt: 'Cada gesto é um fio. O nosso trabalho é não deixar nenhum solto.' },
    lesson: { en: 'The mission is to serve this community and to connect four things that rarely travel together: farming, hospitality, food and nature. The garden feeds the FarmTable, the table explains the land, and the trail returns the guest to the landscape.',
              pt: 'A missão é servir esta comunidade e ligar quatro coisas que raramente andam juntas: agricultura, hospitalidade, comida e natureza. A horta alimenta o FarmTable, a mesa explica a terra e o trilho devolve o hóspede à paisagem.' },
    videoLang: 'en',
    check: { type: 'recall', a: 2,
      en: { q: 'Which four things does the mission connect?', opts: ['Rooms, restaurant, shop and spa', 'Marketing, sales, service and reviews', 'Farming, hospitality, food and nature'], why: 'The mission is to connect four things that rarely travel together: farming, hospitality, food and nature.' },
      pt: { q: 'Que quatro coisas liga a missão?', opts: ['Quartos, restaurante, loja e spa', 'Marketing, vendas, serviço e avaliações', 'Agricultura, hospitalidade, comida e natureza'], why: 'A missão é ligar quatro coisas que raramente andam juntas: agricultura, hospitalidade, comida e natureza.' } },
    media: { type: 'mp4', src: 'media/reels/belong-mission.mp4' }, poster: 'media/reels/belong-mission.webp',
    approved: true,
    deeper: 'welcome-belong' },
  { id: 'belong-sustainability', seconds: 32, vimeoId: '1243786077',
    title: { en: 'Sustainability on three legs', pt: 'Sustentabilidade em três pernas' },
    hook:  { en: 'Three legs, and none of them stands alone.', pt: 'Três pernas, e nenhuma se aguenta sozinha.' },
    line:  { en: 'A project that does not turn a profit regenerates nothing. It closes.', pt: 'Um projeto que não dá lucro não regenera nada. Fecha.' },
    lesson: { en: 'We speak of sustainability on three legs. Environmental: water, soil, waste, energy. Social: local jobs and wages that hold up a life. And financial, the one usually left out of the conversation. Here, profit is the condition for doing the rest well.',
              pt: 'Falamos de sustentabilidade em três pernas. Ambiental: água, solo, resíduos, energia. Social: emprego local e salários que sustentam uma vida. E financeira, a que costuma ficar fora da conversa. Aqui, o lucro é a condição para fazer bem o resto.' },
    videoLang: 'en',
    check: { type: 'recall', a: 0,
      en: { q: 'Which leg of sustainability is usually left out of the conversation?', opts: ['Financial', 'Environmental', 'Social'], why: 'The reel names it: financial. A project that does not turn a profit regenerates nothing. It closes.' },
      pt: { q: 'Que perna da sustentabilidade costuma ficar fora da conversa?', opts: ['A financeira', 'A ambiental', 'A social'], why: 'O reel diz qual é: a financeira. Um projeto que não dá lucro não regenera nada. Fecha.' } },
    media: { type: 'mp4', src: 'media/reels/belong-sustainability.mp4' }, poster: 'media/reels/belong-sustainability.webp',
    approved: true,
    deeper: 'houses-farm-sustainability' },
  { id: 'belong-simplicity', seconds: 30, vimeoId: '1243786227',
    title: { en: 'Knowing what to take away', pt: 'Saber o que tirar' },
    hook:  { en: 'Simplicity is not doing less.', pt: 'Simplicidade não é fazer menos.' },
    line:  { en: 'A room with nothing extra and, for that reason, nothing missing.', pt: 'Um quarto sem nada a mais e, por isso, sem nada em falta.' },
    lesson: { en: 'Simplicity is knowing what to take away: bread, olive oil, salt, and nothing that distracts from the three. Before we add anything at all, we ask the same question: does this serve the guest, or does it serve us? If the answer hesitates, it does not go in.',
              pt: 'Simplicidade é saber o que tirar: pão, azeite, sal, e nada que distraia dos três. Antes de acrescentarmos seja o que for, fazemos a mesma pergunta: isto serve o hóspede ou serve-nos a nós? Se a resposta hesita, não entra.' },
    videoLang: 'en',
    check: { type: 'recall', a: 2,
      en: { q: 'What do we ask before adding anything?', opts: ['Is it in the budget?', 'Will guests photograph it?', 'Does this serve the guest, or does it serve us?'], why: 'Before we add anything, we ask whether it serves the guest or serves us. If the answer hesitates, it does not go in.' },
      pt: { q: 'O que perguntamos antes de acrescentar alguma coisa?', opts: ['Cabe no orçamento?', 'Os hóspedes vão fotografá-lo?', 'Isto serve o hóspede ou serve-nos a nós?'], why: 'Antes de acrescentarmos alguma coisa, perguntamos se serve o hóspede ou se nos serve a nós. Se a resposta hesita, não entra.' } },
    media: { type: 'mp4', src: 'media/reels/belong-simplicity.mp4' }, poster: 'media/reels/belong-simplicity.webp',
    approved: true,
    deeper: 'craveiral-hospitality' },
  { id: 'belong-comfort', seconds: 29, vimeoId: '1243786323',
    title: { en: 'The absence of friction', pt: 'A ausência de atrito' },
    hook:  { en: 'Comfort here is not luxury.', pt: 'Aqui, conforto não é luxo.' },
    line:  { en: 'If the guest never had to think about anything, we did our job.', pt: 'Se o hóspede nunca teve de pensar em nada, fizemos o nosso trabalho.' },
    lesson: { en: 'Comfort is the body being able to rest: a mattress you never notice, hot water on the first try, shade at the right hour, enough silence to hear the wind. Urban luxury announces itself; country comfort is felt as the absence of friction.',
              pt: 'Conforto é o corpo poder descansar: um colchão em que nunca se repara, água quente à primeira, sombra à hora certa, silêncio suficiente para ouvir o vento. O luxo urbano anuncia-se; o conforto do campo sente-se como ausência de atrito.' },
    videoLang: 'en',
    check: { type: 'recall', a: 1,
      en: { q: 'How is country comfort felt?', opts: ['As luxury that announces itself', 'As the absence of friction', 'As a full programme of activities'], why: 'Urban luxury announces itself; country comfort is felt as the absence of friction.' },
      pt: { q: 'Como se sente o conforto do campo?', opts: ['Como um luxo que se anuncia', 'Como ausência de atrito', 'Como um programa cheio de atividades'], why: 'O luxo urbano anuncia-se; o conforto do campo sente-se como ausência de atrito.' } },
    media: { type: 'mp4', src: 'media/reels/belong-comfort.mp4' }, poster: 'media/reels/belong-comfort.webp',
    approved: true,
    deeper: 'craveiral-hospitality' },
  { id: 'belong-modernity', seconds: 32, vimeoId: '1243786407',
    title: { en: 'Not a museum of rural life', pt: 'Não é um museu da vida rural' },
    hook:  { en: 'Craveiral is not a museum of rural life.', pt: 'O Craveiral não é um museu da vida rural.' },
    line:  { en: 'Technology you notice is decoration. Technology that works goes unnoticed.', pt: 'Tecnologia que se nota é decoração. Tecnologia que funciona passa despercebida.' },
    lesson: { en: 'We use old techniques because they work, not because they look charming. Modernity here means taking the best of what exists today, in building, energy, management and the kitchen, without turning the place into a period set.',
              pt: 'Usamos técnicas antigas porque funcionam, não porque parecem pitorescas. Aqui, modernidade é aproveitar o melhor do que existe hoje, na construção, na energia, na gestão e na cozinha, sem transformar o lugar num cenário de época.' },
    videoLang: 'en',
    check: { type: 'recall', a: 0,
      en: { q: 'Why does Craveiral use old techniques?', opts: ['Because they work', 'Because they look charming', 'Because guests expect a period setting'], why: 'We use old techniques because they work, not because they look charming. Craveiral is not a museum of rural life.' },
      pt: { q: 'Porque usa o Craveiral técnicas antigas?', opts: ['Porque funcionam', 'Porque parecem pitorescas', 'Porque os hóspedes esperam um cenário de época'], why: 'Usamos técnicas antigas porque funcionam, não porque parecem pitorescas. O Craveiral não é um museu da vida rural.' } },
    media: { type: 'mp4', src: 'media/reels/belong-modernity.mp4' }, poster: 'media/reels/belong-modernity.webp',
    approved: true,
    deeper: 'houses-farm-sustainability' },
  { id: 'belong-freedom', seconds: 32, vimeoId: '1243786556',
    title: { en: 'Your own rhythm', pt: 'O seu próprio ritmo' },
    hook:  { en: 'No script, no compulsory programme.', pt: 'Sem guião, sem programa obrigatório.' },
    line:  { en: 'An imperfect decision made in time beats a perfect one that arrives late.', pt: 'Mais vale uma decisão imperfeita a tempo do que uma perfeita que chega tarde.' },
    lesson: { en: 'For those who visit, freedom is choosing their own rhythm, with nobody telling them what they ought to be feeling. For those who work here it is the same: whoever is standing in front of the guest decides in the moment, and is backed for it.',
              pt: 'Para quem nos visita, liberdade é escolher o próprio ritmo, sem ninguém a dizer o que deveria estar a sentir. Para quem trabalha aqui é o mesmo: quem está à frente do hóspede decide no momento, e tem o apoio da equipa.' },
    videoLang: 'en',
    check: { type: 'recall', a: 1,
      en: { q: 'For the team, what does freedom mean?', opts: ['Asking a manager before every decision', 'Whoever is in front of the guest decides in the moment, and is backed for it', 'Following the same script with every guest'], why: 'Whoever is standing in front of the guest decides in the moment and is backed for it. An imperfect decision in time beats a perfect one that arrives late.' },
      pt: { q: 'Para a equipa, o que significa liberdade?', opts: ['Perguntar a um responsável antes de cada decisão', 'Quem está à frente do hóspede decide no momento, e tem o apoio da equipa', 'Seguir o mesmo guião com todos os hóspedes'], why: 'Quem está à frente do hóspede decide no momento e tem o apoio da equipa. Mais vale uma decisão imperfeita a tempo do que uma perfeita que chega tarde.' } },
    media: { type: 'mp4', src: 'media/reels/belong-freedom.mp4' }, poster: 'media/reels/belong-freedom.webp',
    approved: true,
    deeper: 'voice-leadership' },
  { id: 'belong-authenticity', seconds: 28, vimeoId: '1243786646',
    title: { en: 'What we show is what exists', pt: 'O que mostramos é o que existe' },
    hook:  { en: 'Authenticity is an uncomfortable promise.', pt: 'A autenticidade é uma promessa desconfortável.' },
    line:  { en: 'It is the only reason a guest believes us the second time.', pt: 'É a única razão para um hóspede acreditar em nós da segunda vez.' },
    lesson: { en: 'What we show is what exists. If the garden gave no tomatoes this week, there are no tomatoes on the plate, and we tell the guest so. No set dressing, no story to cover what is missing. It is harder this way.',
              pt: 'O que mostramos é o que existe. Se a horta não deu tomates esta semana, não há tomates no prato, e dizemos isso ao hóspede. Sem cenários, sem histórias para tapar o que falta. Assim é mais difícil.' },
    videoLang: 'en',
    check: { type: 'recall', a: 2,
      en: { q: 'The garden gave no tomatoes this week. What happens?', opts: ['We buy some in so the menu stays the same', 'We leave them off and say nothing', 'There are none on the plate, and we tell the guest so'], why: 'What we show is what exists. No tomatoes from the garden means no tomatoes on the plate, and we tell the guest so.' },
      pt: { q: 'A horta não deu tomates esta semana. O que acontece?', opts: ['Compramos fora para o menu ficar igual', 'Tiramo-los do prato e não dizemos nada', 'Não há tomates no prato, e dizemos isso ao hóspede'], why: 'O que mostramos é o que existe. Sem tomates da horta, não há tomates no prato, e dizemos isso ao hóspede.' } },
    media: { type: 'mp4', src: 'media/reels/belong-authenticity.mp4' }, poster: 'media/reels/belong-authenticity.webp',
    approved: true,
    deeper: 'farm-to-table' },
  { id: 'belong-community', seconds: 29, vimeoId: '1243786755',
    title: { en: 'Not a gated resort', pt: 'Não somos um resort fechado' },
    hook:  { en: 'We are in São Teotónio, and that has practical consequences.', pt: 'Estamos em São Teotónio, e isso tem consequências práticas.' },
    line:  { en: 'What has this project brought here?', pt: 'O que trouxe este projeto até aqui?' },
    lesson: { en: 'We buy from producers here, we employ people from here, and our guests leave the property to discover the rest. The community asks a fair question: what has this project brought here? Every year we need a better answer than the year before.',
              pt: 'Compramos a produtores daqui, empregamos pessoas daqui, e os nossos hóspedes saem da propriedade para descobrir o resto. A comunidade faz uma pergunta justa: o que trouxe este projeto até aqui? Todos os anos precisamos de uma resposta melhor do que no ano anterior.' },
    videoLang: 'en',
    check: { type: 'recall', a: 0,
      en: { q: 'What question does the community fairly ask us?', opts: ['What has this project brought here?', 'When will the resort open to the public?', 'How many guests come each year?'], why: 'The question this community asks is a fair one: what has this project brought here? Every year we need a better answer.' },
      pt: { q: 'Que pergunta justa nos faz a comunidade?', opts: ['O que trouxe este projeto até aqui?', 'Quando é que o resort abre ao público?', 'Quantos hóspedes vêm por ano?'], why: 'A pergunta que esta comunidade nos faz é justa: o que trouxe este projeto até aqui? Todos os anos precisamos de uma resposta melhor.' } },
    media: { type: 'mp4', src: 'media/reels/belong-community.mp4' }, poster: 'media/reels/belong-community.webp',
    approved: true,
    deeper: 'welcome-belong' },
  { id: 'belong-creativity', seconds: 32, vimeoId: '1243786821',
    title: { en: 'Solving with what is at hand', pt: 'Resolver com o que há à mão' },
    hook:  { en: 'Creativity here is rarely about having a new idea.', pt: 'Aqui, criatividade raramente é ter uma ideia nova.' },
    line:  { en: 'Constraint is not the enemy of creativity. It is what forces it to exist.', pt: 'A limitação não é inimiga da criatividade. É o que a obriga a existir.' },
    lesson: { en: 'Creativity is solving with what is at hand. Leftover pumpkin becomes a ferment. The menu follows the garden, not the other way around. A broken chair gets another life instead of a skip. Working with what the land gives, no two weeks are ever the same.',
              pt: 'Criatividade é resolver com o que há à mão. A abóbora que sobra torna-se um fermentado. O menu segue a horta, e não o contrário. Uma cadeira partida ganha outra vida em vez de ir para o contentor. A trabalhar com o que a terra dá, não há duas semanas iguais.' },
    videoLang: 'en',
    check: { type: 'recall', a: 1,
      en: { q: 'How do the menu and the garden relate?', opts: ['The garden is planted to match the menu', 'The menu follows the garden', 'They are planned separately'], why: 'The menu follows the garden, not the other way around. Creativity is solving with what is at hand.' },
      pt: { q: 'Qual é a relação entre o menu e a horta?', opts: ['A horta é plantada para o menu', 'O menu segue a horta', 'São planeados em separado'], why: 'O menu segue a horta, e não o contrário. Criatividade é resolver com o que há à mão.' } },
    media: { type: 'mp4', src: 'media/reels/belong-creativity.mp4' }, poster: 'media/reels/belong-creativity.webp',
    approved: true,
    deeper: 'farm-to-table' },
  { id: 'belong-wellbeing', seconds: 30, vimeoId: '1243786939',
    title: { en: 'This one starts at home', pt: 'Este começa em casa' },
    hook:  { en: 'Nobody serves well who is not well served.', pt: 'Ninguém serve bem se não for bem servido.' },
    line:  { en: 'The wellbeing of the people who work here is not a nice benefit. It is infrastructure.', pt: 'O bem-estar de quem trabalha aqui não é um benefício simpático. É infraestrutura.' },
    lesson: { en: 'Real rest, real training, and being heard when you flag a problem come before the guest experience, because they are what make it possible. That wellbeing reaches outward, to the team\'s families and to the village that hosts us.',
              pt: 'Descanso a sério, formação a sério e ser ouvido quando se assinala um problema vêm antes da experiência do hóspede, porque são o que a torna possível. Esse bem-estar chega mais longe, às famílias da equipa e à aldeia que nos acolhe.' },
    videoLang: 'en',
    check: { type: 'recall', a: 2,
      en: { q: 'What is the wellbeing of the team, in this reel?', opts: ['A nice benefit when the season allows', 'Something that comes after the guest experience', 'Infrastructure: it is what makes the guest experience possible'], why: 'It is not a nice benefit. It is infrastructure, and it comes before the guest experience because it makes it possible.' },
      pt: { q: 'Neste reel, o que é o bem-estar da equipa?', opts: ['Um benefício simpático quando a época o permite', 'Algo que vem depois da experiência do hóspede', 'Infraestrutura: é o que torna possível a experiência do hóspede'], why: 'Não é um benefício simpático. É infraestrutura, e vem antes da experiência do hóspede porque é o que a torna possível.' } },
    media: { type: 'mp4', src: 'media/reels/belong-wellbeing.mp4' }, poster: 'media/reels/belong-wellbeing.webp',
    approved: true,
    deeper: 'voice-leadership' },
  /* the earlier Vision narration over real estate footage, kept as a bonus at the end (Vimeo "Animated and Belong Footage reel");
     its check asks a different line of the script, so the two reels never repeat a question */
  { id: 'belong-vision-estate', seconds: 29, vimeoId: '1242451537',
    title: { en: 'A place that outlives us', pt: 'Um lugar que vai durar mais do que nós' },
    hook:  { en: 'What the land gives, returns to the land.', pt: 'O que a terra dá volta à terra.' },
    line:  { en: 'What the house takes, the house gives back.', pt: 'O que a casa tira, a casa devolve.' },
    lesson: { en: "The circular economy in one line: what the land gives returns to the land, and what the house takes, the house gives back. That is why Belong says it does not run a hotel in the countryside: it looks after a place that outlives us.",
              pt: 'A economia circular numa frase: o que a terra dá volta à terra, e o que a casa tira, a casa devolve. É por isso que a Belong diz que não gere um hotel no campo: cuida de um lugar que vai durar mais do que nós.' },
    videoLang: 'en',
    check: { type: 'recall', a: 0,
      en: { q: 'In the circular economy, what does the house do with what it takes?', opts: ['It gives it back', 'It keeps it for later seasons', 'It sells it to guests'], why: 'The reel says it plainly: what the house takes, the house gives back. What the land gives returns to the land.' },
      pt: { q: 'Na economia circular, o que faz a casa com o que tira?', opts: ['Devolve-o', 'Guarda-o para as próximas estações', 'Vende-o aos hóspedes'], why: 'O reel di-lo claramente: o que a casa tira, a casa devolve. O que a terra dá volta à terra.' } },
    media: { type: 'mp4', src: 'media/reels/belong-vision-estate.mp4' }, poster: 'media/reels/belong-vision-estate.webp',
    approved: true,
    deeper: 'welcome-belong' },
];

const CURRICULUM = {
  passMark: 70,
  since: '2026-11-05T00:00:00Z',   /* item-level 'done' flags older than this count as every lesson done (pre-curriculum records) */   /* % across a course's lesson questions (best attempt per lesson) */
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
        { id: 'welcome-belong', cats: ['everyone', 'land'] },
        { id: 'craveiral-hospitality', cats: ['everyone', 'hosting'] },
        { id: 'voice-leadership', cats: ['everyone', 'leaders'] }
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
        { id: 'guest-journey', cats: ['hosting'] },
        { id: 'houses-farm-sustainability', cats: ['houses', 'maintenance', 'land'] },
        { id: 'farm-to-table', cats: ['kitchen', 'land'] }
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
        { id: 'csh-one-house', source: 'craveiral-places', lessons: [0], cats: ['everyone'],
          title: 'One House, Five Units', outcome: 'See the five units as one house, and explain the circular chain that links garden, kitchen and compost.',
          pt: { title: 'Uma Casa, Cinco Unidades', outcome: 'Ver as cinco unidades como uma só casa, e explicar a cadeia circular que liga a horta, a cozinha e o composto.' } },
        { id: 'csh-units', source: 'craveiral-places', lessons: [1, 2, 3, 4, 5], optional: [1, 2], cats: ['houses', 'kitchen', 'maintenance'],
          title: 'The Units', outcome: 'Answer guests confidently about the houses, FarmTable, the beach bar, the shop and the laundry, and keep each unit\'s standard.',
          optionalNote: 'Optional here: "The houses" and "FarmTable" cover the same ground as lessons in Guest Experience & Our Standards.',
          pt: { title: 'As Unidades', outcome: 'Responder com confiança sobre as casas, o FarmTable, o bar da praia, a loja e a lavandaria, e manter o padrão de cada unidade.',
                optionalNote: 'Opcional aqui: "As casas" e "FarmTable" cobrem o mesmo terreno de lições em Experiência do Hóspede e os Nossos Padrões.' } },
        { id: 'csh-care', source: 'craveiral-places', lessons: [6, 7], cats: ['hosting'],
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
  /* Library categories = who the module is useful to, by department (meeting, 4 Nov 2026:
     "department/utility based", so someone outside maintenance can see what is relevant
     there). Discovery labels only; a module can sit in several. Assigned from the 20
     transcripts — docs/CONTENT-MAP.md lists the reasoning per module. */
  categories: [
    { key: 'everyone',    en: 'For everyone',          pt: 'Para todos' },
    { key: 'hosting',     en: 'Hosting & Guest Care',  pt: 'Receção e Cuidado do Hóspede' },
    { key: 'houses',      en: 'Houses & Housekeeping', pt: 'Casas e Limpezas' },
    { key: 'kitchen',     en: 'Kitchen & Bar',         pt: 'Cozinha e Bar' },
    { key: 'land',        en: 'Land & Farm',           pt: 'Terra e Quinta' },
    { key: 'maintenance', en: 'Maintenance',           pt: 'Manutenção' },
    { key: 'leaders',     en: 'Team leaders',          pt: 'Chefes de equipa' }
  ],
  lessonTitles: {
    'welcome-belong:0': { en: 'My story and the story of Craveiral', pt: 'A minha história e a história do Craveiral' },
    'welcome-belong:1': { en: 'Our vision, our mission and the chain', pt: 'A nossa visão, a nossa missão e a cadeia' }
  }
};

