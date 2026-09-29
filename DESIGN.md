---
name: "OM Enterprises"
description: "A precise, locally grounded property-advisory system built as an Ulwe window grid."
colors:
  canvas: "#f2f4f3"
  surface: "#e7eaec"
  surface-strong: "#d9dee2"
  ink: "#15191f"
  ink-muted: "#59626e"
  divider: "#c2c8cf"
  crimson: "#d32f2f"
  crimson-hover: "#b71c1c"
  crimson-ink: "#ffffff"
  canvas-dark: "#0c1015"
  surface-dark: "#141922"
  surface-strong-dark: "#1d232e"
  ink-dark: "#f0f4f8"
  ink-muted-dark: "#8a96a4"
  divider-dark: "#262e3b"
  crimson-dark: "#e53935"
  crimson-hover-dark: "#ef5350"
  crimson-ink-dark: "#ffffff"
typography:
  display:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 4vw, 4.5rem)"
    fontWeight: 720
    lineHeight: 0.92
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "clamp(2.45rem, 6vw, 5.8rem)"
    fontWeight: 660
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3vw, 3.1rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.28rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, Noto Sans Devanagari, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 680
    lineHeight: 1.2
    letterSpacing: "normal"
rounded:
  architectural: "0px"
  control: "8px"
  glass-shell: "14px"
spacing:
  hairline: "1px"
  xs: "0.65rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  page: "clamp(1rem, 3vw, 3rem)"
  section: "clamp(6.5rem, 12vw, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.crimson-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.94rem 1.45rem"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.crimson-hover}"
    textColor: "{colors.crimson-ink}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "44px"
  nav-action:
    backgroundColor: "{colors.crimson}"
    textColor: "{colors.crimson-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.72rem 1rem"
    height: "44px"
  service-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.architectural}"
    padding: "clamp(1.5rem, 3vw, 2.7rem)"
---

# Design System: OM Enterprises

## Overview

**Creative North Star: "The Ulwe Window Grid"**

The system treats the page like a precise architectural elevation: squared panes, charcoal mullions, mineral surfaces, and supplied views into homes and residential settings. It makes local property advice feel concrete and legible without borrowing the glossy collage language of luxury-property portals or the soft beige styling of generic realtor templates.

The experience is editorial in scale but operational in purpose. Wide Geist typography delivers direct claims, structural dividers organize evidence, and a single architectural crimson accent marks every meaningful action, matching OM Enterprises' official brand identity. Motion supports the advisory story: the narrative pins while service panes pass, then the Ulwe explanation resolves word by word. It never delays access to content, and the reduced-motion path presents the complete story immediately.

