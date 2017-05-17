import React, { Component } from 'react';

import './App.css';

import NavBar from '../new-navbar/NavBar';
import DmsUI from './DmsUI';
import ImageArea from './ImageArea';

var Button = require('react-bootstrap/lib/Button');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');


function getCookie(cname) {
     var name = cname + "=";
     var ca = document.cookie.split(';');
     for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if(c.indexOf(name) == 0)
           return c.substring(name.length,c.length);
     }
        return "";
}

class App extends Component {
  constructor(props) {
        super(props);
        this.state = {
            basicinfo: {},
            imagelist: {},
            name: '',
            email: '',
            phone: '',
            living_area: '',
            step: 1,
            vehiclelist: [],
            customerlist: [],
            carid: 0,
            cusid: 0,
            complete: "",
        };
       this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

   
    uploadToServer(){
          var personInfo = {name: this.state.name, email: this.state.email, phone: this.state.phone, living_area: this.state.living_area};
          var c_request = $.ajax({
          url: '/api/customer/',
          type: 'POST',
          data: JSON.stringify(personInfo),
          dataType: 'json',
          headers: { "X-CSRFToken": getCookie("csrftoken") },
          contentType: 'application/json',
          });
          var v_request = $.ajax({
          url: '/api/vehicle/',
          type: 'POST',
          data: JSON.stringify(this.state.basicinfo),
          dataType: 'json',
          headers: { "X-CSRFToken": getCookie("csrftoken") },
          contentType: 'application/json',
          success: this.setState({complete : "Success"})
          });

          var carid, cusid;
          var imagelist = this.state.imagelist;
          v_request.done(function(vehicle) {
               carid = vehicle.id;                
          });
          c_request.done(function(customer) {
                cusid = customer.id;
          });
        
          $.when(v_request, c_request).done(function ( v1, v2 ) {
               console.log(cusid);
               console.log(carid);
               var selldata = {customer: cusid, vehicle: carid};
               $.ajax({
                  url: '/api/sell/',
                  type: 'POST',
                  data: JSON.stringify(selldata),
                  dataType: 'json',
                  headers: { "X-CSRFToken": getCookie("csrftoken") },
                  contentType: 'application/json',
                  success: console.log("success")
              });
              if (imagelist.Front != '') {
                  var file = imagelist.Front;
                  var frontData = new FormData();
                  frontData.append("vehicle", carid);
                  frontData.append("image", file, 'front.jpg');
                  frontData.append("view", "front");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: frontData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Frontleft != '') {
                  var file = imagelist.Frontleft;
                  var frontleftData = new FormData();
                  frontleftData.append("vehicle", carid);
                  frontleftData.append("image", file, 'frontleft.jpg');
                  frontleftData.append("view", "frontleft");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: frontleftData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }

              if (imagelist.Frontright != '') {
                  var file = imagelist.Frontright;
                  var frontrightData = new FormData();
                  frontrightData.append("vehicle", carid);
                  frontrightData.append("image", file, 'frontright.jpg');
                  frontrightData.append("view", "frontright");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: frontrightData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Left != '') {
                  var file = imagelist.Left;
                  var LeftData = new FormData();
                  LeftData.append("vehicle", carid);
                  LeftData.append("image", file, 'Left.jpg');
                  LeftData.append("view", "Left");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: LeftData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Mileagedisplay != '') {
                  var file = imagelist.Mileagedisplay;
                  var MileagedisplayData = new FormData();
                  MileagedisplayData.append("vehicle", carid);
                  MileagedisplayData.append("image", file, 'Mileagedisplay.jpg');
                  MileagedisplayData.append("view", "Mileagedisplay");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: MileagedisplayData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Rear != '') {
                  var file = imagelist.Rear;
                  var RearData = new FormData();
                  RearData.append("vehicle", carid);
                  RearData.append("image", file, 'Rear.jpg');
                  RearData.append("view", "Rear");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: RearData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Rearleft != '') {
                  var file = imagelist.Rearleft;
                  var RearleftData = new FormData();
                  RearleftData.append("vehicle", carid);
                  RearleftData.append("image", file, 'Rearleft.jpg');
                  RearleftData.append("view", "Rearleft");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: RearleftData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Rearright != '') {
                  var file = imagelist.Rearright;
                  var RearrightData = new FormData();
                  RearrightData.append("vehicle", carid);
                  RearrightData.append("image", file, 'Rearright.jpg');
                  RearrightData.append("view", "Rearright");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: RearrightData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.Right != '') {
                  var file = imagelist.Right;
                  var RightData = new FormData();
                  RightData.append("vehicle", carid);
                  RightData.append("image", file, 'Right.jpg');
                  RightData.append("view", "Right");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: RightData,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.frontseats != '') {
                  var file = imagelist.frontseats;
                  var frontseats = new FormData();
                  frontseats.append("vehicle", carid);
                  frontseats.append("image", file, 'frontseats.jpg');
                  frontseats.append("view", "frontseats");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: frontseats,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.otherequp != '') {
                  var file = imagelist.otherequp;
                  var otherequp = new FormData();
                  otherequp.append("vehicle", carid);
                  otherequp.append("image", file, 'otherequp.jpg');
                  otherequp.append("view", "otherequp");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: otherequp,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }
              if (imagelist.rearseats != '') {
                  var file = imagelist.rearseats;
                  var rearseats = new FormData();
                  rearseats.append("vehicle", carid);
                  rearseats.append("image", file, 'rearseats.jpg');
                  rearseats.append("view", "rearseats");
                  $.ajax({
                      url: '/api/has_image/',
                      type: 'POST',
                      data: rearseats,
                      contentType: false,
                      processData: false,
                      cache: false,
                      headers: { "X-CSRFToken": getCookie("csrftoken") },
                      success: console.log('image success!')
                  });
              }

          });

        } 
      

    

    onAddBtnClick(event) {
        const imagelist= this.state.imagelist;
        this.setState({
            // imagelist: this.state.imagelist.concat(<ImageUpload />)
            // this line needs modification --> array of ImageUpload
        });
    }
    handleName(e) {
       this.setState({name: e.target.value});
    }
    handleEmail(e) {
       this.setState({email: e.target.value});
    }
    handlePhone(e) {
       this.setState({phone: e.target.value});
    }
    handleArea(e) {
       this.setState({living_area: e.target.value});
    }
    onUpdate1() {
       this.setState({step: 1});
    }
    onUpdate1() {
       this.setState({step: 1});
    }
    onUpdate2() {
       this.setState({step: 2});
    }
    onUpdate3(info) {
       this.setState({step: 3});
    }
    setBasicInfo(info) {
       this.setState({basicinfo: info});
    }
    setImageInfo(info) {
       this.setState({imagelist: info});
    }

  render() {
    if (this.state.step == 1) {
      return (
       <div className="App">
         <NavBar active="sell1"/>
         <DmsUI onUpdate={this.onUpdate2.bind(this)} setBasicinfo={this.setBasicInfo.bind(this)}/>
       </div>

      );
    }
    if (this.state.step == 2) {
     return (
       <div className="App">
           <NavBar active="sell1"/>
           <ImageArea  add={this.onAddBtnClick.bind(this)} update1={this.onUpdate1.bind(this)} 
             setStep={this.onUpdate3.bind(this)} setImage={this.setImageInfo.bind(this)}/>

       </div>
      );
     }
    if (this.state.step == 3) {
      return (
        <div className="App">
            <NavBar active="sell1"/>
            <div>
                <div className="banner">
                    Contact
                </div>

                <Row>
                  <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                    <FormGroup controlId="formgroup-vin">
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text" label="Text" placeholder="E.g., James May" onChange={this.handleName.bind(this)}/>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                    <FormGroup controlId="formgroup-vin">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="text" label="Text" placeholder="E.g., 123@gmail.com" onChange={this.handleEmail.bind(this)}/>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                    <FormGroup controlId="formgroup-vin">
                        <ControlLabel>Phone Number</ControlLabel>
                        <FormControl type="text" label="Text" placeholder="E.g., 123-456-7890" onChange={this.handlePhone.bind(this)}/>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                    <FormGroup controlId="formgroup-vin">
                      <ControlLabel>Living Area</ControlLabel>
                      <FormControl type="text" label="Text" placeholder="E.g., New York, NY" onChange={this.handleArea.bind(this)}/>
                    </FormGroup>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                    <Col md={6} sm={6} xs={6}>
                      <Col md={4} mdOffset={2} sm={4} smOffset={2} xs={4} xsOffset={2}>
                        <Button bsStyle="primary" id="submit" onClick={this.onUpdate2.bind(this)}>Prev Step</Button>
                      </Col>
                    </Col>
                    <Col md={6} sm={6} xs={6}>
                      <Col md={4} mdOffset={4} sm={4} smOffset={4} xs={4} xsOffset={2}>

                        <Button bsStyle="primary" id="submit" onClick={this.uploadToServer.bind(this)}>Submit</Button>
                      </Col>
                    </Col>
                  </Col>
                </Row>  
                <div className="banner">
                    {this.state.complete}
                </div>

            </div>
          </div>

      );

    }

   }
}

export default App;

