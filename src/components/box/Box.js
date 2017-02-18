/**
 * Created by Zerk on 17-Feb-17.
 */

import  React from 'react';
import css from './box.scss';

export class Box extends React.Component {
    constructor(props) {
        super();

        this.state = {
            age: props.user.initialAge,
            name: props.user.name,
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeName() {
        this.setState({
            name: this.state.inputValue
        });
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div className="box">
                <h1 className="box__title">Hello I am a Box component!</h1>
                <p>U are {this.state.name} and u {this.state.age} years old</p>
                <button onClick={() => this.onMakeOlder()} className="box__btn">Make me older!</button>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.onChangeName}>Change name</button>
                <button onClick={this.props.greet}>Greet!</button>
            </div>
        );
    }
}

Box.propTypes = {
    user: React.PropTypes.object,
}