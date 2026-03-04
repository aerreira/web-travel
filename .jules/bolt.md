# Bolt Learnings Journal

## Caching and Throttling Scroll Events
- **Bottleneck**: In `js/main.js`, there are multiple `$(window).scroll()` event listeners doing non-cached DOM queries (e.g., `$('.navbar')`, `$('.back-to-top')`) directly within the handler. The scroll event fires frequently, causing synchronous layout thrashing and performance degradation.
- **Optimization**: Cached jQuery selectors (`$navbar = $('.navbar')`, `$backToTop = $('.back-to-top')`) outside the scroll event listener. Implemented a throttle function with a trailing edge (using `setTimeout`) and applied a 50ms throttle for the sticky navbar and a 100ms throttle for the back-to-top button.
- **Why**: Caching selectors avoids walking the DOM on every scroll tick. Throttling reduces the callback execution frequency while ensuring the trailing edge visually updates the UI correctly at the end of the scroll.
