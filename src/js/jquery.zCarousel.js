(function ($) {

  // Public methods
  let methods = {
    init: function (options) {

      // Creating plugin settings from default + user settings
      let settings = $.extend({
        backgroundColor: 'transparent',
        fontSize: '16px',
        color: '#333',
        hoverColor: '#1e90ff'
      }, options);

      // Carousel elements
      let $carousel = this,
          $carouselList = $('.zCarousel__list'),
          $carouselItem = $('.zCarousel__link'),
          $controlPrev = $('.zCarousel__control_prev'),
          $controlNext = $('.zCarousel__control_next'),
          $carouselItemText = $('.zCarousel__text');

      // Positioning values
      let pixelOffset = 125,
          currentOffsetValue = 0,
          elementsCount = $('.zCarousel__item').length,
          maximumOffset = -((elementsCount - 5) * pixelOffset);

      // Basic styling
      $carousel.css({
        'background-color' : settings.backgroundColor
      });

      $carouselItemText.css({
        'color' : settings.color,
        'font-size' : settings.fontSize
      });

      // Carousel events
      $carouselItem.hover(function () {
        // in
        $(this).children($carouselItemText).css({
          textDecoration : 'underline',
          color: settings.hoverColor
        });
      }, function () {
        // out
        $(this).children($carouselItemText).css({
          textDecoration : 'none',
          color: settings.color
        });
      });

      $controlPrev.click(function (e) {
        e.preventDefault();
        offsetLeft();
      });

      $controlNext.click(function (e) {
        e.preventDefault();
        offsetRight();
      });

      function offsetLeft() {
        if (currentOffsetValue !== 0) {
          currentOffsetValue += pixelOffset;
          $carouselList.stop().animate({
            left: currentOffsetValue + 'px'
          }, 400);
        }
      }

      function offsetRight() {
        if (currentOffsetValue !== maximumOffset) {
          currentOffsetValue -= pixelOffset;
          $carouselList.stop().animate({
            left : currentOffsetValue + 'px'
          }, 400);
        }
      }

      return this;
    }
  };

  // adding our plugin to $.fn
  $.fn.zCarousel = function (method) {
    if (methods[method]) {
      return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || ! method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('There is no method named ' +  method + ' in jquery.zCarousel plugin' );
    }
  };

}(jQuery));
