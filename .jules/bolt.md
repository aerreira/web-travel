## Bolt's Performance Journal

- **Scroll Event Optimization in `js/main.js`**: Consolidating multiple `$(window).scroll()` event handlers into a single unified listener with a true throttle (e.g., 50ms) and lazily caching jQuery selectors (`$('.navbar')`, `$('.back-to-top')`) significantly reduces main thread computation and DOM traversal overhead compared to separate, unthrottled handlers.
