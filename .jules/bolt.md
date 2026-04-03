# Bolt Learning Log

## Architectural Bottleneck: Scroll Events
- **Issue**: Multiple `$(window).scroll()` handlers existed in `js/main.js`, each performing DOM traversals (e.g., `$('.navbar')`) repeatedly on every scroll event, creating a performance bottleneck.
- **Solution**: Consolidated scroll logic into a single unified listener with a true 50ms `setTimeout` throttle (skipping active timeouts) and implemented lazy selector caching (`if (!$navbar) $navbar = $('.navbar');`). This minimizes event binding overhead and DOM query costs during high-frequency scroll operations.
