# Bolt Diary

## Critical Performance Learnings

### Scroll Event Optimization
* **Architecture Bottleneck:** Multiple `$(window).scroll()` handlers cause excessive main-thread overhead due to redundant event binding and execution during high-frequency scroll events.
* **Optimization Pattern:** Consolidate scroll-related UI logic (like sticky navbar and back-to-top button visibility) into a single unified listener.
* **Implementation Details:**
  * Use a 50ms "true throttle" (skip new timeouts if one is active, unlike debounce which clears timeouts) with a trailing edge to ensure the final scroll state is always captured.
  * Lazy-cache DOM selectors (`var $window`, `var $navbar`, `var $backToTop`) upon first execution to eliminate repeated DOM traversal costs within the throttled function body.
