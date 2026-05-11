# DIARIO DE BOLT ⚡

## Aprendizajes Críticos de Rendimiento

### 1. Consolidación y Throttling de Eventos Scroll
- **Cuello de Botella:** El proyecto estático vinculaba múltiples manejadores `$(window).scroll()` no regulados para diferentes elementos UI (navbar pegajoso, botón volver arriba). Esto causaba ejecuciones redundantes de lógica pesada de DOM por cada píxel desplazado.
- **Lección:** Consolidar todos los eventos de scroll en un único "listener" implementando un *true throttle* de 50ms con *trailing edge*. Esto asegura que la lógica se ejecute a intervalos regulares reduciendo el uso del hilo principal, sin perder el estado final. Además, es vital usar almacenamiento en caché perezoso (lazy caching) para selectores repetitivos como `$('.navbar')` para evitar recorridos DOM continuos.
