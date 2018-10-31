import React, { Component } from 'react';
import Bonbondex from '../Components/Bonbondex.jsx';
import MapContainer from '../Components/Map';

class Receiver extends Component {
  render() {
    return (
      <div>
        <MapContainer 
          giversArray={this.props.giversArray}
        /> 
        <Bonbondex 
          giversArray={this.props.giversArray}
        />
      </div>
    );
  }
}

export default Receiver;