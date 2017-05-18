/**
 * Created by jeanliu on 3/16/17.
 */

import React from 'react';

function SellTellAboutCar(props) {
    const imgPath = props.imgPath;

    return (
        <div className="sell-ads col-md-4 col-sm-4">
            <div className="sell-img-wrapper">
                <img className="sell-img" src={imgPath} alt="./static/bundles/images/sell_icons/dashboard.png" width="90" height="90"/>
            </div>
            <div className="sell-ads-desc">
                1. Tell us about your car and get your Instant Cash Offer
            </div>
        </div>
    );
}

function SellGetInspec(props) {
    const imgPath = props.imgPath;

    return (
        <div className="sell-ads col-md-4 col-sm-4">
            <div className="sell-img-wrapper">
                <img className="sell-img" src={imgPath} alt="./static/bundles/images/carAlt.png" width="90" height="90"/>
            </div>
            <div className="sell-ads-desc">
                2. Visit us or ask our technician to verify your car's features and condition
            </div>
        </div>
    );
}

function SellTradeInOrBuy(props) {
    const imgPath = props.imgPath;

    return (
        <div className="sell-ads col-md-4 col-sm-4">
            <div className="sell-img-wrapper">
                <img className="sell-img" src={imgPath} alt="./static/bundles/images/carAlt.png" width="90" height="90"/>
            </div>
            <div className="sell-ads-desc">
                3. Trade in your car or let us buy your car for cash
            </div>
        </div>
    );
}

function SellButton(props) {
    return (
        <div className="sell-button col-md-2 col-md-push-5 col-sm-6 col-sm-push-3">
            <button className="start-sell" type="button" onclick="location.href='/sell1';">
                <a className="button-a" href="/sell1">Start Selling</a>
            </button>
        </div>
    );
}

export default class SellSection extends React.Component {
    render() {

        return(
            <div className="sell-section col-md-12 col-sm-12">
                <div className="sell-title col-md-4 col-md-push-4 col-sm-6 col-sm-push-3">
                    Want to sell your vehicle?
                </div>
                <div className="col-md-12 col-sm-12">
                    <SellTellAboutCar imgPath="./static/bundles/images/sell_icons/dashboard.png" />
                    <SellGetInspec imgPath="./static/bundles/images/sell_icons/checked.png" />
                    <SellTradeInOrBuy imgPath="./static/bundles/images/sell_icons/cash.png" />
                </div>
                <SellButton />
            </div>
        );
    }
}