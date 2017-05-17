import React, {Component, PropTypes} from 'react';
import NavigationLink from './NavigationLink.js';
import "./PagesNavigation.css"

export default class PagesNavigation extends Component {
  render() {
    const {pages, active_page_slug} = this.props;
    
    const ulStyle = {
      listStyleType: "none", 
      margin: 0,
      padding: 0,
      textAlign: "center",
      fontSize: "20px"
    };
    return (
      <div className="navWrapper" style={{display: "inline"}}>
        <ul className="navlistsWrapper" style={ulStyle}>
          <NavigationLink text="Home" url="/home" />
          <NavigationLink text="Buy" url="/buy" />
          <NavigationLink text="Sell" url="/sell1" />
          <img style={{width: 160, height: 105}} src={'https://s30.postimg.org/5mw3167s1/logo.png'} />
          <NavigationLink text="Blog" url="/blog" />
          <NavigationLink text="MyList" url="mylist.asp" />
          <NavigationLink text="Help" url="help.asp" />
        </ul>
        <button type="button" className="signIn btn btn-primary btn-sm" onClick= {this.toLogin.bind(this)}>Sign in</button>
        </div>
    );
  }
  toLogin() {
      window.location = '/login';
  }
}