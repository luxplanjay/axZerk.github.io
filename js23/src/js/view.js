/**
 * Created by Zerk on 16-Feb-17.
 */

export class View {
    constructor(model) {
        this.listTpl = require("../templates/list.handlebars");
        this.listItem = require('../templates/list-item.handlebars');

        // IIFE init function
        (function (self) {
            let el = document.getElementById('root'),
                container = self.listTpl();

            el.innerHTML += container;

            self.elements = {
                input: document.querySelector('.controlls__input'),
                addBtn: document.querySelector('.controlls__btn'),
                list: document.querySelector('.list')
            }

            self.renderList(model.data);
        })(this);
    }

    renderList(data) {
        let listItem = this.listItem(data);

        this.elements.list.innerHTML = listItem;
    }
}
