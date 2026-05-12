
### Throttling Scroll Events in jQuery Template
- **Bottleneck Identified:** The template originally bound multiple unthrottled `$(window).scroll()` event handlers (one for sticky navbar, one for back-to-top button). This resulted in continuous DOM querying and heavy main thread blocking during scroll events.
- **Optimization:** Consolidated these into a single listener implementing a 50ms true throttle (skipping new timeouts if one is active) and lazy caching for selectors (`$('.navbar')` and `$('.back-to-top')`).
- **Impact:** Drastically reduces main thread CPU usage and layout recalculation frequency while maintaining the original UI functionality and animation states.
