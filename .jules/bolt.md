# Bolt's Learnings Diary

## Project-Specific Performance Patterns

### 1. Scroll Event Handlers
- **Bottleneck**: Multiple unthrottled `$(window).scroll()` handlers across the project (e.g., sticky navbar, back-to-top button) cause layout thrashing and excessive main thread execution during scrolling.
- **Solution**: Consolidated multiple `scroll` handlers into a single, unified listener with a 50ms throttle.
- **Note**: A "trailing edge" timeout must be included in the throttle implementation to capture the final scroll state (e.g., when the user stops scrolling exactly at the threshold). Lazily caching jQuery selectors (`$navbar`, `$backToTop`) inside the handler improves performance by avoiding repeated DOM traversals while ensuring readiness.

### 2. Frontend Mock Verification
- **Learning**: When using Playwright for mock UI verification on this static project, external dependencies like `owlCarousel` and `easeInOutExpo` (from jQuery Easing) will throw errors if not mocked properly in the minimal HTML snippet. Mocking `$.fn.owlCarousel = function() { return this; };` prevents JS execution halts when verifying base jQuery UI interactions like scrolling.
