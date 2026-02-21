# Bolt Journal ⚡

This file tracks critical performance learnings, bottlenecks, and specific patterns for this project.

## Log

- **LCP Optimization:** Identified `loading="lazy"` on the active carousel item in `index.html`. This delays the Largest Contentful Paint. Fixed by removing the attribute and adding `fetchpriority="high"`. Future carousels must eager-load the first visible item.
