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
    // Throttle utility to limit function execution frequency
    // Performance improvement: reduces the number of times the scroll event fires
    function throttle(func, delay) {
        var timeout = null;
        var lastExec = 0;
        return function () {
            var context = this;
            var args = arguments;
            var elapsed = Date.now() - lastExec;

            var exec = function () {
                lastExec = Date.now();
                func.apply(context, args);
            };

            if (!timeout) {
                if (elapsed >= delay) {
                    exec();
                } else {
                    timeout = setTimeout(function () {
                        timeout = null;
                        exec();
                    }, delay - elapsed);
                }
            }
        };
    }

    // Consolidated Scroll Listener (Sticky Navbar & Back to top button)
    // Performance improvement: Caching the jQuery object prevents
    // re-querying the DOM on every scroll event, which reduces overhead.
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

        // Back to top button
        if (scrollTop > 300) {
            $backToTop.fadeIn('slow');
        } else {
            $backToTop.fadeOut('slow');
        }
    }, 50));

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

