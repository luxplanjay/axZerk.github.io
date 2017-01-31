requirejs(['hbs-helpers'], function (hbsHelpers) {
});

requirejs(['model'], function (model) {
});


requirejs(['view'], function (view) {
    requirejs('model');
});


requirejs(['controller'], function (controller) {
    requirejs('model');
    requirejs('view');
});



