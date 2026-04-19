## Performance Optimizations - Scroll Event Consolidation

**Optimization:** Consolidate multiple `$(window).scroll()` handlers into a single, unified listener.
**Why:**
1. Event binding overhead: Reduces the number of event listeners bound to the window's scroll event.
2. DOM traversal: By lazy-caching jQuery selectors (e.g. `$navbar`, `$backToTop`), we avoid re-querying the DOM on every scroll tick.
3. Throttling: Implementing a 50ms true throttle prevents the handler from running more frequently than necessary (e.g. 60+ times per second), reducing CPU load.
**Impact:** A smoother scrolling experience, particularly on resource-constrained devices, by minimizing main thread blockages.
