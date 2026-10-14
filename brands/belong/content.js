/* ============================================================================
   INSTANCE CONTENT · Belong Academy — course catalog (pure data)
   Six starter courses across Belong's pillars: School · Staying & Feeling ·
   Growing & Tasting · To Nature · Community. Real Belong videos slot into
   moduleMedia later; until then modules show a "coming soon" state.
============================================================================ */
const CATALOG = [
  {
    id: 'welcome-belong', title: 'Welcome to Belong', cat: 'School', grad: 1, icon: 'compass',
    outcomes: ['Tell Craveiral\'s story — and why Belong exists', 'Live our values and the Craveiral way of hospitality in every guest moment', 'Handle complaints and recover a guest\'s stay with confidence', 'Speak in the Craveiral voice and lead with autonomy as one team'],
    outcomes_pt: ['Contar a história do Craveiral — e porque existe a Belong', 'Viver os nossos valores e a hospitalidade à maneira do Craveiral em cada momento com o hóspede', 'Lidar com reclamações e recuperar a estadia de um hóspede com confiança', 'Falar com a voz do Craveiral e liderar com autonomia, como uma equipa'],
    /* THE FIRST REAL COURSE — Craveiral's own onboarding, 12 filmed modules from
       the Vimeo folder "New with Music" (unlisted; each id carries its h= hash,
       which the player needs for unlisted embeds). Wired 2026-09-17. Titles are
       the trainer's, minus the "Module N -" prefix. Durations are real. */
    level: 'All levels', learners: 0, ai: true, isNew: true, featured: true, updated: '2026-09',
    /* the card is a frame from module 4 (the garden, the house, sunset — no lettering: the card sets the title itself); the hero is the sunset over the pines from the same module */
    poster: 'media/covers/welcome-belong.webp', heroArt: 'media/covers/welcome-belong-hero.webp',
    hook: 'Why we\'re here, and how we do it.', hookSub: 'The story, the values, the guest journey — the Craveiral way, in twelve lessons.',
    desc: 'Craveiral\'s onboarding journey: where we come from and why, our vision and values in practice, hospitality the Craveiral way, the guest journey from first click to farewell, the houses and the farm, FarmTable, the constellation of places, what to do when things go wrong, sustainability before lunch, how we speak, and how we lead and work together.',
    modules: [
      'Why we\'re here: my story, and the story of Craveiral',
      'Our vision, our mission, and the chain',
      'Our values, in practice',
      'Hospitality, the Craveiral way',
      'The guest journey: from first click to farewell',
      'The houses, the farm, and the standards we keep',
      'FarmTable: where the philosophy becomes food',
      'The constellation: Beach Bar, A Mesa do CAM, events, and one same gesture',
      'When things go wrong: complaints and service recovery',
      'Sustainability in daily practice: what the mission asks of you before lunch',
      'How we speak: the Craveiral voice',
      'Leadership, autonomy, and how we work together'
    ],
    moduleDurations: [5, 6, 6, 6, 7, 7, 6, 6, 6, 6, 6, 7],   /* real Vimeo lengths: 4:57 6:27 5:50 6:21 6:35 6:51 6:24 5:49 5:52 5:54 5:36 6:36 */
    moduleMedia: [
      { type: 'vimeo', id: '1221527400', h: 'c3866a3f1f' }   /*  1. Why we're here: my story, and the story of Crave */,
      { type: 'vimeo', id: '1227370063', h: '65ab173171' }   /*  2. Our vision, our mission, and the chain */,
      { type: 'vimeo', id: '1227371951', h: '890f287236' }   /*  3. Our values, in practice */,
      { type: 'vimeo', id: '1227427000', h: '76cf6e7e23' }   /*  4. Hospitality, the Craveiral way */,
      { type: 'vimeo', id: '1227372746', h: 'c1900e20be' }   /*  5. The guest journey: from first click to farewell */,
      { type: 'vimeo', id: '1227430198', h: '414021ba4d' }   /*  6. The houses, the farm, and the standards we keep */,
      { type: 'vimeo', id: '1220166660', h: '7cc9ce409c' }   /*  7. FarmTable: where the philosophy becomes food */,
      { type: 'vimeo', id: '1225586175', h: '244ba73b9d' }   /*  8. The constellation: Beach Bar, A Mesa do CAM, eve */,
      { type: 'vimeo', id: '1227372976', h: 'dc0bb4f742' }   /*  9. When things go wrong: complaints and service rec */,
      { type: 'vimeo', id: '1227373149', h: '1dbdf258c8' }   /* 10. Sustainability in daily practice: what the missi */,
      { type: 'vimeo', id: '1227413580', h: '0309264292' }   /* 11. How we speak: the Craveiral voice */,
      { type: 'vimeo', id: '1227665184', h: '467877ad3b' }   /* 12. Leadership, autonomy, and how we work together */
    ]
  },
  {
    id: 'art-of-hospitality', title: 'The Art of Hospitality', cat: 'Staying & Feeling', grad: 4, icon: 'people',
    level: 'All levels', learners: 0, updated: '2026-07', poster: 'media/covers/art-of-hospitality.svg',
    hook: 'Make anyone feel they belong.', hookSub: 'Presence, warmth, and the craft of welcome.',
    desc: 'Hospitality is more than service — it is the practice of making a guest feel seen, at ease, and part of something. Presence, reading a room, and the small details that quietly say: you belong here.',
    modules: ['The first ninety seconds', 'Presence & attention', 'Reading the room', 'The details that say welcome', 'Hosting under pressure', 'A stay to remember'],
    moduleDurations: [4, 6, 5, 5, 6, 4],
    /* scripted, not yet filmed — every row reads \"Coming soon\" until the footage lands */
    moduleMedia: Array.from({ length: 6 }, () => ({ type: 'soon' }))
  },
  {
    id: 'seasonal-table', title: 'The Seasonal Table', cat: 'Growing & Tasting', grad: 6, icon: 'sprout',
    level: 'Beginner', learners: 0, updated: '2026-07', poster: 'media/covers/seasonal-table.svg',
    hook: 'Taste the season, plate the place.', hookSub: 'From garden to table, with nothing wasted.',
    desc: 'Cooking and tasting with the seasons — reading what the land gives, building flavour, and setting a table that tells a story. The circular kitchen, where nothing is wasted and everything belongs.',
    modules: ['Reading the season', 'Building flavour', 'The circular kitchen', 'The art of tasting', 'Plating a story', 'Hosting a tasting'],
    moduleDurations: [5, 7, 6, 6, 5, 5],
    /* scripted, not yet filmed — every row reads \"Coming soon\" until the footage lands */
    moduleMedia: Array.from({ length: 6 }, () => ({ type: 'soon' }))
  },
  {
    id: 'growing-regenerating', title: 'Growing & Regenerating', cat: 'Growing & Tasting', grad: 7, icon: 'seed',
    level: 'Beginner', learners: 0, updated: '2026-07', poster: 'media/covers/growing-regenerating.svg',
    hook: 'Grow food, give back more.', hookSub: 'The circular economy, rooted in the ground.',
    desc: 'How Belong grows — regenerative practices that feed the table and the soil at once. Composting, seasons, and closing the loop between kitchen, garden and community.',
    modules: ['What regeneration means', 'Growing with the seasons', 'Closing the loop', 'Compost & circularity', 'From garden to guest'],
    moduleDurations: [5, 6, 5, 5, 4],
    /* scripted, not yet filmed — every row reads \"Coming soon\" until the footage lands */
    moduleMedia: Array.from({ length: 5 }, () => ({ type: 'soon' }))
  },
  {
    id: 'belong-to-nature', title: 'Belong to Nature', cat: 'To Nature', grad: 5, icon: 'tree',
    level: 'All levels', learners: 0, updated: '2026-07', poster: 'media/covers/belong-to-nature.svg',
    hook: 'Slow down. Belong to the place.', hookSub: 'Nature connection as the ground of belonging.',
    desc: 'To belong you need ground. A practice of attention outdoors — walking, noticing, and the felt sense of being part of a place rather than passing through it.',
    modules: ['The ground beneath belonging', 'A walk of attention', 'Noticing what a place offers', 'Belonging to a place', 'Sharing nature with guests'],
    moduleDurations: [4, 5, 5, 4, 4],
    /* scripted, not yet filmed — every row reads \"Coming soon\" until the footage lands */
    moduleMedia: Array.from({ length: 5 }, () => ({ type: 'soon' }))
  },
  {
    id: 'community-circular', title: 'Community & the Circular Way', cat: 'Community', grad: 3, icon: 'people',
    level: 'Beginner', learners: 0, updated: '2026-07', poster: 'media/covers/community-circular.svg',
    hook: 'No one belongs alone.', hookSub: 'Community, the commons, and the circular economy.',
    desc: 'Belong began as a notion of community and a circular economy. How shared spaces, shared work and shared care create the conditions for people — and places — to belong.',
    modules: ['Why community is the point', 'The circular economy, simply', 'Shared spaces & the commons', 'Hosting a community', 'A 90-day belonging plan'],
    moduleDurations: [4, 5, 5, 5, 4],
    /* scripted, not yet filmed — every row reads \"Coming soon\" until the footage lands */
    moduleMedia: Array.from({ length: 5 }, () => ({ type: 'soon' }))
  }
];

