/**
 * Created by jeanliu on 4/14/17.
 */

import React, { Component } from 'react';
import './CarDetail2.css';

var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');


// const PHOTOS = [
//     {id: 0, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-01.jpeg'},
//     {id: 1, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-02.jpeg'},
//     {id: 2, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-03.jpeg'},
//     {id: 3, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-04.jpeg'},
//     {id: 4, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-05.jpeg'},
//     {id: 6, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-06.jpeg'},
//     {id: 7, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-07.jpeg'},
//     {id: 8, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-08.jpeg'},
//     {id: 9, imgpath: './static/bundles/images/detail-test/2015-maserati-ghibli-sq4-28193mi-09.jpeg'}
// ];

function BannerDivider(props) {
    return (
        <Row >
            <Col md={10} mdPush={1} className="banner-divider"></Col>
        </Row>
    );
}


class CarPhotoBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {photoIndex: 0};

        this.getPrevPhoto = this.getPrevPhoto.bind(this);
        this.getNextPhoto = this.getNextPhoto.bind(this);
    }

    getPrevPhoto(e) {
        console.log("get prev photo");
        if (this.state.photoIndex != 0) {
            this.setState({
                photoIndex: (this.state.photoIndex - 1)
            });
        }
    }

    getNextPhoto(e) {
        console.log("get next photo");
        if (this.state.photoIndex != PHOTOS.length-1) {
            this.setState({
                photoIndex: (this.state.photoIndex + 1)
            });
        }
    }

    render() {

        const photos = this.props.photos;

        var Background = photos[this.state.photoIndex];

        var sectionStyle = {
            backgroundImage: "url(" + Background + ")",
            backgroundSize: "cover",
            backgroundPositionY: "50%"
        };

        return (
            <Row id="car-photo-banner">
                <Col md={12} id="car-photo" className="car-photo-item" style={sectionStyle}>

                    <Row className="btn-wrapper">
                        <Col md={1} className="car-img-btn img-prev" onClick={this.getPrevPhoto}>
                            <span className="arrow left leftarrow"></span>
                        </Col>
                        <Col md={1} className="car-img-btn img-next" onClick={this.getNextPhoto}>
                            <span className="arrow right rightarrow"></span>
                        </Col>
                    </Row>

                </Col>
            </Row> 
        );
    }
}

function PriceBanner(props) {
    //const car = props.car;
    const title = props.title;
    const price = props.price;
    const mileage = props.mileage;

    return (
        <Row className="price-banner-wrapper">

            <Col md={12} className="price-banner">

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} className="banner-title">
                        {title}
                    </Col>
                </Row>

                <Row>
                    <Col md={3} mdPush={1} sm={3} smPush={1} xs={4} id="car-price" className="price-banner-text">
                        <span className="item-title">Price</span>
                        <span className="item-content">$ {price}</span>
                    </Col>
                    <Col md={4} mdPush={1} sm={4} smPush={1} xs={4} id="car-mileage" className="price-banner-text">
                        <span className="item-title">Mileage</span>
                        <span className="item-content">{mileage} mi</span>
                    </Col>
                    <Col md={5} sm={5} xs={12} id="car-mileage" className="price-banner-text btn-area">
                        <Col md={6} sm={6} xs={6}>
                            <Button bsStyle="primary" className="submit-btn" >View CARFAX</Button>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                            <Button bsStyle="primary" className="submit-btn" >Make An Offer</Button>
                        </Col>
                    </Col>
                </Row>

            </Col>

        </Row>
    );
}

