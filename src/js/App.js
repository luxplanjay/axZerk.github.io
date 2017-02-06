import '../sass/hello.scss';

import React from 'react';
import { formatName } from './util';

export class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            someState: 'Hello'
        }
    }

    componentWillMount() {
        console.log('componentWillMount!');
    }

    componentDidMount() {
        console.log('componentDidMount!');
        setTimeout((() => this.setState({someState: 'Goodbye'})), 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate! State changed from ' + prevState.someState + ' to ' + this.state.someState);
    }

    render() {
        return (<div><h1 className="hello">{this.state.someState}, {formatName(this.props.user)}</h1></div>);
    }
}