import React, { Component } from 'react';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textClass: 'content-text inactive'
    }
  }

  _onClick(e) {
    e.preventDefault();
    let textClass = this.state.textClass;
    if (this.state.textClass.includes('inactive')) {
      textClass = 'content-text active';
    } else {
      textClass = 'content-text inactive';
    }
    this.setState({
      textClass
    });
  }

  render() {
    const videoSrc = "/Front End Test.mp4";
    return(
      <div className="mainpage container-fluid">
        <video autoPlay muted loop id="myVideo">
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="content">
          <span className={this.state.textClass} onClick={(e) => this._onClick(e)}>Plastic Mobile Interview</span>
        </div>
      </div>
    )
  }
}

export default MainPage;
