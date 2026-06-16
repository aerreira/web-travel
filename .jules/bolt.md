# Diario de Bolt ⚡

### Aprendizaje: Optimización de Eventos Scroll en jQuery

- **Contexto**: Este proyecto tenía múltiples escuchadores de eventos `$(window).scroll()` (uno para el navbar sticky, otro para el botón back-to-top) sin ningún tipo de límite de frecuencia (throttle/debounce).
- **Problema de Rendimiento**: Disparar eventos scroll cientos de veces por segundo causa "layout thrashing", recalculando el DOM repetidamente e instanciando el objeto jQuery (`$(this)`) innecesariamente en cada iteración.
- **Solución implementada**:
  1. Consolidación de múltiples funciones en un solo evento `scroll`.
  2. Implementación de un "True Throttle" (frecuencia estricta de 50ms) usando `setTimeout` y retornando tempranamente si el timeout ya está activo.
  3. Almacenamiento en caché de selectores (`$window`, `$navbar`, `$backToTop`) con inicialización perezosa (lazy init) dentro del handler de throttle, evitando que jQuery recorra el DOM cientos de veces por segundo.
- **Impacto**: Reducción del número de ejecuciones de lógica de control en scroll rápido desde cientos a apenas 8 (medido en mock). Mejora considerablemente el rendimiento y los frames per second durante el scrolling en la interfaz.
