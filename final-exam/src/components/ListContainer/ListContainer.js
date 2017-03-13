/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {List} from '../List/List';
import uui from 'uuid';

import css from './list-container.scss';

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
                items: ['good weather', 'olympics', 'adidas']
            },
            {
                title: 'News',
                items: ['news link 1', 'news link 2', 'news link 3', 'news link 4', 'news link 5']
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
            <div className="list-container">
                {lists}
            </div>
        )
    }

}
