# Diario de Bolt

## Aprendizaje de Rendimiento: Eventos de Scroll y requestAnimationFrame
- **Cuello de botella:** Múltiples `$(window).scroll()` se activaban cientos de veces por segundo, ejecutando comprobaciones del DOM y manipulación de clases ineficientemente en cada pequeño movimiento.
- **Optimización:** Consolidación de todos los listeners de scroll en un único manejador unificado usando `requestAnimationFrame` (throttling), logrando reducir la frecuencia de ejecución de lógica del DOM a los frames nativos del navegador. También se implementó caché de selectores jQuery fuera del bucle de scroll (`$window`, `$navbar`, `$backToTop`).
- **Impacto medido:** Las ejecuciones de la lógica dentro del scroll listener se redujeron de 250 a 68 (~73% de reducción en carga computacional), mejorando significativamente el frame rate y la respuesta visual.
