### 2025-02-23
- **Scroll Event Throttle**: Found that multiple scroll handlers for sticky navbar and back-to-top button caused redundant DOM traversals. Consolidated these into a unified throttled listener with a 50ms interval and lazy selector caching to improve scroll performance without sacrificing responsiveness.
