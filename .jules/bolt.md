# Bolt's Journal

## Critical Learnings

### Performance Patterns
- **LCP in Carousels**: Standard carousels (like Bootstrap or OwlCarousel) often treat all slides equally, leading to lazy-loading on the first (LCP) image. This is a critical bottleneck. Always verify the first slide has `loading="eager"` (or no `loading` attribute) and `fetchpriority="high"`.
- **Base64 Injection**: Libraries like OwlCarousel may inject base64 spacer images. Automated auditing scripts should account for these data URIs to avoid false positives when checking for missing `loading="lazy"`.
