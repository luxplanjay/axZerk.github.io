define(['handlebars', 'hbsHelpers'], function (Handlebars) {
    (function() {
        var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
        templates['form'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
            var stack1, helper, alias1=depth0 != null ? depth0 : {};

            return "        <fieldset class=\"test-form__item\">\r\n            <legend class=\"test-form__item-title\">"
                + container.escapeExpression(((helper = (helper = helpers.topic || (depth0 != null ? depth0.topic : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"topic","hash":{},"data":data}) : helper)))
                + "</legend>\r\n"
                + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.answers : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                + "        </fieldset>\r\n";
        },"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
            var stack1;

            return ((stack1 = (helpers.ifEquals || (depth0 && depth0.ifEquals) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(data && data.index),(depths[1] != null ? depths[1].correctAnswer : depths[1]),{"name":"ifEquals","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
        },"3":function(container,depth0,helpers,partials,data) {
            return "                    <label class=\"test-form__label\">\r\n                        <input type=\"checkbox\" class=\"test-form__checkbox\" data-correct=\"true\">\r\n                        "
                + container.escapeExpression(container.lambda(depth0, depth0))
                + "\r\n                    </label>\r\n";
        },"5":function(container,depth0,helpers,partials,data) {
            return "                    <label class=\"test-form__label\">\r\n                        <input type=\"checkbox\" class=\"test-form__checkbox\" data-correct=\"false\">\r\n                        "
                + container.escapeExpression(container.lambda(depth0, depth0))
                + "\r\n                    </label>\r\n";
        },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
            var stack1, helper, alias1=depth0 != null ? depth0 : {};

            return "<form action=\"#\" method=\"POST\" class=\"test-form\">\r\n    <h1 class=\"test-form__title\">"
                + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
                + "</h1>\r\n"
                + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.questions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
                + "    <input type=\"submit\" class=\"test-form__submit\" value=\"check results\">\r\n</form>";
        },"useData":true,"useDepths":true});
    })();
});

