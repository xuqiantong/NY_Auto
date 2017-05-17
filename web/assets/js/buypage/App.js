import React, { Component } from 'react';

import './App.css';

import PagesNavigation from '../elements/PagesNavigation';
import Footer from '../elements/Footer';
import NavBar from '../new-navbar/NavBar';
import Buy from './Buy';

var Button = require('react-bootstrap/lib/Button');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');



class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar active="buy"/>

          <Row className="body-wrapper">
            
              <Buy />

          </Row>
          
          <Footer />
        </div>
    );
  }
}

export default App;

