# Bolt's Performance Diary

## CRITICAL LEARNINGS
- **Event Handler Consolidation & Throttling:** Multiple unthrottled scroll handlers performing DOM queries inside jQuery event callbacks create severe performance bottlenecks due to layout thrashing and high-frequency execution. Consolidating them into a single listener, applying a 50ms throttle via setTimeout, and caching DOM selectors lazily (e.g., `if (!$el) $el = $('.class')`) significantly reduces computation frequency while preserving functionality.
