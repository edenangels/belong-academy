/* build-takeaways.mjs — three real, lesson-specific takeaways per module (EN + PT) from the
   Whisper transcript, via the academy gateway. Writes the TAKEAWAYS const in the brand content.
     node scripts/build-takeaways.mjs <course-id> [--brand brands/belong]  */
import { readFileSync, writeFileSync, existsSync } from 'fs';
const API = 'https://academy-ai.edenrise.workers.dev';
const course = process.argv[2]; if (!course) { console.error('usage: build-takeaways.mjs <course>'); process.exit(1); }
const only = process.argv.includes('--only') ? process.argv[process.argv.indexOf('--only') + 1].split(',').map(Number) : null;
const brandDir = process.argv.includes('--brand') ? process.argv[process.argv.indexOf('--brand') + 1] : 'brands/belong';
const contentPath = `${brandDir}/content.js`;
const src = readFileSync(contentPath, 'utf8');
const { CATALOG } = new Function('window', 'document', src + ';return {CATALOG};')({}, {});
const c = CATALOG.find(x => x.id === course); if (!c) throw new Error('no course ' + course);
const KEY = readFileSync(process.env.HOME + '/.academy-build-key', 'utf8').trim();
const blocks = segs => { const out = []; let cur = null; for (const s of segs) { if (!cur || s.t0 - cur.t0 > 25) { cur = { t0: s.t0, text: s.text }; out.push(cur); } else cur.text += ' ' + s.text; } return out.map(b => b.text).join('\n').slice(0, 9000); };
async function ask(prompt) {
  const r = await fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Origin': 'https://academy.edenrise.com', 'X-Build-Key': KEY },
    body: JSON.stringify({ context: { brand: 'Belong Academy', course: c.title, topics: 'hospitality at Craveiral Farmhouse, guest journey, FarmTable, the Belong values', ethos: 'Craveiral Farmhouse by Belong — a regenerative farm hotel in the Alentejo, Portugal.' }, maxTokens: 900, messages: [{ role: 'user', content: prompt }] }) });
  const d = await r.json(); if (!d.reply) throw new Error('gateway: ' + JSON.stringify(d).slice(0, 200)); return d.reply;
}
const en = [], pt = [];
const { TAKEAWAYS: OLD } = new Function('window', 'document', src + ';return {TAKEAWAYS: typeof TAKEAWAYS === "undefined" ? {} : TAKEAWAYS};')({}, {});
const prev = (OLD && OLD[course]) || { en: [], pt: [] };
for (let i = 0; i < c.modules.length; i++) {
  const f = `media/transcripts/${course}/m${i}.json`;
  if (!existsSync(f)) { en.push(null); pt.push(null); continue; }
  if (only && !only.includes(i) && prev.en[i]) { en.push(prev.en[i]); pt.push(prev.pt[i]); console.log(`m${i} kept`); continue; }
  const tr = blocks(JSON.parse(readFileSync(f, 'utf8')).segments || []);
  const prompt = `Below is the transcript of the lesson "${c.modules[i]}" from the course "${c.title}". Write EXACTLY three takeaways a team member should keep from THIS lesson. Each one is a full sentence of 10–20 words that says WHAT to do or remember AND WHY it matters here, using concrete details from the transcript (names, numbers, places). No generic advice, no "in this lesson", no fragments. Spell the place "Craveiral". Only mention A Mesa do CAM, the beach bar or any number if the transcript itself does. Return ONLY a JSON object: {"en":["...","...","..."],"pt":["...","...","..."]} where "pt" is natural European Portuguese.\n\nTRANSCRIPT:\n${tr}`;
  let got = null;
  for (let attempt = 0; attempt < 3 && !got; attempt++) {
    try { const t = await ask(prompt); const a = t.indexOf('{'), b = t.lastIndexOf('}'); const o = JSON.parse(t.slice(a, b + 1)); if (Array.isArray(o.en) && o.en.length === 3 && Array.isArray(o.pt) && o.pt.length === 3) got = o; } catch (e) { console.error(`m${i} attempt ${attempt + 1}: ${e.message.slice(0, 120)}`); }
  }
  if (!got) throw new Error('could not get takeaways for m' + i);
  en.push(got.en.map(s => String(s).trim())); pt.push(got.pt.map(s => String(s).trim()));
  console.log(`m${i} ✓ ${got.en[0].slice(0, 70)}`);
}
const js = `const TAKEAWAYS = {\n  /* generated from the lesson transcripts by scripts/build-takeaways.mjs (${new Date().toISOString().slice(0, 10)}); edit freely */\n  '${course}': {\n    en: ${JSON.stringify(en, null, 0).replace(/\],\[/g, '],\n      [').replace(/^\[\[/, '[\n      [').replace(/\]\]$/, ']\n    ]')},\n    pt: ${JSON.stringify(pt, null, 0).replace(/\],\[/g, '],\n      [').replace(/^\[\[/, '[\n      [').replace(/\]\]$/, ']\n    ]')}\n  }\n};`;
const re = /const TAKEAWAYS = \{[\s\S]*?\n\};|const TAKEAWAYS = \{\};/;
if (!re.test(src)) throw new Error('TAKEAWAYS const not found in ' + contentPath);
writeFileSync(contentPath, src.replace(re, js));
console.log('TAKEAWAYS written to', contentPath);
