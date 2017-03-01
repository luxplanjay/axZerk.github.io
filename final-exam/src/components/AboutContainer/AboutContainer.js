/**
 * Created by Zerk on 01-Mar-17.
 */

import React from 'react';
import {StepCard} from '../StepCard/StepCard';
import uuid from 'uuid';
import css from './about.scss';

export class AboutContainer extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.stepsData = [];
    }

    componentWillMount() {
        this.stepsData = [
            {
                title: 'Sed leo enim, condimentum',
                text: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
                number: 1,
                img: '../img/step-1.jpg'
            },
            {
                title: 'Morbi velit risus',
                text: 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.',
                number: 2,
                img: '../img/step-2.jpg'
            },
            {
                title: 'Sed leo enim, condimentum',
                text: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
                number: 3,
                img: '../img/step-3.jpg'
            }
        ];
    }

    render() {
        let items;

        if (this.stepsData) {
            items = this.stepsData.map((item) => {
                return (
                    <div key={uuid.v4()} className="about__item">
                        <StepCard
                            key={uuid.v4()}
                            title={item.title}
                            text={item.text}
                            number={item.number}
                            img = {item.img}
                        />
                    </div>
                )
            });

        }

        return (
            <section className="about">
                <h2 className="about__title">{this.title}</h2>
                {items}
            </section>
        )
    }
}