
### Scroll Event Handlers
- **Arquitectura**: Los handlers de `$(window).scroll()` originalmente consultaban repetidamente el DOM sin almacenar referencias en caché, y sin limitaciones de frecuencia (throttling).
- **Lección**: Al optimizar botones que aparecen dinámicamente (`.back-to-top`), no modifiques su estado original en el CSS (`display: flex;` -> `display: none;`) si utilizan clases de utilidades o Flexbox, ya que jQuery `fadeIn()` restaurará el elemento con un `display` por defecto, rompiendo el centrado Flexbox. La forma correcta es añadir `style="display: none;"` directamente en el HTML en línea, para que jQuery no pierda el diseño de Flexbox.
