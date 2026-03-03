# Bolt's Performance Journal

## Critical Learnings

### LCP Images in Hero Carousels
- **Observation:** In this template, the active image in the hero carousel (which acts as the Largest Contentful Paint - LCP element) was configured with `loading="lazy"`. This is an anti-pattern that delays the most important visual element from being painted quickly.
- **Solution:** Removed `loading="lazy"` from the `.carousel-item.active` image and replaced it with `fetchpriority="high"` to tell the browser to prioritize downloading this critical resource immediately.
- **Pattern:** For non-active, off-screen carousel images, explicit `loading="lazy"` should be added to prevent unnecessary initial bandwidth usage and speed up the LCP element even further.
