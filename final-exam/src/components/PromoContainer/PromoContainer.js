/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Logo} from '../Logo/Logo';
import {AuthContainer} from '../AuthContainer/AuthContainer';
import {PartnerSearch} from '../PartnerSearch/PartnerSearch';

import css from './promo-headline.scss';

export class PromoContainer extends React.Component {

    render() {
        return (
            <div className="promo-headline">
                <Logo text={'URLAUBSGLÜCK'}/>
                <AuthContainer
                    leftBtnText={'Log in'}
                    rightBtnText={'Sign up'}
                />
                <PartnerSearch
                    title={'Share your holiday dreams'}
                    text={'And find the perfect partner to fullfill it'}
                    btnText={'Find your holiday partner'}
                />
            </div>
        )
    }

}
