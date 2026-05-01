# BOLT LOG - CRITICAL PERFORMANCE LEARNINGS

## 2023-10-27: jQuery Scroll Throttling
- **Bottleneck Identified:** Legacy jQuery projects frequently bind high-frequency events (`scroll`, `resize`) directly to the `$(window)` object without throttling, causing massive main-thread blocking due to layout thrashing and redundant DOM lookups (`$('.navbar')`, `$('.back-to-top')`).
- **Optimization:** Consolidating multiple scroll handlers into a single unified listener, applying a 50ms true throttle (not a debounce, and ensuring trailing edge execution), and lazily caching the jQuery selectors significantly reduces CPU usage during scrolling (from 120 executions to minimal throttled executions in a rapid sweep).
- **Key Pattern:** Lazily caching selectors inside the throttled function (`if (!$navbar) $navbar = $('.navbar')`) ensures the DOM elements are ready when first needed, avoiding null reference errors while preventing repeated traversals on subsequent scrolls.
