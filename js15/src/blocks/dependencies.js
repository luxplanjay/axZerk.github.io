/**
 * Created by Zerk on 03-Feb-17.
 */

require.config({
    baseUrl: 'js',
    paths: {
        'jquery': [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min',
            'libs/jquery'
        ]
    }
});

requirejs(['view'], function (view) {
});

requirejs(['model'], function (model) {
});

requirejs(['controller'], function (controller) {
});

requirejs(['prototyping'], function (proto) {

});