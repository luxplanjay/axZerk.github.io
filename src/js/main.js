import '../sass/core/core.scss';
import '../sass/page.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';


const person = {
    firstName: 'Vasya',
    lastName: 'Pupkin'
};

let el = <App user={person}/>;

ReactDOM.render(el, document.getElementById('root'));

