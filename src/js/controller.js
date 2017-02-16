/**
 * Created by Zerk on 16-Feb-17.
 */

export class Controller {
    constructor(model, view) {

        let addItem = function () {
            let newItem = view.elements.input.value;

            model.addItem(newItem);
            view.renderList(model.data);
            view.elements.input.value = '';
        }

        let removeItem = function (e) {
            let item = e.target;

            if (item.classList.contains('list__del')) {
                let value = item.getAttribute('data-value');

                model.removeItem(value);
                view.renderList(model.data);
            }
        }

        view.elements.addBtn.addEventListener('click', addItem);

        view.elements.list.addEventListener('click', removeItem);

        view.elements.input.addEventListener('keypress', function (e) {
            if (e.which === 13) {
                addItem();
            }
        });
    }
}