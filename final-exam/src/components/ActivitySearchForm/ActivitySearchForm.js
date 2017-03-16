/**
 * Created by Zerk on 16-Mar-17.
 */

import React from 'react';
import {Button} from '../Button/Button';

import css from './activity-search.scss';

export class ActivitySearchForm extends React.Component {
    constructor(props) {
        super(props);

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
        return (
            <div className="activity-search">
                <h1 className="activity-search__title">{this.props.title}</h1>
                <p className="activity-search__text">{ this.props.text}</p>
                <form
                    action={ this.props.action}
                    method="post"
                    className="activity-search__form"
                    onSubmit={event => this.handleSubmit(event)}>
                    <input
                        type="text"
                        className={'activity-search__input'}
                        value={this.state.inputValue}
                        onChange={event => this.handleInputChange(event)}
                    />
                    <Button text={this.props.btnText} cls={'button'}/>
                </form>
            </div>
        )
    }
}

ActivitySearchForm.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    btnText: React.PropTypes.string,
    inputVis: React.PropTypes.string
};

