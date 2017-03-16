/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {StepCard} from '../StepCard/StepCard';
import uuid from 'uuid';
import css from './steps.scss';

export class StepsContainer extends React.Component {
    constructor(props) {
        super();
        this.stepsData = [];
    }

    componentWillMount() {
        this.stepsData = [
            {
                title: 'Sed leo enim, condimentum',
                text: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
                number: 1,
                img: '../img/steps-slider/step-1.jpg'
            },
            {
                title: 'Morbi velit risus',
                text: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.',
                number: 2,
                img: '../img/steps-slider/step-2.jpg'
            },
            {
                title: 'Sed leo enim, condimentum',
                text: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
                number: 3,
                img: '../img/steps-slider/step-3.jpg'
            }
        ];
    }

    render() {
        let items;

        if (this.stepsData) {
            items = this.stepsData.map((item) => {
                return (
                    <div key={uuid.v4()} className="steps__item">
                        <StepCard
                            key={uuid.v4()}
                            title={item.title}
                            text={item.text}
                            number={item.number}
                            img={item.img}
                        />
                    </div>
                );
            });
        }

        return (
            <section className="steps">
                <h2 className="steps__title">{this.props.title}</h2>
                {items}
            </section>
        )
    }
}

StepsContainer.propTypes = {
    title: React.PropTypes.string
};