/* No invented sessions (13 Oct 2026, John: no fiction on the storefront). Real ones come from the
   studio (studioMeta.live) the day someone schedules one; the page shows an honest empty state. */
const LIVE_SESSIONS = [];

/* course maps kept empty — hooks/copy live inline on each course above.
   (Declared so the shared framework helpers resolve.) */
const COURSE_HOOKS = {};
const COURSE_HOOKS_PT = {};
const COURSE_QUIZ = {
};
const TAKEAWAYS = {
  /* generated from the lesson transcripts by scripts/build-takeaways.mjs (2026-10-14); edit freely */
  'welcome-belong': {
    en: [
      ["Remember Craveiral was built to sustain a relationship with the land, not just to be a hotel, for guest experience","Respect the land in every decision, like using raised wooden walkways, to preserve its natural state, for sustainability","Prioritize leaving the land better than found, with better soil and water, as part of belonging to it, for long-term impact"],
      ["Remember Craveiral Farmhouse is the heart of Belong to understand its significance","Recall the vision to regenerate the territory through a circular economy matters for sustainability","Choose local suppliers like the shepherd to turn the circular economy wheel"],
      ["Protect the mission by avoiding waste at Craveiral because financial sustainability is crucial","Simplify the guest's experience with clear answers and honest food to make sense","Preserve authenticity by being your real self with guests, not performing a corporate role"],
      ["Treat guests as friends, not customers, to create a welcoming atmosphere at Craveiral.","Use guests' names to make them feel recognized and valued during their stay.","Anticipate guests' needs, like lighting fire pits on cold nights, to show attention and care."],
      ["Ensure reality matches the dream shown in Craveiral's marketing to keep promises","Answer emails quickly and warmly to build guest confidence before arrival","Make the first 15 minutes at Craveiral a genuine welcome to set the tone"],
      ["Know Craveiral's 9 hectares and 38 houses to confidently answer guest questions and create trust.","Remember each unit's character and amenities, like kitchens and private terraces, to personalize guest experiences.","Understand the farm's role in providing over 70% of the restaurant's ingredients to appreciate the connection between field and plate."],
      ["Remember that over 70% of served food is grown on Craveiral property to ensure freshness and quality","Emphasize the importance of sourcing ingredients locally, such as cheeses from the region and fish from the coast","Highlight the seasonal menu rotation to showcase the authentic taste of food, like a tomato in August at Craveiral"],
      ["Recommend the beach bar to guests to move them inside the business","Embody Craveiral's philosophy at the beach bar with honest food and care","Cross-recommend services like weddings and events to connect guests to more of what they love"],
      ["Listen completely to upset guests at Craveiral to understand their concerns.","Acknowledge feelings honestly to show empathy and recognize disappointment.","Fix issues bigger than expected to create loyalty and show genuine care."],
      ["Report every leak immediately to conserve water at Craveiral","Follow dosing and full load washing routines to minimize waste","Turn off lights and air conditioning when not in use to reduce energy consumption"],
      ["Use calm and warm tone when speaking to guests at Craveiral because it matters to our brand voice","Say it like you'd say it to a friend's parents visiting your home to sound respectful and real","Promise what we control like care and honesty when speaking with guests to avoid over-promising"],
      ["Solve guest problems using Belong values as a compass at Craveiral","Speak early about mistakes to avoid crises and maintain trust","Maintain high standards to respect guests, colleagues, and yourself"]
    ],
    pt: [
      ["Lembre-se de que o Craveiral foi construído para manter uma relação com a terra, não apenas para ser um hotel, para a experiência do hóspede","Respeite a terra em cada decisão, como usar passadiços de madeira elevados, para preservar o seu estado natural, para a sustentabilidade","Priorize deixar a terra melhor do que a encontrou, com solo e água melhores, como parte de pertencer a ela, para o impacto a longo prazo"],
      ["Lembre-se de que a Craveiral Farmhouse é o coração da Belong para entender a sua importância","Recorde a visão de regenerar o território através de uma economia circular para a sustentabilidade","Escolha fornecedores locais como o pastor para fazer girar a roda da economia circular"],
      ["Proteja a missão evitando o desperdício em Craveiral porque a sustentabilidade financeira é crucial","Simplifique a experiência do hóspede com respostas claras e comida honesta para fazer sentido","Preserve a autenticidade sendo você mesmo com os hóspedes, não representando um papel corporativo"],
      ["Trate os hóspedes como amigos, não como clientes, para criar uma atmosfera acolhedora em Craveiral.","Use os nomes dos hóspedes para fazê-los sentir reconhecidos e valorizados durante a sua estadia.","Antecipe as necessidades dos hóspedes, como acender as lareiras nas noites frias, para mostrar atenção e cuidado."],
      ["Certifique-se de que a realidade corresponde ao sonho mostrado no marketing do Craveiral para manter as promessas","Responda aos e-mails rapidamente e com calor para construir a confiança do hóspede antes da chegada","Faça dos primeiros 15 minutos no Craveiral um verdadeiro acolhimento para definir o tom"],
      ["Conheça os 9 hectares e 38 casas do Craveiral para responder com confiança às perguntas dos hóspedes e criar confiança.","Lembre-se do caráter e das comodidades de cada unidade, como cozinhas e varandas privadas, para personalizar as experiências dos hóspedes.","Entenda o papel da quinta em fornecer mais de 70% dos ingredientes do restaurante para apreciar a ligação entre o campo e o prato."],
      ["Lembre-se de que mais de 70% dos alimentos servidos são cultivados na propriedade do Craveiral para garantir frescura e qualidade","Enfatize a importância de adquirir ingredientes localmente, como queijos da região e peixe da costa","Destaque a rotação sazonal do menu para mostrar o sabor autêntico dos alimentos, como um tomate em agosto no Craveiral"],
      ["Recomende o beach bar aos hóspedes para movê-los dentro do negócio","Encarne a filosofia do Craveiral no beach bar com comida honesta e cuidado","Faça recomendações cruzadas de serviços como casamentos e eventos para conectar os hóspedes ao que já amam"],
      ["Ouça completamente os hóspedes descontentes no Craveiral para entender as suas preocupações.","Reconheça os sentimentos honestamente para mostrar empatia e reconhecer a desilusão.","Resolva os problemas de forma mais ampla do que o esperado para criar lealdade e mostrar cuidado genuíno."],
      ["Relate todos os vazamentos imediatamente para conservar água em Craveiral","Siga as rotinas de dosagem e lavagem de carga completa para minimizar o desperdício","Desligue as luzes e a ar condicionado quando não estiverem em uso para reduzir o consumo de energia"],
      ["Use um tom calmo e quente quando fala com os hóspedes no Craveiral porque isso importa para a nossa voz de marca","Diga como diria a pais de um amigo que visita a sua casa para soar respeitoso e real","Prometa o que controlamos como cuidado e honestidade quando fala com os hóspedes para evitar promessas excessivas"],
      ["Resolva problemas de hóspedes utilizando os valores da Belong como bússola no Craveiral","Fale cedo sobre erros para evitar crises e manter a confiança","Mantenha padrões elevados para respeitar hóspedes, colegas e a si mesmo"]
    ]
  }
};
const COURSE_PT = {};
const COURSE_SKILLS = {};
