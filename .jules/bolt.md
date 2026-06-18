# Bolt Journal - Critical Learnings

## Scroll Event Optimization
- **Pattern Identified:** Multiple `$(window).scroll()` handlers running unthrottled during high-frequency scrolling causes redundant DOM queries and layout thrashing.
- **Optimization Strategy:**
  1. Consolidate all scroll listeners into a single unified handler.
  2. Implement a true throttle (e.g., 50ms using `setTimeout` that skips if a timeout is already active) to ensure the logic fires at regular intervals without blocking the main thread.
  3. Cache jQuery selectors (like `$('.navbar')`) outside the scroll event to avoid rebuilding objects on every tick.
- **Measured Impact:** For 100 simulated high-frequency scroll events, core DOM logic executions dropped from **200** down to **17** (a >90% reduction), significantly freeing up the main thread.
