/**
 * Created by Zerk on 02-Mar-17.
 */

import React from "react";
import {PartnerCard} from "../PartnerCard/PartnerCard";
import {Button} from "../Button/Button";
import uuid from "uuid";

import css from "./partners.scss";

export class PartnersContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            partnerData: []
        };
    }

    componentDidMount() {
        this.getPartnerData(this.props.dataURL);
    }

    getPartnerData(url) {
        fetch(url)
            .then(function (response) {
                if (response.status === 200) {
                    return response.json();
                }
            })
            .then(function (data) {
                this.setState({
                    partnerData: data
                });
            }.bind(this))
            .catch(alert);
    }

    render() {
        let items;

        if (this.state.partnerData) {
            items = this.state.partnerData.map(item => {
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
                <h2 className="partners__title">{this.props.title}</h2>
                <div className="partners__content">
                    {items}
                </div>
                <Button text={'See other partners'} cls={'button'}/>

            </section>
        );
    }

}

PartnersContainer.propTypes = {
    title: React.PropTypes.string,
    dataURL: React.PropTypes.string
};
