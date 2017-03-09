/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import {PartnerSearch} from '../PartnerSearch/PartnerSearch';
import {Gallery} from '../Gallery/Gallery';

import css from './masonry.scss';

export class MasonryContainer extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.masonryData = [
            {
                text: 'Sport and Activity',
                src: '../img/gallery/1.png'
            },
            {
                text: 'Wellnes and Health',
                src: '../img/gallery/2.png'
            },
            {
                text: 'Extreme Sports and Expeditions',
                src: '../img/gallery/3.png'
            },
            {
                text: 'Games',
                src: '../img/gallery/4.png'
            },
            {
                text: 'Culture and Education',
                src: '../img/gallery/5.png'
            },
            {
                text: 'Relaxation',
                src: '../img/gallery/6.png'
            },
            {
                text: 'Travelling',
                src: '../img/gallery/7.png'
            }
        ];
    }

    render() {
        return (
            <section className="masonry">
                <h2 className="masonry__title">{this.title}</h2>
                <Gallery elements={this.masonryData}/>
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
