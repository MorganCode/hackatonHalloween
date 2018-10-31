import React, { Component } from 'react';
import Bonbondex from '../Components/Bonbondex.jsx';
import MapContainer from '../Components/Map';
import '../Styles/receiver.css';
import Login from '../Components/Login';


class Receiver extends Component {
  constructor(props){
    super(props)
    this.state={
      loggedUser:false,
    }
  }

  setLoggedUser=()=>{
    this.setState({
      loggedUser: true,
    })
  }

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