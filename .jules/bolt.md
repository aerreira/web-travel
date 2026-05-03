# Diario de Bolt ⚡

* **Cuello de botella (Scroll Events):** La arquitectura inicial del proyecto ataba múltiples listeners de jQuery (`$(window).scroll()`) directamente al evento de scroll sin ningún mecanismo de throttling. Esto causaba re-evaluaciones masivas (layout thrashing) y consultas redundantes al DOM (`$('.navbar')`, `$('.back-to-top')`) docenas de veces por segundo durante el scroll.
* **Patrón de rendimiento (Throttling y Caching):** La consolidación de estos listeners en una única función con un "true throttle" de 50ms y el "lazy caching" de los selectores jQuery (`if (!$navbar) $navbar = $('.navbar');`) reduce drásticamente el impacto en el hilo principal sin sacrificar la respuesta visual.
