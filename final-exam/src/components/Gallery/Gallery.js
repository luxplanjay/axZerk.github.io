/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
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
                            <p className="ideas-gallery__text">{element.text}</p>
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
                updateOnEachImageLoad={false}>
                {childElements}
            </Masonry>
        );
    }
}
