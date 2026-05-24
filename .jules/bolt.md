## Aprendizajes Críticos de Rendimiento

* **Cuellos de botella arquitectónicos:** Múltiples listeners de eventos de scroll sin regular (`$(window).scroll()`) estaban causando una sobrecarga en la CPU y en la manipulación del DOM (búsquedas repetitivas no cacheadas como `$('.navbar')` o `$('.back-to-top')`) durante interacciones de alta frecuencia.
* **Solución y patrón a seguir:** Consolidar estos listeners en un único manejador unificado con un "true throttle" (usando `setTimeout` a 50ms, saltando nuevos timeouts si uno está activo, y capturando el "trailing edge") combinado con "lazy caching" para los selectores del DOM. Esto reduce enormemente la frecuencia de ejecución y las consultas repetitivas al DOM, mejorando la respuesta general de la página.
