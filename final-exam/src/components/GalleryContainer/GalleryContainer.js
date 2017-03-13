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
        // this.galleryData = [
        //     {
        //         text: 'Sport and Activity',
        //         src: '../img/gallery/1.jpg'
        //     },
        //     {
        //         text: 'Wellnes and Health',
        //         src: '../img/gallery/2.jpg'
        //     },
        //     {
        //         text: 'Extreme Sports and Expeditions',
        //         src: '../img/gallery/3.jpg'
        //     },
        //     {
        //         text: 'Games',
        //         src: '../img/gallery/4.jpg'
        //     },
        //     {
        //         text: 'Culture and Education',
        //         src: '../img/gallery/5.jpg'
        //     },
        //     {
        //         text: 'Relaxation',
        //         src: '../img/gallery/6.jpg'
        //     },
        //     {
        //         text: 'Travelling',
        //         src: '../img/gallery/7.jpg'
        //     }
        // ];

        this.state = {
            galleryData: []
        }
    }

    componentWillMount() {
        let str = 'water';
        this.getGalleryData('https://api.tenor.co/v1/search?tag=' + str + '&key=LIVDSRZULELA');
    }

    getGalleryData(path) {
        fetch(path)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                let arr = [];
                for (let key in data.results) {
                    if (data.results.hasOwnProperty(key)) {
                        let el = {
                            src: data.results[key].media[0].gif.url,
                            text: data.results[key].title,
                            width: data.results[key].media[0].gif.dims[0],
                            height: data.results[key].media[0].gif.dims[1]
                        };

                        arr.push(el);
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
                <Gallery items={this.state.galleryData}/>
                <PartnerSearch
                    title={'Discover holiday activity ideas'}
                    text={'Hi! What are your holiday interests?'}
                    btnText={'Search partners'}
                    inputVis={'visible'}
                />
            </section>
        )
    }
}

GalleryContainer.propTypes = {
    title: React.PropTypes.string
};
