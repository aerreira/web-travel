
## Aprendizaje Crítico: Throttle en Scroll (js/main.js)
Se identificó que el uso de múltiples handlers `$(window).scroll()` sin control de frecuencia provoca ejecuciones excesivas de lógica DOM y recálculo de estilos (pasó de ~500 ejecuciones a 9 al simular un scroll continuo usando un throttle).

**Solución aplicada:**
- Consolidar múltiples lógicas de scroll (sticky navbar y back-to-top) en un solo event listener.
- Implementar un *true throttle* de 50ms, evitando el uso de debounce para capturar correctamente estados intermedios.
- Asegurar que el throttle tenga un *trailing edge* permitiendo que el estado final de la UI (al dejar de hacer scroll) se evalúe correctamente y no quede "atrapado" si el evento final ocurre dentro de los 50ms ignorados.
- Se implementó caché "lazy" de selectores jQuery (`$navbar`, `$backToTop`) dentro del handler consolidado para evitar traversals del DOM redundantes en cada tick válido de scroll.
