## Aprendizajes Críticos de Rendimiento

- **Optimizaciones de Eventos Scroll**: Agrupar múltiples escuchas de eventos de scroll (ej. un manejador para "sticky navbar" y otro para el botón de "back-to-top") en un único `$(window).on('scroll')` unificado y acelerado mediante `requestAnimationFrame` reduce dramáticamente la frecuencia de ejecución (de ~1000 llamadas nativas a ~32 llamadas). Cachear los selectores de jQuery (`$(window)`, `$('.navbar')`) fuera del manejador evita búsquedas costosas continuas en el DOM.
