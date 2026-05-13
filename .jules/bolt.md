
## Optimization: Scroll Event Consolidation and Throttling
- **Bottleneck**: Multiple unthrottled `$(window).scroll()` event handlers in `js/main.js` were causing redundant layout calculations and DOM traversals on every scroll tick.
- **Fix**: Consolidated multiple scroll listeners into a single handler. Implemented a 50ms true throttle using `setTimeout` to limit execution frequency. Cached jQuery selectors (`$navbar`, `$backToTop`) and the `$(window)` object lazily within the handler to eliminate repeated DOM lookups.
- **Impact**: Significant reduction in main thread blocking time during scrolling, particularly on mobile devices.
- **Note**: Added `style="display: none;"` inline to `.back-to-top` links across all HTML files to prevent Flash of Unstyled Content (FOUC) and ensure smooth jQuery `fadeIn`/`fadeOut` animations after the throttling changes.
