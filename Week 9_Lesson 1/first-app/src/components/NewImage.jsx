import React, { Component } from "react";

class NewImage extends Component {

    render() {
      return (
        <div>
          <img src={this.props.src} alt="logo" className="App-logo" />
        </div>
      );
    }
  }
  
  export default NewImage;