## Aprendizajes Críticos de Rendimiento

- **Optimizaciones de Scroll Handler**: Múltiples escuchadores `$(window).scroll` ejecutando manipulaciones del DOM (e.g., `addClass`, `fadeIn`) causan sobrecarga severa en la ejecución. Consolidar estos escuchadores en uno solo y aplicar "throttling" de 50ms a través de `setTimeout` reduce las ejecuciones lógicas en más de un 90% (de ~126 a ~8 por cada ráfaga de 100 eventos de scroll).
- **Caché de jQuery**: En llamadas de alta frecuencia como listeners de scroll, acceder repetidamente a `$window` y consultar el DOM para `$navbar` o `$backToTop` consume ciclos extras innecesarios. Guardar las referencias de jQuery (`var $window = $(window);`) en el contexto superior del archivo reduce los allocations de memoria significativamente.
