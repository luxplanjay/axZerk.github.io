/**
 * Created by Zerk on 18-Feb-17.
 */

import React from 'react';
import css from './article.scss';

export const Article = (props) => {
    return (
        <div className="article">
            <h1 className="article__title">{props.articleTitle}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea id nostrum ratione rem. Earum enim explicabo inventore minima officiis porro quasi similique? Aliquid ducimus et labore, molestias quod rem.</p>
        </div>
    );
};
