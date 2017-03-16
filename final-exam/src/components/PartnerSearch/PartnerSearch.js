/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';

import css from './partner-search.scss';

export const PartnerSearch = ({title = 'default title', text = 'default text', btnText = ''}) => {
    return (
        <div className="partner-search">
            <h1 className="partner-search__title">{title}</h1>
            <p className="partner-search__text">{text}</p>
            <Button text={btnText} cls={'button'}/>
        </div>
    )
};

PartnerSearch.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    btnText: React.PropTypes.string
};