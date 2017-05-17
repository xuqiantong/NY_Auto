import React, { Component } from 'react';

import Footer from '../elements/Footer';
import PagesNavigation from '../elements/PagesNavigation';
import NavBar from '../new-navbar/NavBar';
import BlogList from './BlogList';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar active="blog"/>
                <BlogList />
                <Footer />
            </div>
        );
    }
}

export default App;
