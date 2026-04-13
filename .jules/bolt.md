# Bolt Learning Log ⚡

## Scroll Optimization
- **Consolidation**: Consolidate multiple `$(window).scroll()` event handlers into a single unified listener to reduce event binding overhead.
- **Lazy Caching**: Inside high-frequency handlers like scroll, cache jQuery selectors lazily (e.g., `var $el = null; ... if (!$el) $el = $('.class')`) to guarantee DOM readiness while eliminating repeated traversals.
- **True Throttle vs Debounce**: For scroll events, use a true 50ms throttle (using `setTimeout` and skipping active timeouts, with a trailing edge) rather than debounce or `requestAnimationFrame`, as required by the architecture.
- **FOUC Prevention**: For elements toggled via jQuery animations (like `.back-to-top` with `fadeIn`/`fadeOut`), add `style="display: none;"` inline rather than using CSS classes, so jQuery can correctly restore the original display state (like `display: flex`) without a flash of unstyled content on load.
