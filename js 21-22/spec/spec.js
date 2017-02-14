/**
 * Created by Zerk on 13-Feb-17.
 */

var calc = require('../src/js/main.js');

describe("calc", function () {

    it("calcId()", function () {
        // prepare
        var result;

        // act
        result = calc.calcId;

        // assert
        expect(result).toEqual(jasmine.any(Number));
    });

    it("sum()", function () {
        // prepare
        var result;

        // act
        result = calc.sum(10, 1);

        // assert
        expect(result).toBe(11);
    });

    it("isGreater()", function () {
        // prepare
        var result;

        // act
        result = calc.isGreater(10, 1);

        // assert
        expect(result).toBe(true);
    });
});
