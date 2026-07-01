# Bolt Learning Log

## Performance Bottleneck: Multiple Unthrottled Scroll Listeners
- **Observation:** The codebase contained multiple `$(window).scroll()` event handlers scattered across `js/main.js` (e.g., for Sticky Navbar and Back-to-Top button). These listeners executed heavy DOM operations (like querying selectors and modifying classes) on every single scroll tick, which can happen 60+ times per second during smooth scrolling.
- **Optimization:** Consolidated all scroll-related logic into a single event listener. To prevent blocking the main thread, the execution is throttled using `requestAnimationFrame` (rAF). This ensures DOM updates are synchronized with the display's refresh rate, eliminating layout thrashing.
- **Additional Tweak:** Cached jQuery selectors (e.g., `$navbar`, `$backToTop`, `$window`) outside the scroll listener to avoid the costly overhead of re-querying the DOM and instantiating new jQuery objects on every rAF tick.
