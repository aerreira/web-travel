# Diario de Bolt - Aprendizajes Críticos

## Optimización de Eventos Scroll de Alta Frecuencia
- **Cuello de botella identificado:** Múltiples manejadores de eventos `$(window).scroll()` independientes (e.g., Sticky Navbar, Back to top button) causaban repetidas lecturas del layout, múltiples invocaciones de callbacks no controlados, y recálculos ineficientes.
- **Aprendizaje/Patrón:**
  1. Consolidar múltiples manejadores de `scroll` en un único listener unificado reduce la sobrecarga del enlace de eventos en jQuery.
  2. Aplicar un verdadero throttle (e.g., 50ms saltando timeouts activos, incluyendo el "trailing edge") disminuye la frecuencia de ejecución de lógica pesada de DOM y renderizado durante interacciones rápidas.
  3. Almacenar selectores jQuery repetitivos (como `$navbar` o `$backToTop`) usando inicialización perezosa (lazy caching) y manteniendo una referencia persistente a `$(window)` (e.g., `$window = $(window)`) evita la recreación ineficiente de objetos de jQuery en cada tick del throttle, siendo una técnica vital para el rendimiento en este proyecto.
