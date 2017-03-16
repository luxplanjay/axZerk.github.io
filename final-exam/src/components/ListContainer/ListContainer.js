/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {List} from '../List/List';
import uui from 'uuid';

import css from './list-container.scss';

export class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: []
        }
    }

    componentDidMount() {
        this.getGalleryData(this.props.dataURL)
    }

    getGalleryData(url) {
        fetch(url)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                this.setState({
                    listData: data
                });
            }.bind(this))
            .catch(alert);
    }

    render() {
        let lists;
        if (this.state.listData) {
            lists = this.state.listData.map(item => {
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
        );
    }
}
