/**
 * Created by Zerk on 16-Mar-17.
 */

import React from 'react';
import Slider from 'react-slick';
import {PrevNavBtn} from './PrevNavBtn';
import {NextNavBtn} from './NextNavBtn';
import {StepCard} from '../StepCard/StepCard';
import uuid from 'uuid';

import css from './step-slider.scss';

export class StepSlider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: this.props.startingSlide,
            vertical: false,
            autoplay: true,
            prevArrow: <PrevNavBtn/>,
            nextArrow: <NextNavBtn/>
        };

        let items;

        if (this.props.data) {
            items = this.props.data.map(item => {
                return (
                    <div key={uuid.v4()}>
                        <StepCard
                            key={uuid.v4()}
                            title={item.title}
                            text={item.text}
                            stepText={item.stepText}
                            img={item.img}
                        />
                    </div>
                );
            });
        }

        return (
            <div className="slider-container">
                <Slider {...settings}>
                    {items}
                </Slider>
            </div>
        );
    }
}

StepSlider.propTypes = {
    startingSlide: React.PropTypes.number
};





