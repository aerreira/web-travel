# Bolt Learnings

- **Architecture Bottleneck:** The main `js/main.js` file bound two separate scroll listeners (`$(window).scroll`) for the sticky navbar and the back-to-top button. These fired rapidly during scrolling, causing high-frequency DOM manipulation/checks and leading to potential main thread blocking.
- **Optimization Strategy:** Combining the scroll handlers into one unified and throttled listener (using a 50ms `setTimeout`) with lazy caching of jQuery DOM selectors drastically minimizes execution frequency and DOM traversing.
- **Why this works:** The throttle skip technique effectively acts as a 50ms interval executor, preventing execution during intermediate scroll points without sacrificing responsiveness, since 50ms is within typical UI perception limits for scrolling effects.
