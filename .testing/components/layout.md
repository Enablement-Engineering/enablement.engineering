# Component: Layout

**Source**: `src/layouts/Layout.astro`
**Type**: Astro Layout
**Hydration**: N/A (layout wrapper)

## Props

```typescript
interface Props {
  title: string;           // Page title (required)
  description?: string;    // Meta description
  showGrid?: boolean;      // Debug grid overlay
}
```

## Structure

```html
<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <!-- Meta tags, OG tags, favicon -->
  </head>
  <body class="bg-paper text-ink font-sans antialiased pt-20 md:pt-24">
    <!-- Skip Link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Optional Debug Grid -->
    {showGrid && <GridOverlay />}

    <!-- Navigation -->
    <Navigation currentPage={pathname} />

    <!-- Main Content -->
    <main id="main-content" tabindex="-1">
      <div class="grid-container">
        <slot />
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </body>
</html>
```

## Meta Tags

```yaml
charset: UTF-8
viewport: "width=device-width, initial-scale=1.0"
description: "{description prop}"
og:
  type: website
  url: "{current URL}"
  title: "{title}"
  description: "{description}"
twitter:
  card: summary_large_image
  url: "{current URL}"
  title: "{title}"
  description: "{description}"
```

## Body Classes

```css
bg-paper       /* Cream background */
text-ink       /* Black text */
font-sans      /* Manrope font */
antialiased    /* Font smoothing */
pt-20 md:pt-24 /* Space for fixed nav */
```

## Skip Link

```css
.skip-link {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-1rem);
  transition: opacity 0.2s, transform 0.2s;
}

.skip-link:focus {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
```

## Test Cases

### Structure
- [ ] HTML has lang="en"
- [ ] Title renders in browser tab
- [ ] Meta description present
- [ ] OG tags render for social sharing

### Skip Link
- [ ] Hidden by default
- [ ] Visible on focus
- [ ] Clicking moves focus to main content
- [ ] Main content has tabindex="-1"

### Layout
- [ ] Body padding matches nav height
- [ ] Content contained in grid-container
- [ ] Footer at bottom of page

### Debug Mode
- [ ] showGrid=true renders overlay
- [ ] Grid is 12 columns
- [ ] Grid is pointer-events-none
