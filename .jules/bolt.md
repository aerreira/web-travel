# Diario de Bolt ⚡

- **Patrón de rendimiento en eventos de scroll**: Múltiples handlers `$(window).scroll()` (como para el "Sticky Navbar" y "Back to top button") se evaluaban repetidamente en cada mínimo scroll. Adicionalmente, re-evaluaban y recorrían el DOM usando selectores de jQuery (`$('.navbar')`, `$('.back-to-top')`) dentro del handler. Para evitar este layout thrashing, es indispensable aplicar un `throttle` (con *trailing edge*) y cachear todos los selectores jQuery fuera del evento scroll. Retrasos recomendados: 50ms para la UI crítica (como navbars fijos).
