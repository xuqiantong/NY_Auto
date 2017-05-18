/**
 * Created by jeanliu on 3/16/17.
 */

import React, {Component} from 'react';

export default class MediaSection extends React.Component {
    render() {

        return(
            <div className="media-section col-md-12 col-sm-12">
                <div className="media-title col-md-12 col-sm-12">
                     Media
                </div>
                <div className="media-contents col-md-12 col-sm-12">
                    <div className="media-icon col-md-3 col-sm-6">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon col-md-3 col-sm-6">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon col-md-3 col-sm-6">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon col-md-3 col-sm-6">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                </div>
            </div>
        );
    }
}