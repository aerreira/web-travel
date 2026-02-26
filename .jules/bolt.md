# Bolt's Journal

## Critical Learnings

- **Anti-Pattern:** The LCP candidate (Hero Carousel active item) had `loading="lazy"`, which delays the fetch and significantly hurts LCP. Always ensure above-the-fold images are eager loaded, ideally with `fetchpriority="high"`.
- **Optimization:** Inverted the loading strategy for the Hero Carousel:
    - Active Item: `loading="lazy"` -> `fetchpriority="high"` (Eager load LCP).
    - Hidden Items: `loading="eager"` (default) -> `loading="lazy"` (Defer hidden resources).
