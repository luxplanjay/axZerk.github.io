import '../sass/hello.scss';

import React from 'react';

import { formatName } from './util';

export class App extends React.Component {
    render() {
        return (<div><h1 className="hello">Hello, {formatName(this.props.user)}</h1></div>);
    }
}