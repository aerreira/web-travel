# Bolt Learnings

- Unified high-frequency events like `$(window).scroll()` using a 50ms true throttle (`setTimeout`) to reduce performance overhead from rapid, continuous event firing.
- Implemented lazy caching of jQuery selectors within throttled events to minimize redundant DOM traversals.
