/**
 * Created by Zerk on 16-Feb-17.
 */

export class Model {
    constructor(data = '') {
        this.data = data;
    }

    addItem(item) {
        if (item.length === 0) {
            return;
        }

        this.data.push(item);

        return this.data;
    }

    removeItem(item) {
        let index = this.data.indexOf(item);

        if (index === -1) {
            return
        }

        this.data.splice(index, 1);

        return this.data;
    }
}

