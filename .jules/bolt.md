## ⚡ Bolt Learnings

**Anti-pattern:** Unthrottled scroll handlers with repeated DOM queries.
**Observation:** Multiple `$(window).scroll()` handlers in `js/main.js` were executing unthrottled on every scroll event, and repeatedly traversing the DOM to query identical selectors (e.g., `$('.navbar')`, `$('.back-to-top')`).
**Optimization:** Consolidating these separate listeners into a single, unified listener, wrapping the core logic in a 50ms true throttle (via `setTimeout` with a trailing edge guarantee), and lazily caching the queried jQuery elements dramatically reduces both Javascript execution time and DOM layout thrashing during scroll events. A mock test verified that a burst of 10 rapid scroll events correctly throttled DOM operations to only 2 executions instead of the 10 raw events.
