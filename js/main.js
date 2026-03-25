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


    // Throttle utility
    function throttle(func, wait) {
        let timeout = null;
        let lastArgs = null;
        let context = null;
        return function(...args) {
            lastArgs = args;
            context = this;
            if (!timeout) {
                func.apply(context, lastArgs);
                lastArgs = null;
                timeout = setTimeout(() => {
                    timeout = null;
                    if (lastArgs) {
                        func.apply(context, lastArgs);
                        lastArgs = null;
                    }
                }, wait);
            }
        };
    }

    // Consolidated Scroll Listener with lazy selector caching
    var $navbar = null;
    var $backToTop = null;

    $(window).scroll(throttle(function () {
        if (!$navbar) $navbar = $('.navbar');
        if (!$backToTop) $backToTop = $('.back-to-top');

        var scrollTop = $(this).scrollTop();

        // Sticky Navbar
        if (scrollTop > 45) {
            $navbar.addClass('sticky-top shadow-sm');
        } else {
            $navbar.removeClass('sticky-top shadow-sm');
        }

        // Back to top button visibility
        if (scrollTop > 300) {
            $backToTop.fadeIn('slow');
        } else {
            $backToTop.fadeOut('slow');
        }
    }, 50));

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


   // Back to top button click handler
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);
