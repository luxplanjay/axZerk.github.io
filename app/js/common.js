// Initialising primary slider controls clickability

var primarySlider = {
  el: {
    primarySlider: $(".slider_role_main"),
    sliderNav: $(".slider_role_main .slider__nav"),
    allNavButtons: $(".slider_role_main .slider__control")
  },

  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    this.el.sliderNav.on("click", ".slider__control", function(event) {
      primarySlider.handleNavClick(event, this);
    });
  },

  handleNavClick: function(event, el) {
    event.preventDefault();
    this.changeActiveNav(el);
  },

  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("slider__control_active");
    $(el).addClass("slider__control_active");
  }
};

// Initialising secondary slider controls clickability
var testimonialsSlider = {
  el: {
    testimonialsSlider: $(".b-content__slider"),
    sliderNav: $(".b-content__slider .slider__nav"),
    allNavButtons: $(".b-content__slider .slider__control")
  },

  init: function() {
    this.bindUIEvents();
  },

  bindUIEvents: function() {
    this.el.sliderNav.on("click", ".slider__control", function(event) {
      testimonialsSlider.handleNavClick(event, this);
    });
  },

  handleNavClick: function(event, el) {
    event.preventDefault();
    this.changeActiveNav(el);
  },

  changeActiveNav: function(el) {
    this.el.allNavButtons.removeClass("slider__control_active");
    $(el).addClass("slider__control_active");
  }
};

primarySlider.init();
testimonialsSlider.init();


// if ($(window).width() < 960) {
//    alert('Less than 960');
// }
// else {
//    alert('More than 960');
// }
