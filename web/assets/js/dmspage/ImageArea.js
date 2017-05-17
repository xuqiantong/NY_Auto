/**
 * Created by jeanliu on 5/6/17.
 */

import React, { Component } from 'react';
import ImageUpload from './ImageUpload';


import './ImageArea.css';


var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');

class Temp extends Component {
   constructor(props) {
     super(props);
   }


   render() {

     return (
        <Col md={10} mdOffset={1}>
            <Row className="image-row">
                <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Front:" upload={this.props.front.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Rear:" upload={this.props.rear.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Left:" upload={this.props.left.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Right:" upload={this.props.right.bind(this)}/>
                    </Col>
                </Col>
            </Row>

            <Row className="image-row">
                <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Front-left:" upload={this.props.fleft.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Front-Right:" upload={this.props.fright.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Rear-left:" upload={this.props.rleft.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Rear-right:" upload={this.props.rright.bind(this)}/>
                    </Col>
                </Col>
            </Row>

            <Row className="image-row">
                <Col md={12} mdOffset={0} sm={10} smOffset={1} xs={10} xsOffset={1}>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Mileage Displayed:" upload={this.props.mdisplay.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Front Seats:" upload={this.props.fseat.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Rear Seats:" upload={this.props.rseat.bind(this)}/>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="imguploader-wrapper">
                        <ImageUpload imgTitle="Other equipment:" upload={this.props.equp.bind(this)}/>
                    </Col>
                </Col>
            </Row>


        </Col>
    );
 }
}



export default class ImageArea extends Component {
    constructor(props) {
        super(props);
        this.state= {
         Front: '',
         Rear: '',
         Left: '',
         Right: '',
         Frontleft: '',
         Frontright: '',
         Rearleft: '',
         Rearright: '',
         Mileagedisplay: '',
         frontseats: '',
         rearseats:'',
         otherequp: '',
        };
      
    }
    setfront(file) {
        this.setState({Front: file});
    }
    setrear(file) {
        this.setState({Rear: file});
    }
    setleft(file) {
        this.setState({Left: file});
    }
    setright(file) {
        this.setState({Right: file});
    }
    setfleft(file) {
        this.setState({Frontleft: file});
    }
    setfright(file) {
        this.setState({Frontright: file});
    }
    setrleft(file) {
        this.setState({Rearleft: file});
    }
    setrright(file) {
        this.setState({Rearright: file});
    }
    setequp(file) {
        this.setState({otherequp: file});
    }
    setfseat(file) {
        this.setState({frontseats: file});
    }
    setrseat(file) {
        this.setState({rearseats: file});
    }
    setmdisplay(file) {
        this.setState({Mileagedisplay: file});
    }

    click(){
        this.props.setStep({step: 3});
        this.props.setImage(this.state);
    }

    render() {
        var info = "dddd";
        return(
            <div>
            <Row>
                <Temp front={this.setfront.bind(this)} rear={this.setrear.bind(this)} left={this.setleft.bind(this)}
                  right={this.setright.bind(this)} fright={this.setfright.bind(this)} rright={this.setrright.bind(this)}
                  fleft={this.setfleft.bind(this)} rleft={this.setrleft.bind(this)} mdisplay={this.setmdisplay.bind(this)}
                  fseat={this.setfseat.bind(this)} rseat={this.setrseat.bind(this)} equp={this.setequp.bind(this)}/>
            </Row>

             <Row className="img-btn-group">
               <Col md={4} mdOffset={4} sm={8} smOffset={2} xs={10} xsOffset={1}>
                   <Col md={4} sm={4} xs={4}>
                       <Button bsStyle="primary" className="img-btn" id="submit" onClick={this.props.update1.bind(this)}>prev step</Button>
                   </Col>
                   <Col md={4} sm={4} xs={4}>
                       <Button bsStyle="primary" className="img-btn" id="submit" onClick={this.props.add.bind(this)}>Add images</Button>
                   </Col>
                   <Col md={4} sm={4} xs={4}>
                       <Button bsStyle="primary" className="img-btn" id="submit" onClick={this.click.bind(this)} >next step</Button>
                   </Col>
               </Col>
             </Row>
            </div>
        );
    }
}