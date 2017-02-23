/**
 * Created by Zerk on 20-Feb-17.
 */

import  React from 'react';
import {Router, Route} from 'react-router';
import {List} from './List/List';
import {Form} from './Form/Form';

export class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            listData: [],
            todos: []
        }
    }

    componentWillMount() {
        this.getTodos();
        this.setState({
            listData: this.props.list
        });
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (result) {
                this.setState({
                    todos: result
                });
            }.bind(this))
            .catch(alert);
    }

    addListItem(item) {
        let newListData = this.state.listData;
        newListData.push(item);
        this.setState({
            listData: newListData
        });
    }

    deleteListItem(id) {
        let newListData = this.state.listData,
            index = this.state.listData.findIndex(x => x.id === id);

        newListData.splice(index, 1);

        this.setState({
            listData: newListData
        });
    }

    render() {
        return (
            <div className="app-container">
                <List
                    /*items={this.state.listData}*/
                    deleteListItem={this.deleteListItem.bind(this)}
                    items={this.state.todos}
                />
                <Form addListItem={(event) => this.addListItem(event)}/>
            </div>
        );
    }
}

App.propTypes = {
    list: React.PropTypes.array
}