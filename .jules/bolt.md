
## Optimization: Unified Throttled Scroll Listener
- **Bottleneck:** Multiple components (Sticky Navbar, Back-to-Top button) attached separate, unthrottled `$(window).scroll()` listeners, triggering redundant and expensive DOM queries on every scroll event pixel.
- **Solution:** Consolidated all scroll-dependent UI updates into a single unified listener, implementing a true 50ms throttle (`setTimeout` skipping active timeouts instead of simple debounce) and caching jQuery selectors lazily (`var $navbar = null; if (!$navbar) ...`) to avoid repetitive DOM traversals.
- **Lesson:** In template architectures without native state management, centralizing high-frequency event handlers reduces event binding overhead and significantly improves scroll performance.
