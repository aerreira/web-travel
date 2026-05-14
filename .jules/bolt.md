## Performance Optimizations - Throttled Scroll & Unified Handlers

**What I learned:**
- In static HTML/jQuery projects like this, heavy DOM computations inside high-frequency `scroll` events are a common bottleneck.
- Combining multiple scroll listeners into a single unified listener and applying a 50ms throttle drastically reduces JS execution time.
- I need to add `style="display: none;"` initially to the HTML element (e.g., `back-to-top`) to prevent a FOUC (Flash of Unstyled Content) or visual pop when we depend on JS toggling it. I used inline style rather than a CSS class to ensure jQuery's `fadeIn()` properly restores its previous `display` style (which happens to be `display: flex;` for `.btn-md-square`).
- Lazy caching of jQuery selectors (e.g. `if (!$navbar) $navbar = $('.navbar');`) inside the throttled handler guarantees DOM elements are ready when accessed while eliminating redundant traversals across rapid triggers.
