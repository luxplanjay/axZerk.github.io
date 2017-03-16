/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {StepCard} from '../StepCard/StepCard';
import {StepSlider} from '../StepSlider/StepSlider';
import uuid from 'uuid';
import css from './steps.scss';

export class StepsContainer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            sliderData: []
        }
    }

    componentDidMount() {
        this.getSliderData(this.props.dataURL);
    }

    getSliderData(url) {
        fetch(url)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                this.setState({
                    sliderData: data
                });
            }.bind(this))
            .catch(alert);
    }

    render() {
        let items;
        if (this.state.sliderData) {
            items = this.state.sliderData.map((item, i) => {
                return (
                    <div className="steps__item" key={uuid.v4()}>
                        <StepSlider
                            data={this.state.sliderData}
                            startingSlide={i}
                        />
                    </div>
                )
            });
        }

        return (
            <section className="steps">
                <h2 className="steps__title">{this.props.title}</h2>
                {items}
            </section>
        );
    }
}

StepsContainer.propTypes = {
    title: React.PropTypes.string,
    dataURL: React.PropTypes.string
};