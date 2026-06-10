## Bolt Journal

- **Throttling Scroll Handlers**: Consolidated multiple `$(window).scroll()` handlers in `js/main.js` (for Sticky Navbar and Back to top button) into a single throttled event listener. This reduces event handler firing frequency and utilizes lazy DOM caching to avoid redundant querying on every scroll tick.
