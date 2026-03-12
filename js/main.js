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
        var timeout, context, args, result;
        var previous = 0;
        var later = function() {
            previous = new Date().getTime();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = new Date().getTime();
            if (!previous) previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

    // Sticky Navbar (Optimized with throttling and DOM caching)
    var $navbar = null;
    $(window).scroll(throttle(function () {
        if (!$navbar) $navbar = $('.navbar');
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

    
   // Back to top button (Optimized with throttling and DOM caching)
   var $backToTop = null;
   $(window).scroll(throttle(function () {
    if (!$backToTop) $backToTop = $('.back-to-top');
    if ($(this).scrollTop() > 300) {
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

