# BOLT LOG - CRITICAL LEARNINGS ONLY

- Memory indicates we MUST adhere to a 50ms "true throttle" implemented via setTimeout that skips active timeouts. Do NOT use `requestAnimationFrame` for throttling high-frequency events like scroll, as it is contrary to the project architecture.
- Memory also indicates we MUST cache the `$(window)` object itself as a persistent reference.
- Secondary logic execution counter must be injected distinct from native event counter to demonstrate reduction.
