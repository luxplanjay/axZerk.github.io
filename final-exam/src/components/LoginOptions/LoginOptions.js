/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';
import css from './login-options.scss';

export const LoginOptions = ({leftBtnText, rightBtnText}) => {
    return (
        <div className="login-options">
            <Button
                text={leftBtnText}
                cls={'button--small'}
            />
            <Button
                text={rightBtnText}
                cls={'button--small'}
            />
        </div>
    )
}