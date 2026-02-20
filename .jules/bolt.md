# Bolt's Journal

## Critical Learnings

- **Performance Pattern**: The LCP element (e.g., active carousel item) must be eager-loaded (remove `loading="lazy"`, add `fetchpriority="high"`), while below-the-fold images must be lazy-loaded.
