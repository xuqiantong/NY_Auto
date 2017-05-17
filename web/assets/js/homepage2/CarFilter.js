/**
 * Created by jeanliu on 3/16/17.
 */

import React from 'react';

class FilterMake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'make'
        };

        this.handleChange = this.handleChange.bind(this);
    }

     handleChange(event) {
        this.setState({value: event.target.value});
        this.props.make(event.target.value);
    }

    render() {
        return (
            <select className="car-filter" id="filter-make" value={this.state.value} onChange={this.handleChange}>
                <option value="make">Make</option>
                <option value="BMW">BMW</option>
                <option value="Toyota">Toyota</option>
                <option value="Ford">Ford</option>
                <option value="Audi">Audi</option>
                <option value="MB">MB</option>
            </select>
        );
    }
}

class FilterStyle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'style'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)  {
        this.setState({value: event.target.value});
        this.props.style(event.target.value);
    }
    
    render() {

        return (
            <select className="car-filter" id="filter-style" value={this.state.value} onChange={this.handleChange}>
                <option value="style">Style</option>
                <option value="Sedan">Sedan</option>
                <option value="Coupe">Coupe</option>
                <option value="SUV">SUV</option>
                <option value="Convertible">Convertible</option>
            </select>
        );
    }
}

class FilterYear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'year'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)  {
        this.setState({value: event.target.value});
        this.props.year(event.target.value);
    }

    render() {
        return (
            <select className="car-filter" id="filter-year" value={this.state.value} onChange={this.handleChange}>
                <option value="year">Year</option>
                <option value="after2015" selected>2015 - Present</option>
                    <option value="after2010">2010 - 2014</option>
                    <option value="after2005">2005 - 2009</option>
                    <option value="after2000">2000 - 2004</option>
                    <option value="after1990">1990 - 1999</option>
            </select>
        );
    }
}

class FilterMile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'mileage'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)  {
        this.setState({value: event.target.value});
        this.props.mile(event.target.value);
    }

    render() {

        return (
            <select className="car-filter" id="filter-year" value={this.state.value} onChange={this.handleChange}>
                <option value="mileage">Mileage</option>
                <option value="lessthan10k">0 - 10,000 mi</option>
                <option value="lessthan40k">10,000 - 40,000 mi</option>
                <option value="lessthan70k">40,000 - 70,000 mi</option>
                <option value="lessthan100k">70,000 - 100,000 mi</option>
                <option value="lessthan150k">100,000 - 150,000 mi</option>
            </select>
        );
    }
}

class FilterPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'price'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)  {
        this.setState({value: event.target.value});
        this.props.price(event.target.value);
    }

    render() {

        return (
            <select className="car-filter" id="filter-price" value={this.state.value} onChange={this.handleChange}>
                <option value="price">Price</option>
                <option value="$less10k">$0 - $10,000</option>
                <option value="$less20k">$10,000 - $20,000</option>
                <option value="$less35k">$20,000 - $35,000</option>
                <option value="$less50k">$35,000 - $50,000</option>
                <option value="$less100k">$50,000 - $100,000 mi</option>
                <option value="$more100k">More than $100,000</option>
            </select>
        );
    }
}

class FilterSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'sort'};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.sort(event.target.value);
    }

    render() {
        return (
            <select className="car-filter" id="filter-sort" value={this.state.value} onChange={this.handleChange}>
                <option value="sort">Sort</option>
                <option value="byprice" selected>By Price</option>
                <option value="byyear">By Year</option>
                <option value="bymileage">By Mileage</option>
            </select>
        );
    }
}




export default class CarFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           make: 'make',
           style: 'style',
           year: 'year',
           mileage: 'mileage',
           price: 'price',
           sort: 'sort',
           keys: ['make','style','year','mileage','price', 'sort'],
        };
    }
    render() {
        return (
            <div className="car-filter-bar">
                <FilterMake make={this.updateMake.bind(this)} />
                <FilterStyle style={this.updateStyle.bind(this)}/>
                <FilterYear year={this.updateYear.bind(this)}/>
                <FilterMile mile={this.updateMileage.bind(this)}/>
                <FilterPrice price={this.updatePrice.bind(this)}/>
                <FilterSort sort={this.updateOrder.bind(this)}/>
                <button className="search-button" onClick={this.update.bind(this)}>Search</button>
            </div>
        );
    }
    updateMake(data) {
       this.setState({make: data});
       var tmp = this.state.keys;
       tmp[0] = data;
       this.setState({keys : tmp});
    }
    updateStyle(data) {
       this.setState({style: data});
       var tmp = this.state.keys;
       tmp[1] = data;
       this.setState({keys : tmp});
    }
    updateYear(data) {
       this.setState({year: data});
       var tmp = this.state.keys;
       tmp[2] = data;
       this.setState({keys : tmp});
    }
    updateMileage(data) {
       this.setState({mileage: data});
       var tmp = this.state.keys;
       tmp[3] = data;
       this.setState({keys : tmp});
    }
    updatePrice(data) {
       this.setState({price: data});
       var tmp = this.state.keys;
       tmp[4] = data;
       this.setState({keys : tmp});
    }
    updateOrder(data) {
       this.setState({sort: data});
       var tmp = this.state.keys;
       tmp[5] = data;
       this.setState({keys : tmp});
    }
    update() {
        this.props.onUpdate(this.state.keys)
    }
}