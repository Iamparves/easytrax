$(document).ready(function () {
    // Testimonial slider
    $('.testimonial__slider').owlCarousel({
        loop: true,
        items: 3,
        margin: 20,
        autoplay: true,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })

    // Sticky navbar
    const stickyNavbar = () => {
        if (window.scrollY > 0) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }
    }
    stickyNavbar()
    $(window).on('scroll', stickyNavbar)

    // Move to specific section when click on menu link
    $('.navbar__link').on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top - 80
        }, 600);
        $('.navbar__link').removeClass('active')
        $(this).addClass('active');
        e.preventDefault();
    });


    // Mobile Menu
    $('.navbar__menu--open').click(function () {
        $('.navbar__bar, .navbar__menu').toggleClass('active')
    })

    // Preloader
    window.addEventListener("load", function () {
        $('.preloader').addClass('fade');
    });
});