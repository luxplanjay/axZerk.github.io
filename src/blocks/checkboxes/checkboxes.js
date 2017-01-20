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
