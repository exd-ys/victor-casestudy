<!-- SEED — re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Viictor
description: The competitive tennis platform for players who mean it.
---

# Design System: Viictor

## 1. Overview

**Creative North Star: "The Challenger's Clarity"**

Viictor is built for players who take their game seriously — not pros, but people who track their ranking, check their draw between sets, and feel genuine pride when they win. The visual system reflects that: clean, sharp, and premium. Not the neon-on-black sports app template everyone expects. Not a corporate scheduling tool. A platform that feels like it was designed for serious athletes, not downloaded from a template marketplace.

The primary surface is light — bright, readable in full Australian sun, never heavy. Green is deployed with precision: it marks action, signals status, and rewards progress. Its restraint is the point. When green appears, it means something. The rest of the UI earns that moment through neutral confidence — off-white surfaces, strong dark type, unhurried spacing.

This system explicitly rejects four things: the generic dark-background + neon-green sports cliché (which the current app embodies, and which we are deliberately escaping); the lifeless grey of a corporate enterprise tool; the badge-and-XP noise of over-gamification; and the cluttered information density that makes players hunt for what they need.

**Key Characteristics:**
- Light primary surfaces, always readable in bright outdoor conditions
- Green as a precision instrument — active states, primary actions, earned moments only
- Single geometric sans-serif for everything — no mixed font personalities
- Tight, purposeful spacing with clear visual hierarchy
- Motion that gives feedback, never performs for its own sake
- One coherent visual system across every screen (no split light/dark personality)

## 2. Colors: The Challenger's Palette

A restrained palette where the surface is light and neutral, and green earns every appearance.

### Primary
- **Viictor Green** (`[to be resolved — target: oklch(52% 0.17 142)]`): The brand accent. Used on primary CTAs, active navigation states, key status indicators, and earned moments (match accepted, tournament win). Never used decoratively. Never as a background for large regions. Appears on ≤10% of any given screen.

### Neutral
- **Court White** (`[to be resolved — off-white with faint green tint, chroma ~0.005]`): Primary background surface. Slightly warmer than pure white — never harsh, always clean.
- **Surface Light** (`[to be resolved — 1–2 steps darker than Court White]`): Secondary surfaces, cards, input backgrounds. Separates content regions without borders.
- **Ink** (`[to be resolved — very dark, warm-tinted, not pure black]`): Primary text. Approximately oklch(15% 0.008 142). Tinted toward the brand hue.
- **Graphite** (`[to be resolved — mid-dark, for secondary text and icons]`): Labels, secondary copy, placeholder text.
- **Divider** (`[to be resolved — very light, barely-there border]`): List separators, card outlines when needed.

### Semantic
- **Match Green** (same as Viictor Green): Confirmed, accepted, active status.
- **Alert Amber** (`[to be resolved]`): Warnings, pending actions, invite states.
- **Error Red** (`[to be resolved]`): Errors only. Never decorative.

### Named Rules
**The Rarity Rule.** Green appears on ≤10% of any screen. Its scarcity is what makes it feel premium. The moment it covers more than that, it becomes the wallpaper — and we're back to the template we escaped.

**The No-Split Rule.** There is no "dark mode" and "light mode" in this app. One system. Every screen belongs to it. The previous app's split identity (half screens dark, half light) is a direct failure this rule prevents.

## 3. Typography

**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Display Font:** Plus Jakarta Sans (same family — weight and size do the work)
**Label/Mono:** Plus Jakarta Sans (same — the geometric structure handles all roles)

**Character:** A single geometric sans that's warm enough to feel social, structured enough to feel precise. Its slightly rounded apertures avoid the clinical coldness of pure geometry. At heavy weights it reads bold and athletic. At regular weight it's clean and readable. No font switching — unity is the identity.

**[Font pairing to be confirmed at implementation — Plus Jakarta Sans recommended. Fallbacks: DM Sans, Outfit.]**

### Hierarchy
- **Display** (700–800 weight, 28–32px, line-height 1.1): Tournament names, key stats, major headings. Used rarely — one per screen maximum.
- **Headline** (600–700, 20–24px, line-height 1.2): Screen titles, section headers, player names in context.
- **Title** (600, 16–18px, line-height 1.3): Card headers, list group labels, form section titles.
- **Body** (400–500, 15–16px, line-height 1.5): All readable content. Max line length 65ch.
- **Label** (500–600, 11–13px, letter-spacing 0.02–0.04em, uppercase): Tags, badges, status chips, metadata. Uppercase only at label scale — never body text.

### Named Rules
**The Weight Contrast Rule.** Hierarchy is built with weight contrast (minimum 200-unit difference between adjacent levels) and size scale (minimum 1.25x ratio between steps). Never use color alone to create hierarchy — color is reserved for the green accent and semantic states.

**The Single Family Rule.** One typeface does everything. Mixed font personalities (display serif + body sans, or headline condensed + body regular) are prohibited. The geometric sans carries the full range.

