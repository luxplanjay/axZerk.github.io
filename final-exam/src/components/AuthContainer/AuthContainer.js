/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';
import css from './auth-form.scss';

export const AuthContainer = ({text1, text2}) => {
    return (
        <div className="auth-form">
            <Button
                text={text1}
                cls={'button--small'}
            />
            <Button
                text={text2}
                cls={'button--small'}
            />
        </div>
    )
}