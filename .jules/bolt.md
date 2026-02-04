# Bolt Journal

This journal records critical performance learnings, bottlenecks, and specific patterns for the project.

## Critical Learnings
- **LCP Bottleneck**: The LCP image (`img/carousel-2.jpg`) was previously set to `loading="lazy"`, which delays the largest paint. Removing this and adding `fetchpriority="high"` significantly improves perceived load speed.
- **Image Optimization**: Most below-the-fold images were eager loaded. Adding `loading="lazy"` reduces initial network payload and main thread blocking.
