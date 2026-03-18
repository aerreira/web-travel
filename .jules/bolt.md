# Bolt Performance Journal

## Learnings
* **Scroll Events Bottleneck:** The application initially bound multiple independent `$(window).scroll()` event listeners (one for the sticky navbar and another for the back-to-top button). This anti-pattern caused redundant layout calculations and DOM queries on every scroll frame.
* **Consolidation Pattern:** By consolidating scroll logic into a single throttled event listener (50ms) and lazy-loading jQuery selectors, we significantly reduce Main Thread blocking during scroll. We must use a true throttle (firing consistently and guaranteeing a trailing edge execution) rather than a simple debounce for scroll tracking.
