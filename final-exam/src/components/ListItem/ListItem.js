/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';

export const ListItem = ({text}) => {
    return (
        <li className="list__item"><a href="#" className="list__link">{text}</a></li>
    )
};

ListItem.propTypes = {
    text: React.PropTypes.string
};

