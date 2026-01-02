# Component: Footer

**Source**: `src/components/Footer.astro`
**Type**: Astro Component
**Hydration**: None (static)

## Props

None.

## Structure

```
<footer> (contentinfo landmark)
  └── <nav aria-label="Footer navigation">
      ├── Link List
      │   ├── About (/about)
      │   ├── LinkedIn (external)
      │   └── GitHub (external)
      └── Copyright ("© 2026 Enablement LLC")
```

## Links

```yaml
internal:
  - text: "About"
    href: "/about"

external:
  - text: "LinkedIn"
    href: "https://www.linkedin.com/in/dylan--isaac/"
    indicator: "(opens in new tab)"
  - text: "GitHub"
    href: "https://github.com/dylan-isaac"
    indicator: "(opens in new tab)"
```

## Accessibility Features

- `contentinfo` landmark (semantic `<footer>`)
- Navigation labeled with `aria-label="Footer navigation"`
- External links have "(opens in new tab)" indicator
- Links have proper list semantics

## Styling Notes

- Minimal design
- Horizontal link list
- Muted color palette

## Test Cases

### Functional
- [ ] About link navigates to /about
- [ ] LinkedIn opens in new tab
- [ ] GitHub opens in new tab

### Accessibility
- [ ] Footer recognized as contentinfo landmark
- [ ] External link indicators announced by screen reader
- [ ] Links have visible focus states

### Content
- [ ] Copyright year is current (2026)
- [ ] Company name matches brand ("Enablement LLC")

## Potential Enhancements

- Add more navigation links (Writing, Work, Resources)
- Add newsletter signup
- Add contact email
- Add RSS feed link
