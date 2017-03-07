/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Logo} from '../Logo/Logo';
import {UserLoginOptions} from '../UserLoginOptions/UserLoginOptions';
import {PartnerSearch} from '../PartnerSearch/PartnerSearch';

import css from './promo-headline.scss';

export class PromoContainer extends React.Component {

    render() {
        return (
            <div className="promo-headline">
                <Logo text={'URLAUBSGLÜCK'}/>
                <UserLoginOptions
                    leftBtnText={'Log in'}
                    rightBtnText={'Sign up'}
                />
                <PartnerSearch
                    title={'Share your holiday dreams'}
                    text={'And find the perfect partner to fulfill it'}
                    btnText={'Find your holiday partner'}
                />
            </div>
        )
    }

}
