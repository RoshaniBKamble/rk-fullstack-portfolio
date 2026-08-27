# PRD — Roshani Kamble: Digital Developer Workspace (Website 01)

## Original Problem Statement
Build a complete, production-quality personal developer portfolio for **Roshani Kamble** — a premium, dark, futuristic, interactive "digital developer workspace" (not a template/resume). Identity: frontend-focused developer → full-stack engineering, Blockchain/Web3 specialization, AI/ML application experience. Sections: boot sequence, hero, identity, engineering stack, project lab, experience, achievements, certificate vault, build log, career target, connect. Strict truth policy: no fabricated metrics, links, repos, demos, or creator content; excluded projects (SoulSync, DeFi Early Warning System, Universal Web3 Identity Layer on Avalanche, SaathiAI) must never appear. Website 02 (Blockchain portfolio) is out of scope.

## Architecture
- Frontend-only React (CRA + craco) + Tailwind CSS; no backend required (backend template left untouched).
- 3D: React Three Fiber + drei (hero scene: particle field, wireframe icosahedron core, orbiters, ring, mouse parallax rig). Mobile + reduced-motion → CSS gradient fallback.
- Motion: framer-motion (masked line reveals, scroll reveals, modals) + lenis smooth scrolling.
- Sound: Web Audio API synthesized blips (boot/open/close/tick), OFF by default, toggle in nav. No audio assets.
- Content centralized in `src/data/portfolio.js` (profile, links, stack, projects, archive, experience, education, achievements, certificates, build log, career target).
- Components: BootSequence, CustomCursor, Navbar (scroll-spy + mobile menu + sound toggle), Hero, HeroScene, Marquee, Section (numbered chapters), Identity, Stack, ProjectLab, ProjectWindow, Journey, Achievements, Certificates, BuildLog, Connect (footer + Rejected Concepts easter egg).

## User Personas
- Recruiters/hiring managers (fast identity grasp, projects, contact, resume).
- Engineers/peers (architecture, stack, decisions depth).
- Roshani herself (data-driven updates via portfolio.js).

## Core Requirements (static)
- Truth/authenticity policy; no fake links/metrics/screenshots; status system COMPLETED / IN DEVELOPMENT / PLANNED.
- Real links only: GitHub github.com/RoshaniBKamble, LinkedIn roshani-kamble-3a8b7b259, email roshanikamble2002@gmail.com.
- Resume button architecture ready, no fake URL (toast: PDF linking soon).
- Responsive (mobile simplified), accessible (keyboard, aria, focus rings, reduced motion), performant.

## Implemented (2026-08-27)
- Boot sequence with SKIP, progress bar, terminal output.
- Kinetic masked hero reveal + WebGL 3D workspace (desktop) + mobile fallback.
- Persistent glass nav with scroll-spy, mobile menu, sound toggle.
- Identity, Engineering Stack (6 categories, tabbed), Project Lab (bento grid, 5 featured + 13-project archive), OS-style project windows with full detail structure.
- Experience (MIT-WPU trainee), Education (M.Sc. + BBA CGPA 8.26), Career Target (Bengaluru).
- Achievement (E.D.G.E. winner), Certificate Vault (3 certs with modals), Build Log timeline (5 honest entries).
- Connect channels + Rejected Concepts easter egg (honest empty archive).
- SEO meta, OG tags, RK favicon, custom cursor (desktop), editorial marquee, film grain.
- Verified: `yarn build` passes; boot/skip, project open/close (click + Escape), certificate modal, mobile hero/menu/nav all screenshot-tested; no console errors.

## Backlog
- P0: Attach real resume PDF (button architecture ready — set `socialLinks.resume` in data/portfolio.js and wire button).
- P1: Real project repo links per project when published on GitHub; certificate file viewers when files available.
- P1: Custom domain (e.g. roshanikamble.dev) at deployment.
- P2: Rejected Concepts entries as real concepts get cut; more build-log entries; project visuals/screenshots where genuine.
- P2: Website 02 — dedicated Blockchain/Web3 portfolio (explicitly out of scope now).

## Next Tasks
1. Wire real resume PDF.
2. Add per-project GitHub repo links as repos go public.
3. Deploy to Vercel with platform URL; connect to LinkedIn/resume.