## 4. Elevation

This system is flat by default. Depth is conveyed through tonal surface layering — background stepping from Court White to Surface Light — rather than shadows. Shadows appear only as state responses: hover lift on interactive cards, modal backdrop.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 2px 8px oklch(15% 0.01 142 / 0.08)`): Hover state on tappable cards. Subtle, directional.
- **Float** (`box-shadow: 0 8px 32px oklch(15% 0.01 142 / 0.12)`): Modals, sheets, bottom drawers. More presence, not decorative.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Elevation is a state response, not decoration. If something has a shadow at rest, that shadow is doing nothing — remove it.

## 5. Components

*[Components to be fully specified at implementation. Core patterns seeded below.]*

### Buttons
- **Shape:** Gently rounded (8px radius — curved without being pill-shaped)
- **Primary:** Viictor Green fill, white text, 500–600 weight, 16px/48px padding. The green is precious — primary button is the main place it lives.
- **Secondary/Ghost:** Dark ink border, transparent fill, ink text. No green — preserves the accent's scarcity.
- **Destructive:** Alert Red fill, white text. Same shape as primary.
- **Hover:** 4% darker fill, 2px upward translate, 150ms ease-out.
- **Disabled:** 40% opacity, no transform.

### Chips / Tags
- **Tier badges:** Compact, rounded (4px), label-weight text. Color-coded by tier level (to be defined at implementation). Not green — green is reserved for actions and status.
- **Status chips:** "Open", "In Progress", "Closed" — Surface Light background, Graphite text, Ink border. Green only for active/accepted states.

### Cards / Containers
- **Corner radius:** 12px (friendly, modern — not sharp, not full-pill)
- **Background:** Surface Light on Court White canvas
- **Shadow:** None at rest. Lift on hover/press.
- **Border:** Divider stroke (0.5px) used sparingly — only when content needs separation, not as decoration
- **Internal padding:** 16px standard, 20px for prominent cards

### Inputs / Fields
- **Style:** Surface Light background, Divider border (1px, 6px radius). Underline-only style is prohibited — full borders for legibility outdoors.
- **Focus:** Viictor Green border (2px), no glow. Clean and precise.
- **Error:** Error Red border, error message at 13px below the field.
- **Placeholder:** Graphite text, 400 weight.

### Navigation (Side Drawer)
- **Background:** Ink (dark) — the one dark surface in a light system. Creates a clear modal layer.
- **Active item:** Viictor Green fill (full-width), white text. The only green background allowed.
- **Inactive items:** White text, 70% opacity.
- **Typography:** Title weight (600), 16px.

### Leaderboard Row
- **Rank number:** Display weight (700), large (24px). Number carries the hierarchy — player name is headline weight at 18px.
- **Points:** Right-aligned, tabular numerals, title weight.
- **Separation:** Divider lines only — no cards, no alternating row colors.

## 6. Do's and Don'ts

### Do:
- **Do** use Viictor Green only for primary actions, active states, and earned moments. Its rarity is its value.
- **Do** keep every screen light — Court White primary surface, Surface Light for secondary regions. The app is used outdoors.
- **Do** use weight contrast (minimum 200 units) to build hierarchy before reaching for color or size.
- **Do** ensure all green-on-light combinations pass WCAG AA contrast (4.5:1 minimum). Test at implementation — greens commonly fail.
- **Do** use 44x44px minimum touch targets on all interactive elements. Players may have sweaty hands on-court.
- **Do** keep the drawer navigation dark (Ink background) — it's the one sanctioned dark surface, and it earns its separation clearly.
- **Do** write status and tier labels at uppercase label scale (11–13px, 500 weight) — never uppercase body text.

### Don't:
- **Don't** use dark backgrounds as the primary app surface. The generic dark-background + neon-green sports template is the exact aesthetic this redesign escapes. Darkness belongs to the navigation drawer only.
- **Don't** use green as a fill on large regions, hero banners, or section backgrounds. The moment it covers more than 10% of a screen, it becomes the old Viictor.
- **Don't** add badge stacks, XP bars, confetti, or reward-loop animations. Viictor's prizes are real money — the gamified overlay cheapens them.
- **Don't** mix typefaces. No condensed display for headings while body runs in a separate sans. Plus Jakarta Sans handles every role — weight and size do the work.
- **Don't** build screens that look different from each other in register. No half-dark, half-light split. Every screen belongs to the same visual language.
- **Don't** use `border-left` as a colored accent stripe on cards or list items. If a row needs differentiation, use background tint, leading status chips, or nothing.
- **Don't** render every data list as a card grid. Tournament lists, player lists, leaderboards — these are lists. Cards are for content that needs distinct containment.
- **Don't** use gradient text or background-clip text treatments. The logo has a gradient wordmark — that's the brand's decision. The UI system does not repeat it.
- **Don't** design cluttered screens. If a screen needs more than one primary action visible at once, reconsider the information architecture.
