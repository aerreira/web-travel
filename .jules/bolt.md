# Bolt Journal

## Critical Learnings

- **LCP Anti-Pattern:** The active carousel image (LCP candidate) was explicitly set to `loading="lazy"`. This delayed the LCP significantly. The fix was to remove `loading="lazy"` and add `fetchpriority="high"`.
- **Lazy Loading Strategy:** Below-the-fold images were eager loaded by default. Adding `loading="lazy"` to all non-LCP images reduces initial network contention and improves page load performance.
