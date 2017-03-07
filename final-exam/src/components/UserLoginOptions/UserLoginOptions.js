/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';
import css from './user-login.scss';

export const UserLoginOptions = ({leftBtnText, rightBtnText}) => {
    return (
        <div className="user-login">
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