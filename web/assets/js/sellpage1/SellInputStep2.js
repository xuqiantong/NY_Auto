/**
 * Created by Kong on 4/12/2017.
 */

import React from 'react';
import './SellInputStep2.css';

export default class SellInputStep2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="s2container">
            <div className="s2stepsBanner">Sell your car to NY Auto Depot in
                <span className="s2threeSteps"> 3 Steps</span>
            </div>
            <div className="s2guidelineWrapper">
                <span className="s2step1">Enter your VIN number</span>
                <span className="s2spaceLine">  -------------------  </span>
                <span className="s2step2">Edit your car information(Current miles, photos, etc)</span>
                <span className="s2spaceLine">  -------------------  </span>
                <span className="s2step3">Leave your phone # to stay contacted!</span>
            </div>
            <div className="s2inputBox">
                <p className="s2description">More information</p>
                <p className = "s2mileage">Mileage</p>
                <input className="s2enterMileage" placeholder=""/>
                <p className="s2carSettings">Car settings</p>
                <div className="s2checkboxes">
                    <form>
                        <input type="checkbox" name="carSettings" value="Backup_camera" />Backup camera
                        <input type="checkbox" name="carSettings" value="Blind_spot_detection" />Blind spot detection
                        <input type="checkbox" name="carSettings" value="Navigation" />Navigation
                    </form>
                </div>
                <p className="s2imageUpload">Upload pictures</p>
                <div className="s2uploadForm">
                    <form ref="uploadForm" className="s2uploader" encType="multipart/form-data">
                        <input ref="file" type="file" name="file" className="upload-file"/>
                    </form>
                </div>
                <p className="s2notes">Notes</p>
                <input className="s2enterNotes" placeholder=""/>
                <button id ="submit" onClick={this.update.bind(this)}>Next</button>
            </div>
        </div>
        )
    }
    update() {
        this.props.onUpdate();
    }

};