# Bolt Performance Journal

## Critical Learnings

### HTML/Template Specifics
- **Bootstrap Carousel LCP Anti-pattern**: The template incorrectly applies `loading="lazy"` to the `.active` carousel item (the LCP element) and omits it for hidden items. This inverts the optimal loading strategy.
  - **Fix**: Remove `loading="lazy"` and add `fetchpriority="high"` to the active item. Add `loading="lazy"` to inactive items.
