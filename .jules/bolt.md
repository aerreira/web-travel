# Bolt Performance Learnings

## Scroll Event Consolidation and Throttling
- Architecture bottleneck: Multiple discrete `$(window).scroll()` handlers cause redundant DOM queries and event firing.
- Optimization: Consolidated handlers into a single function and implemented a 50ms true throttle (skipping active timeouts with a trailing edge check). Lazily cached jQuery selectors inside the handler to prevent repetitive DOM traversals.

## Preventing FOUC with JavaScript Animations
- Pattern: Elements toggled via jQuery's `fadeIn`/`fadeOut` (like `.back-to-top` buttons) should initially have inline `style="display: none;"` rather than CSS class-based display changes.
- Why: Ensures jQuery correctly manages the element's visibility state without a Flash of Unstyled Content upon initial load.
