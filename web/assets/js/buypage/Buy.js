/*
	Buy Page
	Author: ML2436
*/

import React, { Component } from 'react';
import './Buy.css';

var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Form = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');
var Button = require('react-bootstrap/lib/Button');
var Checkbox = require('react-bootstrap/lib/Checkbox');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');
var ButtonGroup = require('react-bootstrap/lib/ButtonGroup');
var Image = require('react-bootstrap/lib/Image');
var Panel = require('react-bootstrap/lib/Panel');

const CARS = [
    { id: 0, name: { year: 2015, make: 'BMW', model: '430i', trim:'xDrive' }, mileage:20000,
        price: 29990, stocked: true, color: { extColor:'red', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/1.jpg'
    },
    { id: 1, name: { year: 2014, make: 'BMW', model: '430i', trim:'xDrive' }, mileage:28000,
        price: 29990, stocked: true, color: { extColor:'red', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/2.jpg'
    },
    { id: 2, name: { year: 2013, make: 'BMW', model: '430i', trim:'xDrive' }, mileage:37000,
        price: 29990, stocked: true, color: { extColor:'blue', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/3.jpg'
    },
    { id: 3, name: { year: 2015, make: 'BMW', model: '335i', trim:'xDrive' }, mileage:20000,
        price: 29990, stocked: true, color: { extColor:'black', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/4.jpg'
    },
    { id: 4, name: { year: 2014, make: 'BMW', model: '335i', trim:'' }, mileage:28000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/5.jpg'
    },
    { id: 5, name: { year: 2013, make: 'BMW', model: '335i', trim:'xDrive' }, mileage:37000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/6.jpg'
    },
    { id: 6, name: { year: 2015, make: 'Toyota', model: 'Camry', trim:'LE' }, mileage:20000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/7.jpg'
    },
    { id: 7, name: { year: 2014, make: 'Toyota', model: 'Camry', trim:'SE' }, mileage:28000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/8.jpg'
    },
    { id: 8, name: { year: 2013, make: 'Toyota', model: 'Camry', trim:'XLE' }, mileage:37000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/1.jpg'
    },
    { id: 9, name: { year: 2015, make: 'Honda', model: 'Accord', trim:'LX' }, mileage:20000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/2.jpg'
    },
    { id: 10, name: { year: 2006, make: 'Honda', model: 'S2000', trim:'' }, mileage:70000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/3.jpg'
    },
    { id: 11, name: { year: 2016, make: 'Mazda', model: 'Miata', trim:'Club' }, mileage:20000,
        price: 29990, stocked: true, color: { extColor:'yellow', intColor:'black' },
        equips: ['Heating seats', 'Navigation', 'Backup camera', 'Double-clutch Trans', 'Parking sensor', 'Red leather'],
        imgpath: './static/bundles/images/4.jpg'
    }
];

// Filter
function BuyFilter(props){
	return (
		<Col xs={4} sm={3} md={2} className="buy-filter">

            <Form horizontal>
                <BuyFilterHeader />
                <BuyFilterBody />
            </Form>
		</Col>
	);
}

function BuyFilterHeader(props){
    return (
        <FormGroup className="buy-filter-header">
                <Col xs={4} sm={6} md={8} className="buy-filter-header-word"> Filter </Col>
                <Col xs={8} sm={6} md={4}>
                    <FilterButton />
                </Col>
        </FormGroup>
    );
}

function FilterButton(props){
    return (
        <Button bsStyle="info" type="reset" bsSize="xs" className="buy-filter-header-button">Reset</Button>
    );
}

function BuyFilterBody(props){
    var bodystyles = ['Sedan','Coupe','SUV','Hatchback','minivan','Wagon','Truck','Convertible'];
    var trans = ['Automatic','Manual'];
    var colors = ['#000000', '#a9a9aa', '#ffffff', '#ea0a26', '#e0790a', '#fcd206', '#c9a611', '#117204',
                '#0665c4', '#7e18c6', '#ed3e7d', '#990a0a', '#683c02', '#b7926e', '#666666'];
    return (
        <FormGroup className="buy-filter-body">
            <FBPopularHits />
            <FBMake />
            <FBSlider title="Miles" minlabel="New" maxlabel="No limit"/>
            <FBSlider title="Year" minlabel="Past" maxlabel="Now"/>
            <FBCheckBox title="Body Style" boxes={bodystyles}/>
            <FBCheckBox title="Transmission" boxes={trans}/>
            <FBColor title="Exterior Color" colors={colors}/>
            <FBColor title="Interior Color" colors={colors}/>
        </FormGroup>
    );
}

function FBPopularHits(props){
    var hits = ['Benz C300', 'BMW 320i', 'GHibi'];
    const displayhits = hits.map(
        (hit) => <Button bsSize="xs" className="buy-filter-hits-button">{hit}</Button>
    );
    return (
        <Col xs={12} sm={12} md={12}>
            <FormGroup className="buy-filter-container">
                <Col xs={12} sm={12} md={12} className="buy-filter-title"><ControlLabel>Popular Hits</ControlLabel></Col>
                <Col xs={12} sm={12} md={12} className="buy-filter-color">
                    <ButtonToolbar>
                        <ButtonGroup>
                            {displayhits}
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </FormGroup>
        </Col>
    );
}

function FBMake(props){
    var makes = ['Benz', 'Toyota', 'Honda', 'BMW', 'Meserati'];
    const displaymakes = makes.map(
        (make) => <Button bsSize="xs" className="buy-filter-makes-button">{make}</Button>
    );
    return (
        <Col xs={12} sm={12} md={12}>
            <FormGroup className="buy-filter-container">
                <Col xs={12} sm={12} md={12} className="buy-filter-title"><ControlLabel>Make</ControlLabel></Col>
                <Col xs={12} sm={12} md={12} className="buy-filter-color">
                    <FormControl bsSize="sm" type="text" placeholder="Quick Search" />
                </Col>
                <Col xs={12} sm={12} md={12} className="buy-filter-color">
                    <ButtonToolbar>
                        <ButtonGroup>
                            {displaymakes}
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </FormGroup>
        </Col>
    );
}

function FBSlider(props){
    return (
    <Col xs={12} sm={12} md={12}>
        <FormGroup className="buy-filter-container">
            <Col xs={12} sm={12} md={12} className="buy-filter-title"><ControlLabel>{props.title}</ControlLabel></Col>
            <Col xs={12} sm={12} md={12} className="buy-filter-slider">
                <input type="range" min={props.minlabel} max={props.maxlabel} />
            </Col>
        </FormGroup>
    </Col>
    );
}

function FBCheckBox(props){
    const displaybox = props.boxes.map(
        (box) => <Col xs={11} sm={11} md={5}><Checkbox inline name={box}>{box}</Checkbox></Col>
    );
    return (
        <Col xs={12} sm={12} md={12}>
            <FormGroup className="buy-filter-container">
                <Col xs={12} sm={12} md={12}><ControlLabel>{props.title}</ControlLabel></Col>
                    
                        {displaybox}
            </FormGroup>
        </Col>
    );
}

function FBColor(props){
    const displaycolor = props.colors.map(
        (color) => <Col xs={6} sm={4} md={3} className="buy-filter-color"><Button bsSize="xs" bsClass="buy-filter-col" style={{backgroundColor:color}}>&nbsp;</Button></Col>
    );
    return (
        <Col xs={12} sm={12} md={12}>
            <FormGroup className="buy-filter-container">
                <Col xs={12} sm={12} md={12} className="buy-filter-title"><ControlLabel>{props.title}</ControlLabel></Col>
                <Row>
                <Col xs={11} sm={11} md={11}>
                    <Col xs={6} sm={4} md={3} className="buy-filter-color"><Button bsSize="xs" bsClass="buy-filter-col" style={{backgroundColor:0xFFFFFF}}>ALL</Button></Col>
                    {displaycolor}
                </Col>
                </Row>
            </FormGroup>
        </Col>
    );
}

// Car list
function CarList(props){
	var cars = [];
	for (var $i = 0; $i < 12; $i++){
		cars.push(CARS[$i]);
	}

	const displaycars = cars.map(
		(car) => <Col xs={10} sm={6} md={4} key={car.id} className="buy-carlist-car"> <Car car={car}/> </Col>
	);

	return (
		<Col xs={8} sm={9} md={10} className="buy-carlist">
				{displaycars}
			<LoadMore />
		</Col>
	);
}

function Car(props) {
    const car = props.car;

    const bgImage = car.imgpath;
    const itemStyle = {
            backgroundImage: "url(" + bgImage + ")",
            backgroundSize: "cover",
            backgroundPositionY: "50%",
            backgroundPositionX: "50%"
        };

    return (
        <Col className="buy-car">
            <div className="buy-car-image-wrapper" style={itemStyle}></div>
            <Panel className="buy-car-panel">
                <Col xs={9} sm={10} md={10} className="car-attribute">
                    {car.name.year} {car.name.make} {car.name.model} {car.name.trim}
                </Col>
                <Col xs={9} sm={10} md={10} className="car-attribute">
                    {car.mileage} miles
                </Col>
                <Col xs={9} sm={10} md={10} className="car-attribute">
                    $ {car.price}
                </Col>
            </Panel>
        </Col>
    );
}

function LoadMore(props) {
    return (
        <Row className="loadmore">
            <Col xs={12} sm={12} md={12}>
                <Button bsSize="large" block>
                    Load More
                </Button>
            </Col>
        </Row>
    );
}

export default class Buy extends Component {
	render(){
		return (
			<Grid className="buy-page">
                <Row>
    				<BuyFilter />
    				<CarList />
                </Row>
			</Grid>
		);
	}
}