# Bolt's Performance Journal ⚡

## Critical Learnings

- **Unthrottled Event Listeners**: The `$(window).scroll()` event in jQuery triggers constantly, firing tens or hundreds of times per scroll action. When combined with DOM queries inside the listener (`$('.navbar')`, `$('.back-to-top')`), this causes severe performance degradation, layout thrashing, and high CPU usage.
- **Optimization strategy**:
  1. Consolidate multiple listeners into a single event handler.
  2. Cache DOM elements outside the event listener to avoid repeated querying (`const $navbar = $('.navbar');`).
  3. Throttle the event using `setTimeout` or `requestAnimationFrame` to limit the execution frequency.

- **Throttling vs Debouncing for UI Updates**: When applying optimizations to UI elements tied strictly to user scroll position (like a sticky navbar), using `setTimeout` creates a *debounce* effect (the UI only updates after scrolling stops). This causes a UX regression where elements disappear during the scroll. For continuous visual updates, always use `requestAnimationFrame` for throttling.
