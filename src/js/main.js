    "use strict";

    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        if ((arg1 + 1) === arg2) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });