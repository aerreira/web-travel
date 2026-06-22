
## Aprendizaje de Rendimiento: Optimización de Eventos Scroll

**Problema:** Múltiples escuchadores del evento `scroll` de ventana sin throttling ejecutando lógica pesada de manipulación del DOM en cada frame de scroll.
**Solución:** Consolidar todos los escuchadores de `scroll` de la ventana (para el Navbar "Sticky" y el botón de "Volver Arriba") en un solo escuchador unificado.
**Mecanismo:** Implementación de un throttle de 50ms (usando `setTimeout`) que salta los "ticks" en progreso para reducir la frecuencia de las llamadas de lógica pesada, sumado al almacenamiento en caché "lazy" de los selectores jQuery (`$('.navbar')` y `$('.back-to-top')`).
**Impacto Medido:** Reducción en la frecuencia de ejecución de lógica del DOM durante eventos de scroll continuo desde 131 ejecuciones hasta solo 9 ejecuciones, ahorrando considerables recursos de CPU y eliminando el lag del scroll de la página.
