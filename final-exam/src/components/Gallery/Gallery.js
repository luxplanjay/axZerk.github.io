/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import Masonry from 'react-masonry-component';

import css from './ideas-gallery.scss';

const masonryOptions = {
    transitionDuration: '0.5s'
};

export class Gallery extends React.Component {
    constructor(props) {
        super();
        this.elements = props.elements;
    }

    render() {
        let childElements;
        if (this.elements) {
            childElements = this.elements.map(element => {
                return (
                    <li className="ideas-gallery__item">
                        <a href="" className="ideas-gallery__link">
                            <span className="ideas-gallery__text">{element.text}</span>
                            <img src={element.src} className="ideas-gallery__img"/>
                        </a>
                    </li>
                );
            });
        }

        return (
            <Masonry
                className={'ideas-gallery'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}>
                {childElements}
            </Masonry>
        );
    }
}
