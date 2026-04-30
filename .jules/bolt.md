# Bolt's Performance Journal

## Throttled Scroll Listener (2026-04-30)
*   **Optimization:** Consolidated multiple `$(window).scroll()` event handlers in `js/main.js` (for sticky navbar and back-to-top button) into a single unified listener implementing a 50ms true throttle with a trailing edge and lazy DOM caching.
*   **Measurement:** Using a mock setup simulating rapid scroll events, the custom logic execution counter showed the logic ran only 3 times during the simulated rapid scroll rather than firing on every single scroll event tick.
*   **Impact:** Reduces main-thread computation overhead and eliminates redundant DOM queries on high-frequency events, smoothing scroll performance.
