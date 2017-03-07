/**
 * Created by Zerk on 02-Mar-17.
 */

import React from 'react';
import {PartnerCard} from '../PartnerCard/PartnerCard';
import {Button} from '../Button/Button';
import uuid from 'uuid';

import css from './partners.scss';

export class PartnersContainer extends React.Component {
    constructor(props) {
        super();
        this.title = props.title;
        this.partnerData = [];
    }

    componentWillMount() {
        this.partnerData = [
            {
                name: 'Bradley Hunter',
                about: 'Based in Chicago. I love playing tennis and loud music.',
                img: '../img/partners/bradley.png',
                icon: '../img/partners/tv-icon.png'
            },
            {
                name: 'Lucas Marsha',
                about: 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.',
                img: '../img/partners/lucas.png',
                icon: '../img/partners/coffee-icon.png'
            },
            {
                name: 'Heather Walker',
                about: 'I\'m a happy person that loves cats and climbing on mountains.',
                img: '../img/partners/heather.png',
                icon: '../img/partners/science-icon.png'
            },
            {
                name: 'Alice MacGyver',
                about: 'Action movie superstar looking to blow of some steam. Let\'s get wasted.',
                img: '../img/partners/alice.png',
                icon: '../img/partners/airplane-icon.png'
            }
        ];
    }

    render() {
        let items;

        if (this.partnerData) {
            items = this.partnerData.map(item => {
                return (
                    <div className="partners__item" key={uuid.v4()}>
                        <PartnerCard
                            key={uuid.v4()}
                            name={item.name}
                            about={item.about}
                            img={item.img}
                            icon={item.icon}
                        />
                    </div>
                )
            });
        }
        return (
            <section className="partners">
                <h2 className="partners__title">{this.title}</h2>
                <div className="partners__content">
                    {items}
                </div>
                <Button text={'See other partners'}/>
            </section>
        )
    }

}

PartnersContainer.propTypes = {
    title: React.PropTypes.string
};
