# Bolt Diary

## Critical Learnings

### Performance Patterns
- **LCP Optimization in Carousels:** The active item in a Bootstrap carousel is the LCP element. It must be eager-loaded (remove `loading="lazy"`) and prioritized (`fetchpriority="high"`). Inactive items must be lazy-loaded (`loading="lazy"`) to save bandwidth and reduce contention.

### Verification
- **Visual Regression:** Playwright screenshots are effective for verifying that attribute changes didn't break layout, but binary artifacts (`.png`) and test scripts must be cleaned up before submission to avoid polluting the repo.

### Process
- **Groundedness:** Always use `grep` or `read_file` to confirm specific filenames (e.g., `carousel-2.jpg` was the active one here) before applying patches, as assumptions can lead to incorrect edits.
