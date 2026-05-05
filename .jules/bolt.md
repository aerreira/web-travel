# Diario de Bolt ⚡

## Aprendizajes Críticos

* **Consolidación y Throttling de Eventos de Scroll:** En arquitecturas de plantillas estáticas como Travela, múltiples lógicas dependientes del scroll (como el sticky navbar y el botón back-to-top) suelen implementarse como event listeners separados de `$(window).scroll()` sin ningún tipo de límite de frecuencia. Esto inunda el hilo principal (main thread) con consultas al DOM (`$(this).scrollTop()`) durante eventos de alta frecuencia.
  * **Optimización Exitosa:** Consolidar estos listeners en una única función y aplicar un "true throttle" (usando `setTimeout` con verificación de estado pendiente en lugar de limpieza en cada evento, garantizando la ejecución del borde de salida/trailing edge).
  * **Caché Perezoso (Lazy Caching):** Además del throttling, el rendimiento mejora drásticamente al usar variables persistentes (ej., `$window`, `$navbar`) que se inicializan en la primera ejecución. Esto evita reconstruir objetos jQuery en cada "tick" permitido del scroll.
