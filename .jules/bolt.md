# Bolt's Performance Diary

## Critical Learnings

- **Active Carousel Image LCP:** The template uses `loading="lazy"` on the active carousel item by default, which delays LCP. This must be removed and replaced with `fetchpriority="high"`.
- **Image Loading Strategy:** Most off-screen images are eager-loaded by default. Adding `loading="lazy"` to all images below the fold is a high-impact optimization.
- **File Formatting:** `index.html` contains mixed line endings (CRLF/LF). Editing tools must preserve this to avoid massive diffs.
