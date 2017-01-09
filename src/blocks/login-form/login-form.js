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
        let length = tooltips.length;

        for (let i = 0; i < length; i++) {
            tooltips[i].fadeIn(200);
        }
    });

    // Creating tooltips for every input
    function createTooltips(inputs) {
        let length = inputs.length,
            tooltipsList = [];

        for (let i = 0; i < length; i++) {
            let tooltip = $(document.createElement('span')),
                parentLabel = $(inputs[i]).parent(),
                innerText = $(inputs[i]).attr('title');

            tooltip.addClass('login-form__tooltip');
            tooltip.text(innerText);
            tooltip.appendTo(parentLabel);
            tooltip.hide();

            tooltipsList.push(tooltip);

            // Clearing default title attr behaviour
            $(inputs[i]).removeAttr('title');
        }

        return tooltipsList;
    }
});
