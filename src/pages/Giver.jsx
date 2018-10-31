import React, { Component } from 'react';
import ProfileGiver from '../Components/ProfileGiver';
import GiverInterface from '../Components/GiverInterface';
<<<<<<< HEAD
import '../Styles/giverInterface.css';
=======
import Login from '../Components/Login'
>>>>>>> dev

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
<<<<<<< HEAD
      <div className="giverInterface">
        <ProfileGiver/>
        <GiverInterface/>
      </div>
=======
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
>>>>>>> dev
    );
  }
}

export default Giver;
