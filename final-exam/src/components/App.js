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
import {MasonryContainer} from './MasonryContainer/MasonryContainer';
import {ListContainer} from './ListContainer/ListContainer';

import css from './app-container.scss';

export class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app-container">
                <div className="promo-headline">
                    <Logo text={'URLAUBSGLÜCK'}/>
                    <LoginOptions
                        leftBtnText={'Log in'}
                        rightBtnText={'Sign up'}
                    />
                    <PartnerSearch
                        title={'Share your holiday dreams'}
                        text={'And find the perfect partner to fulfill it'}
                        btnText={'Find your holiday partner'}
                    />
                </div>
                <StepsContainer title={'How Urlaubsglück works?'}/>
                <PartnersContainer title={'Meet a partner for your best holiday'}/>
                <MasonryContainer title={'Discover holiday activity ideas'}/>
                <footer className="page-footer">
                    <Logo text={'URLAUBSGLÜCK'}/>
                    <ListContainer/>
                    <LegalInfo text={'designed by'}/>
                </footer>
            </div>
        );
    }
}