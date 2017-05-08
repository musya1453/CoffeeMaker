(function ($) {

  $(window).load(function () {
    initTabs();
    initSliderGallery();
    initScrollR();
    initHeader();
    initFlexSlider();
    initSliderPartners();
    initSliderPartnersHeight();
    initAnchor();
    initMobileNav();
  });

  $(window).on('resize', function(){
    initSliderPartnersHeight();
  });

  function initMobileNav(){
    var $wrapper = $('.header-wrapper'),
      $btn = $wrapper.find('.btn-menu');

    if(!$btn) return false;

    $btn.on('click touch', function(e){
      e.preventDefault();

      $('body').toggleClass('mobile-nav');
    })

  }

  function initTabs() {
    var $wrapper = $('.b-tabs'),
      $tabNav = $wrapper.find('.tab-nav li a'),
      $items = $wrapper.find('.tab-content .item');

    $items.eq(0).addClass('active');

    $tabNav.on('click touch', function (e) {
      e.preventDefault();
      var $parent = $(this).parent(),
        index = $parent.index();
      $tabNav.parent().removeClass('active');
      $parent.addClass('active');

      $items.removeClass('active');
      $items.eq(index).addClass('active');
    })
  }

  function initAnchor() {
    $(document).ready(function () {
      $('.nav a, .navigation a, .btn-bottom, .logo a').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
      });
      return false;
    });
  }

  function initSliderGallery() {
    $('.section-gallery .slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      infinite: true,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

    var $wrapper = $('.section-gallery'),
      $wrapperSlider = $wrapper.find('>.slider');

    $('.slider-next').on('click', function (e) {
      e.preventDefault();
      $wrapperSlider.slick('slickNext');
    });

    $('.slider-prev').on('click', function (e) {
      e.preventDefault();
      $wrapperSlider.slick('slickPrev');
    });

    $wrapperSlider.on('beforeChange', function () {
      $wrapper.find('.slider-navigation .current').text($wrapperSlider.slick('slickCurrentSlide'))
    });

    var $elems = $wrapper.find('.slick-slide:not(.slick-cloned)');
    $wrapper.find('.slider-navigation .current').text($wrapperSlider.slick('slickCurrentSlide'));
    $wrapper.find('.slider-navigation .total').text($elems.length);

  }

  function initFlexSlider() {
    $('.flexslider').flexslider({
      animation: "slide",
      prevText: "",
      nextText: "",
      slideshowSpeed: 4000
    })
  }

  function initSliderPartners() {

    $('.section-partners .slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },

        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });

  }

  function initSliderPartnersHeight(){
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
    });
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

    if($('html').offset().top<=-50){
      $header.addClass(('style-a'));
    }

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

