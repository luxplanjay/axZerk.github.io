// require("./index.html");
import './sass/index.scss';

import  React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

import {App} from './components/App';

// const listData = [
//     {
//         id: uuid.v4(),
//         text: 'item 1'
//     },
//     {
//         id: uuid.v4(),
//         text: 'item 2'
//     },
//     {
//         id: uuid.v4(),
//         text: 'item 3'
//     },
//     {
//         id: uuid.v4(),
//         text: 'item 4'
//     }
// ];

ReactDOM.render(<App/>, window.document.getElementById('root'));
