
### Performance Optimization: Unified Scroll Listener
* **Bottleneck**: The application previously bound multiple `$(window).scroll()` event listeners (one for the sticky navbar, one for the back-to-top button). This meant executing multiple DOM queries (`$('.navbar')` and `$('.back-to-top')`) and condition checks continuously on every scroll tick, causing unnecessary main thread overhead.
* **Solution**: Consolidated the scroll handlers into a single unified event listener.
* **Key Learnings**:
  1. A 50ms throttle interval strikes a perfect balance: it avoids overloading the main thread with scroll calculations, but is still fast enough that UI updates (like the sticky navbar snapping) feel instantaneous to the user.
  2. "Lazy caching" of jQuery selectors inside the throttled handler (`if (!$navbar) $navbar = ...`) guarantees that the DOM is ready without cluttering the global scope, and entirely eliminates repeated DOM traversal during the scroll gesture.
  3. When injecting initial styles like `style="display: none;"` to elements toggled by jQuery animations (like `.fadeIn()`), doing so via inline HTML styles rather than external CSS prevents FOUC while correctly allowing jQuery to override it.
