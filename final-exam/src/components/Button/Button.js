/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';

export const Button = ({text = '', cls = '', onClickHandler}) => {
    return (
        <button className={cls} onClick={onClickHandler}>{text}</button>
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    cls: React.PropTypes.string,
    onClickHandler: React.PropTypes.func
};