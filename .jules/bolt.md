# Bolt Diary

## Critical Learnings

*   **Performance Pattern:** The Largest Contentful Paint (LCP) element (e.g., active carousel image) must be eager-loaded (`loading="eager"` or simply no `loading` attribute) and prioritized (`fetchpriority="high"`), while below-the-fold images (including inactive carousel items) should be lazy-loaded (`loading="lazy"`).
