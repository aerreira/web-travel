# Bolt Learnings

## Architectural Bottlenecks
* Repeated DOM traversals (e.g., `$('.navbar')` and `$('.back-to-top')`) inside high-frequency, unthrottled `$(window).scroll()` event handlers severely degrade layout and rendering performance during rapid scrolling. Consolidating the handlers, applying a true 50ms throttle, and lazily caching the jQuery selector objects drastically reduces the computational overhead per scroll tick.

## FOUC with JavaScript Animations
* When relying on JavaScript animations (like jQuery's `fadeIn`) to reveal elements on scroll (like the back-to-top button), use inline CSS `style="display: none;"` rather than CSS classes. This guarantees the initial state is hidden (preventing Flash of Unstyled Content) and allows jQuery to properly calculate and restore the element's original display property (e.g., `display: flex` from Bootstrap) upon revealing it.
