/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';

export const ListItem = ({text, href = '#'}) => {
    return (
        <li className="list__item">
            <a href={href} className="list__link">{text}</a>
        </li>
    )
};

ListItem.propTypes = {
    text: React.PropTypes.string,
    href: React.PropTypes.string
};

