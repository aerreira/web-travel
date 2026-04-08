## Scroll Event Throttling & Consolidation (js/main.js)
* **Optimization:** Replaced two separate, unthrottled `$(window).scroll()` event handlers with a single unified listener.
* **Mechanism:** Implemented a 50ms true throttle using `setTimeout` (skipping new timeouts if one is active but ensuring the callback runs with the latest state).
* **Caching:** Introduced lazy jQuery selector caching (`$navbar`, `$backToTop`) inside the handler. This guarantees DOM readiness on the first scroll event while entirely eliminating redundant DOM traversal overhead on all subsequent scroll events.
* **Impact:** Drastically reduces CPU overhead and DOM thrashing during high-frequency scroll events, leading to a smoother scrolling experience and better main-thread availability.
