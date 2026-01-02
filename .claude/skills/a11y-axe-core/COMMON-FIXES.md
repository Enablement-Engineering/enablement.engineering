# Common Accessibility Fixes

Quick reference for the most frequent axe-core violations and their fixes.

## Color Contrast

**Rule**: `color-contrast`
**WCAG**: 1.4.3 Contrast (Minimum)

```css
/* Before - fails */
.card-text {
  color: #999;  /* Too light on white */
}

/* After - passes */
.card-text {
  color: #595959;  /* 7:1 contrast ratio */
}
```

**Check tool**: https://webaim.org/resources/contrastchecker/

---

## Missing Alt Text

**Rule**: `image-alt`
**WCAG**: 1.1.1 Non-text Content

```html
<!-- Before - fails -->
<img src="hero.jpg">

<!-- After - informative image -->
<img src="hero.jpg" alt="Team collaborating on whiteboard">

<!-- After - decorative image -->
<img src="divider.svg" alt="" role="presentation">
```

---

## Unlabeled Form Fields

**Rule**: `label`
**WCAG**: 1.3.1 Info and Relationships

```html
<!-- Before - fails -->
<input type="email" placeholder="Email">

<!-- After - explicit label -->
<label for="email">Email address</label>
<input type="email" id="email">

<!-- After - aria-label (when visual label not possible) -->
<input type="email" aria-label="Email address">
```

---

## Missing Landmark Regions

**Rule**: `region`
**WCAG**: 1.3.1 Info and Relationships

```html
<!-- Before - fails -->
<div class="header">...</div>
<div class="content">...</div>
<div class="footer">...</div>

<!-- After - semantic landmarks -->
<header>...</header>
<main>...</main>
<footer>...</footer>
```

---

## Heading Hierarchy

**Rule**: `heading-order`
**WCAG**: 1.3.1 Info and Relationships

```html
<!-- Before - skips h2 -->
<h1>Page Title</h1>
<h3>Section</h3>

<!-- After - proper hierarchy -->
<h1>Page Title</h1>
<h2>Section</h2>
<h3>Subsection</h3>
```

---

## Link Purpose

**Rule**: `link-name`
**WCAG**: 2.4.4 Link Purpose

```html
<!-- Before - fails -->
<a href="/about">Click here</a>

<!-- After - descriptive -->
<a href="/about">Learn about our team</a>

<!-- After - with icon -->
<a href="/about">
  About <span class="sr-only">(opens in new tab)</span>
  <svg aria-hidden="true">...</svg>
</a>
```

---

## Button Name

**Rule**: `button-name`
**WCAG**: 4.1.2 Name, Role, Value

```html
<!-- Before - fails (icon only) -->
<button><svg>...</svg></button>

<!-- After - aria-label -->
<button aria-label="Close menu">
  <svg aria-hidden="true">...</svg>
</button>

<!-- After - visually hidden text -->
<button>
  <span class="sr-only">Close menu</span>
  <svg aria-hidden="true">...</svg>
</button>
```

---

## Focus Visible

**Rule**: `focus-visible`
**WCAG**: 2.4.7 Focus Visible

```css
/* Before - removes focus */
*:focus {
  outline: none;
}

/* After - custom focus indicator */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```
