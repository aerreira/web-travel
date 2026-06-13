# Diario de Bolt ⚡

- **[Rendimiento / Scroll]** En este proyecto, consolidar múltiples listeners `$(window).scroll()` en un solo manejador unificado usando un *throttle verdadero* (50ms) y combinando el caché perezoso (lazy caching) de selectores del DOM reduce drásticamente las ejecuciones redundantes de lógica (de ~200 ejecuciones a 17 en simulaciones de alta frecuencia).
