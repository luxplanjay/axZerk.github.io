/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
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
    }

    render() {
        return (
            <div className="app-container">
                <div className="promo-headline">
                    <Logo
                        text={'URLAUBSGLÜCK'}
                        url={'https://axzerk.github.io/final-exam/dist/'}
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
                    dataURL={'https://api.myjson.com/bins/l82yv'}
                />
                <PartnersContainer
                    title={'Meet a partner for your best holiday'}
                    dataURL={'https://api.myjson.com/bins/mgg6v'}
                />
                <GalleryContainer title={'Discover holiday activity ideas'}/>
                <footer className="page-footer">
                    <Logo
                        text={'URLAUBSGLÜCK'}
                        url={'https://axzerk.github.io/final-exam/dist/'}
                    />
                    <ListContainer dataURL={'https://api.myjson.com/bins/1gcmh3'}/>
                    <LegalInfo
                        text={'designed by'}
                        url={'https://www.aretodev.com/'}
                    />
                </footer>
            </div>
        );
    }
}