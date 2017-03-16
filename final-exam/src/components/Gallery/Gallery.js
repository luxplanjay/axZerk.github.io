/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import Masonry from 'react-masonry-component';
import uuid from 'uuid';

import css from './ideas-gallery.scss';

const masonryOptions = {
    transitionDuration: '0.3s'
};

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let childElements;
        if (this.props.galleryData) {
            childElements = this.props.galleryData.slice(0, this.props.size).map(item => {
                return (
                    <div className="ideas-gallery__item" key={uuid.v4()}>
                        <a href="" className="ideas-gallery__link">
                            <span className="ideas-gallery__text">{item.text}</span>
                            <img src={item.src} className="ideas-gallery__img"/>
                        </a>
                    </div>
                );
            });
        }

        return (
            <Masonry
                className={'ideas-gallery'}
                elementType={'div'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
                {childElements}
            </Masonry>
        );
    }
}

Gallery.propTypes = {
    items: React.PropTypes.array,
    size: React.PropTypes.number
};
