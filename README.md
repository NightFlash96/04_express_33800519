# Express Page — Maksymilian Zarzycki

A small Express.js app that serves a personal page with a couple of routes and a static image. It uses Express 5, serves static assets from the `public/` folder, and returns a mix of HTML files and simple inline HTML responses.

## Features
- Home page with a profile and full-width image
- Simple About and Contact routes
- A Date page that shows a live, updating timestamp
- Static file hosting from `public/`

## Project structure
```
index.js                # App entrypoint (Express server on port 8000)
routes/main.js          # Route definitions
routes/home.html        # Home page served at /
routes/date.html        # Date page with live clock
public/IMG-....jpg      # Image asset served statically
links.txt               # Reference link(s)
package.json            # Project manifest (Express dependency)
```

## Prerequisites
- Node.js (LTS recommended; Node 18+ works well)

## Setup
Install dependencies (Express is listed in `package.json`):

```powershell
npm install
```

## Run locally
Start the server:

```powershell
node index.js
```

Then open your browser at:

```
http://localhost:8000
```

You should see the home page for Maksymilian Zarzycki.

## Routes
- `GET /` → serves `routes/home.html`
- `GET /about` → returns a simple inline HTML heading
- `GET /contact` → returns a simple inline HTML heading
- `GET /date` → serves `routes/date.html` with a live, updating date/time
- Static files: anything under `public/` is available at the site root, e.g. `/IMG-20250329-WA0046.jpg`

## Configuration
- Port: The app listens on port `8000` by default. To change it, edit the `port` constant in `index.js`.
- Static assets: Files in `public/` are served at `/`. Refer to them with absolute paths (e.g., `/IMG-...jpg`) from your HTML.

## Troubleshooting
- Address in use: If port 8000 is busy, change the `port` in `index.js` or stop the conflicting process.
- Dependencies missing: If `node index.js` fails with "Cannot find module 'express'", run `npm install` in the project root.
- Image not showing: Ensure the file lives in `public/` and that your HTML uses a path resolvable by the browser (e.g., `/IMG-...jpg`).

## Notes
- This project is a refactor of a previous plain Node HTTP server into Express. The previous README is preserved as `README(old).md` for reference.
- `package.json` currently has no `start` script. You can start with `node index.js` or add a script later if you prefer.

## Author / Links
- Author: Maksymilian Zarzycki
- Home (from `links.txt`): http://www.doc.gold.ac.uk/usr/149/
