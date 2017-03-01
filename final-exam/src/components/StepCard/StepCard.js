/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import css from './step-card.scss';

export const StepCard = ({title, text, number, img}) => {
    let stepText = `step ${number}`,
        background = {
            background: `url(${img})`
        };

    return (
        <div className="step-card" style={background}>
            <span className="step-card__number">{stepText}</span>
            <h2 className="step-card__title">{title}</h2>
            <p className="step-card__text">{text}</p>
        </div>
    )
}