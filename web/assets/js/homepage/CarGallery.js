import React from 'react';
import ReactDOM from 'react-dom';
import CarFilter from './CarFilter.js';

var Filter = require('react-filter');

function CarName(props) {
    const make = props.name.vehicle_make;
    const year = props.name.vehicle_year;
    const model = props.name.vehicle_model;
    var trim = props.name.vehicle_trim;
    if (trim == "" || trim == "-") trim = "";
    return (
        <div className="car-name">
            {year} {make} {model} {trim}
        </div>
    );
}

function ColorCircle(props) {
    return (
        <div className="car-color-circle">
            <svg height="25" width="25">
                <circle cx="13" cy="13" r="10" stroke="black" fill={props.color}/>
            </svg>
        </div>
    );
}

function CarColor(props) {
    const ext_color = props.color.vehicle_color_ext;
    const int_color = props.color.vehicle_color_int;
    return (
        <div className="car-color">
            <div className="ext-color">
                Exterior Color: <ColorCircle color={ext_color} />
            </div>
            <div className="int-color">
                Interior Color: <ColorCircle color={int_color} />
            </div>
        </div>
    );
}

function CarEquip(props) {
    const equips = props.equips.vehicle_equipment;
    return (
        <div className="car-equips">
            {equips} and more...
        </div>
    );
}

function Image(props) {
    return (
        <div className={props.class}>
            <a href={"/detail" + props.id} ><img src={props.path} alt="./images/carAlt.png"
                 width={props.width} height={props.height} />
            </a>
        </div>
    );
}

function Car(props) {
    const car = props.car;
    console.log(car);

    const bgImage = car.image_path;
    const itemStyle = {
            backgroundImage: "url(" + bgImage + ")",
            backgroundSize: "cover",
            backgroundPositionY: "50%",
            backgroundPositionX: "50%"
        };

    return (
        <div className="car-display">
            <a className="car-display-a" href={"/detail" + car.vehicle_id}>
              <div className="col-md-6 col-md-push-1 col-sm-10 col-sm-push-1 col-xs-10 col-xs-push-1 car-img-wrapper" id={car.vehicle_id} style={itemStyle}></div>
              <div className="col-md-5 col-md-push-1 col-sm-10 col-sm-push-1 col-xs-10 col-xs-push-1 ">
                <CarName name={car}/>
                <div className="car-mile">
                    {car.vehicle_mileage} miles
                </div>
                <div className="car-price">
                    $ {car.vehicle_list_price}
                </div>
                <CarColor color={car}/>
                <CarEquip equips={car}/>
              </div>
            </a>
        </div>
    );
}

