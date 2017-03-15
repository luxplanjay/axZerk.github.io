/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';

import css from './partner-search.scss';

export class PartnerSearch extends React.Component {
    constructor(props) {
        super(props);

        this.title = props.title;
        this.text = props.text;
        this.btnText = props.btnText;
        this.inputVis = props.inputVis || 'hidden';
        this.action = props.action || '';

        this.state = {
            inputValue: 'Enter your interests',
            currentInputValue: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.inputValue === 'Enter your interests') {
            this.setState({
                inputValue: '',
                currentInputValue: ''
            }, function () {
                this.props.getData(this.state.currentInputValue);
            });
        } else {
            this.setState({
                inputValue: '',
                currentInputValue: this.state.inputValue
            }, function () {
                this.props.getData(this.state.currentInputValue);
            });
        }
    }

    handleInputChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        let inputClass = `partner-search__input partner-search__input--${this.inputVis}`;

        return (
            <div className="partner-search">
                <h1 className="partner-search__title">{ this.title}</h1>
                <p className="partner-search__text">{ this.text}</p>
                <form
                    action={ this.action}
                    method="post"
                    className="partner-search__form"
                    onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        className={inputClass}
                        value={this.state.inputValue}
                        onChange={event => this.handleInputChange(event)}
                    />
                    <Button text={ this.btnText}/>
                </form>
            </div>
        )
    }
}

PartnerSearch.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    btnText: React.PropTypes.string,
    inputVis: React.PropTypes.string
};