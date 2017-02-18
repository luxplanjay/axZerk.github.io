/**
 * Created by Zerk on 17-Feb-17.
 */

import React from 'react';

export class List extends React.Component {
    render() {
        let hobbies = this.props.list.hobbies.map(
            (item, i) => <li key={i}><a href="#">{item}</a></li>
        );

        return (
            <div>
                <h2>{this.props.list.title}</h2>
                <ul>{hobbies}</ul>
            </div>
        );
    }
}

List.propTypes = {
    user: React.PropTypes.object
}