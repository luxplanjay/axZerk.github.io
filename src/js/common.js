(function () {
  'use strict';
})();

// Login form
$(function() {
    let $inputs = $('.login-form__input'),
        showBtn = $('.login-form__btn');

    // Creating all tooltips on page load
    let tooltips = createTooltips($inputs);

    // Hover event
    $inputs.hover(function(e) {
        // in
        $(this).next().fadeIn(200);
    }, function() {
        // out
        $(this).next().fadeOut(200);
    });

    // Show help btn click event
    showBtn.click(function() {
        showTooltips(tooltips);
    });

    // showTooltips foo
    function showTooltips(list) {
        $(list).each(function() {
            $(this).fadeIn(200);
        });
    }

    // Creating tooltips for every input
    function createTooltips(inputs) {
        let tooltipsList = [];

        inputs.each(function() {
            let tooltip = $(document.createElement('span')),
                parentLabel = $(this).parent(),
                innerText = $(this).attr('title');

            tooltip.addClass('login-form__tooltip');
            tooltip.text(innerText);
            tooltip.appendTo(parentLabel);
            tooltip.hide();

            tooltipsList.push(tooltip);

            // Clearing default title attr behaviour
            $(this).removeAttr('title');
        });

        return tooltipsList;
    }
});

// Tabs
$(function () {
  let $links = $('.nav__link'),
      $tabs = $('.tabs__item');

  // Initializing default gadget state
  initGadget($links, $tabs);

  // On hover event
  $links.hover(function (e) {
    $(this).addClass('nav__link_hover');
  }, function (e) {
    $(this).removeClass('nav__link_hover');
  });

  // On click event
  $links.click(function (e) {
    e.preventDefault();

    let currentLink = $(this),
        tabId = currentLink.attr('href');

    toggleActiveLink($links, currentLink);
    toggleTabs($tabs, tabId);
  });

  // Setting default gadget state
  function initGadget(links, tabs) {
    toggleActiveLink(links, links.first());
    toggleTabs(tabs, tabs.first());
  }

  // Active link toggle
  function toggleActiveLink(links, current) {
    links.removeClass('nav__link_active');
    current.addClass('nav__link_active');
  }

  // Active tab toggle
  function toggleTabs(tabs, tabId) {
    tabs.hide();
    $(tabId).fadeIn(300);
  }
});
