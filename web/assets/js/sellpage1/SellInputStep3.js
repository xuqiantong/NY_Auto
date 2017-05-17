/**
 * Created by Kong on 4/12/2017.
 */

import React from 'react';
import './SellInputStep3.css';

export default class SellInputStep2 extends React.Component {
    render() {
        return <div className="s3container">
            <div className="s3stepsBanner">Sell your car to NY Auto Depot in
                <span className="s3threeSteps"> 3 Steps</span>
            </div>
            <div className="s3guidelineWrapper">
                <span className="s3step1">Enter your VIN number</span>
                <span className="s3spaceLine">  -------------------  </span>
                <span className="s3step2">Edit your car information(Current miles, photos, etc)</span>
                <span className="s3spaceLine">  -------------------  </span>
                <span className="s3step3">Leave your phone # to stay contacted!</span>
            </div>
            <div className="s3inputBox">
                <p className="s3description">Contact</p>
                <p className = "s3name">Name</p>
                <input className="s3enterName" placeholder=""/>
                <p className="s3phoneNum">Phone Number</p>
                <input className="s3enterPhoneNum" placeholder=""/>
                <p className="s3livingArea">Living Area</p>
                <input className="s3enterLivingArea" placeholder=""/>
                <button className="s3submit">Submit</button>
            </div>
        </div>;
    }
};