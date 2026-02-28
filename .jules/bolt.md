# Bolt Journal

## Critical Learnings

*   **Avoid Repeated DOM Traversals in High-Frequency Events:** When listening to events that fire frequently, such as `scroll` or `resize`, querying the DOM repeatedly (e.g., `$('.navbar')`) is a significant performance bottleneck. This leads to increased CPU usage, layout thrashing, and jank, ultimately providing a poor user experience. Always query the DOM once and cache the result in a variable (e.g., `var $navbar = $('.navbar');`) outside of the event handler, then use the cached variable inside the handler. This is especially true when using libraries like jQuery.