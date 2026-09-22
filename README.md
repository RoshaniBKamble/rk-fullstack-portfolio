# Roshani Kamble — Digital Developer Workspace

Personal developer portfolio of **Roshani Kamble** — a frontend-focused developer progressing toward full-stack engineering, with Blockchain/Web3 specialization and AI/ML application experience.

The site is built as an interactive "digital developer workspace": a terminal-style boot sequence, a WebGL 3D hero environment, OS-style project windows, and a fully data-driven content model.

## Highlights

- **Boot sequence** — skippable terminal-style initialization with progress
- **3D hero environment** — React Three Fiber scene (particle field, wireframe core, orbiters, mouse parallax) with a lightweight animated fallback on mobile and for reduced-motion users
- **Project Lab** — projects open as OS-style windows (problem, solution, features, architecture, tech, engineering decisions, honest status badges: COMPLETED / IN DEVELOPMENT / PLANNED)
- **Engineering Stack** — tabbed, category-organized technology explorer
- **Experience, Education, Achievements, Certificate Vault, Build Log** — all driven from a single data file
- **Smooth scrolling** (Lenis), scroll-reveal animations (Framer Motion), custom cursor (desktop), editorial marquee
- **Subtle synthesized UI sounds** (Web Audio API) — OFF by default, with a nav toggle
- **Resume** — real PDF served from `public/`, opens in a new tab
- **Accessible** — keyboard-navigable windows, visible focus states, aria labels, `prefers-reduced-motion` support
- **Responsive** — desktop workspace experience, simplified performant mobile layout

## Tech Stack

React 19 · Tailwind CSS · Three.js / React Three Fiber / drei · Framer Motion · Lenis · Web Audio API · lucide-react

## Getting Started

```bash
cd frontend
yarn install
yarn start        # dev server on http://localhost:3000
yarn build        # production build in frontend/build
```

No backend or database is required — the portfolio is a static frontend application.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.svg
│   └── roshani-kamble-resume.pdf      # real resume (replace file to update)
└── src/
    ├── data/portfolio.js              # ALL content lives here — edit to update the site
    ├── components/                    # BootSequence, Navbar, Hero, HeroScene, ProjectLab,
    │                                  # ProjectWindow, Stack, Journey, Achievements,
    │                                  # Certificates, BuildLog, Connect, ...
    ├── audio/soundEngine.js           # synthesized UI sounds (no audio assets)
    ├── hooks/useMedia.js              # mobile / reduced-motion / pointer detection
    └── utils/scroll.js                # Lenis-aware section scrolling
```

## Updating Content

All personal content (profile, projects, skills, experience, certificates, build log, links) is centralized in **`frontend/src/data/portfolio.js`** — no component edits needed. To update the resume, replace `frontend/public/roshani-kamble-resume.pdf`.

## Links

- GitHub: https://github.com/RoshaniBKamble
- LinkedIn: https://www.linkedin.com/in/roshani-kamble-3a8b7b259
- Email: roshanikamble2002@gmail.com
