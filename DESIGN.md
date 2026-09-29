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
  cobalt: "#0757d9"
  cobalt-hover: "#0648b5"
  cobalt-ink: "#f7f9fc"
  canvas-dark: "#15191f"
  surface-dark: "#1e242c"
  surface-strong-dark: "#29313b"
  ink-dark: "#edf1f5"
  ink-muted-dark: "#b0bac5"
  divider-dark: "#3d4651"
  cobalt-dark: "#5d91ff"
  cobalt-hover-dark: "#7aa5ff"
  cobalt-ink-dark: "#10151c"
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
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.94rem 1.45rem"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-hover}"
    textColor: "{colors.cobalt-ink}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "44px"
  nav-action:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.cobalt-ink}"
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

The experience is editorial in scale but operational in purpose. Wide Geist typography delivers direct claims, structural dividers organize evidence, and a single cobalt accent marks every meaningful action. Motion supports the advisory story: the narrative pins while service panes pass, then the Ulwe explanation resolves word by word. It never delays access to content, and the reduced-motion path presents the complete story immediately.

**Key Characteristics:**
- Mineral off-white and system-dark canvases with charcoal structure.
- One cobalt action accent, used deliberately and consistently.
- Square architectural panels, real repository photography, and border-built hierarchy.
- Expansive type and asymmetrical grids that collapse cleanly to one column.
- Purposeful scroll narrative with a complete reduced-motion fallback.
- A persistent frosted navigation shell that keeps project discovery and direct contact available on every route.

## Colors

The palette is mineral and infrastructural: quiet neutral planes carry the content while cobalt identifies interaction.

### Primary
- **Signal Cobalt:** The only action color. Use it for primary buttons, linked actions, selection, focus, and the hero's terminal punctuation.
- **Deep Signal Cobalt:** The light-theme hover state for solid cobalt actions.
- **Night Signal Cobalt:** The brighter system-dark equivalent, tuned to remain legible against charcoal surfaces.

### Neutral
- **Mineral Canvas:** The light-theme page field and default card plane.
- **Soft Concrete:** The light-theme secondary surface for advisory panels.
- **Structural Concrete:** The stronger light-theme image fallback and inset plane.
- **Charcoal Ink:** Primary light-theme text and the source of structural contrast.
- **Slate Copy:** Supporting light-theme copy.
- **Window Mullion:** Hairline dividers, grid seams, and control borders.
- **System Charcoal:** The dark-theme page field, paired with progressively lighter inset surfaces and cool off-white text.

### Named Rules

**The One Signal Rule.** Cobalt is the only chromatic interface accent; never introduce a second action color.

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

The desktop navigation is a fixed 64px three-track glass shell: English wordmark, route links, and one solid cobalt WhatsApp action. It is always visible and inset from the viewport edge. Links gain a thin cobalt underline on hover and on the current route. Below 1100px, route links and the desktop action become a native `details` menu with a morphing two-line control and a frosted dropdown. Below 768px, a persistent bottom action bar keeps WhatsApp and call actions reachable.

### Proof Rail

Credential items are compact, factual panes separated by shared hairlines. Each uses a strong first line and smaller muted evidence beneath it. The rail moves from four columns to two without becoming a carousel.

### Reveal Motion

The first viewport enters once with a short upward type resolve and a slow image settle. Below the fold, a single IntersectionObserver reveals major blocks as they enter view, with restrained stagger only where sibling order communicates hierarchy. Hover zoom is limited to photographic discovery cards. Reduced-motion mode renders every block immediately and removes all transition delay.

## Do's and Don'ts

### Do:
- **Do** use real repository photography as full-bleed architectural panes.
- **Do** preserve cobalt for actions, focus, and sparse emphasis.
- **Do** organize dense information with shared one-pixel seams and neutral surface shifts.
- **Do** keep desktop narrative motion tied to reading progress and restore normal flow on mobile.
- **Do** expose all interactive states through semantic attributes and visible focus treatment.
- **Do** make reduced-motion output complete rather than merely faster.

### Don't:
- **Don't** add rounded content cards, pill buttons, decorative glass panels, glows, or ambient shadows. Glass is reserved for persistent navigation surfaces.
- **Don't** introduce a second accent color, gradients, or ornamental color blocks.
- **Don't** replace the supplied repository imagery with unrelated luxury-property collages or generated lifestyle scenes.
- **Don't** turn the layout into a uniform card grid; preserve the weighted architectural proportions.
- **Don't** hide content behind hover-only behavior, scroll effects, or desktop-only composition.
- **Don't** use motion that delays access, hijacks scrolling, or survives a reduced-motion preference.
