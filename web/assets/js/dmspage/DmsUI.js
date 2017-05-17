/**
 * Created by jeanliu on 4/30/17.
 */

import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './DmsUI.css';


var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Button = require('react-bootstrap/lib/Button');
var Checkbox = require('react-bootstrap/lib/Checkbox');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');


var optionsYear = [
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
    { value: '2016', label: '2016' },
    { value: '2015', label: '2015' },
    { value: '2014', label: '2014' },
    { value: '2013', label: '2013' },
    { value: '2012', label: '2012' },
    { value: '2011', label: '2011' },
    { value: '2010', label: '2010' },
    { value: '2009', label: '2009' },
    { value: '2008', label: '2008' },
    { value: '2007', label: '2007' },
    { value: '2006', label: '2006' },
    { value: '2005', label: '2005' },
    { value: '2004', label: '2004' },
    { value: '2003', label: '2003' },
    { value: '2002', label: '2002' },
    { value: '2001', label: '2001' },
    { value: '2000', label: '2000' },
    { value: '1999', label: '1999' },
    { value: '1998', label: '1998' },
    { value: '1997', label: '1997' },
    { value: '1996', label: '1996' },
    { value: '1995', label: '1995' },
    { value: '1994', label: '1994' },
    { value: '1993', label: '1993' },
    { value: '1992', label: '1992' },
    { value: '1991', label: '1991' },
    { value: '1990', label: '1990' }
];

var optionsMake = [
    { value: 'acura', label: 'Acura' },
    { value: 'audi', label: 'Audi' },
    { value: 'bmw', label: 'BMW' }
];

var optionsModel = [
    { value: '325', label: '325' },
    { value: '328', label: '328' },
    { value: '330', label: '330' }
];

var optionsTrim = [
    { value: 'i', label: 'i' },
    { value: 'i xDrive', label: 'i xDrive' }
];

var optionsBody = [
    { value: 'Con', label: 'Convertible' },
    { value: 'SU', label: 'SUV' },
    { value: 'Se', label: 'Sedan' },
    { value: 'Cou', label: 'Coupe' }
];

var optionsTrans = [
    { value: 'A', label: 'Automatic' },
    { value: 'M', label: 'Manual' }
];

var optionsDrive = [
    { value: 'FWD', label: 'Front-wheel Drive' },
    { value: 'RWD', label: 'Rear-wheel Drive' },
    { value: '4WD', label: 'Four-wheel Drive' },
    { value: 'AWD', label: 'All-wheel Drive' }
];

var optionsFuel = [
    { value: 'g', label: 'Gasoline' },
    { value: 'd', label: 'Diesel' },
    { value: 'h', label: 'Hybrid' },
    { value: 'e', label: 'Electric' }
];

var optionsExtColor = [
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'red', label: 'Red' },
    { value: 'yellow', label: 'Yellow' }
];

var optionsIntColor = [
    { value: 'black', label: 'Black' },
    { value: 'red', label: 'Red' },
    { value: 'white', label: 'White' },
    { value: 'beige', label: 'Beige' }
];

var optionsIntType = [
    { value: 'Cl', label: 'Cloth' },
    { value: 'Le', label: 'Leather' },
    { value: 'Vi', label: 'Vinyl' }
];

var optionsCylinder = [
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '8', label: '8' },
    { value: '10', label: '10' },
    { value: '12', label: '12' },
    { value: 'rotary', label: 'Rotary' }
];

class CarBasicSelector extends Component {
    constructor(props) {
        super(props);
        this.saveChanges = this.saveChanges.bind(this);

        this.state = {
            active: ''
        }
    }

    saveChanges(val) {
        this.setState({
            active: val.value
        })
        this.props.setInfo(val.value);
    }

    render() {

        return (
            <Col xs={12} sm={6} md={3} className="basic-col">
                {/*<div className="basicinfo-title">{placeholder}</div>*/}
                <ControlLabel>{this.props.placeholder}</ControlLabel>
                <Select
                    name="form-field-name"
                    value={this.state.active}
                    options={this.props.options}
                    onChange={this.saveChanges}
                    clearable={false}
                />
            </Col>
        );
    }

}

class CarBasicCheckbox extends Component {
   constructor(props) {
        super(props);
   }


