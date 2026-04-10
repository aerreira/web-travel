# Bolt's Performance Journal ⚡

## Critical Learnings

- **Architecture Bottleneck:** The `OwlCarousel` library duplicates DOM elements for looping and injects base64 spacer images, leading to a higher image count in the DOM compared to the static HTML source.
- **Performance Pattern:** The LCP element (e.g., active carousel item) must be eager-loaded (remove `loading="lazy"`, add `fetchpriority="high"`), while below-the-fold images must be lazy-loaded.
- **Specific Implementation Detail:** In `index.html`, the hero carousel uses the `.carousel-item.active` selector to identify the currently visible slide containing the LCP image.
- **Event Handling Optimization:** Scroll-related UI logic in `js/main.js` (sticky navbar and back-to-top visibility) is consolidated into a single unified listener with lazy selector caching to reduce event binding overhead and eliminate repeated DOM traversals. A throttle delay of 50ms is ideal for high-priority UI updates like sticky navbars. Use `setTimeout` and skip active timeouts for true throttling rather than debounce.
