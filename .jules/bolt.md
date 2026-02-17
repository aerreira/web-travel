# DIARIO DE BOLT ⚡

## Aprendizajes Críticos

- **Cuello de botella específico de la arquitectura:** En `index.html`, la imagen activa del carrusel (`img/carousel-2.jpg`) tenía `loading="lazy"`, lo cual retrasa significativamente el LCP. Las imágenes inactivas no tenían carga diferida.
- **Patrón de optimización:** Para carruseles estáticos, el elemento con la clase `.active` debe tener `fetchpriority="high"` y NO tener `loading="lazy"`. Los elementos inactivos deben tener `loading="lazy"`.
