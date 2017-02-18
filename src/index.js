require("./index.html");
import './sass/index.scss';

import  React from 'react';
import ReactDOM from 'react-dom';

import {Box} from './components/box/Box';
import {List} from './components/list/List';
import {Article} from './components/article/Article';
import {Menu} from './components/menu/Menu'

const user = {
    name: 'Alex',
    initialAge: 31
}

const list = {
    title: 'List of hobbies',
    hobbies: ['hobbie 1', 'hobbie 2', 'hobbie 3']
}

const items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

class App extends React.Component {
    sayHi() {
        alert('Hello child!');
    }

    render() {
        return (
            <div className="app-container">
                <Menu items={items}></Menu>
                <Box user={this.props.user} greet={this.sayHi}/>
                <List list={this.props.list}/>
                <Article articleTitle="Artcile 1"/>
                <Article articleTitle="Artcile 2"/>
            </div>
        );
    }
}

ReactDOM.render(<App user={user} list={list}/>, window.document.getElementById('root'));