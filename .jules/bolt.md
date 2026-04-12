## Performance Logs

* Scroll event handling optimization:
    * Bottleneck: Multiple separate `$(window).scroll()` handlers in `js/main.js` were triggering duplicate DOM queries and recalculations on every scroll event without any throttling, causing layout thrashing.
    * Solution: Consolidated sticky navbar and back-to-top logic into a single scroll handler, introduced a 50ms true throttle using `setTimeout` (skipping new timeouts if one is active), and added lazy caching for DOM selectors (`$navbar`, `$backToTop`).
    * Refinement: To prevent FOUC (Flash of Unstyled Content) for the back-to-top button before the first scroll calculation, `style="display: none;"` was injected inline in all HTML files containing the element, allowing jQuery's `fadeIn`/`fadeOut` to manage visibility correctly.
