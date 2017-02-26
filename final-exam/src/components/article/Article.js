/**
 * Created by Zerk on 18-Feb-17.
 */

import React from 'react';
import css from './article.scss';

export const Article = (props) => {
    return (
        <div className="article">
            <h1 className="article__title">{props.article.title}</h1>
            <p>{props.article.text}</p>
        </div>
    );
};
