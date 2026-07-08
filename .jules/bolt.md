# Bolt Journal

## Performance Learnings

### Scroll Event Consolidation and `requestAnimationFrame`
- Multiple scroll event listeners in jQuery (e.g., `$(window).scroll()`) can cause performance bottlenecks due to excessive DOM queries and logic execution on every scroll tick.
- Consolidating these listeners into a single handler reduces event binding overhead.
- Wrapping the scroll logic in `requestAnimationFrame` (rAF) provides a smooth, throttled execution that aligns with the browser's repaint cycle, drastically reducing unnecessary computations.
- Using `setTimeout` for throttling scroll events causes a debounce effect, leading to UX regressions where elements update abruptly after scrolling stops, whereas rAF maintains smooth continuous updates.
- Caching the jQuery window object (`var $window = $(window);`) outside the listener prevents repeated object creation on every tick.
