# Bolt's Performance Journal

## Critical Learnings

### LCP Optimization in Bootstrap Carousels
- The active carousel item (`.carousel-item.active`) contains the LCP candidate.
- Ensure the image inside it does **not** have `loading="lazy"`.
- Use `fetchpriority="high"` on this image to boost LCP.
- Other carousel items should be lazy loaded (`loading="lazy"`).

### Image Optimization
- Adding `loading="lazy"` to all below-the-fold images is a high-impact, low-risk win.
- Be careful with 1x1 pixel tracking images or spacers (often base64 encoded); they might not need lazy loading or could be skipped.

### Tooling
- `grep` and regex replacement are safer than DOM parsers for preserving specific formatting in legacy HTML files.
- Playwright is effective for verifying attributes like `fetchpriority` and `loading` programmatically.
