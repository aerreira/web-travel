# Bolt - Aprendizajes Críticos

- **Anti-patrón de rendimiento encontrado**: Eventos de alta frecuencia (como `scroll` o `resize`) sin throttler, combinados con múltiples listeners separados (`$(window).scroll(...)` x2 en `main.js`) y consultas repetidas al DOM en cada tick del evento. Esto satura el hilo principal (main thread).
- **Solución implementada**: Unificación de listeners en uno solo, cacheo lazy de selectores jQuery dentro del event handler para evitar traversing repetido, e implementación de un *true throttle* de 50ms usando `setTimeout` (saltando timeouts activos) para capturar el estado final.
