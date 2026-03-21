# Diario de Bolt ⚡

Este archivo registra aprendizajes críticos sobre el rendimiento específicos de este proyecto para evitar repetir errores y tomar mejores decisiones en el futuro.

## 1. Eventos de Scroll de Alta Frecuencia

- **Problema:** En `js/main.js`, había múltiples manejadores de eventos `$(window).scroll()` independientes para la "Sticky Navbar" y el botón "Back to top". Esto causaba una sobrecarga de eventos al desplazarse, impactando negativamente el rendimiento debido a múltiples vinculaciones y ejecuciones por cada pixel de desplazamiento.
- **Aprendizaje Crítico:** Para las optimizaciones de rendimiento basadas en el scroll en este repositorio, la lógica de la UI relacionada con el scroll en `js/main.js` debe consolidarse en un **único listener unificado y acelerado (throttled)** con un retraso de `50ms`. Un retraso de 50ms es el preferido para actualizaciones de UI de alta prioridad como las barras de navegación pegajosas (sticky navbars), asegurando la capacidad de respuesta y reduciendo en gran medida el número de llamadas a funciones y recorridos del DOM.
- **Implementación:** Al implementar funciones "throttle" para eventos de alta frecuencia (como el scroll), asegúrate de que sea un *verdadero throttle* (disparándose a intervalos regulares, por ejemplo, omitiendo nuevos timeouts si hay uno activo) en lugar de un debounce (que limpia el timeout en cada evento), y siempre incluye un 'trailing edge' (borde final) para capturar el estado final.
- **Mejora del DOM:** El almacenamiento en caché diferido (lazy caching) de los selectores de jQuery (por ejemplo, `var $el = null; ... if (!$el) $el = $('.class')`) dentro del manejador de scroll de alta frecuencia debe utilizarse para garantizar que el DOM esté listo y, al mismo tiempo, eliminar por completo los recorridos repetidos e innecesarios del DOM.
