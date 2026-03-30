# Diario de Bolt

*   **Anti-patrón de rendimiento detectado:** En `js/main.js` se encontraron múltiples event listeners para el evento `scroll` de la ventana (`$(window).scroll(...)`). Cada manejador ejecutaba consultas directas al DOM repetidamente (ej: `$('.navbar')`, `$('.back-to-top')`) sin ningún mecanismo de throttling.
*   **Lección crítica:** Este patrón causa "layout thrashing" y una alta sobrecarga en el thread principal durante el scroll. La optimización requiere consolidar estos manejadores en un solo listener, implementar un "true throttle" (con trailing edge) y usar "lazy selector caching" (`var $navbar = null; if (!$navbar) $navbar = $('.navbar');`) para evitar traversar el DOM en cada evento de scroll.
