/**
 * Created by Zerk on 26-Feb-17.
 */

import React from 'react';

export const ListItem = ({id, title, deleteItem}) => {
    return (
        <li key={id}
            className="list__item">
            {title}
            <a href="#" className="list__del" onClick={deleteItem}>x</a>
        </li>
    );
};