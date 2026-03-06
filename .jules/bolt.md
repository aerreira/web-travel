# Bolt's Performance Learnings

- **Scroll Event Throttling**: High-frequency scroll events in this project can cause performance degradation if they trigger repeated DOM traversals and layout shifts. It is critical to:
  1. **Cache jQuery Selectors**: Always cache jQuery selectors (e.g., `$navbar = $('.navbar')`) outside the scroll event handlers to avoid repeated DOM queries.
  2. **Implement Throttling**: Throttle scroll events (e.g., 50ms for sticky navbars, 100ms for back-to-top buttons).
  3. **Include Trailing Edge Execution**: Use a `setTimeout` to ensure the final state of the UI updates when scrolling stops.
