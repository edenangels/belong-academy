# Belong Academy

The learning academy for the Belong and Craveiral team: short filmed lessons, a path for each
department, two quick questions after every lesson, ten reels on Belong's values, course
certificates and a yearly record of training hours. English and European Portuguese.

**No login, no database, no server.** It is a folder of static files. People open the link,
type their name, choose their department and start. Progress is kept in each person's browser.

## Start here

| You want to… | Read |
|---|---|
| Put it on your GitHub, host it, connect it to your website | [docs/SETUP.md](docs/SETUP.md) |
| Hand it to Claude Code to set up or change | [CLAUDE.md](CLAUDE.md). Open Claude Code in this folder and say *"Follow docs/SETUP.md and set this up for us"* |
| Add accounts and a team view later | [docs/ACCOUNTS-LATER.md](docs/ACCOUNTS-LATER.md) |
| Run your own "Ask" assistant | [extras/ai-gateway/README.md](extras/ai-gateway/README.md) |

## Try it in one minute

```bash
python3 -m http.server 8080      # then open http://localhost:8080
```

## Build for any web host

```bash
bash scripts/build.sh            # writes dist/: upload its contents
```

## Inside

- 3 courses, 9 modules, 20 lessons (about 2 hours of video, streamed from Vimeo)
- 2 questions per lesson, EN and PT; a 70 % pass mark per course for the certificate
- 10 vertical reels
- 84 automated tests: `node test/run.mjs`

Built by Meridante for Belong · Craveiral, Odemira, 2026.
