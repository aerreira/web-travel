## Bolt Journal - Critical Learnings

* **Performance Pattern (jQuery):** In this specific project structure, caching jQuery selectors (e.g., `var $el = $('.class')`) outside of high-frequency event handlers like `scroll` or `resize` is critical to avoid repeated DOM traversals. Direct DOM lookups inside these handlers severely degrade scroll performance due to O(N) lookup complexity in rapid succession.
