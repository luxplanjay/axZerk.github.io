import './sass/index.scss';

import {Model} from './js/model';
import {View} from './js/view';
import  {Controller} from './js/controller';


document.addEventListener('DOMContentLoaded', function () {

    let data = [
        'Проснуться ( O.O )',
        'Покушать ( ^_^ )',
        'Сходить на стадион ( нет, потому что нога растянута Q.Q )',
        'Биться лицом в Webpack и React до вечера( such is life ¯\\_(ツ)_/¯ ) '
    ];

    let model = new Model(data);
    let view = new View(model);
    let controller = new Controller(model, view);
});