   render() {
    return (
        <Col xs={12} sm={12} md={4} className="checkbox-column">
            <ControlLabel className="equip-title">Basic:</ControlLabel>
            <Checkbox>Select All</Checkbox>
            <FormGroup>
                <Checkbox onChange={this.props.PM.bind(this)}>Power Mirrors</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PW.bind(this)}>Power Windows</Checkbox>
                {' '}
                <Checkbox onChange={this.props.TC.bind(this)}>Traction Control</Checkbox>
                {' '}
                <Checkbox onChange={this.props.SC.bind(this)}>Stability Control</Checkbox>
                {' '}
                <Checkbox onChange={this.props.CC.bind(this)}>Cruise Control</Checkbox>
                {' '}
                <Checkbox onChange={this.props.SS.bind(this)}>Security System</Checkbox>
                {' '}
                <Checkbox onChange={this.props.TPMS.bind(this)}>Tire Pressure Monitoring System</Checkbox>
                {' '}
                <Checkbox onChange={this.props.RCP.bind(this)}>Radio / CD Player</Checkbox>
                {' '}
                <Checkbox onChange={this.props.AUX.bind(this)}>AUX</Checkbox>
                {' '}
                <Checkbox onChange={this.props.USB.bind(this)}>USB</Checkbox>
                {' '}
                <Checkbox onChange={this.props.SWAC.bind(this)}>Steering Wheel Audio Control</Checkbox>
                {' '}
                <Checkbox onChange={this.props.ABS.bind(this)}>Anti-lock Brake System</Checkbox>
                {' '}
                <Checkbox onChange={this.props.AC.bind(this)}>A/C</Checkbox>
            </FormGroup>
        </Col>
    );
  }
}

class CarValueCheckbox extends Component {
   constructor(props) {
        super(props);
   }


   render() {
    return (
        <Col xs={12} sm={12} md={4} className="checkbox-column">
            <ControlLabel className="equip-title">Value:</ControlLabel>
            <Checkbox>Select All</Checkbox>
            <FormGroup>
                <Checkbox onChange={this.props.UGO.bind(this)}>Universal Garage Opener</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PSD.bind(this)}>Power Seats - Driver</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PSB.bind(this)}>Power Seats - Both</Checkbox>
                {' '}
                <Checkbox onChange={this.props.RSW.bind(this)} >Rain-Sensing Wiper</Checkbox>
                {' '}
                <Checkbox onChange={this.props.BUC.bind(this)}>Back-Up Camera</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PS.bind(this)}>Parking Sensor</Checkbox>
                {' '}
                <Checkbox onChange={this.props.SF.bind(this)}>Sunroof</Checkbox>
                {' '}
                <Checkbox onChange={this.props.AFM.bind(this)}>All-Weather Floor Mats</Checkbox>
                {' '}
                <Checkbox onChange={this.props.AH.bind(this)}>Automatic Headlights</Checkbox>
                {' '}
                <Checkbox onChange={this.props.DRL.bind(this)}>Daytime Running Lights</Checkbox>
                {' '}
                <Checkbox onChange={this.props.TSW.bind(this)}>Tilt Steering Wheel</Checkbox>
                {' '}
                <Checkbox onChange={this.props.NG.bind(this)}>Navigation / GPS</Checkbox>
                {' '}
                <Checkbox onChange={this.props.DCC.bind(this)}>Dual Climate Control</Checkbox>
            </FormGroup>
        </Col>
      );
   }
}

class CarPremiumCheckbox extends Component {
   constructor(props) {
        super(props);
   }


   render() {
    return (
        <Col xs={12} sm={12} md={4} className="checkbox-column">
            <ControlLabel className="equip-title">Premium:</ControlLabel>
            <Checkbox>Select All</Checkbox>
            <FormGroup>
                <Checkbox onChange={this.props.HUD.bind(this)}>Heads-Up Display</Checkbox>
                {' '}
                <Checkbox onChange={this.props.HSF.bind(this)}>Heated Seats - Front</Checkbox>
                {' '}
                <Checkbox onChange={this.props.HSR.bind(this)}>Heated Seats - Rear</Checkbox>
                {' '}
                <Checkbox onChange={this.props.CSF.bind(this)}>Cooled Seats - Front</Checkbox>
                {' '}
                <Checkbox onChange={this.props.CSR.bind(this)}>Cooled Seats - Rear</Checkbox>
                {' '}
                <Checkbox onChange={this.props.LDS.bind(this)}>Lane Departure System</Checkbox>
                {' '}
                <Checkbox onChange={this.props.KE.bind(this)}>Keyless Entry</Checkbox>
                {' '}
                <Checkbox onChange={this.props.KS.bind(this)}>Keyless Start</Checkbox>
                {' '}
                <Checkbox onChange={this.props.RS.bind(this)}>Rear Spoiler</Checkbox>
                {' '}
                <Checkbox onChange={this.props.HSW.bind(this)}>Heated Steering Wheel</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PSF.bind(this)}>Panorama Sunroof</Checkbox>
                {' '}
                <Checkbox onChange={this.props.NV.bind(this)}>Night Vision</Checkbox>
                {' '}
                <Checkbox onChange={this.props.PSO.bind(this)}>Premium Stereo</Checkbox>
            </FormGroup>
        </Col>
    );
  }
 
}


