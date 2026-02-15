# Bolt Journal ⚡

## Performance Bottlenecks
- **LCP Anti-Pattern in Carousel**: The main hero carousel in `index.html` had `loading="lazy"` on the active item (`.carousel-item.active img`). This significantly delays Largest Contentful Paint. The fix is to remove `loading="lazy"` and add `fetchpriority="high"` to the active item, while lazy loading other carousel items.

## Architecture
- **Static Site Structure**: The project lacks a build system. HTML optimizations must be applied directly to source files. Regex-based modification scripts are effective but require care with comments and line endings.
