/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {PromoContainer} from './PromoContainer/PromoContainer';
import {StepsContainer} from './StepsContainer/StepsContainer';
import {PartnersContainer} from './PartnersContainer/PartnersContainer';
import {MasonryContainer} from './MasonryContainer/MasonryContainer';
import {FooterContainer} from './FooterContainer/FooterContainer';

import css from './app-container.scss';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="app-container">
                <PromoContainer/>
                <StepsContainer title={'How Urlaubsglück works?'}/>
                <PartnersContainer title={'Meet a partner for your best holiday'}/>
                <MasonryContainer title = {'Discover holiday activity ideas'}/>
                <FooterContainer/>
            </div>
        );
    }
}

App.propTypes = {}