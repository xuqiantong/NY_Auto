/**
 * Created by jeanliu on 4/14/17.
 */

import React, {Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Home from './Home';
// import CarDetail from './CarDetail';
// import CarDetailMobile from './CarDetailMobile';
// import CarBasicInfo from './CarBasicInfo';

import NavigationLink2 from '../elements/NavigationLink2';

import Dummy from './Dummy';

var Nav = require('react-bootstrap/lib/Nav');
var Navbar = require('react-bootstrap/lib/Navbar');
var NavItem = require('react-bootstrap/lib/NavItem');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

import './NavBar.css';

class CreateNavRight extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: 1};
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedKey) {
        console.log(selectedKey);
        this.setState({activeKey: selectedKey});
    }


    render() {
        var active = this.props.active;
        console.log("nav-right");
        console.log(active);

        if (active ==="home") {
            return(
                <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavigationLink2 id="home-link" classname="active nav-link" eventKey={1} text="Home" url="/home" />
                    <NavigationLink2 id="buy-link" classname="nav-link" eventKey={2} text="Purchase" url="/buy" />
                    <NavigationLink2 id="sell1-link" classname="nav-link" eventKey={3} text="Trade-in" url="/sell1" />
                    <NavigationLink2 id="blog-link" classname="nav-link" eventKey={4} text="Blog" url="/blog" />
                    <NavigationLink2 id="about-link" classname="nav-link" eventKey={5} text="About" url="/" />
                    <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                        <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                    </NavDropdown>
                </Nav>
            );
        }
        else if (active === "buy") {
            return(
                <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavigationLink2 id="home-link" classname="nav-link" eventKey={1} text="Home" url="/home" />
                    <NavigationLink2 id="buy-link" classname="active nav-link" eventKey={2} text="Purchase" url="/buy" />
                    <NavigationLink2 id="sell1-link" classname="nav-link" eventKey={3} text="Trade-in" url="/sell1" />
                    <NavigationLink2 id="blog-link" classname="nav-link" eventKey={4} text="Blog" url="/blog" />
                    <NavigationLink2 id="about-link" classname="nav-link" eventKey={5} text="About" url="/" />
                    <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                        <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                    </NavDropdown>
                </Nav>
            );
        }
        else if (active === "sell1") {
            return(
                    <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        <NavigationLink2 id="home-link" classname="nav-link" eventKey={1} text="Home" url="/home" />
                        <NavigationLink2 id="buy-link" classname="nav-link" eventKey={2} text="Purchase" url="/buy" />
                        <NavigationLink2 id="sell1-link" classname="active nav-link" eventKey={3} text="Trade-in" url="/sell1" />
                        <NavigationLink2 id="blog-link" classname="nav-link" eventKey={4} text="Blog" url="/blog" />
                        <NavigationLink2 id="about-link" classname="nav-link" eventKey={5} text="About" url="/" />
                        <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                            <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                );
        }
        else if (active === "blog") {
            return(
                    <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                        <NavigationLink2 id="home-link" classname="nav-link" eventKey={1} text="Home" url="/home" />
                        <NavigationLink2 id="buy-link" classname="nav-link" eventKey={2} text="Purchase" url="/buy" />
                        <NavigationLink2 id="sell1-link" classname="nav-link" eventKey={3} text="Trade-in" url="/sell1" />
                        <NavigationLink2 id="blog-link" classname="active nav-link" eventKey={4} text="Blog" url="/blog" />
                        <NavigationLink2 id="about-link" classname="nav-link" eventKey={5} text="About" url="/" />
                        <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                            <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                        </NavDropdown>
                    </Nav>
                );
        }
        else {
            return(
                <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavigationLink2 id="home-link" classname="nav-link" eventKey={1} text="Home" url="/home" />
                    <NavigationLink2 id="buy-link" classname="nav-link" eventKey={2} text="Purchase" url="/buy" />
                    <NavigationLink2 id="sell1-link" classname="nav-link" eventKey={3} text="Trade-in" url="/sell1" />
                    <NavigationLink2 id="blog-link" classname="nav-link" eventKey={4} text="Blog" url="/blog" />
                    <NavigationLink2 id="about-link" classname="nav-link" eventKey={5} text="About" url="/" />
                    <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                        <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                    </NavDropdown>
                </Nav>
            );
        }


        
    }
}




class CreateNavBar extends Component {

    render() {
        var active = this.props.active;
        console.log("navbar-create");
        console.log(active);


        return (

            <Navbar inverse collapseOnSelect className="nav-bar">
                <Navbar.Header>
                    <Navbar.Brand className="nav-brand">
                        {/*<a href="#">React-Bootstrap</a>*/}
                        <img className="nav-logo1" src='./static/bundles/images/navbar/nyad-logo1.png' />
                        <img className="nav-logo2" src='./static/bundles/images/navbar/nyad-logo2.png' />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <CreateNavRight active={active}/>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

class NavBar extends Component {
    render() {

        var active = this.props.active;
        console.log("navbar");
        console.log(active);

        return (
                <div>
                    <CreateNavBar active={active} />
                    
                </div>
            

        );
    }
}

export default NavBar;
