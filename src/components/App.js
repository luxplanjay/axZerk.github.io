/**
 * Created by Zerk on 20-Feb-17.
 */

import  React from 'react';
import {List} from './List/List';
import {Form} from './Form/Form';

export class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            listData: []
        }
    }

    componentWillMount() {
        this.getTodos();
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
                let data = [];

                result.forEach(function (item, i) {
                    if (i < 10) {
                        data.push(item);
                    }
                });

                this.setState({
                    listData: data
                });
            }.bind(this))
            .catch(alert);
    }

    addListItem(item) {
        let newListData = this.state.listData;
        newListData.unshift(item);
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
                <Form addListItem={(event) => this.addListItem(event)}/>
                <List
                    deleteListItem={this.deleteListItem.bind(this)}
                    items={this.state.listData}
                />
            </div>
        );
    }
}

App.propTypes = {
    list: React.PropTypes.array
}