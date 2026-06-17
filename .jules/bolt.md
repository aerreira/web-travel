
## Optimization: Consolidating and Throttling Scroll Handlers
- **Bottleneck**: The `js/main.js` file had multiple independent `$(window).scroll()` handlers (one for Sticky Navbar, one for Back-to-top button) that were unthrottled. This causes severe layout thrashing and high CPU usage during high-frequency scrolling, as DOM querying and layout checks trigger on every scroll event (potentially 100+ times per second).
- **Optimization**: Consolidate multiple scroll handlers into a single listener, implement a 50ms true throttle using `setTimeout` (skipping new timeouts if one is active), and cache jQuery DOM selectors (e.g. `var $window = $(window);`) outside the event loop.
- **Why**: Caching selectors avoids redundant memory allocation on every event tick. Throttling limits DOM reflow calculations to maximum 20 times per second, heavily reducing main thread blocking while keeping UI responsive.
