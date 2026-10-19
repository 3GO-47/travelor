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
- **Wishlist.** Tap ♥ on any place, landmark or route. Saved items show on the map and in My Trips, and "Plan a trip from your wishlist" turns a group of them into a trip.
- **Trip dates in Build.** Set a start date to get real dates for each day, the weather at each stop, and a 12-month strip of the best months for that exact route.
- **Rough budget.** Choose Shoestring, Comfort or Splurge and the number of people, and see estimates for flights from O'Hare, getting around, places to stay, and food and sights.
- **Works offline.** Once you've opened Travelor from the website, it still opens with no signal, along with your trips and any maps you've already viewed.
- **Postcards.** 🖼 Postcard draws the trip as a 1080×1350 image — route map, dates and totals — ready to share or save.
- **Add to calendar.** A dated trip exports as a calendar file, with one event for the whole trip and one for each stop.
- **Faster on phones.** Startup takes about a third less time. The heaviest map job runs in the background.

## Coverage

- **About 500 destinations**, with a write-up for every US state capital and every country's capital. Capitals under a US "Do Not Travel" advisory are kept for reference: they're searchable and addable, but never ranked or suggested.
- **About 405 multi-stop routes**, including 11 road trips from Chicago such as Route 66, the Lake Michigan and Lake Superior circles, and the Blues Highway.
- **About 520 landmarks** worldwide.
- **Chicago as a place.** You can add it as a stop to start and end road trips, and it has its own page.

## Plans: branching trips

Any stop in a trip can branch into alternatives. Tap **⑂ branch** on a stop (on desktop, the ⑂ button) and add a different next leg. That becomes Plan B, C and so on.
- Stops shared with other plans keep plain numbers, and a plan's own stops carry its letter (4b, 5b).
- Other plans show as dashed lines on the map; tap one to switch to it.
- Change a shared stop, such as its nights, and every plan updates.
- **Compare plans** shows days, miles, budget and best months side by side.
- **Make main** promotes a plan, and **Drop** removes it.
- Saved trips and shared links keep all their plans.

## Desktop layout

- **Home:** this month's #1 pick in a large photo hero, with a month switcher.
  - "Best right now" photo cards, routes worth the flight, and a world map of the month.
  - Road trips from Chicago and places within a day's drive.
  - The 14 wonders, your trips, wishlist and current build.
- **Filter column:**
  - Collapsible sections that summarise what's selected.
  - A continent bar you can click to filter.
  - A 12-month chart of how many ideas are in their prime each month.
  - Counts on the continent chips.
- **Results column:** a compact list with photo thumbnails and small vibe bars, which you can switch back to big cards.
