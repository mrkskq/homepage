# Homepage

![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-e10600?logo=github&logoColor=white)

Personal portfolio website, built with an F1-inspired design: a race-start lights intro, a carbon-fiber style background, and a projects page styled like a race timing tower.

**Live site:** https://mrkskq.github.io/homepage/

## Tech stack

| Area              | Tools                                                |
| ----------------- | ---------------------------------------------------- |
| Framework         | Vue 3 (Composition API, `<script setup>`)            |
| Language          | TypeScript                                           |
| Routing           | Vue Router                                           |
| Styling           | Tailwind CSS v4                                      |
| Build tool        | Vite                                                 |
| Fonts             | Fontsource (Titillium Web, Orbitron)                 |
| Icons             | unplugin-icons (Material Design Icons, Simple Icons) |
| Code quality      | ESLint, Prettier                                     |
| Hosting and CI/CD | GitHub Pages, GitHub Actions                         |

## Getting started

Requirements: Node.js 20 or newer and npm.

```bash
git clone https://github.com/mrkskq/homepage.git
cd homepage
npm install
npm run dev
```

The dev server runs at `http://localhost:5173/homepage/`. The `/homepage/` part comes from the `base` option in `vite.config.ts`.

## Deployment

The site is deployed automatically to GitHub Pages on every push to `master` through `.github/workflows/deploy.yml`.
