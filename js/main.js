(function ($) {
    "use strict";

    // Custom throttle function for high-frequency events
    function throttle(func, delay) {
        var lastCall = 0;
        var timeout = null;
        return function() {
            var context = this;
            var args = arguments;
            var now = new Date().getTime();

            if (now - lastCall < delay) {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(function() {
                    lastCall = now;
                    func.apply(context, args);
                }, delay);
            } else {
                lastCall = now;
                func.apply(context, args);
            }
        };
    }


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
    // Unified scroll listener (throttled) for sticky navbar and back-to-top button
    var $navbar = null;
    var $backToTop = null;

    $(window).scroll(throttle(function () {
        var scrollTop = $(window).scrollTop();

        // Lazy cache selectors
        if (!$navbar) $navbar = $('.navbar');
        if (!$backToTop) $backToTop = $('.back-to-top');

        // Sticky Navbar logic
        if (scrollTop > 45) {
            $navbar.addClass('sticky-top shadow-sm');
        } else {
            $navbar.removeClass('sticky-top shadow-sm');
        }

        // Back to top logic
        if (scrollTop > 300) {
            // Check if it's already visible to avoid unnecessary jQuery animation queues
            if ($backToTop.css('display') === 'none') {
                 $backToTop.fadeIn('slow');
            }
        } else {
             if ($backToTop.css('display') !== 'none') {
                 $backToTop.fadeOut('slow');
             }
        }
    }, 50));

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

