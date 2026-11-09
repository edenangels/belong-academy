# Belong Academy: setup on your own GitHub, hosting and website

This guide takes the academy from the zip you received to a live address on your own
website. Every step can be done by a person, or handed to Claude Code: open Claude Code in
this folder and say *"Follow docs/SETUP.md and set this up for us."* Claude reads
`CLAUDE.md` first and asks you for the few things only you can do, like signing in to
GitHub or to your domain provider.

**Time:** about 30 minutes. **Cost:** €0. Free hosting is enough for a team academy.

---

## What you are setting up

The academy is a **static website**: HTML, CSS, JavaScript, JSON and font files. It has:

- **No login.** People open the link, type their name, choose their department and start.
- **No database and no server code.** Each person's progress, training hours and
  certificates are saved in their own browser on their own device.
- **Videos on Vimeo.** The lessons and reels stream from Belong's Vimeo account. No video
  files live in the academy.

So "hosting" only means putting a folder of files somewhere public. Any web host can do that.

> **Good to know about no-login mode.** Progress lives on the device where someone learns.
> If they switch phones, or clear their browser's data, they start again. Leaders cannot
> see a team overview, because nothing is sent to a server. When you want accounts, a
> shared team view and progress that follows people across devices, see
> [ACCOUNTS-LATER.md](ACCOUNTS-LATER.md). It is a configuration change, not a rebuild.

---

## Step 0: Check it runs on your computer (2 min)

You need Python 3 (already on every Mac) or Node.js.

```bash
cd belong-academy
python3 -m http.server 8080
```

Open http://localhost:8080. You should see the onboarding: name, then department, then
goal. Stop the server with Ctrl+C.

Optional: `node test/run.mjs` runs the automated tests (expect `84 passed`).

---

## Step 1: Put the code on your own GitHub (5 min)

1. Sign in at https://github.com (create a free account or organisation if you need one).
2. Click **New repository**. Name it, for example, `belong-academy`. Choose **Private**
   (recommended) or Public. Do **not** add a README, .gitignore or licence, because the
   folder already has them.
3. In this folder, run (replace `YOUR-ORG`):

```bash
git init -b main
git add .
git commit -m "Belong Academy: first commit"
git remote add origin https://github.com/YOUR-ORG/belong-academy.git
git push -u origin main
```

If you use the GitHub CLI, `gh repo create YOUR-ORG/belong-academy --private --source . --push`
does the same in one line.

---

## Step 2: Choose where it is hosted

Pick **one**. All three are free at this size.

| Option | Best when | Custom domain | Updates |
|---|---|---|---|
| **A. GitHub Pages** | You want everything in GitHub, no other account | Yes | Automatic on every push |
| **B. Cloudflare Pages** | Your domain's DNS is already on Cloudflare, or you want the fastest site | Yes | Automatic on every push |
| **C. Your existing web host** (cPanel, FTP, Plesk, any server) | Your website already lives on a host and you want the academy next to it | Yes, it uses your site's domain | Upload the folder again |

### A. GitHub Pages

The repository already has a ready workflow: `.github/workflows/pages.yml`. It builds the
site and publishes it every time you push to `main`.

1. In the repository on GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Go to **Actions**, open **Deploy to GitHub Pages** and click **Run workflow**, or push
   any change.
4. After about a minute the site is live at `https://YOUR-ORG.github.io/belong-academy/`.

Private repositories need a paid GitHub plan for Pages. On a free plan, make the repository
public or use option B.

### B. Cloudflare Pages

1. Sign in at https://dash.cloudflare.com, then go to **Workers & Pages → Create → Pages →
   Connect to Git**, and choose your repository.
2. Build settings:
   - Framework preset: **None**
   - Build command: `bash scripts/build.sh`
   - Build output directory: `dist`
3. **Save and Deploy.** The site is live at `https://belong-academy.pages.dev`, or a
   similar name if that one is taken.

From then on, every push to `main` redeploys.

### C. Your existing web host

1. Build the upload folder on your computer:

   ```bash
   bash scripts/build.sh
   ```

   This creates `dist/`. If Node.js is installed the files are also minified; without it
   you get a plain copy that works the same.
2. Upload the **contents** of `dist/` (not the folder itself) with your host's File Manager
   or an FTP app such as FileZilla or Cyberduck:
   - to a sub-folder, e.g. `public_html/academy/`, which gives `https://your-site.com/academy/`;
   - or to the root of a sub-domain, e.g. `academy.your-site.com`. Create the sub-domain in
     your host's control panel first.
