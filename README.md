# e-f-p // terminal portfolio

A black, TUI-style portfolio: monospace ASCII banner, CRT scanlines, a boot-log
intro, an exhibition-catalogue project index, and terminal-window project cards.
Built with Next.js 16 (App Router) + Tailwind v4 + IBM Plex Mono.

## Run it

```bash
npm run dev     # dev server (http://localhost:3000)
npm run build   # production build
npm run start   # serve the build
```

## Make it yours

Everything you see comes from **one file**:

- `app/lib/content.ts` — your name, role, links, about text, and the `projects`
  array (id, title, tagline, year, role, stack, description, image, links).

To add a project: append an object to the `projects` array with a unique
two-digit `id`. To add its image, drop the file in `public/projects/` and point
`image` at it, e.g. `image: "/projects/my-thing.png"`.

### Where things live

| Piece                   | File                               |
| ----------------------- | ---------------------------------- |
| Content / projects      | `app/lib/content.ts`               |
| ASCII "EFP" banner      | `app/components/Banner.tsx`        |
| Boot-log typewriter     | `app/components/TerminalIntro.tsx` |
| Project index (leaders) | `app/components/ProjectIndex.tsx`  |
| Project cards           | `app/components/ProjectEntry.tsx`  |
| CRT scanline overlay    | `app/components/CRT.tsx`           |
| Theme / colors / CRT    | `app/globals.css`                  |

### Tweaks

- **Colors** (phosphor green, amber, dims): the `:root` block in
  `app/globals.css`.
- **Banner text**: replace the `MONOGRAM` art in `app/components/Banner.tsx`
  (use a true monospace ASCII font so block glyphs stay aligned).
- **Turn off scanlines/flicker**: remove `<CRT />` from `app/layout.tsx`.
