import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Footer from '../elements/Footer.js';
import PagesNavigation from '../elements/PagesNavigation.js';
import NavBar from '../new-navbar/NavBar.js';

var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');

import CarDetail from './CarDetail.js';

class App extends Component {
  render() {

    return (
        <div className="App">
          <NavBar active="detail"/>

          <Row className="body-wrapper">
	          <Col md={8} mdOffset={2} id="detail">
	          	<CarDetail />
	          </Col>
          </Row>
          
          <Footer />
          
        </div>
    );
  }
}

export default App;