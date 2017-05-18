import React, { Component } from 'react';

import Footer from '../elements/Footer';
import PagesNavigation from '../elements/PagesNavigation';
import NavBar from '../new-navbar/NavBar';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar active="about"/>
                <div className="todo">To be constructed...</div>
                <Footer />
            </div>
        );
    }
}

export default App;
