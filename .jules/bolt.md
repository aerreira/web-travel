## Project Performance Patterns
- Scroll events must use a 50ms true throttle via `setTimeout` with a trailing edge to capture the final state, rather than using `requestAnimationFrame` or debouncing.
- Lazy caching of selectors should be initialized at the beginning of event handlers to improve code maintainability and avoid redundant checks.
- Multiple $\(window\).scroll\(\) listeners should be consolidated into a single unified listener to reduce event binding overhead.
