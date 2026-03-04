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


    // Utility function: Throttle with trailing edge
    function throttle(func, wait) {
        var timeout;
        var lastRun = 0;
        return function() {
            var context = this;
            var args = arguments;
            var elapsed = Date.now() - lastRun;
            var execute = function() {
                lastRun = Date.now();
                timeout = null;
                func.apply(context, args);
            };
            if (!timeout) {
                if (elapsed >= wait) {
                    execute();
                } else {
                    timeout = setTimeout(execute, wait - elapsed);
                }
            }
        };
    }

    // Sticky Navbar (Optimized: Cached selector & 50ms throttle)
    var $navbar = $('.navbar');
    $(window).scroll(throttle(function () {
        if ($(this).scrollTop() > 45) {
            $navbar.addClass('sticky-top shadow-sm');
        } else {
            $navbar.removeClass('sticky-top shadow-sm');
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

    
   // Back to top button (Optimized: Cached selector & 100ms throttle)
   var $backToTop = $('.back-to-top');
   $(window).scroll(throttle(function () {
    if ($(this).scrollTop() > 300) {
        $backToTop.fadeIn('slow');
    } else {
        $backToTop.fadeOut('slow');
    }
    }, 100));
    $backToTop.click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

