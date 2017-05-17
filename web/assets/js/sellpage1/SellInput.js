/**
 * Created by Kong on 4/2/2017.
 */
import React from 'react';
import './SellInput.css';


export default class SellInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id ="container">
            <div id ="stepsBanner">Sell your car to NY Auto Depot in
                <span id ="threeSteps"> 3 Steps</span>
            </div>
            <div id ="guidelineWrapper">
                <span id ="step1">Enter your VIN number</span>
                <span id ="spaceLine">  -------------------  </span>
                <span id ="step2">Edit your car information(Current miles, photos, etc)</span>
                <span id ="spaceLine">  -------------------  </span>
                <span id ="step3">Leave your phone # to stay contacted!</span>
            </div>
            <div id ="inputBox">
                <p id ="description">Provide the VIN so we can get accurate information of you vehicle</p>
                <input id ="enterVin" placeholder=" Vin#"/>
                <button id ="submit" onClick={this.update.bind(this)}>Next</button>
           </div>
        </div>
      )
    }
    update() {
        this.props.onUpdate();
    }
};