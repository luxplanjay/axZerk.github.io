/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {PromoContainer} from './PromoContainer/PromoContainer';
import {AboutContainer} from './AboutContainer/AboutContainer';

import css from './app-container.scss';

export class App extends React.Component {
    constructor(props) {
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
                <AboutContainer title = {'How Urlaubsglück works?'}/>
            </div>
        );
    }
}

App.propTypes = {}