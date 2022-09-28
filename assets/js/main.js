(function ($) {
  "use strict";

  $('.mn_btn, .siteBar-btn').on('click', function () {
    $('.mobile-menu').toggleClass('open');
  })


  // owlCarousel
  $(".services_slider").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    items: 3,
    navText: [
      '<i class="fal fa-chevron-left"></i>',
      '<i class="fal fa-chevron-right"></i>'
    ],
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      767: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });
  $(".testimonails").owlCarousel({
    loop: true,
    items: 2,
    nav: false,
    dots: true,
    margin: 35,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });


  $(".ab_slider").owlCarousel({
    loop: true,
    items: 2,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-square-left"></i>',
      '<i class="fas fa-chevron-square-right"></i>'
    ],
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      }
    }
  });


  /* magnificPopup img view */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });


  $('select').niceSelect();

  AOS.init();

})(jQuery);

