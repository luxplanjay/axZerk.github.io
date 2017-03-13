/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';

import css from './partner-search.scss';

export const PartnerSearch = ({title, text, btnText, inputVis = 'hidden', action='#'}) => {
    let inputClass = `partner-search__input partner-search__input--${inputVis}`;

    return (
        <div className="partner-search">
            <h1 className="partner-search__title">{title}</h1>
            <p className="partner-search__text">{text}</p>
            <form action={action} method="post" className="partner-search__form">
                <input type="text" name="" className={inputClass} placeholder="Enter your interests"/>
                <Button text={btnText}/>
            </form>
        </div>
    )
};

PartnerSearch.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    btnText: React.PropTypes.string,
    inputVis: React.PropTypes.string
};