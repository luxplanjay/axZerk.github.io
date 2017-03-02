/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {Logo} from '../Logo/Logo';
import {ListContainer} from '../ListContainer/ListContainer';
import {Legal} from '../Legal/Legal';

import css from './page-footer.scss';

export class FooterContainer extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <footer className="page-footer">
                <Logo text={'URLAUBSGLÜCK'}/>
                <ListContainer/>
                <Legal/>
            </footer>
        )
    }

}
