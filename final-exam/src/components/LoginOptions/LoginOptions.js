/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';
import css from './login-options.scss';

export const LoginOptions = ({btnText = []}) => {
    return (
        <div className="login-options">
            <Button
                text={btnText[0]}
                cls={'button button--small'}
            />
            <Button
                text={btnText[1]}
                cls={'button button--small'}
            />
        </div>
    )
};

LoginOptions.propTypes = {
    leftBtnText: React.PropTypes.string,
    rightBtnText: React.PropTypes.string
};