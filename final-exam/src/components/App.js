/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import retina from 'retinajs';

import {Logo} from './Logo/Logo';
import {LoginOptions} from './LoginOptions/LoginOptions';
import {LegalInfo} from './LegalInfo/LegalInfo';
import {PartnerSearch} from './PartnerSearch/PartnerSearch';

import {StepsContainer} from './StepsContainer/StepsContainer';
import {PartnersContainer} from './PartnersContainer/PartnersContainer';
import {GalleryContainer} from './GalleryContainer/GalleryContainer';
import {ListContainer} from './ListContainer/ListContainer';

import css from './page-wrapper.scss';

export class App extends React.Component {
    constructor() {
        super();

        this.appData = {
            homepageURL: 'https://axzerk.github.io/final-exam/dist/',
            sliderDataURL: 'https://api.myjson.com/bins/l82yv',
            partnersDataURL: 'https://api.myjson.com/bins/mgg6v',
            listDataURL: 'https://api.myjson.com/bins/1gcmh3'
        }
    }

    componentDidMount() {
        retina();
    }

    render() {
        return (
            <div className="app-container">
                <div className="promo-headline">
                    <Logo
                        text={'URLAUBSGLÜCK'}
                        url={this.appData.homepageURL}
                    />
                    <LoginOptions
                        btnText={['Log in', 'Sign up']}
                    />
                    <PartnerSearch
                        title={'Share your holiday dreams'}
                        text={'And find the perfect partner to fulfill it'}
                        btnText={'Find your holiday partner'}
                    />
                </div>
                <StepsContainer
                    title={'How Urlaubsglück works?'}
                    dataURL={this.appData.sliderDataURL}
                />
                <PartnersContainer
                    title={'Meet a partner for your best holiday'}
                    dataURL={this.appData.partnersDataURL}
                />
                <GalleryContainer title={'Discover holiday activity ideas'}/>
                <footer className="page-footer">
                    <Logo
                        text={'URLAUBSGLÜCK'}
                        url={this.appData.homepageURL}
                    />
                    <ListContainer dataURL={this.appData.listDataURL}/>
                    <LegalInfo
                        text={'designed by'}
                        url={'https://www.aretodev.com/'}
                    />
                </footer>
            </div>
        );
    }
}