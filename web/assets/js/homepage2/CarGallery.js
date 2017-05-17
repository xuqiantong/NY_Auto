import React from 'react';
import ReactDOM from 'react-dom';
import CarFilter from './CarFilter.js';

var Filter = require('react-filter');

function CarName(props) {
    const make = props.name.vehicle_make;
    const year = props.name.vehicle_year;
    const model = props.name.vehicle_model;
    const trim = props.name.vehicle_trim;
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

    return (
        <div className="car-display">
            <Image class="car-img" id={car.vehicle_id} path={car.image_path} width="366" height="250" />
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
    );
}

function LoadMore(props) {
    return (
        <div className="loadmore">
            Load More
        </div>
    );
}

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
        setInterval(this.loadCarsFromServer, 
                    this.props.pollInterval)
    }, 

    render: function() { 
        var vehicles = [];
        var filterlist = [];
        var count = 0;
        var vehicle_images = this.state.vehicle_image;

        if (this.state.vehicles && this.state.vehicle_image) {
             vehicles = this.state.vehicles.map(function(car){
                 if (car.valid){
                      var id = car.id;
                      var equip_count = 0;
                      var equips = "";
                      if (car.equipment_AirConditioning){
                          if (equip_count < 3){ 
                            equips = equips.concat("AirConditioning ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_ChildSeatAnchors){
                          if (equip_count < 3){ 
                            equips = equips.concat("ChildSeatAnchors ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_CruiseControl){
                          if (equip_count < 3){ 
                            equips = equips.concat("CruiseControl ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_ChildSeat){
                          if (equip_count < 3){ 
                            equips = equips.concat("ChildSeat ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerDoorLocks){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerDoorLocks ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerMirror){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerMirror ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerWindows){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerWindows ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_RearWindowDefroster){
                          if (equip_count < 3){ 
                            equips = equips.concat("RearWindowDefroster ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_AirBagSideCurtain){
                          if (equip_count < 3){ 
                            equips = equips.concat("AirBagSideCurtain ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_Airbags){
                          if (equip_count < 3){ 
                            equips = equips.concat("Airbags ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_TiltTelescopeWheel){
                          if (equip_count < 3){ 
                            equips = equips.concat("TiltTelescopeWheel ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_TintedGlass){
                          if (equip_count < 3){ 
                            equips = equips.concat("TintedGlass ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_AlloyWheels){
                          if (equip_count < 3){ 
                            equips = equips.concat("AlloyWheels ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerBrakes){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerBrakes ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_AntilockBrakes){
                          if (equip_count < 3){ 
                            equips = equips.concat("AntilockBrakes ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerSeats){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerSeats ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_PowerSteering){
                          if (equip_count < 3){ 
                            equips = equips.concat("PowerSteering ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_DVD){
                          if (equip_count < 3){ 
                            equips = equips.concat("DVD ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_GPS){
                          if (equip_count < 3){ 
                            equips = equips.concat("GPS ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_DualClimateControl){
                          if (equip_count < 3){ 
                            equips = equips.concat("DualClimateControl ");
                            equip_count++;
                          }
                      }
                      if (car.equipment_HeatedSeats){
                          if (equip_count < 3){ 
                            equips = equips.concat("HeatedSeats ");
                            equip_count++;
                          }
                      }
                      var path;
                      vehicle_images.map(function(rela){
                          if (id == rela.vehicle && rela.view == 1) {
                              count++;
                              path = rela.image;
                          }
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