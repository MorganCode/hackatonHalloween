import React, { Component } from 'react';
import Bonbondex from '../Components/Bonbondex.jsx';
import MapContainer from '../Components/Map';

class Receiver extends Component {
  render() {
    return (
      <div>
        <MapContainer /> 
        <Bonbondex />
      </div>
    );
  }
}

export default Receiver;