3. Open the address. It must be **https**: the browser's offline cache and some video
   features need a secure address. Most hosts give free HTTPS (Let's Encrypt) in the
   control panel.

To update later, run `scripts/build.sh` again and upload `dist/` again, replacing the old
files.

---

## Step 3: Connect it to your own website (10 min)

There are three ways to connect it. You can combine them.

### 3.1 A sub-domain, e.g. `academy.your-site.com` (recommended)

This gives the academy its own clean address.

- **GitHub Pages:**
  1. In **Settings → Pages → Custom domain**, enter `academy.your-site.com` and save.
  2. At your domain provider, add a DNS record:
     `CNAME  academy  →  YOUR-ORG.github.io`.
  3. Back in Settings → Pages, tick **Enforce HTTPS** once it becomes available.
- **Cloudflare Pages:**
  1. In the project, go to **Custom domains → Set up a domain** and enter
     `academy.your-site.com`.
  2. If the domain is on Cloudflare, the record is added for you. Otherwise add
     `CNAME  academy  →  belong-academy.pages.dev` at your provider.
- **Your existing host:** create the sub-domain in the control panel and upload `dist/`
  into the folder it points to (step 2C).

DNS changes usually take minutes, occasionally up to a few hours.

> Adding a sub-domain record does **not** touch your main website or your email. Only the
> one `academy` record is new.

### 3.2 A link or button on your website

Add a menu item or a button that opens the academy, for example:

```html
<a href="https://academy.your-site.com" class="button">Belong Academy</a>
```

For staff only, a good place is a "Team" or "Staff" page, or a link shared in the team chat.

On WordPress: **Appearance → Menus → Custom Links**, then add the URL and the label.
On Squarespace or Wix: add a **Link** to the navigation.

### 3.3 Inside a page on your website (embed)

This is possible but not recommended. Inside a frame, phones get a smaller video player, and
people cannot add the academy to their home screen. If you still want it:

```html
<iframe src="https://academy.your-site.com" style="width:100%;height:90vh;border:0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
```

### 3.4 Phone home screen

Once it is live, each person can open the link on their phone and use **Share → Add to Home
Screen** (iPhone) or **⋮ → Install app** (Android). It then opens like an app.

---

## Step 4: Point the academy at its new address (2 min)

These settings only change how links look when the academy is shared, for example the
preview card in WhatsApp.

1. `brands/belong/brand.js`: set `domain: 'academy.your-site.com'` (no `https://`, no
   slash).
2. `index.html`, lines 13, 14 and 20: replace `https://belong-academy.pages.dev/` with your
   address.
3. Commit and push. Option C: rebuild and upload.

---

## Step 5: Videos on Vimeo (check once)

The lessons and reels stream from Belong's Vimeo account. For them to play on your domain:

- Each video's privacy must be **Unlisted** or **Public**, not "Private".
- Under each video's **Embed** settings, if **"Where can this be embedded?"** is set to
  **Specific domains**, add your academy domain (e.g. `academy.your-site.com`). **Anywhere**
  also works.
- Optional: under **Embed → Player controls**, switch off the **Share** and **Embed**
  buttons. This keeps people from copying videos out.

---

## Step 6: The "Ask" assistant (optional, 10 min)

The academy has an **Ask** box that answers questions from the lesson transcripts. It uses
a small free Cloudflare Worker with no API key (Cloudflare Workers AI, Llama 3.3 70B).
Out of the box it points at Meridante's copy, which only answers the addresses on its
allow-list. On your own domain, you have two choices:

- **Run your own copy (recommended):** see `extras/ai-gateway/README.md`. It takes a free
  Cloudflare account and one command. Then set `aiGateway: 'https://…your-worker…/'` in
  `brands/belong/brand.js`.
- **Ask Meridante** to add your domain to their allow-list.

If neither is done, the academy still works. Search and the lesson moments still answer;
only the written AI reply is missing.

Error reports: `errorBeacon` in `brand.js` sends technical errors (no personal data) to
Meridante's monitor so problems are seen early. Set it to `null` to switch this off.

---

## Before the team uses it every day

- [ ] **Watch rule.** `watchGate: false` in `brands/belong/brand.js` is a testing setting:
  lessons can be completed without watching. Delete that line so a lesson only counts once
  it has been watched.
- [ ] **Trainer's name** for the "Formador / Trainer" line on certificates. Ask Claude:
  *"Put the trainer name X on the certificates."*
- [ ] **Privacy policy:** `privacy.html` describes no-login mode. Fill in the operator
  details in section 7 (company name, NIPC, address, contact).
- [ ] **Reel 03 · Sustainability:** its text is ready in `brands/belong/content.js`
  (`REELS_AWAITING_VIDEO`). Upload the video to Vimeo and ask Claude to add it.
- [ ] Open the live address on a phone, go through one lesson and one reel.

---

## When something goes wrong

| What you see | Likely cause | Fix |
|---|---|---|
| A blank page | Opened the file directly (`file://…`) instead of through a web address | Use a host, or `python3 -m http.server` locally |
| Videos show "Sorry, because of its privacy settings…" | Vimeo embed domains | Step 5: add your domain in each video's embed settings |
| Old version after an update | The browser's offline copy | Reload twice, or close and reopen the tab. Each release bumps a version number so this clears on its own (see CLAUDE.md, "Releasing") |
| "Ask" gives no written answer | Gateway allow-list | Step 6 |
| 404 on GitHub Pages | Pages source not set to GitHub Actions, or first run still going | Step 2A |