export default class CarBasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            year: 1790,
            status: '-',
            make: '-',
            model: '-',
            trim: "-",
            mileage: 0,
            color_ext: "-",
            color_int: "-",
            list_price: 0,
            min_price: 0,
            condition: "-",
            owner_num: 0,
            drive: "-",
            engine: "-",
            transmission: "-",
            fuel: "-",
            body_type: "-",
            top_type: "-",
            interior_type: "-",
            door: 0,
            carfaxPath: "-",
            handler: "-",
            location: "-",
            notes: "-",
            eb_Power_Mirrors: false,
            eb_Power_Windows: false,
            eb_Traction_Control: false,
            eb_Stability_Control: false,
            eb_Cruise_Control: false,
            eb_Security_System: false,
            eb_Tire_Pressure_Monitoring_System: false,
            eb_Radio_CD_Player: false,
            eb_AUX: false,
            eb_USB: false,
            eb_Steering_Wheel_Audio_Control: false,
            eb_AntiLock_Brake_System: false,
            eb_AC: false,
            es_Universal_Garage_Opener: false,
            es_Power_Seats_Driver: false,
            es_Power_Seats_Both: false,
            es_Rain_Sensing_Wiper: false,
            es_Back_Up_Camera: false,
            es_Parking_Sensor: false,
            es_Sunroof: false,
            es_All_Weather_Floor_Mats: false,
            es_Automatic_Headlights: false,
            es_Daytime_Running_Lights: false,
            es_Tilt_Steering_Wheel: false,
            es_Navigation_GPS: false,
            es_Dual_Climate_Control: false,
            ep_Heads_Up_Display: false,
            ep_Heated_Seats_Front: false,
            ep_Heated_Seats_Rear: false,
            ep_Cooled_Seats_Front: false,
            ep_Cooled_Seats_Rear: false,
            ep_Lane_Departure_System: false,
            ep_Keyless_Entry: false,
            ep_Keyless_Start: false,
            ep_Rear_Spoiler: false,
            ep_Heated_Steering_Wheel: false,
            ep_Panorama_Sunroof: false,
            ep_Night_Vision: false,
            ep_Premium_Stereo: false,
            valid: false    
        };
    }

    handleVin(e){
        this.setState({vin: e.target.value});
    }
    handleMile(e){
        this.setState({mileage: e.target.value});
    }
    setyear(year){
        this.setState({year});
    }
    setmodel(model){
        this.setState({model});
    }
    setmake(make){
        this.setState({make});
    }
    settrim(trim){
        this.setState({trim});
    }
    settransmission(transmission){
        this.setState({transmission});
    }
    setbodystyle(body_type){
        this.setState({body_type});
    }
    setdrive(drive){
        this.setState({drive});
    }
    setfuel(fuel){
        this.setState({fuel});
    }
    setcolor_ext(color_ext){
        this.setState({color_ext});
    }
    setcolor_int(color_int){
        this.setState({color_int});
    }
    setinterior_type(interior_type){
        this.setState({interior_type});
    }
    setengine(engine){
        this.setState({engine});
    }
    setPower_Mirrors(e){
      this.setState({eb_Power_Mirrors: e.target.checked})
    }
    setPower_Windows(e){
      this.setState({eb_Power_Windows: e.target.checked})
    }
    setTraction_Control(e){
      this.setState({eb_Traction_Control: e.target.checked})
    }
    setStability_Control(e){
      this.setState({eb_Stability_Control: e.target.checked})
    }
    setCruise_Control(e){
      this.setState({eb_Cruise_Control: e.target.checked})
    }
    setSecurity_System(e){
      this.setState({eb_Security_System: e.target.checked})
    }
    setTire_Pressure_Monitoring_System(e){
      this.setState({eb_Tire_Pressure_Monitoring_System: e.target.checked})
      console.log(e.target.checked);
   }
   setRadio_CD_Player(e){
      this.setState({eb_Radio_CD_Player: e.target.checked})
      console.log(e.target.checked);
   }
   setAUX(e){
      this.setState({eb_AUX: e.target.checked})
   }
   setUSB(e){
      this.setState({eb_USB: e.target.checked})
   }
   setSteering_Wheel_Audio_Control(e){
      this.setState({eb_Steering_Wheel_Audio_Control: e.target.checked})
   }
   setAntiLock_Brake_System(e){
      this.setState({eb_AntiLock_Brake_System: e.target.checked})
   }
   setAC(e){
      this.setState({eb_eb_AC: e.target.checked})
   }

   setUGO(e){
      this.setState({es_Universal_Garage_Opener: e.target.checked})
   }
   setPSD(e){
      this.setState({es_Power_Seats_Driver: e.target.checked})
   }
   setPSB(e){
      this.setState({es_Power_Seats_Both: e.target.checked})
   }
   setRSW(e){
      this.setState({es_Rain_Sensing_Wiper: e.target.checked})
   }
   setBUC(e){
      this.setState({es_Back_Up_Camera: e.target.checked})
   }
   setPS(e){
      this.setState({es_Parking_Sensor: e.target.checked})
   }
   setSF(e){
      this.setState({es_Sunroof: e.target.checked})
   }

   setAFM(e){
      this.setState({es_All_Weather_Floor_Mats: e.target.checked})
   }
   setAH(e){
      this.setState({es_Automatic_Headlights: e.target.checked})
   }
   setPS(e){
      this.setState({es_Parking_Sensor: e.target.checked})
   }
   setSF(e){
      this.setState({es_Sunroof: e.target.checked})
   }
   setDRL(e){
      this.setState({es_Daytime_Running_Lights: e.target.checked})
   }
   setTSW(e){
      this.setState({es_Tilt_Steering_Wheel: e.target.checked})
   }
   setNG(e){
      this.setState({es_Navigation_GPS: e.target.checked})
   }
   setDCC(e){
      this.setState({es_Navigation_GPS: e.target.checked})
   }
   setHUD(e){
      this.setState({ep_Heads_Up_Display: e.target.checked})
   }
   setHSF(e){
      this.setState({ep_Heated_Seats_Front: e.target.checked})
   }
   setHSR(e){
      this.setState({ep_Heated_Seats_Rear: e.target.checked})
   }
   setCSF(e){
      this.setState({ep_Cooled_Seats_Front: e.target.checked})
   }
   setCSR(e){
      this.setState({ep_Cooled_Seats_Rear: e.target.checked})
   }
   setLDS(e){
      this.setState({ep_Lane_Departure_System: e.target.checked})
   }
   setKE(e){
      this.setState({ep_Keyless_Entry: e.target.checked})
   }
   setKS(e){
      this.setState({ep_Keyless_Start: e.target.checked})
   }
   setRS(e){
      this.setState({ep_Rear_Spoiler: e.target.checked})
   }
   setHSW(e){
      this.setState({ep_Heated_Steering_Wheel: e.target.checked})
   }
   setPSF(e){
      this.setState({ep_Panorama_Sunroof: e.target.checked})
   }
   setNV(e){
      this.setState({ep_Night_Vision: e.target.checked})
   }
   setPSO(e){
      this.setState({ep_Premium_Stereo: e.target.checked})
   }




    render() {
        return (
            <div id="car-basicinfo" className="carinfo-wrapper">
                
                <Row className="carinfo-banner-wrapper">
                    <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={6} mdOffset={3}>
                        <span className="banner-text">Fast, Professional, Convenient</span>
                    </Col>
                </Row>
                

                <Row>
                    <Col xs={10} sm={8} md={8} xsOffset={1} smOffset={2} mdOffset={2} className="info-wrapper">

                        <div className="carinfo-card">

                            <Row className="show-grid">

                                <Col>
                                    <div className="section-title">Vehicle Basic Information</div>

                                    <div className="section-content">
                                        <Col xs={12} sm={6} md={3}>
                                            <FormGroup controlId="formgroup-vin">
                                                <ControlLabel>VIN</ControlLabel>
                                                <FormControl type="text" label="Text" placeholder="Enter VIN" onChange={this.handleVin.bind(this)}/>
                                            </FormGroup>
                                        </Col>
                                        <Col xs={12} sm={6} md={3}>
                                            <FormGroup controlId="formgroup-mileage">
                                                <ControlLabel>Mileage</ControlLabel>
                                                <FormControl type="text" label="Text" placeholder="Enter Mileage" onChange={this.handleMile.bind(this)}/>
                                            </FormGroup>
                                        </Col>
                                    </div>

                                </Col>

                            </Row>

                            <Row className="show-grid selectors">
                                <Col>
                                    <CarBasicSelector placeholder="Year" options={optionsYear} setInfo={this.setyear.bind(this)}/>
                                    <CarBasicSelector placeholder="Make" options={optionsMake} setInfo={this.setmake.bind(this)}/>
                                    <CarBasicSelector placeholder="Model" options={optionsModel} setInfo={this.setmodel.bind(this)} />
                                    <CarBasicSelector placeholder="Trim" options={optionsTrim} setInfo={this.settrim.bind(this)}/>
                                </Col>
                            </Row>

                            <Row className="show-grid selectors">
                                <Col>
                                    <CarBasicSelector placeholder="Body Style" options={optionsBody} setInfo={this.setbodystyle.bind(this)}/>
                                    <CarBasicSelector placeholder="Transmission" options={optionsTrans} setInfo={this.settransmission.bind(this)}/>
                                    <CarBasicSelector placeholder="Drivetrain" options={optionsDrive} setInfo={this.setdrive.bind(this)}/>
                                    <CarBasicSelector placeholder="Fuel Type" options={optionsFuel} setInfo={this.setfuel.bind(this)}/>
                                </Col>
                            </Row>

                            <Row className="show-grid selectors">
                                <Col>
                                    <CarBasicSelector placeholder="Exterior Color" options={optionsExtColor} setInfo={this.setcolor_ext.bind(this)}/>
                                    <CarBasicSelector placeholder="Interior Color" options={optionsIntColor} setInfo={this.setcolor_int.bind(this)}/>
                                    <CarBasicSelector placeholder="Interior Type" options={optionsIntType} setInfo={this.setinterior_type.bind(this)}/>
                                    <CarBasicSelector placeholder="Engine Cylinders" options={optionsCylinder} setInfo={this.setengine.bind(this)}/>
                                </Col>
                            </Row>

                        </div>

                        <div className="carinfo-card">

                            <Row className="show-grid checkboxes">
                                <Col>
                                    <div className="section-title">Vehicle Equipment</div>
                                    <div className="section-content">
                                        <CarBasicCheckbox PM={this.setPower_Mirrors.bind(this)} PW={this.setPower_Windows.bind(this)} TC={this.setTraction_Control.bind(this)} SC={this.setStability_Control.bind(this)}
                                         CC={this.setCruise_Control.bind(this)} SS={this.setSecurity_System.bind(this)} TPMS={this.setTire_Pressure_Monitoring_System.bind(this)} 
                                         RCP={this.setRadio_CD_Player.bind(this)} AUX={this.setAUX.bind(this)} USB={this.setUSB.bind(this)} 
                                         SWAC={this.setSteering_Wheel_Audio_Control.bind(this)} ABS={this.setAntiLock_Brake_System.bind(this)} AC={this.setAC.bind(this)}/>
                                         <CarValueCheckbox UGO={this.setUGO.bind(this)} PSD={this.setPSD.bind(this)} PSB={this.setPSB.bind(this)} RSW={this.setRSW.bind(this)} BUC={this.setBUC.bind(this)}
                                         PS={this.setPS.bind(this)} SF={this.setSF.bind(this)} AFM={this.setAFM.bind(this)} AH={this.setAH.bind(this)} DRL={this.setDRL.bind(this)} TSW={this.setTSW.bind(this)}
                                         NG={this.setNG.bind(this)} DCC={this.setDCC.bind(this)}/>
                                         <CarPremiumCheckbox HUD={this.setHUD.bind(this)} HSF={this.setHSF.bind(this)} HSR={this.setHSR.bind(this)} CSF={this.setCSF.bind(this)} CSR={this.setCSR.bind(this)}
                                         LDS={this.setLDS.bind(this)} KE={this.setKE.bind(this)} KS={this.setKS.bind(this)} RS={this.setRS.bind(this)} HSW={this.setHSW.bind(this)} PSF={this.setPSF.bind(this)}
                                         NV={this.setNV.bind(this)} PSO={this.setPSO.bind(this)}/>
                                    </div>
                                </Col>
                            </Row>

                        </div>

                    </Col>
                </Row>

                <Row className="show-grid btn-bar">
                    <Col md={2} mdOffset={5} sm={2} smOffset={5} xs={4} xsOffset={4}>
                        <ButtonToolbar className="btn-bar">
                            <Button bsStyle="primary" className="submit-btn" onClick={this.update.bind(this)}>Next Step</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>

            </div>
        );
    }
    update() {
        this.props.setBasicinfo(this.state);
        this.props.onUpdate();
    }
}
