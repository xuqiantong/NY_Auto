import React, {Component, PropTypes} from 'react';

export default class NavigationLink extends Component {
   
  render() {
    var {text, url} = this.props;
    var style = {
      display: "inline"
    };

    var a_style = {
      color: "black",
      display: "inline-block",
      padding: "30px",
      textDecoration: "none"
    }
    //should change later
    

    return (
      <li className="leftLinks" style={style}>
        <a href={url} style = {a_style}>{text}</a></li>
    )
  }

}


NavigationLink.propTypes = {
    url: PropTypes.string,
    text: PropTypes.string
 }
