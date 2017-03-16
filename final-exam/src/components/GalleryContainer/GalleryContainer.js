/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import {ActivitySearchForm} from '../ActivitySearchForm/ActivitySearchForm';
import {Gallery} from '../Gallery/Gallery';

import css from './gallery-container.scss';

export class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            galleryData: []
        }
    }

    componentDidMount() {
        this.getGalleryData();
    }

    getGalleryData(value = 'weekend') {
        let path = `https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=${value}&image_type=photo`;

        fetch(path)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                let arr = data.hits.map(item => {
                    return {
                        src: item.webformatURL,
                        text: item.tags,
                        width: item.webformatWidth,
                        height: item.webformatHeight
                    }
                });

                this.setState({
                    galleryData: arr
                });
            }.bind(this))
            .catch(alert);
    }

    render() {
        return (
            <section className="gallery-container">
                <h2 className="gallery-container__title">{this.props.title}</h2>
                <Gallery
                    galleryData={this.state.galleryData}
                    size={8}
                />
                <ActivitySearchForm
                    title={'Discover holiday activity ideas'}
                    text={'Hi! What are your holiday interests?'}
                    btnText={'Search partners'}
                    getData={event => this.getGalleryData(event)}
                />
            </section>
        )
    }
}

GalleryContainer.propTypes = {
    title: React.PropTypes.string
};
