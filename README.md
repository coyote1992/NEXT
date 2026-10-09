# NEXON Dunakeszi Teniszklub

A speculative redesign of [dunakesziteniszklub.hu](https://dunakesziteniszklub.hu): Next.js (App Router) + TypeScript, Hungarian, dark "space" theme with the dot-space background.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build (all routes are static)
npm run check:dots -- http://localhost:3000/   # screenshots + overlap report for every dot shape
```

## Pages

| Route | What |
|---|---|
| `/` | Hero, ovi-suli spotlight, programmes, courts and booking, history, results, coaches, stars, news, partners, location |
| `/programok` | Every group with schedule, coaches and how to apply; weekly timetable; summer camp |
| `/ovi-suli` | Landing page for the 4–8 year programme with bus transport |
| `/palyak` | Summer/winter courts, booking by phone, 2025/26 winter court fees, map |
| `/edzok` | Head coach Bogyó Tamás and the coaching team |
| `/klub` | History, 2026 results, Champions Bowl, stars, partnership, Business SLAM, webshop |
| `/hirek` | News (links to the articles on the current site) |
| `/kapcsolat` | Booking, club and partnership contacts, hours, map |

## Content

All copy lives in `lib/content.ts` and comes from the club's current site and its news articles (as of October 2026). Nothing is invented: no prices, times, people or results beyond what the club published. Photos are the club's own, resized into `public/img/`.

## Dot-space

The kit is in `kits/dot-space/` (engine, theme, checker, instructions); `.claude/skills/dot-space/` holds its instructions for Claude Code.

- `components/space/config.ts`: the homepage choreography. Racket beside the programmes (right), court beside the courts (left), **1992** (the year on the club's badge) beside the history heading, the big spinning ball behind the results, black hole at the closing call to action.
- `app/space.css`: keeps each section's text out of the column its shape stands in.
- Subpages get the quiet starfield.

The look and motion values are the approved defaults from the kit and are not changed here.
