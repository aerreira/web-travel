# Bolt's Journal

## Critical Learnings

### Architecture
*   **Static Site:** The project is a static website (HTML/CSS/JS) without a build system.
*   **File Formatting:** Files contain mixed line endings (CRLF and LF). Scripts modifying files must use regex or string replacement (preserving `newline=''`) instead of DOM parsers to prevent excessive diffs.

### Performance Patterns
*   **LCP vs Lazy Loading:** The Largest Contentful Paint (LCP) element (e.g., active carousel image) must be eager-loaded (default), while below-the-fold images should be lazy-loaded (`loading="lazy"`).
