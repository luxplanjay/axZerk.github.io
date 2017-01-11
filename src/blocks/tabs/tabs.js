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

  // On hover event
  $links.focus(function () {
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
