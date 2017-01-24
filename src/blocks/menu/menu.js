$(function () {
  let $links = $('.menu__link'),
      $dropdown = $('.menu__item_dropdown'),
      $sublinks = $('.sub-menu__link');

  $links.hover(function () {  // in
    $(this).stop().animate({
      backgroundColor: 'maroon'
    }, 300);
  }, function () {  // out
    $(this).stop().animate({
      backgroundColor: '#333'
    }, 300);
  });

  $dropdown.hover(function () { // in
    $(this).children('.sub-menu').stop().animate({
      height: 'toggle'
    }, 300);
  }, function () {  // out
    $(this).children('.sub-menu').stop().animate({
      height: 'toggle'
    }, 300);
  });

  $sublinks.hover(function () { // in
    $(this).stop().animate({
      backgroundColor: '#cc8400',
      color: '#000',
    }, 300);
  }, function () {  // out
    $(this).stop().animate({
      backgroundColor: '#333',
      color: '#fefefe'
    }, 300);
  });

});
