## Performance Learnings

- **Scroll Event Throttling**: Tying heavy UI calculations or DOM manipulations (like sticky navbar toggling and back-to-top button fade effects) directly to `$(window).scroll()` without throttling results in massive unnecessary logic executions (e.g., 200 executions for 100 rapid scroll events when multiple listeners exist).
- **Consolidation**: Combining multiple `scroll` event listeners into a single centralized handler reduces event binding overhead and makes it easier to manage performance optimizations globally.
- **requestAnimationFrame**: Using `requestAnimationFrame` instead of `setTimeout` for throttling scroll events ensures that DOM updates happen in sync with the browser's render cycle, providing smooth animations while dropping unnecessary logic executions from O(N) to O(1) per frame (measured a drop from 200 to 1 executions in synthetic benchmarking).
- **Caching DOM Elements**: Caching `$window`, `$navbar`, and `$backToTop` outside the event handler prevents redundant object creation and DOM querying on every scroll tick.
