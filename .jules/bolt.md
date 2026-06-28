# Bolt Learnings Journal

## Unthrottled Multiple Scroll Listeners
**Bottleneck:** In `js/main.js`, there were multiple unthrottled `$(window).scroll()` event listeners attached for different features (sticky navbar, back-to-top button). This causes unnecessary heavy computations and re-evaluations (DOM queries, adding/removing classes, fading in/out) on every single scroll tick, which can lead to jank and layout trashing.
**Optimization:** Consolidate all scroll-dependent logic into a single event listener, cache the `$(window)` selector to avoid re-evaluating it on every tick (`var $window = $(window)`), and apply a 50ms true throttle using `setTimeout` (skipping active timeouts) to significantly reduce the execution frequency of the core logic while preserving responsiveness.
