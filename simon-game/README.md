# Simon Says Game

A browser-based Simon Says memory game with a dark arcade aesthetic — scanlines, per-quadrant glow effects, and smooth flash animations.

**Live demo → [Play here](https://adrish-mage.github.io/web-dev-journey/simon-game/)**

---

## Preview

> Dark arcade UI · scanline overlay · color glow per button · game over flash

---

## How to play

1. Press any key to start
2. Watch which button flashes — memorize the sequence
3. Click the buttons in the same order
4. Each level adds one more step
5. Wrong button = game over — your score is shown

---

## Features

- Dark arcade UI with CRT scanline overlay
- Unique corner rounding per quadrant (top-left, top-right, bottom-left, bottom-right)
- Per-color glow on flash (red, yellow, green, purple)
- Instant flash on · slow glow fade off
- Game over red screen with score + auto reset
- No dependencies — pure HTML, CSS, JS

---

## Run locally

No setup needed. Clone and open `index.html` in any browser:

```bash
git clone https://github.com/adrish-mage/web-dev-journey.git
cd web-dev-journey/simon-game
open index.html
```

---

## Tech

| File | Role |
|------|------|
| `index.html` | Game structure |
| `style.css` | Dark arcade styling, glow effects, animations |
| `app.js` | Game logic — sequence generation, input checking, level progression |

---

*Part of [web-dev-journey](https://github.com/adrish-mage/web-dev-journey) — a full-stack JS learning repo.*
