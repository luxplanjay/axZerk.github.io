/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import css from './button.scss';

export const Button = ({text, cls = ''}) => {
    let str = `button ${cls}`;

    return (
        <button className={str}>{text}</button>
    )
}