import React, { Component } from 'react';
import MapContainer from '../Components/Map';
import Bonbondex from '../Components/Bonbondex.jsx';
import '../Styles/receiver.css';

class Receiver extends Component {
  render() {
    return (
      <div className='backgroundReceiver'>
        <MapContainer /> 
        <Bonbondex />
      </div>
    );
  }
}

export default Receiver;