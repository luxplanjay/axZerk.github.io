/**
 * Created by Zerk on 18-Feb-17.
 */

import React from 'react';
import css from './menu.scss';

export class Menu extends React.Component {
    constructor(props) {
        super();
        this.items = props.items;
    }

    render() {
        let items = this.items.map(
            (item, i) => <li key={i} className="menu__item"><a href="#" className="menu__link">{item}</a></li>
        );

        return (
            <div>
                <ul className="menu">
                    {items}
                </ul>
            </div>
        );
    }
}

Menu.propTypes = {
    items: React.PropTypes.array,
    greet: React.PropTypes.func
}