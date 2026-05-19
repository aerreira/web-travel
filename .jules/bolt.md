# Bolt's Learning Log

## Critical Learnings

- Optimization: Consolidated multiple `$(window).scroll()` event handlers into a single unified listener with a true 50ms throttle (`setTimeout`) in `js/main.js`.
- Benefit: Prevents rapid re-execution of logic on every scroll tick.
- Caching: jQuery elements (`$('.navbar')` and `$('.back-to-top')`) are now lazily cached within the throttled handler to avoid repeated DOM queries.
