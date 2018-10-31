import React, { Component } from 'react';
import Bonbondex from '../Components/Bonbondex.jsx';
import MapContainer from '../Components/Map';
import Login from '../Components/Login'


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
      <div>{
        this.state.loggedUser ?
        <div>
          <MapContainer 
            giversArray={this.props.giversArray}
            setNotation={this.props.setNotation}
          /> 
          <Bonbondex 
            giversArray={this.props.giversArray}
          />
        </div>
        :
        <Login 
          userStatus = {this.props.userStatus}
          setLoggedUser = {this.setLoggedUser}
        />
      }</div>
    );
  }
}

export default Receiver;