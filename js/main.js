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



    // Throttle function to limit scroll event frequency
    function throttle(func, delay) {
        var lastCall = 0;
        var timeout = null;
        return function () {
            var now = Date.now();
            var args = arguments;
            var context = this;
            if (now - lastCall < delay) {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    lastCall = now;
                    func.apply(context, args);
                }, delay - (now - lastCall));
            } else {
                lastCall = now;
                func.apply(context, args);
            }
        };
    }

    // Sticky Navbar
    var $navbar = $('.navbar');
    var $window = $(window);
    $window.scroll(throttle(function () {
        if ($window.scrollTop() > 45) {
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

    
   // Back to top button
   var $backToTop = $('.back-to-top');
   $window.scroll(throttle(function () {
    if ($window.scrollTop() > 300) {
        $backToTop.fadeIn('slow');
    } else {
        $backToTop.fadeOut('slow');
    }
    }, 100));
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

