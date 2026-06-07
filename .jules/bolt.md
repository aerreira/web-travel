# Diario de Bolt ⚡

## Aprendizajes Críticos y Anti-Patrones de Rendimiento

- **Anti-Patrón de Scroll en Frontend:** Se ha detectado un anti-patrón de rendimiento en `js/main.js` donde se usan múltiples manejadores de eventos `$(window).scroll()` sin "throttling" y con repetidas consultas directas al DOM (por ejemplo, `$('.navbar')`, `$('.back-to-top')`) dentro del callback del evento scroll. Esto puede causar caídas severas de FPS (jank) al hacer scroll debido a la alta frecuencia con la que se dispara el evento y el costo de evaluar selectores del DOM repetidamente.
  - **Solución:** Consolidar todos los callbacks de scroll en un único "listener" centralizado, aplicar un "throttle" verdadero con un timeout de 50ms, y utilizar inicialización "lazy" (lazy caching) para guardar en caché los selectores de jQuery antes de leer y escribir clases/atributos.
