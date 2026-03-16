
## Scroll Handler Optimization (16/Mar)
* **Architecture Bottleneck:** The main template had multiple independent `$(window).scroll()` handlers, each performing duplicate DOM traversals (e.g., `$('.navbar')`, `$('.back-to-top')`) on every scroll tick without any throttling.
* **Optimization:** Consolidated the scroll listeners into a single unified handler.
* **Throttling Strategy:** Implemented a true `throttle` function with a trailing edge (firing every 50ms) rather than a debounce, which is critical to ensure UI elements update while the user is still scrolling.
* **Caching Strategy:** Used lazy caching (`if (!$navbar) $navbar = $('.navbar');`) inside the handler to prevent repetitive jQuery queries while ensuring the DOM is ready when accessed.
