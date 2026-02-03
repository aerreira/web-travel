# DIARIO DE BOLT - APRENDIZAJES CRÍTICOS

## Patrones de Rendimiento
- **LCP Anti-Pattern**: El template original incluía `loading="lazy"` explícitamente en la imagen activa del carrusel (`img/carousel-2.jpg`). Esto retrasa el Largest Contentful Paint (LCP). Las imágenes "Above the Fold" (especialmente la LCP) nunca deben ser lazy-loaded.
