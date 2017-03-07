/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {List} from '../List/List';
import uui from 'uuid';

export class ListContainer extends React.Component {
    constructor(props) {
        super();
        this.listData = [];
    }

    componentWillMount() {
        this.listData = [
            {
                title: 'Company',
                items: ['about', 'contacts', 'press', 'blog']
            },
            {
                title: 'Partners',
                items: []
            },
            {
                title: 'Some List 1',
                items: ['item 1', 'item 2', 'item 3']
            }
        ];
    }

    render() {
        let lists;
        if (this.listData) {
            lists = this.listData.map(item => {
                return (
                    <List
                        key={uui.v4()}
                        title={item.title}
                        items={item.items}
                    />
                )
            });
        }
        return (
            <div>
                {lists}
            </div>
        )
    }

}
