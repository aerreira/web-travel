# Diario de Bolt ⚡

- **Cuello de botella específico**: Encontramos múltiples event listeners separados para `$(window).scroll()` que ejecutaban lógica sin throttling (cambios de clases de navbar y animaciones de fadeIn/fadeOut de botones), causando reflows innecesarios en un evento de alta frecuencia.
- **Optimización de caché**: Cachear el objeto jQuery `$(window)` fuera del listener (ej: `var $window = $(window);`) reduce significativamente la sobrecarga de instanciación continua en cada tick del evento de scroll.
- **Implementación de Throttle Verdadero**: Utilizar un "true throttle" mediante `setTimeout` (evitando llamadas redundantes si un timeout ya está activo) limitando la ejecución a ~50ms previene de forma efectiva la degradación de rendimiento sin sacrificar fluidez, especialmente evitando `requestAnimationFrame` que puede dispararse más rápido de lo necesario.
