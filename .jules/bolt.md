
### ⚡ Bolt Optimization: Throttled Scroll Listeners
- **Bottleneck:** Multiple unthrottled `$(window).scroll()` handlers trigger repeatedly on every pixel scrolled, causing significant layout thrashing, excessive CPU usage, and high main-thread blockage due to repeated DOM element lookups.
- **Optimization:** Consolidating all scroll-based UI logic (e.g., sticky navbar and back-to-top button) into a single unified listener, applying a true 50ms throttle with a trailing edge, and caching jQuery DOM selectors lazily to prevent redundant DOM queries.
