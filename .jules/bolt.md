## APRENDIZAJES CRÍTICOS - BOLT ⚡

### Optimizaciones Frontend
- **Eventos de Scroll:** Los eventos `scroll` nativos pueden dispararse cientos de veces por segundo. Manejadores (handlers) no optimizados que consultan el DOM múltiples veces (ej. `$this.scrollTop()`, `$('.navbar')`) dentro de estos eventos son cuellos de botella comunes.
- **`requestAnimationFrame`:** Utilizar `requestAnimationFrame` en lugar de `setTimeout` o ejecución directa para estrangular (throttle) el evento `scroll` alinea la ejecución lógica con el ciclo de repintado (repaint) del navegador. Esto evita la pérdida de cuadros (frame drops) mientras se preserva una UX muy fluida en animaciones ligadas al scroll como barras de navegación pegajosas (sticky) o botones.
- **Consolidación y Caché:** Unificar múltiples oyentes (listeners) del mismo evento en uno solo reduce la sobrecarga de la gestión de eventos del navegador. Referencias en caché (ej. guardar un elemento jQuery en una variable fuera del handler) evita consultas costosas constantes al DOM.
