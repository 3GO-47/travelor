# Travelor

**Live:** https://3go-47.github.io/travelor/

An interactive world-travel planner with Chicago O'Hare (ORD) as home base. Browse premade trip ideas on a live map, see what each place is actually like before you commit, and build your own route stop by stop.

## What's in it

- **344 trip ideas** — 154 destinations, 150 multi-city routes (including 28 loops that return to their start) and 40 auto-paired grand tours
- **261 historic landmarks** ranked unmissable / major / worth a detour, and all **14 Seven Wonders** (New and Ancient)
- **Routes map** — layers for routes, a numbered Top 25 for the current month and filters, the Wonders, landmarks and every destination. Click anything for a card with photos, must-sees, best months, flight time from ORD and nearby landmarks
- **Trip builder** — add cities in your order, set nights (including zero-night day stops), colour individual legs, then optimise the order on demand. Repeat visits to a base city are kept intact. A live readout shows days, travel days, ground miles, unmissables and Wonders covered, and detours worth taking
- **Leg checks** — every leg is classed as drive, train, ferry or flight, using a landmass test plus a hand-checked list of tricky crossings
- **My Trips** — save trips as planned or taken; taken trips mark places as "been" across the app, and saved trips appear on the routes map

## How it's built

A single self-contained `index.html`: D3, TopoJSON and Leaflet from jsDelivr, Esri satellite tiles, and photos fetched from Wikipedia in the browser. Saved trips and settings live in the browser's local storage, so they stay on the device you made them on.

Open `index.html` directly or visit the live link — no build step or server needed.

Flight times, CO₂ and jet-lag figures are model estimates; check airlines and travel advisories before booking.

## Phone layout

On a phone (or any narrow screen) Travelor switches to its own touch-first app: a full-screen map with a draggable bottom sheet (Explore), an infinite-scroll Ideas feed with filters, a Build tab with steppers, day stops, leg colours and the optimiser, and My Trips. A "desktop layout" switch lives under My Trips → Settings.

On the phone you can also:
- **Share a trip as a link.** The whole trip is in the URL, so the person who opens it can save it or load it into Build.
- **Reorder stops by dragging them.**
- **Track your travel in My Trips.** It shows a countdown to your next trip, a map of the countries you've been to, and how many of the 14 wonders you've seen.
- **Tap 🎲 Surprise me** for a random pick that fits this month.
- **Add Travelor to your home screen.** It then opens like an app.
