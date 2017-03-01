/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import css from './logo.scss';

export const Logo = ({text}) => {
    return (
        <div className="logo">
            <a href="#" className="logo__link">{text}</a>
        </div>
    )
}

Logo.propTypes = {
    text: React.PropTypes.string
}