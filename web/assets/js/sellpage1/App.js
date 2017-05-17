import React, { Component } from 'react';
// import './App.css';
import Footer from '../elements/Footer.js';
import PagesNavigation from '../elements/PagesNavigation.js';
import SellInput from './SellInput.js';
import SellInputStep2 from './SellInputStep2';
import SellInputStep3 from './SellInputStep3';
class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
            step: 1,
        };
    }

    onUpdate1() {
       this.setState({step: 2});
    }
    onUpdate2() {
       this.setState({step: 3});
    }
    render() {
      if(this.state.step == 1) {
      	return (
            <div className="App">
                <PagesNavigation />
                <SellInput onUpdate={this.onUpdate1.bind(this)}/>
                <Footer />
            </div>
        );
      }
      if(this.state.step == 2) {
      	return (
            <div className="App">
                <PagesNavigation />
                <SellInputStep2 onUpdate={this.onUpdate2.bind(this)}/>
                <Footer />
            </div>
        );
      }
      if(this.state.step == 3) {
      	return (
            <div className="App">
                <PagesNavigation />
                <SellInputStep3 />
                <Footer />
            </div>
        );
      }
   }

}
export default App;





