## CRITICAL LEARNING: Scroll Handlers
- **Anti-pattern**: Binding multiple unthrottled `$(window).scroll()` listeners for independent features (e.g., sticky navbar and back-to-top buttons) causes extreme performance degradation as DOM querying and logic fire 1-to-1 with high-frequency native scroll ticks.
- **Optimization**: Consolidate all scroll-dependent logic into a single `setTimeout`-based "true throttle" (50ms interval that skips new active timeouts and captures the trailing edge).
- **Measurement**: Benchmarking 1000 scroll events dropped logic executions from 1000 to just 1.
- **Dom Caching**: Inside throttled scroll/resize handlers, lazily initialize and cache jQuery DOM selectors (`$window`, `$navbar`, `$backToTop`) on the first tick instead of re-querying the DOM continually.
