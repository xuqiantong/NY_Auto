/**
 * Created by jeanliu on 3/16/17.
 */

import React from 'react';

function OfferMaintain(props) {
    const imgPath = props.imgPath;

    return (
        <div className="offer-item col-md-3 col-sm-6">
            <div className="offer-item-title">
                Complementary Maintenance
            </div>
            <img src={imgPath} alt="./images/carAlt.png" width="90" height="90"/>
            <div className="offer-item-desc">
                We provide 90-day/3000mi merit warranty
            </div>
        </div>
    );
}

function OfferGuide(props) {
    const imgPath = props.imgPath;

    return (
        <div className="offer-item col-md-3 col-sm-6">
            <div className="offer-item-title col-md-12">
                Free Guide
            </div>
            <img src={imgPath} alt="./static/bundles/images/carAlt.png" width="90" height="90"/>
            <div className="offer-item-desc">
                We offer suggested price range for every car listed online
            </div>
        </div>
    );
}

function OfferProf(props) {
    const imgPath = props.imgPath;

    return (
        <div className="offer-item col-md-3 col-sm-6">
            <div className="offer-item-title col-md-12">
                Professional Sales
            </div>
            <img src={imgPath} alt="./static/bundles/images/carAlt.png" width="90" height="90"/>
            <div className="offer-item-desc">
                Our sales are all car enthusiasts who DIYed several projects on their own cars
            </div>
        </div>
    );
}

function OfferSell(props) {
    const imgPath = props.imgPath;

    return (
        <div className="offer-item col-md-3 col-sm-6">
            <div className="offer-item-title col-md-12">
                Easy Sell
            </div>
            <img src={imgPath} alt="./static/bundles/images/carAlt.png" width="90" height="90"/>
            <div className="offer-item-desc">
                Just list your car on our site and the next buyer will find you in a short time
            </div>
        </div>
    );
}

export default class HereWeOffer extends React.Component {
    render() {

        return (
            <div className="offer-section col-md-12">
                <div className="offer-title col-md-12 ">
                    Here We Offer!
                </div>
                <OfferMaintain imgPath="./static/bundles/images/sell_icons/tool.png"/>
                <OfferGuide imgPath="./static/bundles/images/sell_icons/info.png"/>
                <OfferProf imgPath="./static/bundles/images/sell_icons/group.png"/>
                <OfferSell imgPath="./static/bundles/images/sell_icons/sell-icon.png"/>
            </div>
        );
    }
}
