# Bolt's Journal

## Critical Performance Learnings

### LCP Optimization
- **Observation**: The LCP element (active carousel item `img/carousel-2.jpg`) was initially lazy-loaded (`loading="lazy"`).
- **Impact**: This delays the Largest Contentful Paint significantly as the browser deprioritizes the image fetch.
- **Correction**: Replaced `loading="lazy"` with `fetchpriority="high"` for the active LCP image.
- **Pattern**: Always ensure above-the-fold / LCP images are eager-loaded and prioritized, while below-the-fold images are lazy-loaded.

### HTML Modification
- **Technique**: Using `re.sub` with a callback function is more robust for modifying HTML attributes than simple string replacement, especially when handling context (e.g., distinguishing LCP image from others).
