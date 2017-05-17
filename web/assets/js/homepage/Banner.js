/**
 * Created by jeanliu on 3/16/17.
 */

import React from 'react';

export default class Banner extends React.Component {
    render() {

    	const bgImg = "./static/bundles/images/pexel.jpg";

    	const bannerStyle = {
            backgroundImage: "url(" + bgImg + ")",
            backgroundSize: "cover",
            backgroundPositionY: "50%",
            height: "450px"
        };



        return(
            <div className="banner col-md-12" style={bannerStyle}></div>
        );
    }
}