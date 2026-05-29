# Diario de Bolt ⚡

- **Cuello de botella de rendimiento en scroll:** El manejo de eventos `$(window).scroll()` sin throttle ni debounce provoca una alta carga en la renderización, ya que el evento de desplazamiento puede dispararse decenas o cientos de veces por segundo. Esto se agrava si hay múltiples handlers para el mismo evento en el mismo archivo (ej. `sticky-top` para la navbar y el botón `back-to-top`).
- **Optimización aplicada:**
  - **Consolidación:** Combinar los múltiples manejadores del evento scroll en uno solo, evitando registrar múltiples listeners costosos.
  - **Caché diferida (Lazy DOM caching):** Inicializar los selectores como nulos al inicio de la función y consultarlos (ej. `if (!$navbar) $navbar = $('.navbar');`) para evitar buscar en el DOM (re-traversing) en cada iteración del evento.
  - **Throttle con trailing-edge de 50ms:** Implementar un mecanismo genuino de throttle que ejecute la lógica y no la demore infinitamente si el scroll es continuo. Se agregó un trailing-edge para garantizar que el estado de la UI (la visibilidad de los elementos) se capture en el valor final del desplazamiento después de la pausa.
- **Lección clave:** No uses RequestAnimationFrame para este proyecto ni debounce (que reestablece el timer). Usa un throttle estricto y combina los observadores bajo un solo listener de ventana principal para máxima eficiencia, como exigen las guías del proyecto.
