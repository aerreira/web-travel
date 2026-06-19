# Diario de Bolt

## Aprendizajes Críticos

- **Arquitectura**: Proyecto de frontend estático usando jQuery y OwlCarousel. No hay un proceso de build automatizado (ni package.json, ni herramientas de build de Node.js).
- **Cuellos de botella potenciales de rendimiento**: Múltiples escuchadores de eventos `$(window).scroll()` en `js/main.js` pueden causar sobrecarga de rendimiento y saltos en la interfaz (jank) al hacer scroll debido a la evaluación síncrona repetitiva.
- **Lecciones aprendidas**: Dado que no hay sistema de build, cualquier intento de añadir dependencias de Node.js ensucia el repositorio. Usaremos Python (`async_playwright`) para pruebas de rendimiento y automatización de interfaz.
