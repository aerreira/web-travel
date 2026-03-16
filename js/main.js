(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);



    // International Tour carousel
    $(".InternationalTour-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // packages carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    
   // Throttle function for scroll events
   function throttle(func, wait) {
       var timeout = null;
       var previous = 0;
       return function() {
           var context = this;
           var args = arguments;
           var now = Date.now();
           var remaining = wait - (now - previous);
           if (remaining <= 0 || remaining > wait) {
               if (timeout) {
                   clearTimeout(timeout);
                   timeout = null;
               }
               previous = now;
               func.apply(context, args);
           } else if (!timeout) {
               timeout = setTimeout(function() {
                   previous = Date.now();
                   timeout = null;
                   func.apply(context, args);
               }, remaining);
           }
       };
   }

   // Unified Throttled Scroll Handler
   var $navbar = null;
   var $backToTop = null;

   var handleScroll = throttle(function () {
       var scrollTop = $(window).scrollTop();

       // Cache selectors lazily
       if (!$navbar) $navbar = $('.navbar');
       if (!$backToTop) $backToTop = $('.back-to-top');

       // Sticky Navbar Logic
       if (scrollTop > 45) {
           $navbar.addClass('sticky-top shadow-sm');
       } else {
           $navbar.removeClass('sticky-top shadow-sm');
       }

       // Back to top button logic
       if (scrollTop > 300) {
           $backToTop.fadeIn('slow');
       } else {
           $backToTop.fadeOut('slow');
       }
   }, 50);

   $(window).scroll(handleScroll);

   // Back to top button click
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

