import React, { Component } from 'react';

import './App.css';

import CarGallery from './CarGallery.js';
import PagesNavigation from '../elements/PagesNavigation.js';
import Banner from './Banner.js';
import SellSection from './SellSection.js';
import HereWeOffer from './HereWeOffer';
import Footer from '../elements/Footer.js';
import MediaSection from './MediaSection.js';

class App extends Component {
  render() {

    return (
      <div className="App">
        <PagesNavigation />
        <Banner />
        <CarGallery url1='/api/has_image/?format=json' url2='/api/vehicle/?format=json' pollInterval={1000}/>
         <SellSection />
        <HereWeOffer />
        <MediaSection />
        <Footer />
      </div>
    );
  }
}

export default App;

