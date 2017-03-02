/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {ListItem} from '../ListItem/ListItem';
import uui from 'uuid';

import css from './list.scss';

export class List extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.items = props.items;
    }

    render() {
        let listItems;

        if (this.items) {
            listItems = this.items.map(item => {
                return (
                    <ListItem
                        key={uui.v4()}
                        text={item}
                    />
                )
            });
        }

        return (
            <section className="list">
                <h4 className="list__title">{this.title}</h4>
                <ul>
                    {listItems}
                </ul>
            </section>
        );
    }
}