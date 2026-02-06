# Bolt's Performance Journal

## Critical Learnings

### LCP Bottleneck in Carousel
- **Finding:** The active carousel image (LCP element) in `index.html` was set to `loading="lazy"`. This delays the loading of the largest visible element, negatively impacting Core Web Vitals (LCP).
- **Solution:** Removed `loading="lazy"` from the active item and added it to hidden carousel items and below-the-fold images.

### Missing Lazy Loading
- **Finding:** Numerous images below the fold (About, Destination, Packages, etc.) were loading eagerly, consuming bandwidth and thread time during initial load.
- **Solution:** Applied `loading="lazy"` to all below-the-fold images.
