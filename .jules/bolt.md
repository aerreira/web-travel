# Diario de Bolt ⚡

- **Cuello de botella en scroll**: La arquitectura original de `js/main.js` contenía múltiples manejadores `$(window).scroll()` independientes (para el sticky navbar y el back-to-top). Esto causaba overhead por llamadas redundantes y consultas repetitivas al DOM sin caché en cada evento de scroll. La optimización consolidó esto en un único listener con un "true throttle" de 50ms (usando `setTimeout`) y aplicando lazy caching a los selectores de jQuery para mejorar significativamente el rendimiento durante el scroll.
