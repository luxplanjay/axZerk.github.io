$(function () {
  let $checkboxes = $('.check'),
      $labels = $('.check-label');

  $checkboxes.each(function () {
    addSpanToCheckbox($(this));
  });

  $labels.hover(function () {
    $(this).animate({
      color: '#900'
    }, 100);
  }, function () {
    $(this).animate({
      color: '#000'
    }, 100);
  });

  // Creating new span>input elements and removing old inputs
  function addSpanToCheckbox(el) {
      let newElName = el.attr('name'),
          newElID = el.attr('id'),
          newElClass = el.attr('class');

      // This is what goes after current input as new element
      let string = '<span class = ' + '"' + newElClass + '"' + '>'
                  + '<input type = "checkbox"' + ' '
                  + 'name = ' + '"' + newElName + '"' + ' '
                  + 'id = ' + '"' + newElID + '"' + '></span>';

      // attaching 'string' after current input
      el.after(string);

      // newEl equals new span with inner input
      let newEl = el.next();

      // hiding inner input with opacity 0 and w\h 0
      newEl.find('input').addClass('check_hidden');

      // binding click event to created element
      newEl.bind('click', function(e) {
        changeCheckbox($(this)) ;
      });

      // removing old input
      el.remove();
  }

  // adding/removing checked attribute for input and class for span
  function changeCheckbox(el) {
    let input = el.find('input');

    if ( el.hasClass('checked') ) {
      input.attr('checked', false);
      el.removeClass('checked');
    } else {
      input.attr('checked', true);
      el.addClass('checked');
    }
  }

});

$(function () {
  // init
  $('.jcarousel').jcarousel({});

  // Carousel prev\next controls
  let controlPrev = $('.jcarousel-prev'),
      controlNext = $('.jcarousel-next');

  controlPrev.jcarouselControl({
      target: '-=1'
  });

  controlPrev.hover(function () { // in
    $(this).animate({
      backgroundColor: '#cc8400',
      color: '#000'
    }, 250);
  }, function () { //out
    $(this).animate({
      backgroundColor: '#333',
      color: '#fefefe'
    }, 250);
  });

  controlNext.jcarouselControl({
      target: '+=1'
  });

  controlNext.hover(function () { // in
    $(this).animate({
      backgroundColor: '#cc8400',
      color: '#000'
    }, 250);
  }, function () { //out
    $(this).animate({
      backgroundColor: '#333',
      color: '#fefefe'
    }, 250);
  });

  // Carousel pagination
  let pagination = $('.jcarousel-pagination');

  pagination.jcarouselPagination({
       item: function(page) {
         return '<a href="#' + page + '">' + page + '</a>';
       }
   });

   // making first link active on page load
   $('.jcarousel-pagination a:first-child').animate({
     backgroundColor: '#fefefe',
     color: '#333'
   }, 100);

  pagination
    .on('jcarouselpagination:active', 'a', function() {
        $(this).animate({
          backgroundColor: '#fefefe',
          color: '#333'
        }, 250);
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).animate({
          backgroundColor: '#333',
          color: '#fefefe'
        }, 250);
    });

});

$(function () {
  let $links = $('.menu__link'),
      $dropdown = $('.menu__item_dropdown'),
      $sublinks = $('.sub-menu__link');

  $links.hover(function () {  // in
    $(this).animate({
      backgroundColor: 'maroon'
    }, 300);
  }, function () {  // out
    $(this).animate({
      backgroundColor: '#333'
    }, 300);
  });

  $dropdown.hover(function () { // in
    $(this).children('.sub-menu').animate({
      height: 'toggle'
    }, 300);
  }, function () {  // out
    $(this).children('.sub-menu').animate({
      height: 'toggle'
    }, 300);
  });
  $sublinks.hover(function () { // in
    $(this).animate({
      backgroundColor: '#cc8400',
      color: '#000',
    }, 300);
  }, function () {  // out
    $(this).animate({
      backgroundColor: '#333',
      color: '#fefefe'
    }, 300);
  });

});

$(function () {
  'use strict';
});

$(function() {
  $('.custom-select').selectric();
});
