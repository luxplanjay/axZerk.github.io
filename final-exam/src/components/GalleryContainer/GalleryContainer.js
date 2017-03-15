/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import {PartnerSearch} from '../PartnerSearch/PartnerSearch';
import {Gallery} from '../Gallery/Gallery';

import css from './gallery-container.scss';

export class GalleryContainer extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;

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
                let arr = [],
                    i = 0;

                for (let key in data.hits) {
                    if (i < 8) {
                        if (data.hits.hasOwnProperty(key)) {
                            let el = {
                                src: data.hits[key].webformatURL,
                                text: data.hits[key].tags,
                                width: data.hits[key].webformatWidth,
                                height: data.hits[key].webformatHeight
                            };

                            arr.push(el);
                            i++;
                        }
                    }

                }

                this.setState({
                    galleryData: arr
                });
            }.bind(this))
            .catch(alert);
    }

    render() {
        return (
            <section className="gallery-container">
                <h2 className="gallery-container__title">{this.title}</h2>
                <Gallery galleryData={this.state.galleryData}/>
                <PartnerSearch
                    title={'Discover holiday activity ideas'}
                    text={'Hi! What are your holiday interests?'}
                    btnText={'Search partners'}
                    inputVis={'visible'}
                    getData={event => this.getGalleryData(event)}
                />
            </section>
        )
    }
}

GalleryContainer.propTypes = {
    title: React.PropTypes.string
};
