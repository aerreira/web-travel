# Bolt: Critical Learnings

## Scroll Event Optimization
* In this project, `$(window).scroll()` event handlers in `js/main.js` were querying the DOM for `.navbar` and `.back-to-top` on every scroll event (which fires dozens of times per second).
* Caching these selectors outside the scroll handlers (`var $navbar = $('.navbar');`) and implementing a `throttle` function (50ms for the navbar, 100ms for back-to-top) dramatically improves performance.
* Benchmark results showed cached DOM queries are ~280x faster than un-cached ones in rapid loops.
* **Important:** When implementing `throttle` for UI scroll events (like sticky navbars), always ensure a trailing edge execution (`setTimeout`) so the final UI state correctly reflects the final scroll position once scrolling stops.