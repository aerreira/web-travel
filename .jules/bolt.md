# Bolt's Journal

## Critical Learnings

- **LCP Anti-Pattern**: The hero carousel's active item (`.carousel-item.active img`) was explicitly set to `loading='lazy'`. This delays the Largest Contentful Paint significantly. Always check critical above-the-fold images for eager loading.
