## APRENDIZAJES CRÍTICOS - FRONTEND

* **Optimización de Eventos Scroll**: Consolidar múltiples manejadores `$(window).scroll()` no agrupados en un solo `EventListener` unificado mejora el rendimiento. Más importante aún, envolver la lógica en un **throttle** verdadero (usando `setTimeout` a 50ms) en lugar de una ejecución en cada tick del evento evita el bloqueo excesivo de re-renders durante el desplazamiento rápido.
* **Caché de Selectores**: Al mover referencias como `$(window)` o `$('.navbar')` fuera del manejador del evento y almacenarlas en variables (e.g. `var $navbar = $('.navbar');`), se ahorra la penalización en rendimiento de recrear objetos de jQuery o recorrer el DOM repetidamente en operaciones de alta frecuencia.
