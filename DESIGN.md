# Design System: L'Oro d'Italia — Landing Page
**Project ID:** 13701180030907165932

## 1. Visual Theme & Atmosphere

The interface embodies **"The Digital Maître d'"** — an experience that feels invisible yet omnipresent. The philosophy rejects template restaurant aesthetics in favour of **Intentional Asymmetry** and **Editorial Layering**: photography bleeds off containers, floating typography overlaps images, and depth is felt through tonal shifts rather than artificial shadows. The mood is simultaneously warm and austere — a Parisian limestone palette enriched by Italian viticulture, like aged cream paper lit by candlelight.

## 2. Color Palette & Roles

| Descriptive Name | Hex | Functional Role |
|---|---|---|
| **Antique Gold** | `#775a19` | Primary actions, CTAs, active nav links, price indicators |
| **Liquid Gold** | `#c5a059` | Primary container — hover states, badge backgrounds, accent fills |
| **Dawn Gold** | `#ffdea5` | Primary fixed — subtle warm highlights and tint layers |
| **Misted Ivory** | `#fcf9f3` | Surface — primary page background, navbar glassmorphism base |
| **Pearl Sheet** | `#f6f3ed` | Surface container low — secondary section backgrounds (e.g. "Our Story") |
| **Parchment** | `#f0eee8` | Surface container — card backgrounds, reservation modules |
| **Warm Linen** | `#ebe8e2` | Surface container high — elevated interactive containers |
| **Charcoal Script** | `#1c1c18` | On-surface — primary text; used instead of pure black for organic depth |
| **Stone Taupe** | `#7f7667` | Outline — body copy, captions, secondary descriptors |
| **Bleached Sage** | `#d1c5b4` | Outline variant — ghost borders at ≤15% opacity; never solid lines |
| **Sage Herb** | `#57624b` | Secondary — seasonal highlights, "Available" indicators, garnish accents |
| **Cellar Grey** | `#5f5e5e` | Tertiary — neutral supporting tones |

## 3. Typography Rules

**Headline (Noto Serif):** The "statement piece." Used for all `<h1>`–`<h3>`, display copy, chef quotes, and section headers. Rendered light-weight (`font-light`) to preserve elegance — never used bold except for occasional editorial emphasis. Italic is used sparingly but powerfully for pull-quotes and dish names.

**Body & Labels (Manrope):** Provides clean, geometric Swiss-inspired legibility in contrast to the expressive serif. Labels are always all-caps with `tracking-[0.2em]` to `tracking-[0.4em]`, creating an editorial "caption" feel when paired below a Noto Serif heading. Body text uses `font-light` at 1.6–1.8 leading.

**Typographic Pair:** Always pair `font-headline` in Noto Serif with a `font-label` in Manrope (all-caps, generous letter-spacing) to evoke a fine-dining menu or magazine spread.

## 4. Component Stylings

- **Buttons (Primary):** "Gold Leaf" treatment — `bg-primary` (#775a19), `text-on-primary` (white), `rounded-sm` (0.125rem) for a sharp, tailored silhouette. Scale animation on hover (`scale-95 → scale-100`). Never pill-shaped.
- **Buttons (Secondary/Outline):** Ghost border — `border border-outline-variant/30`, transparent background. On hover transitions to `bg-surface-container-high`. Text-only tertiary variant uses underline expansion on hover.
- **Cards / Containers:** Zero dividers; separation via spacing (`space-y-16`) and background tier shifts. `surface-container-lowest` (#fff) on a `surface-container-low` (#f6f3ed) section provides sufficient visual "lift" without shadow.
- **Editorial Shadow:** Reserved for floating components only — `box-shadow: 0 20px 50px rgba(28, 28, 24, 0.05)`. The colour is a tint of `on-surface`, not pure black.
- **Ingredient Overlay:** Signature component — `bg-secondary-container/40` chip at 40% opacity, `backdrop-blur-md`, with `on-secondary-container` text. Used to label seasonal ingredients on top of photography.
- **Inputs:** Minimalist underline style. `border-b border-outline-variant` inactive; on focus the underline transforms to `border-primary`. No border box. Labels float above with `text-[10px] uppercase tracking-[0.2em]`.
- **Navigation (Glassmorphism):** `bg-surface/80`, `backdrop-blur-xl`. The nav blends with food imagery bleeding through from the hero.

## 5. Layout Principles

**The No-Line Rule:** Explicit 1px solid borders for section separation are prohibited. Use background tier shifts (`surface → surface-container-low`) or negative space instead. The only permitted borders are `border-outline-variant/15` (15% opacity phantom lines) for accessibility fallbacks.

**Extreme White Space:** Sections breathe with `py-32` (8rem) vertical padding. Inner spacing scales use `mb-24`, `gap-16`, `space-y-16` to let content feel like courses at a fine dining table — unhurried, purposeful.

**Intentional Asymmetry:** Photography should break containers (overlap edges), and ingredient overlay chips should position at `-bottom-8 -right-8` to extend beyond parent bounds. Grid systems prefer `grid-cols-12` with irregular spans (5/7, 7/5) over symmetric 2-column layouts.

**Surface Nesting (Physical Environment Metaphor):** Treat the page as layered materials. `surface` is the base, `surface-container-low` creates a subtle recess, `surface-container-highest` anchors reservation modules and cards.
