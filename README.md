# Reno's House of Fades: Website

A static site for Reno's House of Fades barbershop (180 W Peckham Ln, Ste 1130, Reno NV). Built by Nexora Digital.

Plain HTML/CSS/JS with no build step, deployed on Vercel (Framework preset: **Other**, no build command, output dir = root).

## Edit content
Everything editable lives in **`js/data.js`**:
- `barbers`: name, role, phone, booking link (currently each barber's own Square/Setmore/Booksy page)
- `hours`, `services`, `ratings`
- `reviews`: paste real Yelp/Google reviews here. The review slider appears automatically.

## Photos
- Barber headshots → `assets/barbers/<slug>.jpg` (see the README in that folder)
- Site photos → `assets/img/`, videos → `assets/video/`

## Roadmap
- In-house booking tab to replace per-barber links
- Real review feed
