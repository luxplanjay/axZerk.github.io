require("./index.html");
import './sass/index.scss';

import  React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

import {App} from './components/App';

const listData = [
    {
        id: uuid.v4(),
        text: 'item 1'
    },
    {
        id: uuid.v4(),
        text: 'item 2'
    },
    {
        id: uuid.v4(),
        text: 'item 3'
    },
    {
        id: uuid.v4(),
        text: 'item 4'
    }
];

ReactDOM.render(<App list={listData}/>, window.document.getElementById('root'));

function Particle() {
    this.x = 1;
    this.y = 2;
}

Particle.prototype.show = function () {
    console.log(`x = ${this.x}, y = ${this.y}`);
}

let a = new Particle();
console.log(a);
a.show();

let b = new Particle();
console.log(b);

b.show = function () {
    console.log('overwritten!');
}

b.show();
