/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';

import css from './legal-info.scss';

export const LegalInfo = ({text = '', url = '#'}) => {
    return (
        <div className="legal-info">
            <a href={url} className="legal-info__link" target="_blank">
                <span className="legal-info__text">{text}</span>
                <i className="legal-info__img"></i>
            </a>
        </div>
    )
};

LegalInfo.propTypes = {
    text: React.PropTypes.string
};