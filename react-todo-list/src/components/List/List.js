/**
 * Created by Zerk on 17-Feb-17.
 */

import React from 'react';
import {ListItem} from '../ListItem/ListItem.js';
import uuid from 'uuid';

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
            listItems = this.props.items.map((item) => {
                return (
                    <ListItem
                        key={uuid.v4()}
                        id={item.id}
                        title={item.title}
                        deleteItem={this.deleteItem.bind(this, item.id)}
                    />
                )
            });
        }

        return (
            <div className="list-container">
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