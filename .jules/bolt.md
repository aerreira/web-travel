# Bolt Learning Journal ⚡

- **Scroll Event Handlers**: Consolidating multiple scroll event handlers into a single unified listener with lazy selector caching significantly reduces event binding overhead and eliminates repeated DOM traversals.
- **Throttling Scroll Events**: A 50ms true throttle (skipping new timeouts if one is active) with a trailing edge is optimal for high-priority UI updates like sticky navbars.
- **FOUC Prevention**: For elements animated by JavaScript (e.g., `.back-to-top` with jQuery's fadeIn), using inline `style="display: none;"` is preferred over CSS classes to prevent Flash Of Unstyled Content (FOUC), ensuring jQuery restores the original display state.
