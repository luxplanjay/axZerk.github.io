/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';
import css from './auth-form.scss';

export const AuthContainer = ({leftBtnText, rightBtnText}) => {
    return (
        <div className="auth-form">
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