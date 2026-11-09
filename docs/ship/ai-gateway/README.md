# academy-ai: the "Ask" assistant's gateway

A small Cloudflare Worker that answers learners' questions from the lesson transcripts.
It runs on **Cloudflare Workers AI (Llama 3.3 70B) with no API key**, so there is nothing to
leak and nothing to pay at a team's scale. A separate yes/no guard model refuses off-topic
requests. A per-IP daily ceiling stops one person using up the free allowance. When the
allowance runs out it returns a clean "back tomorrow" message, and the academy keeps working.

## Deploy your own (10 minutes)

1. Create a free Cloudflare account at https://dash.cloudflare.com.
2. In `src/index.js`, edit `ALLOWED_ORIGINS` to list the academy's address(es), e.g.
   `"https://academy.your-site.com"`, plus `"http://localhost:8080"` for local testing.
   Only these sites can use the gateway.
3. From this folder:

   ```bash
   npx wrangler login
   npx wrangler deploy
   ```

   It prints the address, e.g. `https://academy-ai.<your-account>.workers.dev`.
4. In the academy's `brands/belong/brand.js`, set `aiGateway: 'https://academy-ai.<your-account>.workers.dev/'`,
   then release (see CLAUDE.md).

Optional: for a stronger model, `npx wrangler secret put GEMINI_KEY`. The key stays at
Cloudflare and is never sent to the browser.

## Request shape

```
POST /
{ "context": { "brand": "...", "course": "...", "topics": "...", "ethos": "..." },
  "messages": [ { "role": "user", "content": "..." } ] }
→ { "reply": "...", "model": "@cf/meta/llama-3.3-70b-instruct-fp8-fast" }
→ { "reply": "...", "refused": true }        (off-topic)
POST /embed { "texts": ["..."] } → embeddings for search
```
