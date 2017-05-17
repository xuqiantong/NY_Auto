import React, { Component } from 'react';
// import './App.css';
import Footer from '../elements/Footer.js';
import PagesNavigation from '../elements/PagesNavigation.js';
import NavBar from '../new-navbar/NavBar';
import Login from './login';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar active="login"/>
                <Login />
                <Footer />
            </div>
        );
    }
}

export default App;
