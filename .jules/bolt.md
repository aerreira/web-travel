# Bolt Diary

## Critical Learnings
- **Project Specific Performance Anti-Pattern**: High-frequency scroll handlers (`$(window).scroll`) querying the DOM on every event tick (`$('.navbar')`, `$('.back-to-top')`). This causes massive layout thrashing and excessive object creation.
- **Optimization Strategy**: Always consolidate window scroll listeners into a single unified listener, use a 50ms "true throttle" (via `setTimeout` skipping active timeouts, with a trailing edge), and lazily cache jQuery DOM selectors to eliminate repeated traversals.
