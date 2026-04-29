# BOLT LOG - CRITICAL LEARNINGS

## Scroll Event Optimization Pattern
- **Consolidation**: Instead of multiple `$(window).scroll()` event handlers scattered across the file (e.g., sticky navbar, back-to-top button), consolidate them into a single unified listener to reduce event binding overhead.
- **True Throttle vs Debounce**: When implementing a throttle for high-frequency events (like scroll), ensure it is a "true throttle" (firing at regular intervals by skipping new timeouts if one is active) rather than a debounce (clearing the timeout on every event), and include a trailing edge execution to capture the final state.
- **Lazy Selector Caching**: Cache jQuery selectors lazily (e.g., `var $el = null; ... if (!$el) $el = $('.class')`) inside high-frequency handlers to guarantee DOM readiness while eliminating repeated traversals. Also, caching `$(window)` outside the handler reduces object creation overhead on every throttled event tick. A 50ms delay is preferred for high-priority UI updates like sticky navbars.
