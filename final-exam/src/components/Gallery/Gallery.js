/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import Masonry from 'react-masonry-component';
import uuid from 'uuid';

import css from './ideas-gallery.scss';

const masonryOptions = {
    transitionDuration: '0.5s'
};

export class Gallery extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let childElements;
        if (this.props.items) {
            childElements = this.props.items.map(item => {

                return (
                    <li className="ideas-gallery__item" key={uuid.v4()}>
                        <a href="" className="ideas-gallery__link">
                            <span className="ideas-gallery__text">{item.text}</span>
                            <img src={item.src} className="ideas-gallery__img"/>
                        </a>
                    </li>
                );
            });
        }

        return (
            <Masonry
                className={'none'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}>
                {childElements}
            </Masonry>
        );
    }
}

Gallery.propTypes = {
    items: React.PropTypes.array
};
