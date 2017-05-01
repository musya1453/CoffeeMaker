(function ($) {

  $(window).load(function(){
    initScrollR();
    initHeader();
  });

  function initScrollR() {

    if(document.documentElement.classList.contains('tablet') || document.documentElement.classList.contains('mobile')) {
      return;
    }

    var s = skrollr.init({
      render: function (data) {

      },
      forceHeight: false,
      smoothScrolling: false
    });
  }

  function initHeader(){
    var $header = $('.header-wrapper');

    $(window).bind('scroll', function(){

      var $scroll = $('body').scrollTop();
      if($scroll>=100){
        $header.addClass(('style-a'))
      }else{
        $header.removeClass(('style-a'))
      }
    })
  }

})(jQuery);

