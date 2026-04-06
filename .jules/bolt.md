# Bolt's Journal

## Critical Learnings

- **Scroll Performance Anti-Pattern**: Found multiple separate `$(window).scroll()` handlers running unthrottled, leading to heavy redundant main thread execution.
- **Consolidation**: Scroll logic (sticky navbar and back-to-top visibility) must be consolidated into a single unified listener to reduce event binding overhead.
- **True Throttling**: Use a 50ms true throttle via `setTimeout` (skipping new triggers when active) instead of standard debouncing. This is essential for high-frequency events like scrolling, and must handle the trailing edge to capture the final scroll position correctly.
- **DOM Caching**: jQuery selectors (e.g., `$('.navbar')`) used in scroll handlers must be lazy-cached (initialized once inside the handler if `null`) to eliminate costly repeated DOM traversals.
- **FOUC Prevention**: Elements toggled by JS animations (like `$('.back-to-top').fadeIn()`) should have inline `style="display: none;"` initially to prevent Flash of Unstyled Content, allowing jQuery to correctly compute and restore their desired block or flex context.
