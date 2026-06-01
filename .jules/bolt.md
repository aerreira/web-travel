## ⚡ Bolt Optimization Journal

**Date:** 2024-05-24
**Target:** `js/main.js` - Global Scroll Handlers
**Bottleneck:**
The application originally bound multiple separate `$(window).scroll()` event listeners (one for the `.navbar` sticky state and another for the `.back-to-top` button visibility). Each handler repeatedly queried the DOM on every single scroll tick (e.g. `$('.navbar')`), which caused excessive layout thrashing and performance degradation during fast or continuous scrolling.

**Optimization Applied:**
1. **Consolidation**: Merged multiple distinct `$(window).scroll()` handlers into a single, unified listener.
2. **Throttling**: Introduced a 50ms `setTimeout` throttle (skipping active timeouts) so the logic only executes once every 50ms rather than on every native browser tick.
3. **Lazy DOM Caching**: Variables like `$navbar` and `$backToTop` are initialized once inside the handler when needed, preventing redundant DOM traversals on subsequent executions.
4. **Window Caching**: The `$(window)` reference itself was cached (`var $window = $(window);`) outside the listener to avoid recreating the jQuery object repeatedly.

**Lessons Learned:**
- High-frequency event handlers must always be throttled in jQuery-heavy environments to maintain consistent 60FPS scroll performance.
- When benchmarking with Playwright, emitting native `window.dispatchEvent(new Event('scroll'))` within a loop is critical as native browser event firing from `window.scrollBy()` can sometimes decouple from the script execution thread.
