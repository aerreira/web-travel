# Bolt Journal

## Learned
- **Architecture Bottleneck:** Multiple un-throttled scroll listeners cause unnecessary layout trashing and object recreation on every scroll tick.
- **Optimization:** Consolidating scroll handlers into a single listener, employing a `setTimeout`-based true throttle (e.g., 50ms interval), and lazily caching DOM elements (like `$('.navbar')` and `$('.back-to-top')`) significantly reduces main thread congestion without compromising visual responsiveness.
