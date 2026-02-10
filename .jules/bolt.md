# Bolt Diary

## Critical Learnings

- **LCP Anti-pattern**: The active carousel image in `index.html` was explicitly lazy-loaded (`loading="lazy"`), causing a significant delay in Largest Contentful Paint (LCP). Additionally, inactive carousel items were eagerly loaded, wasting initial bandwidth. Optimizing this required removing `loading="lazy"` and adding `fetchpriority="high"` to the active item, while adding `loading="lazy"` to inactive items.