function LoadMore(props) {
    return (
        <div className="loadmore">
            <a className="loadmore" href="/buy">Load More</a>
        </div>
    );
}
//get data from database and filter
var CarGallery = React.createClass({
    loadCarsFromServer: function(){
        $.ajax({
            url: this.props.url1,
            datatype: 'json',
            cache: false,
            success: function(vehicle_image) {
                this.setState({vehicle_image: vehicle_image});
            }.bind(this)
        })
        $.ajax({
            url: this.props.url2,
            datatype: 'json',
            cache: false,
            success: function(vehicles) {
                this.setState({vehicles: vehicles});
            }.bind(this)
        })
    },

    getInitialState: function() {
        return { 
            vehicle_image: [],
            vehicles: [],
            searchKeys: []
        };
    },

    componentDidMount: function() {
        this.loadCarsFromServer();
    }, 

    render: function() { 
        var vehicles = [];
        var filterlist = [];
        var count = 0;
        var vehicle_images = this.state.vehicle_image;
        
        if (this.state.vehicles && this.state.vehicle_image) {
             vehicles = this.state.vehicles.map(function(car){
                      var id = car.id;
                      var equip_count = 0;
                      var equips = "";
                      if (car.eb_Power_Mirrors){
                          if (equip_count < 3){ 
                            equips = equips.concat("Power Mirrors/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Power_Windows){
                          if (equip_count < 3){ 
                            equips = equips.concat("Power Windows/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Traction_Control){
                          if (equip_count < 3){ 
                            equips = equips.concat("Traction Control/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Stability_Control){
                          if (equip_count < 3){ 
                            equips = equips.concat("Stability Control/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Cruise_Control){
                          if (equip_count < 3){ 
                            equips = equips.concat("Cruise Control/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Security_System){
                          if (equip_count < 3){ 
                            equips = equips.concat("Security System/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Tire_Pressure_Monitoring_System){
                          if (equip_count < 3){ 
                            equips = equips.concat("Tire Pressure Monitoring System/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Radio_CD_Player){
                          if (equip_count < 3){ 
                            equips = equips.concat("Radio CD Player/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_AUX){
                          if (equip_count < 3){ 
                            equips = equips.concat("AUX/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_USB){
                          if (equip_count < 3){ 
                            equips = equips.concat("USB/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_Steering_Wheel_Audio_Control){
                          if (equip_count < 3){ 
                            equips = equips.concat("Steering Wheel Audio Control/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_AntiLock_Brake_System){
                          if (equip_count < 3){ 
                            equips = equips.concat("AntiLock Brake System/ ");
                            equip_count++;
                          }
                      }
                      if (car.eb_AC){
                          if (equip_count < 3){ 
                            equips = equips.concat("eb_AC/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Universal_Garage_Opener){
                          if (equip_count < 3){ 
                            equips = equips.concat("Universal Garage Opener/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Power_Seats_Driver){
                          if (equip_count < 3){ 
                            equips = equips.concat("Power Seats Driver/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Power_Seats_Both){
                          if (equip_count < 3){ 
                            equips = equips.concat("Power_Seats_Both/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Rain_Sensing_Wiper){
                          if (equip_count < 3){ 
                            equips = equips.concat("Rain Sensing Wiper/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Back_Up_Camera){
                          if (equip_count < 3){ 
                            equips = equips.concat("Back Up Camera/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Parking_Sensor){
                          if (equip_count < 3){ 
                            equips = equips.concat("Parking Sensor/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Sunroof){
                          if (equip_count < 3){ 
                            equips = equips.concat("Sunroof/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_All_Weather_Floor_Mats){
                          if (equip_count < 3){ 
                            equips = equips.concat("All Weather Floor Mats/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Automatic_Headlights){
                          if (equip_count < 3){ 
                            equips = equips.concat("Automatic Headlights/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Daytime_Running_Lights){
                          if (equip_count < 3){ 
                            equips = equips.concat("Daytime Running Lights/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Tilt_Steering_Wheel){
                          if (equip_count < 3){ 
                            equips = equips.concat("Tilt Steering Wheel/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Navigation_GPS){
                          if (equip_count < 3){ 
                            equips = equips.concat("Navigation GPS/ ");
                            equip_count++;
                          }
                      }
                      if (car.es_Dual_Climate_Control){
                          if (equip_count < 3){ 
                            equips = equips.concat("Dual Climate Control/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Heads_Up_Display){
                          if (equip_count < 3){ 
                            equips = equips.concat("Heads Up Display/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Heated_Seats_Front){
                          if (equip_count < 3){ 
                            equips = equips.concat("Heated Seats Front/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Heated_Seats_Rear){
                          if (equip_count < 3){ 
                            equips = equips.concat("Heated Seats Rear/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Cooled_Seats_Front){
                          if (equip_count < 3){ 
                            equips = equips.concat("Cooled Seats Front/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Cooled_Seats_Rear){
                          if (equip_count < 3){ 
                            equips = equips.concat("Cooled Seats Rear/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Lane_Departure_System){
                          if (equip_count < 3){ 
                            equips = equips.concat("Lane Departure System/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Keyless_Entry){
                          if (equip_count < 3){ 
                            equips = equips.concat("Keyless Entry/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Keyless_Start){
                          if (equip_count < 3){ 
                            equips = equips.concat("Keyless Start/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Rear_Spoiler){
                          if (equip_count < 3){ 
                            equips = equips.concat("Rear Spoiler/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Heated_Steering_Wheel){
                          if (equip_count < 3){ 
                            equips = equips.concat("Heated Steering Wheel/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Panorama_Sunroof){
                          if (equip_count < 3){ 
                            equips = equips.concat("Panorama Sunroof/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Night_Vision){
                          if (equip_count < 3){ 
                            equips = equips.concat("Night Vision/ ");
                            equip_count++;
                          }
                      }
                      if (car.ep_Premium_Stereo){
                          if (equip_count < 3){ 
                            equips = equips.concat("Premium Stereo/ ");
                            equip_count++;
                          }
                      }
                  var path;
                  vehicle_images.map(function(rela){
                        if (id == rela.vehicle) {
                            count++;
                            path = rela.image;
                        }
                  });

                     return {
                          vehicle_id: id,
                          id: count, 
                          vehicle_year: car.year, 
                          vehicle_list_price: car.list_price,
                          vehicle_equipment: equips,
                          image_path: path,
                          vehicle_style: car.body_type,
                          vehicle_trim: car.trim,
                          vehicle_color_int: car.color_int,
                          vehicle_color_ext: car.color_ext,
                          vehicle_mileage: car.mileage,
                          vehicle_model: car.model,
                          vehicle_drive: car.drive,
                          vehicle_make: car.make,
                        }
                  
            })
            if (this.state.searchKeys.length > 0) {
                var keys = this.state.searchKeys;
                vehicles.map(function(car){
                if(keys[0]=="make"|| !(keys.indexOf(car.vehicle_make) === -1)) {
                    if(keys[1]=="style" || !(keys.indexOf(car.vehicle_style) === -1)) {
                      var year = car.vehicle_year;
                      var inYearrange = 0;
                      if(!(keys.indexOf("after2015") === -1)) { 
                          if(year >= 2015) { inYearrange = 1; }
                      }
                      else if(!(keys.indexOf("after2010") === -1)) { 
                          if(year >= 2010 && year < 2015) { inYearrange = 1; }
                      }
                      else if(!(keys.indexOf("after2005") === -1)) { 
                          if(year >= 2005 && year < 2010) { inYearrange = 1; }
                      }
                      else if(!(keys.indexOf("after2000") === -1)) { 
                          if(year >= 2000 && year < 2005) { inYearrange = 1; }
                      }
                      else if(!(keys.indexOf("after1990") === -1)) { 
                          if(year >= 1990 && year < 2000) { inYearrange = 1; }
                      }
                      if(keys[2]=="year"|| inYearrange == 1) {
                          var mile = car.vehicle_mileage;
                          var inMilerange = 0;
                          if(!(keys.indexOf("lessthan10k") === -1)) { 
                              if(mile < 10000) { inMilerange = 1; }
                          }
                          else if(!(keys.indexOf("lessthan40k") === -1)) { 
                              if(mile >= 10000 && mile < 40000) { inMilerange = 1; }
                          }
                          else if(!(keys.indexOf("lessthan70k") === -1)) { 
                              if(mile >= 40000 && mile < 70000) { inMilerange = 1; }
                          }
                          else if(!(keys.indexOf("lessthan100k") === -1)) { 
                              if(mile >= 70000 && mile < 100000) { inMilerange = 1; }
                          }
                          else if(!(keys.indexOf("lessthan40k") === -1)) { 
                              if(mile >= 100000 && mile < 150000) { inMilerange = 1; }
                          }
                          if(keys[3]=="mileage"|| inMilerange == 1) {
                               var price = car.vehicle_list_price;
                               var inPricerange = 0;
                               if(!(keys.indexOf("$less10k") === -1)) { 
                                   if(price < 10000) { inPricerange = 1; }
                               }
                               else if(!(keys.indexOf("$less20k") === -1)) { 
                                   if(price >= 10000 && price < 20000) { inPricerange = 1; }
                               }
                               else if(!(keys.indexOf("$less35k") === -1)) { 
                                   if(price >= 20000 && price < 35000) { inPricerange = 1; }
                               }
                               else if(!(keys.indexOf("$less50k") === -1)) { 
                                   if(price >= 35000 && price < 50000) { inPricerange = 1; }
                               }
                               else if(!(keys.indexOf("$less100k") === -1)) { 
                                  if(price >= 50000 && price < 100000) { inPricerange = 1; }
                               }
                               else if(!(keys.indexOf("$less150k") === -1)) { 
                                  if(price >= 100000 && price < 150000) { inPricerange = 1; }
                               }
                               if (keys[4]=="price"|| inPricerange == 1) {
                                        filterlist.push(car);
                               }
                          }
                      }
                    }
                  }
               });
               if (keys[5] !="sort") {
                  if (!(keys.indexOf("byprice") === -1)) {
                       filterlist.sort(function(a, b) {return a.vehicle_list_price - b.vehicle_list_price;})
                  }
                  if (!(keys.indexOf("byyear") === -1)) {
                       filterlist.sort(function(a, b) {return b.vehicle_year - a.vehicle_year;})
                  }
                  if (!(keys.indexOf("bymileage") === -1)) {
                       filterlist.sort(function(a, b) {return a.vehicle_mileage - b.vehicle_mileage;})
                  }
               }
               vehicles = filterlist;
            } 
            var list = [];
            vehicles.map(function(car){
                 if(car.image_path) {
                     list.push(car);
                 }
            })
            vehicles = list;
            var carList = vehicles.map(function(car){
                  return (
                     <div key={car.id} className="col-lg-6"> <Car car={car}/> </div>
                  )     
            });
        }
        return(
            <div className="car-display">
                <CarFilter onUpdate={this.onUpdate} />
                <div className="row">
                    {carList}
                </div>
                <LoadMore />
            </div>
        );
    },
    onUpdate(searchKeys) { 
        this.setState({searchKeys}) 
    }

});

export default CarGallery;