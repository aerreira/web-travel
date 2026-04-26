
### Performance Optimization: Throttled Consolidated Scroll Events
- **Observation:** In `js/main.js`, multiple `$(window).scroll()` handlers fired on every scroll event unthrottled, creating significant performance overhead via repeated un-cached DOM lookups.
- **Optimization:** Consolidated these handlers into a single unified scroll listener with a 50ms true throttle using `setTimeout`.
- **Implementation:** Added lazy caching for DOM elements (`$('.navbar')` and `$('.back-to-top')`) inside the throttled function to prevent repeated DOM queries.
- **Impact:** Drastically reduced execution frequency of DOM manipulation logic and complete elimination of repeated DOM traversals on scroll, resulting in smoother scroll performance.
