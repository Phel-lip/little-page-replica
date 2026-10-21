<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Site images are real files in `src/assets/` imported directly (no `.asset.json` CDN pointers, no external image URLs) — the code is exported and deployed on Vercel, where Lovable's asset CDN path does not exist.
- Salon data, services and the WhatsApp message builder live in `src/lib/salon.ts` — single source of truth shared by the services grid, booking modal and tests.
