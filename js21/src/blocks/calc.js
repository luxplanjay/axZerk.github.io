/**
 * Created by Zerk on 14-Feb-17.
 */

(function () {

    class Calculator {
        constructor(id) {
            this.id = id;
        }

        get calcId() {
            return this.id;
        }

        sum(a, b) {
            return a + b;
        }

        isGreater(a, b) {
            return (a > b) ? true : false;
        }
    }

    let calc = new Calculator(1);

    try {
        module.exports = calc;
    } catch (e) {
    }

})();