**Key Characteristics:**
- Mineral off-white and deep obsidian-charcoal canvases with slate structure.
- One architectural crimson action accent (#d32f2f / #e53935), matching the firm's storefront identity.
- Square architectural panels, real repository photography, and border-built hierarchy.
- Expansive type and asymmetrical grids that collapse cleanly to one column.
- Purposeful scroll narrative with a complete reduced-motion fallback.
- A docked, full-width frosted glass navigation shell that stays pinned to the top while scrolling across every route.
- An expansive display wordmark in the footer inspired by architectural editorial systems.

## Colors

The palette is mineral and infrastructural: quiet neutral planes carry the content while crimson identifies interaction.

### Primary
- **Architectural Crimson:** The only action color. Use it for primary buttons, linked actions, selection, focus, and the hero's terminal punctuation.
- **Deep Crimson:** The light-theme hover state for solid crimson actions.
- **Vibrant Night Crimson:** The brighter system-dark equivalent, tuned to remain legible against obsidian charcoal surfaces.

### Neutral
- **Mineral Canvas:** The light-theme page field and default card plane.
- **Soft Concrete:** The light-theme secondary surface for advisory panels.
- **Structural Concrete:** The stronger light-theme image fallback and inset plane.
- **Charcoal Ink:** Primary light-theme text and the source of structural contrast.
- **Slate Copy:** Supporting light-theme copy.
- **Window Mullion:** Hairline dividers, grid seams, and control borders.
- **Deep Obsidian Charcoal:** The dark-theme page field, paired with progressively lighter inset surfaces and cool off-white text.

### Named Rules

**The One Signal Rule.** Crimson is the only chromatic interface accent; never introduce a second action color.

**The Structural Neutral Rule.** Create hierarchy with neutral planes and divider lines before reaching for color.

## Typography

**Display Font:** Geist Variable (with Noto Sans Devanagari and system sans-serif fallbacks)
**Body Font:** Geist Variable (with Noto Sans Devanagari and system sans-serif fallbacks)

**Character:** One self-hosted variable family carries the full system. Tight, heavy display settings feel architectural; regular body settings stay plainspoken and readable. Devanagari retains an explicit fallback rather than being forced through an incompatible Latin face.

### Hierarchy
- **Display:** Tight two-line hero statements. Keep the line height compressed, tracking negative, and line breaks deliberate on desktop.
- **Headline:** Oversized section arguments, balanced across a broad measure.
- **Title:** Panel and service titles with compact leading and short measures around 11 characters wide where the grid allows.
- **Lede:** Supporting arguments up to roughly 68 characters per line, set in muted ink.
- **Body:** Explanatory and operational copy at the default reading rhythm.
- **Label:** Compact navigation, buttons, controls, and proof labels with increased weight rather than uppercase styling.

### Named Rules

**The Wide Sans Rule.** Use scale, weight, and tight spacing for hierarchy; do not introduce a decorative display face.

**The Two-Line Promise Rule.** The desktop hero promise stays exactly two lines, with the second line remaining unbroken.

## Layout

The page is capped at 1500px and uses fluid horizontal padding. A 64px fixed navigation shell is inset 12px from the viewport and stays visible across every route. The homepage hero fills the remaining dynamic viewport height using a deliberate 44/56 split between copy and photography. Its headline is capped at 4.9rem with an 11-character measure so type and image retain a clear seam. Below 768px, the composition becomes one column, copy leads, and the image follows at a useful fixed viewport presence.

The recurring composition is a window grid. Proof is a four-column rail, services use a dense 12-column mosaic, profile evidence uses a four-image vertical gallery, and project guidance uses one dominant image beside two stacked briefs. Dedicated Projects, Services, Ulwe, About and Contact pages extend the system with asymmetrical page heroes, staggered category grids, sector grids and structured content lists. Hairline seams bind these areas into one system. Below 1024px navigation and proof simplify; below 768px every multi-column layout resolves to one column.

Section rhythm is intentionally generous. Major sections use the fluid section spacing token, while internal gaps step through the smaller spacing scale. Photography is cropped with `object-fit: cover`; it fills panes rather than floating as decorated cards.

**The Window Grid Rule.** Large areas must align to shared panes and seams; avoid free-floating cards with arbitrary offsets.

## Elevation & Depth

The system is flat by default. Depth comes from image planes, tonal changes, cropping, and one-pixel dividers, not ambient card shadows. The fixed navigation uses a translucent canvas, 18px backdrop blur, a refractive inner highlight and one soft tinted shadow as functional separation from content beneath it. The open mobile navigation uses the same material at a deeper elevation.

**The Border-Before-Shadow Rule.** Use a divider or stronger neutral plane for structure. Reserve shadow for a genuinely overlaid surface.

## Shapes

The content language remains square and architectural. Cards, panels, rails and image crops use zero radius, while interactive controls use an 8px radius and the persistent glass navigation shell uses 14px. One-pixel borders act like mullions; adjacent panes share seams rather than becoming separate rounded tiles. Photography is clipped to the exact rectangular panel bounds.

**The Controlled Radius Rule.** Content panes stay square. Only controls and the glass navigation shell may use the documented small radii.

## Components

### Buttons
- **Shape:** Square architectural rectangle with no radius and a minimum 44px touch target; the main call to action is 54px tall.
- **Primary:** Solid Signal Cobalt with cool off-white text and compact horizontal padding.
- **Hover / Focus:** Deepen the cobalt on hover, compress to 98% on active, and retain the global 3px cobalt focus outline with a 4px offset.
- **Secondary:** Transparent with a one-pixel divider border; invert to ink on hover where used for review controls.
- **Text action:** Signal Cobalt text with a visible underline treatment; use for direct telephone actions paired with a primary WhatsApp action.

### Cards / Containers
- **Corner Style:** Square, always.
- **Background:** Default cards match the canvas; advisory panels use the secondary surface; a single featured service card may use Signal Cobalt.
- **Shadow Strategy:** None at rest.
- **Border:** One-pixel divider seams organize multi-card grids.
- **Internal Padding:** Fluid between the medium and large spacing rhythm; image cells remove padding and crop edge to edge.

### Navigation

### Navigation

The desktop navigation is a fixed 68px glass bar: authentic OM Enterprises dual-arrow emblem, brand wordmark, centered route links, and a solid crimson WhatsApp action. It is docked to the top edge (zero floating offset) and stays pinned while scrolling across all routes with frosted glass blur. Links gain a thin crimson underline on hover and on the current route. Below 1100px, desktop links become a native details menu with a morphing two-line control and an edge-to-edge frosted dropdown. Below 768px, a persistent bottom action bar keeps WhatsApp and call actions reachable.

### Proof Rail

Credential items are compact, factual panes separated by shared hairlines. Each uses a strong first line and smaller muted evidence beneath it. The rail moves from four columns to two without becoming a carousel.

### Footer Watermark

A massive, architectural display wordmark ("OM ENTERPRISES") runs edge-to-edge along the bottom of the footer, set in tight display proportions with subtle tone-on-tone contrast, anchoring the site with high-end editorial gravity.

### Reveal Motion

The first viewport enters once with a short upward type resolve and a slow image settle. Below the fold, content remains immediately available; motion is limited to interaction feedback, menu state, review changes and restrained photographic hover zoom. Reduced-motion mode removes every transition delay.

## Do's and Don'ts

### Do:
- **Do** use real repository photography as full-bleed architectural panes.
- **Do** preserve architectural crimson for actions, focus, and sparse emphasis.
- **Do** organize dense information with shared one-pixel seams and neutral surface shifts.
- **Do** keep desktop narrative motion tied to reading progress and restore normal flow on mobile.
- **Do** expose all interactive states through semantic attributes and visible focus treatment.
- **Do** make reduced-motion output complete rather than merely faster.

### Don't:
- **Don't** add rounded content cards, pill buttons, decorative glass panels, glows, or ambient shadows. Glass is reserved for persistent navigation surfaces.
- **Don't** introduce floating pill navbars with artificial margins; keep the navbar docked to the viewport top.
- **Don't** introduce a second accent color, gradients, or ornamental color blocks.
- **Don't** replace the supplied repository imagery with unrelated luxury-property collages or generated lifestyle scenes.
- **Don't** turn the layout into a uniform card grid; preserve the weighted architectural proportions.
- **Don't** hide content behind hover-only behavior, scroll effects, or desktop-only composition.
- **Don't** use motion that delays access, hijacks scrolling, or survives a reduced-motion preference.
