/**
 * Created by Kong on 3/13/17.
 */

import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return <div className="col-md-12 footerWrapper">
      <div className="addressWrapper col-md-2 col-md-offset-2">
        <p className="footerText">NY Auto Depot</p>
        <p className="footerText">800-899-8233</p>
        <p className="footerText">15 Windsor Ct, Mineola, NY</p>
        <p className="footerText">Mon-Sun 10am-7am</p>
      </div>

      <div className="list1 col-md-1">
        <ul className="footerText">
          <li className="footerText">Company</li>
          <li className="footerText">Jobs</li>
          <li className="footerText">Blog</li>
        </ul>
      </div>

      <div className="list2 col-md-2">
        <ul className="footerText">
          <li className="footerText">Terms of Service</li>
          <li className="footerText">Privacy Policy</li>
        </ul>
      </div>

      <div className="col-md-5">
        <ul className="footerText">
          <li className="footerText">Email Us</li>
          <img src="" alt="QR_code" />
        </ul>
      </div>
      <div className="push"></div>
    </div>

  }
}
