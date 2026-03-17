# Bolt Journal ⚡

## Performance Optimization Patterns

### Scroll Event Throttling and Selector Caching
* **Date:** 2024-03-17
* **Observation:** The `js/main.js` file contained multiple independent `$(window).scroll()` event handlers (e.g., for the sticky navbar and back-to-top button) that executed unthrottled on every scroll event. In a typical high-frequency scrolling scenario, this resulted in hundreds of unnecessary function executions per second, and each execution performed repeated DOM traversals to select elements (e.g., `$('.navbar')`).
* **Optimization Applied:**
    1. Consolidated the multiple scroll event handlers into a single unified listener.
    2. Injected a custom `throttle` function within the IIFE (true throttle with a trailing edge, 50ms delay).
    3. Implemented lazy caching for jQuery selectors (e.g., `var $navbar = null; if (!$navbar) $navbar = $('.navbar');`).
* **Measured Impact:** Benchmarks simulating 500 fast scroll events over 2.5 seconds showed a 95% reduction in handler executions (from 1000 down to 51) and a reduction in repeated DOM queries from 1000 down to just 2 initial lazy-loaded selections. This significantly reduces main-thread overhead during page scrolling and eliminates layout thrashing.
