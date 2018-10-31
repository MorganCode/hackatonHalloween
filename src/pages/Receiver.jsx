import React, { Component } from 'react';
import Bonbondex from '../Components/Bonbondex.jsx';
import MapContainer from '../Components/Map';
import '../Styles/receiver.css';
import Login from '../Components/Login';

class Receiver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedUser: false,
      giverCoordinates: [],
      receiverCoordinates: {}
    }
  }

  setLoggedUser = (bool) => {
    this.setState({
      loggedUser: bool,
    })
  }

  setCoordinates = (coord) => {
    this.setState({
      giverCoordinates: coord
    })
  }

  setUserCoordinates = (userCoord) => {
    this.setState({
      receiverCoordinates: userCoord,
    })
  }

  render() {
    console.log("in receiver render", this.props.giversArray)
    return (
      <div className='backgroundReceiver'>{
        this.state.loggedUser ?
          <div>
            <MapContainer
              giversArray={this.props.giversArray}
              returnCoordinates={this.setCoordinates}
              returnUserPosition={this.setUserCoordinates}
            />
            <Bonbondex
              giversArray={this.props.giversArray}
              giverCoordinates={this.state.giverCoordinates}
              receiverCoordinates={this.state.receiverCoordinates}
            />
          </div>
          :
          <Login
          giversArray={this.props.giversArray}
          userStatus={"Giver"}
            setLoggedUser={this.setLoggedUser}
          />
      }</div>
    );
  }
}

export default Receiver;