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



    // ⚡ Bolt Performance Optimization:
    // Consolidated and throttled scroll listener with lazy DOM caching
    // Reduces DOM query thrashing and event handler frequency.
    var $window = $(window);
    var $navbar = null;
    var $backToTop = null;
    var scrollThrottleTimeout = null;

    $window.scroll(function () {
        if (!scrollThrottleTimeout) {
            scrollThrottleTimeout = setTimeout(function () {
                // Lazily cache selectors to avoid redundant DOM queries
                if (!$navbar) {
                    $navbar = $('.navbar');
                    $backToTop = $('.back-to-top');
                }

                var scrollTop = $window.scrollTop();

                // Sticky Navbar logic
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

                scrollThrottleTimeout = null;
            }, 50); // 50ms true throttle
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
