# Bolt Journal - Critical Learnings

## Performance Learnings
* **DOM Queries in High-Frequency Events**: In this project, `$(window).scroll()` event handlers repeatedly queried the DOM for elements like `.navbar` and `.back-to-top`. A simple synthetic benchmark showed that caching these jQuery objects (e.g. `var $navbar = $('.navbar')`) before the event handler runs can improve execution speed by ~25% compared to querying the DOM every time the event fires.