function ProfileBanner(props) {
    const doors = props.doors;
    const drive = props.drive;

    return (
        <Row className="profile-banner-wrapper">
            <Row>
                <Col md={9} mdPush={1} className="profile-banner">
                    <Col md={2} sm={2} xs={3} className="profile-item">
                        <img src="./static/bundles/images/detailpage/icons/door.png" className="profile-icon"/>
                        <div className="profile-text">{doors} Doors</div>
                    </Col>
                    <Col md={2} sm={2} xs={3} className="profile-item">
                        <img src="./static/bundles/images/detailpage/icons/passengers.png" className="profile-icon"/>
                        <div className="profile-text">5 Passengers</div>
                    </Col>
                    <Col md={2} sm={2} xs={3} className="profile-item">
                        <img src="./static/bundles/images/detailpage/icons/gearbox.png" className="profile-icon"/>
                        <div className="profile-text">Automatic</div>
                    </Col>
                    <Col md={2} sm={2} xs={3} className="profile-item">
                        <img src="./static/bundles/images/detailpage/icons/cogwheel-outline.png" className="profile-icon"/>
                        <div className="profile-text">{drive}</div>
                    </Col>
                </Col>

                <Col md={2} smHidden xsHidden className="share-btn disappear-in-md">
                    <Button bsStyle="primary" className="submit-btn" >Share</Button>
                </Col>
            </Row>

            <Row className="sm-screen-btn-row">
                <Col sm={2} smPush={5} xs={4} xsPush={4}>
                    <Button bsStyle="primary" className="submit-btn">Share</Button>
                </Col>
            </Row>

        </Row>
    );
}

function ColorBanner(props) {

    const color_ext = props.color_ext;
    const color_int = props.color_int;

    var ExtBg = "#ffffff";
    var IntBg = "#ddd9c5";

    var extStyle = {
        backgroundColor: color_ext,
    };

    var intStyle = {
        backgroundColor: color_int,
    };

    return(
        <Row className="color-banner-wrapper">
            <Col md={12}>

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} xs={12} className="banner-title">Color</Col>
                </Row>

                <Row>
                    <Col md={10} mdPush={1} sm={10} smPush={1} xs={12} className="color-banner">
                        <Row className="color-items-wrapper">
                            <Col md={6} sm={6} xs={6}>
                                <div className="color-circle" style={extStyle}></div>
                                <div className="color-text-wrapper">
                                    <div className="color-title">Exterior:</div>
                                    <div className="color-content">{color_ext}</div>
                                </div>
                            </Col>
                            <Col md={6} sm={6} xs={6}>
                                <div className="color-circle" style={intStyle}></div>
                                <div className="color-text-wrapper">
                                    <div className="color-title">Interior:</div>
                                    <div className="color-content">{color_int}</div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}


function PkgBanner(props) {
    return (
        <Row className="pkg-banner-wrapper">
            <Col md={12}>

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} xs={12} className="banner-title">Featured Packages</Col>
                </Row>

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} className="pkg-items-wrapper">
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/bluetooth.png" className="pkg-icon"/>
                            <div className="profile-text">Bluetooth</div>
                        </Col>
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/keyless.png" className="pkg-icon"/>
                            <div className="profile-text">Keyless Entry</div>
                        </Col>
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/start.png" className="pkg-icon"/>
                            <div className="profile-text">Keyless Start</div>
                        </Col>
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/aux.png" className="pkg-icon"/>
                            <div className="profile-text">Aux</div>
                        </Col>
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/leather_seats.png" className="pkg-icon"/>
                            <div className="profile-text">Leather Seats</div>
                        </Col>
                        <Col md={1} sm={1} xs={2} className="profile-item">
                            <img src="./static/bundles/images/detailpage/icons/heated_seats.png" className="pkg-icon"/>
                            <div className="profile-text">Heated Seats</div>
                        </Col>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}

function PerfBanner(props) {
    return (
        <Row className="perf-banner-wrapper">
            <Col md={12}>

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} xs={12} className="banner-title">Performance</Col>
                </Row>

                <Row>
                    <Col md={11} mdPush={1} sm={11} smPush={1} xs={12}>
                        <Col md={6} sm={6} xs={6} className="perf-left-col">
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Horsepower: </Col>
                                <Col md={7} className="perf-info-value">320 hp</Col>
                            </Row>
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Displacement: </Col>
                                <Col md={7} className="perf-info-value">2.0 L</Col>
                            </Row>
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Fuel-type: </Col>
                                <Col md={7} className="perf-info-value">Gasoline</Col>
                            </Row>
                        </Col>
                        <Col md={6} sm={6} xs={6} className="perf-right-col">
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Torque: </Col>
                                <Col md={7} className="perf-info-value">200 lb-ft</Col>
                            </Row>
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Cylinder: </Col>
                                <Col md={7} className="perf-info-value">4</Col>
                            </Row>
                            <Row className="perf-row">
                                <Col md={5} className="perf-info-key">Compressor Type: </Col>
                                <Col md={7} className="perf-info-value">Turbo-charged</Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>

            </Col>
        </Row>

    );
}


