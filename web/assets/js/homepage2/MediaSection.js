/**
 * Created by jeanliu on 3/16/17.
 */

import React, {Component} from 'react';

export default class MediaSection extends React.Component {
    render() {

        return(
            <div className="media-section">
                <div className="media-title">
                    Media
                </div>
                <div className="media-contents">
                    <div className="media-icon">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                    <div className="media-icon">
                        <img src="./static/bundles/images/WSJ-logo.jpg" alt="./images/carAlt.png" width="123" height="30" />
                    </div>
                </div>
            </div>
        );
    }
}