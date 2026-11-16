# Cinematic Developer Portfolio

React + TypeScript + Tailwind CSS + Framer Motion + Vite.

## Awashya requirements

| Thing | Version | Check karanna |
| --- | --- | --- |
| Node.js | 18 or ekata wadi (LTS hodai) | `node -v` |
| npm | Node ekka enawa | `npm -v` |
| Git | Push / deploy karanna | `git --version` |
| Code editor | VS Code | - |
| Internet | Install karanna saha Google Fonts load wenna | - |

Node nathnam https://nodejs.org eken LTS version eka install karanna.

## Run karana widiya

```bash
cd cinematic-portfolio
npm install
npm run dev
```

Terminal eke enna link eka (usually http://localhost:5173) browser eke open karanna.

## Oyage details wenas karanna

Okkoma text ekama file ekak athule: `src/data/portfolio.ts`

1. `profile` ekata oyage email, GitHub, LinkedIn links damanna (dan placeholder thiyenne).
2. Photo ekak oney nam `public/` folder ekata damala `photo: '/me.jpg'` kiyala danna.
3. `about`, `stats`, `skillGroups`, `experience`, `projects` wenas karanna.
4. Experience eke dates saha bullet points oyage record ekata hariyatama match karanna.
5. Project ekakata code link damanna `repo: 'https://github.com/...'` kiyala. Live demo thiyenawanam `live: '...'`.

Colours wenas karanna: `tailwind.config.js` eke `colors`.

## Build saha deploy

```bash
npm run build
```

`dist/` folder eka hadenawa. Free hosting walata:

- Vercel: GitHub repo eka import karanna. Build command `npm run build`, output `dist`.
- Netlify: same settings.
- GitHub Pages: `vite.config.ts` eke `base: '/repo-name/'` damala `dist` eka publish karanna.

## GitHub ekata push

```bash
git init
git add .
git commit -m "Add cinematic developer portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

## Folder structure

```
src/
  data/portfolio.ts      okkoma content
  lib/motion.ts          shared easing + intro settings
  components/
    IntroCurtain.tsx     3-2-1 countdown (session ekakata ekak witharai)
    Hero.tsx             title sequence, scroll-driven zoom
    About.tsx            viewfinder frame + counters
    Skills.tsx           credits-style list
    Experience.tsx       film-strip timeline
    Projects.tsx         filterable poster cards
    Contact.tsx          form (email app eka open wenawa)
```

Reduced motion on karapu visitors la ta animations automatically kamma wenawa.
