/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import css from './partner-card.scss';

export const PartnerCard = ({name, about, img}) => {
    return (
        <figure className="partner-card">
            <div className="partner-card__img">
                <img src={img} alt=""/>
                <i></i>
            </div>
            <figcaption>
                <h3 className="partner-card__name">{name}</h3>
                <p className="partner-card__about">{about}</p>
            </figcaption>
        </figure>
    )
};

PartnerCard.propTypes = {
    name: React.PropTypes.string,
    about: React.PropTypes.string,
    img: React.PropTypes.string
};
