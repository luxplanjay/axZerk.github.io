/**
 * Created by Zerk on 20-Feb-17.
 */

import  React from 'react';

import {List} from './List/List';
import {AddListItem} from './AddListItem/AddListItem';


export class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            listData: []
        }
    }

    componentWillMount() {
        this.setState({
            listData: this.props.list
        });
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
                    items={this.state.listData}
                    deleteListItem={this.deleteListItem.bind(this)}
                />
                <AddListItem addListItem={(event) => this.addListItem(event)}/>
            </div>
        );
    }
}

App.propTypes = {
    list: React.PropTypes.array
}