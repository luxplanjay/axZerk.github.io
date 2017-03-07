/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import css from './button.scss';

export const Button = ({text, cls = '', onClickHandler}) => {
    let str = `button ${cls}`;

    return (
        <button className={str} onClick={onClickHandler}>{text}</button>
    )
};

Button.propTypes = {
    text: React.PropTypes.string,
    cls: React.PropTypes.string,
    onClickHandler: React.PropTypes.func
};