export default class CarDetail extends Component {
    // static propTypes = {
    //   pages: PropTypes.array,
    //   active_page_slug: PropTypes.string,
    // }

    // static contextTypes = {
    //   router: PropTypes.object.isRequired,
    //   store: PropTypes.object.isRequired
    // };

    // activateAndLoadPage = (e) => {
    //   e.preventDefault();
    //   let slug = e.target.dataset.slug;
    //   this.context.router.transitionTo('/page/' + slug);
    // }

    constructor(props) {
        super(props);
        this.state = {
            vehicle: null,
            images: [],
            title: null,
            price: 0,
            mileage: 0,
            drive: null,
            color_ext: null,
            color_int: null,
            featured_packages: [],
            in_stock_time: null,
            location: null,
            handler: null,
            carfaxPath: null,
            interior_type: null,
            top_type: null,
            body_type: null,
            fuel: null,
            transmission: null,
            engine: null,
            owner_num: null,
            condition: null,
            min_price: null,
            trim: null,
            status: null,
            vin: null
        };
    }

    componentWillMount() {
        var vehicle_id = window.location.href.split("/").pop().substring(6);
        var vehicle_url = "/api/vehicle/" + vehicle_id;
        var image_url = "/api/has_image/";

        $.ajax({
            url: vehicle_url,
            datatype: 'json',
            cache: false,
            success: function(vehicle) {
                const title = vehicle.year + " " +
                    vehicle.make + " " +
                    vehicle.model;
                const price = vehicle.list_price;
                const mileage = vehicle.mileage;
                const doors = vehicle.door;
                const drive = vehicle.drive;
                const color_ext = vehicle.color_ext;
                const color_int = vehicle.color_int;
                const in_stock_time = vehicle.in_stock_time;
                const location = vehicle.location;
                const handler = vehicle.handler;
                const carfaxPath = vehicle.carfaxPath;
                const interior_type = vehicle.interior_type;
                const top_type = vehicle.top_type;
                const body_type = vehicle.body_type;
                const fuel = vehicle.fuel;
                const transmission = vehicle.transmission;
                const engine = vehicle.engine;
                const owner_num = vehicle.owner_num;
                const condition = vehicle.condition;
                const min_price = vehicle.min_price;
                const trim = vehicle.trim;
                const status = vehicle.status;
                const vin = vehicle.vin;


                var featuredPackages = [];
                for(var attribute in vehicle) {
                    if(attribute.substring(0,3) == "es_" ||
                    attribute.substring(0,3) == "ep_" ||
                    attribute.substring(0,3) == "eb_") {
                        if(vehicle[attribute] == true) {
                            featuredPackages.push(attribute);
                        }
                    }
                }

                this.setState({
                    vehicle: vehicle,
                    title: title,
                    price: price,
                    mileage: mileage,
                    doors: doors,
                    drive: drive,
                    color_ext: color_ext,
                    color_int: color_int,
                    featured_packages: featuredPackages,
                    in_stock_time: in_stock_time,
                    location: location,
                    handler: handler,
                    carfaxPath: carfaxPath,
                    interior_type: interior_type,
                    top_type: top_type,
                    body_type: body_type,
                    fuel: fuel,
                    transmission: transmission,
                    engine: engine,
                    owner_num: owner_num,
                    condition: condition,
                    min_price: min_price,
                    trim: trim,
                    status: status,
                    vin: vin
                });
            }.bind(this)
        })
        $.ajax({
            url: image_url,
            datatype: 'json',
            cache: false,
            success: function(image_list) {
                for(var image in image_list) {
                    if(image_list[image].vehicle == vehicle_id) {
                        var images = this.state.images;
                        images.push(image_list[image].image);
                        this.setState({images: images})
                    }
                }
            }.bind(this)
        })

    }


    render() {
        console.log(this.state);


        return (
            <div id="car-detail">
                <CarPhotoBanner photos={this.state.images} />
                <PriceBanner title={this.state.title} price={this.state.price} mileage={this.state.mileage} />
                <ProfileBanner doors={this.state.doors} drive={this.state.drive} />
                <BannerDivider />
                <ColorBanner color_ext={this.state.color_ext} color_int={this.state.color_int} />
                <BannerDivider />
                <PkgBanner />
                <BannerDivider />
                <PerfBanner />
            </div>
        );
    }
}