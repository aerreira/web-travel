# Bolt Learnings

- **Performance Pattern**: The codebase originally bound multiple unthrottled `$(window).scroll()` event handlers. For simple scroll triggers (e.g. sticky navbar and back-to-top button), combining them into a single, unified `$(window).scroll()` handler and using a 50ms true throttle via `setTimeout` reduced unnecessary logical executions drastically (from 2 executions per scroll tick to a constant bounded amount, ~72 executions for 1000 scroll ticks over 4s).
- **DOM Caching**: Creating a global persistent reference to `$window = $(window)` instead of wrapping `this` on every event, combined with lazily caching simple element selectors like `$('.navbar')` and `$('.back-to-top')`, removes significant traversal overhead previously evaluated inside every scroll tick.
