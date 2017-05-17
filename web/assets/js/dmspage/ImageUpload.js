import React, { Component } from 'react';
import './ImageUpload.css';


var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var Image = require('react-bootstrap/lib/Image');
var ControlLabel = require('react-bootstrap/lib/ControlLabel');


export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        file: '',
        imagePreviewUrl: '',
        imgWidth: 0
      };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log(e.target.files);
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
     // var base64 = reader.result.replace(/^[^,]*,/, '');
     // this.props.upload(reader.result);
    };
    // var base64;
    // reader.onload = function () {
    //     var data = reader.result;
    //     base64 = data.replace(/^[^,]*,/, '');
    // }

     this.props.upload(file);
    reader.readAsDataURL(file);

  }

    componentDidMount() {
        const width = document.getElementById('img-wrap').clientWidth;
        console.log(width);
        this.setState({
            imgWidth: { width }
        });
    }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;




    if (imagePreviewUrl) {
        // const divStyle = {
        //     // color: 'blue',
        //     // backgroundImage: 'url(' + imagePreviewUrl + ')',
        //     backgroundImage: 'url(' + '../../assets/bundles/images/1.jpg' + ')',
        //     // backgroundSize: 'cover'
        // };
        var width = this.state.imgWidth;
      // $imagePreview = (<img src={imagePreviewUrl} width={width.width} />);
        $imagePreview = (<Image src={imagePreviewUrl} responsive />);
      //   $imagePreview = (<div className="imgPreview" style={divStyle}></div>);

    } else {
      $imagePreview = (<div className="previewText">Please select an Image <br/> for Preview</div>);
    }

    return (
      <Col className="previewComponent">
          <div className="img-title-wrapper">
              <ControlLabel className="img-title">{this.props.imgTitle}</ControlLabel>
          </div>


          <div className="img-ops-area">
              <div className="form-wrapper">
                  <form className="img-uploader" onSubmit={(e)=>this._handleSubmit(e)}>
                      <input className="fileInput"
                             type="file"
                             id="image"
                             onChange={(e)=>this._handleImageChange(e)} />
                  </form>
              </div>
              <div className="img-wrapper" id="img-wrap">
                  {$imagePreview}
              </div>
          </div>

      </Col>
    )
  }
}
  