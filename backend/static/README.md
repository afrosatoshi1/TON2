# TON Pay Frontend (Next.js App Router)
This is an Opay-style frontend (blue theme) built with Next.js (App Router) and TailwindCSS.
It expects an API backend at `NEXT_PUBLIC_API_BASE` environment variable.

How to run locally:
1. npm install
2. npm run dev

Build & export (for static hosting / Flask static folder):
1. npm run build
2. npm run export
3. Copy contents of `out/` to your backend `static/` folder.
