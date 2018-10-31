import React, { Component } from 'react';
import ProfileGiver from '../Components/ProfileGiver';
import GiverInterface from '../Components/GiverInterface';
import Login from '../Components/Login'

class Giver extends Component {
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
          <ProfileGiver/>
          <GiverInterface/>
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

export default Giver;
