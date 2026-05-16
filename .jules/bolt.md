# Diario de Bolt ⚡

- **Patrón de rendimiento (js/main.js):** Consolidación de eventos scroll. El código original tenía múltiples listeners `$(window).scroll()` independientes (para la Sticky Navbar y el botón Back to Top), ejecutándose en cada evento nativo del navegador (que se dispara frecuentemente). Además, realizaba múltiples búsquedas DOM no cacheadas (`$('.navbar')`, `$('.back-to-top')`) en cada disparo de scroll.
  - **Optimización:** Es fundamental unificar los múltiples listeners en un único manejador de eventos que esté "throttled" con límite (ej. 50ms trailing edge) usando `setTimeout`.
  - **Lazy Caching:** Al mismo tiempo, dentro del manejador de scroll o al inicializarlo de manera externa, buscar y guardar los selectores jQuery (`var $navbar = $('.navbar')`) minimiza de forma crítica el overhead del parseo del DOM, logrando una ejecución mucho más rápida y mitigando re-renders y layouts forzados durante el desplazamiento del usuario.
