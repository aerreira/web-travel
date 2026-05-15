# Bolt Journal ⚡

## Critical Learnings

- **Unified Throttled Scroll Listeners:** Consolidating multiple `$(window).scroll()` event handlers into a single unified listener reduces event binding overhead and streamlines performance optimizations.
- **Lazy Selector Caching:** Caching jQuery selectors lazily (e.g., `var $el = null; ... if (!$el) $el = $('.class')`) inside high-frequency handlers like scroll or resize guarantees DOM readiness while eliminating repeated traversals.
- **True Throttle over Debounce:** For continuous events like scrolling, a "true throttle" (implemented via `setTimeout` that skips active timeouts and fires at regular intervals, e.g., 50ms) is preferred over debouncing to ensure updates occur during the interaction, not just at the end.
- **Event Object Optimization:** When optimizing jQuery scroll listeners, caching the `$(window)` object itself as a persistent reference (e.g., `var $window = $(window);`) outside the listener further reduces object creation overhead on every throttled event tick.
