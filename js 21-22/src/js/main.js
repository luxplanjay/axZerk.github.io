"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Zerk on 14-Feb-17.
 */

(function () {
    var Calculator = function () {
        function Calculator(id) {
            _classCallCheck(this, Calculator);

            this.id = id;
        }

        _createClass(Calculator, [{
            key: "sum",
            value: function sum(a, b) {
                return a + b;
            }
        }, {
            key: "isGreater",
            value: function isGreater(a, b) {
                return a > b ? true : false;
            }
        }, {
            key: "calcId",
            get: function get() {
                return this.id;
            }
        }]);

        return Calculator;
    }();

    var calc = new Calculator(1);

    try {
        module.exports = calc;
    } catch (e) {}
})();
/**
 * Created by Zerk on 14-Feb-17.
 */

'use strict';

try {} catch (e) {}

var mapImg = void 0,
    centerLat = 0,
    centerLon = 0,
    mapZoom = 1,
    earthquakesList = void 0;

function preload() {
    mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/-0,0,' + mapZoom + ',0,0/1024x512?access_token=pk.eyJ1IjoiemVyayIsImEiOiJjaXo1Z2d6dncwMDQ0MzJwanZjOGMyeGdnIn0.O4xkhmw6oAFEzRHosnGxLw');

    // earthquakes = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.csv');
    earthquakesList = loadStrings('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

function setup() {
    createCanvas(1024, 512);
    translate(width / 2, height / 2);

    imageMode(CENTER);
    image(mapImg, 0, 0);

    render(earthquakesList);
}

// Получает список землетрясений и разбирает его на координаты
function render(data) {

    // Центр нашей карты
    var centerX = mercX(centerLon, mapZoom),
        centerY = mercY(centerLat, mapZoom);

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            var arr = value.split(/,/);

            var currentLat = arr[1],
                // текщая широта
            currentLon = arr[2],
                // текущая долгота
            magnitude = arr[4]; // сила текущего землетрясения по шкале Рихтера

            //Преобразуем силу землетрясения из шкалы Рихтера, для более визуального представления, по другому точки слишком маленькие т.к. землетрясения в основном слабые
            magnitude = pow(10, magnitude);
            magnitude = sqrt(magnitude);

            // широта\долгота текущего землетрясения относительно нашей карты
            var x = mercX(currentLon, mapZoom) - centerX,
                y = mercY(currentLat, mapZoom) - centerY;

            // Считаем размер елипса относительно силы землетрясения
            var magnitudeMax = sqrt(pow(10, 10)),
                diameter = map(magnitude, 0, magnitudeMax, 0, 180);

            draw(x, y, diameter);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

// Рисует елипс по координатам и диаметру
function draw(coordX, coordY, diameter) {
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(coordX, coordY, diameter, diameter);
}

// рассчет X по https://en.wikipedia.org/wiki/Web_Mercator
function mercX(lon, zoomLevel) {
    lon = radians(lon);

    var a = 256 / PI * pow(2, zoomLevel),
        b = lon + PI;

    return a * b;
}

// рассчет Y по https://en.wikipedia.org/wiki/Web_Mercator
function mercY(lat, zoomLevel) {
    lat = radians(lat);

    var a = 256 / PI * pow(2, zoomLevel),
        b = tan(PI / 4 + lat / 2),
        c = PI - log(b);

    return a * c;
}