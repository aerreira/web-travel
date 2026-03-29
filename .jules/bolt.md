# Diario de Bolt ⚡

* **2024-XX-XX:** Implementada consolidación y throttling de eventos `scroll`.
  * *Aprendizaje Arquitectónico:* La plantilla usaba múltiples listeners de `$(window).scroll()` sin control de frecuencia (unbounded), causando recalculación de estilos y bloqueos del hilo principal en cada frame de scroll.
  * *Patrón de rendimiento:* Consolidar todos los eventos de scroll de la UI (navbar sticky, botón back-to-top) en un solo listener con un `throttle` de 50ms y caché perezoso de selectores DOM (`$navbar`, `$backToTop`) elimina el overhead de `window.scroll` sin sacrificar la respuesta visual.
  * *Anti-patrón encontrado:* El botón `.back-to-top` dependía exclusivamente de jQuery `fadeIn`/`fadeOut` para su visibilidad inicial, lo que puede causar FOUC (Flash of Unstyled Content). Añadir `style="display: none;"` en línea previene esto y permite a jQuery restaurar correctamente el estado de visualización a `flex`.
