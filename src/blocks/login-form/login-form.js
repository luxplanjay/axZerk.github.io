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
