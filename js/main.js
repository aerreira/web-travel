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
    // Custom throttle function for high-frequency events
    function throttle(func, limit) {
        var timeout;
        var lastRun = 0;
        return function() {
            var context = this;
            var args = arguments;
            var now = Date.now();
            if (now - lastRun >= limit) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                func.apply(context, args);
                lastRun = now;
            } else if (!timeout) {
                timeout = setTimeout(function() {
                    func.apply(context, args);
                    lastRun = Date.now();
                    timeout = null;
                }, limit - (now - lastRun));
            }
        };
    }

    // Consolidated scroll handlers with lazy selector caching
    var $navbar = null;
    var $backToTop = null;
    $(window).scroll(throttle(function () {
        var scrollTop = $(this).scrollTop();

        // Sticky Navbar
        if (scrollTop > 45) {
            if (!$navbar) $navbar = $('.navbar');
            $navbar.addClass('sticky-top shadow-sm');
        } else {
            if (!$navbar) $navbar = $('.navbar');
            $navbar.removeClass('sticky-top shadow-sm');
        }

        // Back to top button
        if (scrollTop > 300) {
            if (!$backToTop) $backToTop = $('.back-to-top');
            $backToTop.fadeIn('slow');
        } else {
            if (!$backToTop) $backToTop = $('.back-to-top');
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
   // Back to top button
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

