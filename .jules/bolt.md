# Bolt Performance Journal

## ⚡ Critical Learnings & Patterns

### Scroll Event Bottlenecks (DOM Thrashing)
* **Bottleneck:** The Travela template natively uses unthrottled `$(window).scroll()` events that repeatedly execute un-cached jQuery DOM queries (e.g., `$('.navbar')`, `$('.back-to-top')`). This causes massive main-thread overhead during scrolling (thousands of queries).
* **Optimization Pattern:** Unifying multiple scroll listeners into a single handler, caching the jQuery DOM selections outside the event listener, and applying a 50ms throttle (with a trailing edge to guarantee final state execution) drops DOM queries to 0 after initialization and completely resolves the layout thrashing.
* **UI Stability Pattern (FOUC):** When elements like `.back-to-top` are controlled by scroll JavaScript (fading in after a threshold), their HTML source *must* include `style="display: none;"`. Without this, the element flashes visibly on page load before the first scroll event fires.
