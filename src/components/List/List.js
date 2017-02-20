/**
 * Created by Zerk on 17-Feb-17.
 */

import React from 'react';

import css from './list.scss';

export class List extends React.Component {
    constructor(props) {
        super();
    }

    deleteItem(id) {
        this.props.deleteListItem(id);
    }

    render() {
        let listItems;
        if (this.props.items) {
            listItems = this.props.items.map((item, i) => {
                return (
                    <li key={item.id} className="list__item">
                        {item.text}
                        <a href="#" onClick={this.deleteItem.bind(this, item.id)}>X</a>
                    </li>
                );
            });
        }

        return (
            <div className="list-container">
                <h1 className="list-title">To Do List</h1>
                <ul className="list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

List.propTypes = {
    items: React.PropTypes.array,
    deleteListItem: React.PropTypes.func
}