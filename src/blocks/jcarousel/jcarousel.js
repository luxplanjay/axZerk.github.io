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
