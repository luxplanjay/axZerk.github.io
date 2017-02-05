/**
 * Created by Zerk on 03-Feb-17.
 */

require.config({
    baseUrl: 'js',
    paths: {
        'handlebars': [
            'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.6/handlebars.min',
            'libs/handlebars'
        ],
        'hbsHelpers': 'hbs-helpers',
        'template': 'templates/form.tpl'
    }
});

requirejs(['view'], function (view) {
});

requirejs(['model'], function (model) {
});

requirejs(['controller'], function (controller) {
});