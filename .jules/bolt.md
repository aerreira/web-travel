# Bolt's Performance Journal

## Unthrottled Scroll Events and DOM Queries
**Date:** 2026-04-14
**Observation:** In `js/main.js`, multiple independent `$(window).scroll()` event listeners were bound to the window. These listeners were unthrottled and repeatedly queried the DOM (`$('.navbar')`, `$('.back-to-top')`) on every single scroll tick.
**Learning:** High-frequency events like scroll can fire dozens of times per second. Unthrottled DOM queries inside these events create a severe performance bottleneck, causing excessive layout thrashing and DOM traversals.
**Solution:** Consolidate scroll handlers into a single listener, implement a true throttle (50ms interval with trailing edge execution via `setTimeout`), and lazily cache jQuery DOM element selectors outside the high-frequency execution path. This dramatically reduces unnecessary DOM lookups and improves scroll smoothness.
