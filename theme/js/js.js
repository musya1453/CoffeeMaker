(function ($) {

  $(window).load(function () {
    initScrollR();
    initHeader();
    initFlexSlider();
    initSliderPartners();
  });

  function initFlexSlider() {
    $('.flexslider').flexslider({
      animation: "slide",
      prevText: "",
      nextText: "",
      slideshowSpeed: 4000

    });
  }

  function initSliderPartners() {
    $('.section-partners .slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000
    });

    var $wrapper = $('.section-partners .slider .slick-track'),
      $elems = $wrapper.find('>.slick-slide'),
      heightEl = 0;

    $elems.find('img').each(function () {
      if ($(this).height() > heightEl) {
        heightEl = $(this).height();
      }
    });

    $elems.each(function () {
      $(this).height(heightEl);
    })
  }

  function initScrollR() {

    if (document.documentElement.classList.contains('tablet') || document.documentElement.classList.contains('mobile')) {
      return;
    }

    var s = skrollr.init({
      render: function (data) {

      },
      forceHeight: false,
      smoothScrolling: false
    });
  }

  function initHeader() {
    var $header = $('.header-wrapper');

    $(window).bind('scroll', function () {

      var $scroll = $('body').scrollTop();
      if ($scroll >= 100) {
        $header.addClass(('style-a'))
      } else {
        $header.removeClass(('style-a'))
      }
    })
  }

})(jQuery);

