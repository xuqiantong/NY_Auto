/**
 * Created by jeanliu on 4/14/17.
 */

import React, {Component, PropTypes} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import CarDetail from './CarDetail';
// import CarDetailMobile from './CarDetailMobile';
// import CarBasicInfo from './CarBasicInfo';

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
        this.setState({activeKey: selectedKey});
    }


    render() {
        return(
            <Nav pullRight id="nav-right" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                <NavItem eventKey={1} id="nav-home" href="/home">Home</NavItem>
                <NavItem eventKey={2} id="nav-buy" href="/buy">Purchase</NavItem>
                <NavItem eventKey={3} id="nav-sell" href="/sell1">Trade-in</NavItem>
                <NavItem eventKey={4} id="nav-blog"><Link id="4" to="/blog">Blog</Link></NavItem>
                <NavItem eventKey={5} id="nav-about"><Link id="5" to="/about">About</Link></NavItem>
                <NavDropdown eventKey={6} title="Sign In" id="basic-nav-dropdown">
                    <MenuItem eventKey={6.1}>Account Settings</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={6.2}>Sign Out</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
}




class CreateNavBar extends Component {

    render() {
        var page = this.props.page;



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
                    <CreateNavRight />
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

class NavBar extends Component {
    render() {

        var page = this.props.page;

        return (
            <Router>
                <div>
                    <CreateNavBar page={page}/>
                    {/*<Test />*/}
                    <Route exact path="/" component={Dummy} />
                    <Route path="/car-detail" component={Dummy} />
                    <Route path="/car-basic" component={Dummy} />
                    <Route path="/trade-in" component={Dummy} />
                </div>




            </Router>

        );
    }
}

export default NavBar;
