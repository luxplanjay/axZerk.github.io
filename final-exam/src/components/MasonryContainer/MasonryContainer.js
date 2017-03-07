/**
 * Created by Zerk on 07-Mar-17.
 */

import React from 'react';
import {PartnerSearch} from '../PartnerSearch/PartnerSearch';
import {Gallery} from '../Gallery/Gallery';

export class MasonryContainer extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.masonryData = [
            {
                text: 'item 1',
                src: '../img/gallery/1.png'
            },
            {
                text: 'item 2',
                src: '../img/gallery/2.png'
            },
            {
                text: 'item 3',
                src: '../img/gallery/3.png'
            },
            {
                text: 'item 4',
                src: '../img/gallery/4.png'
            },
            {
                text: 'item 5',
                src: '../img/gallery/5.png'
            },
            {
                text: 'item 6',
                src: '../img/gallery/6.png'
            },
            {
                text: 'item 7',
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
