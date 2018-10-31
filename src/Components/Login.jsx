import React, { Component } from 'react';
import '../Styles/login.css'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      newUser:false,
    }
    console.log(this.props.userStatus)
  }

  setNewUser=()=>{
    this.setState({
      newUser : !this.state.newUser
    })
  }

  renderNewUserInfo=()=>{
    console.log("status",this.props.userStatus)
    let render=[]
    if(this.state.newUser){
      render.push(
        <div>
          <input type="text" name="prenom" placeholder="Prénom"/>
          <input type="password" name="password"  placeholder="Password"/>
          <input type="password" name="passwordConfirm" placeholder="Confirm password"/>
        </div>
      )
    
      if(this.props.userStatus === "receiver"){
        let render = []
        render.push(
          <div>
            <input type="text" name="prenom" placeholder="Prénom"/>
            <input type="password" name="password"  placeholder="Password"/>
            <input type="password" name="passwordConfirm" placeholder="Confirm password"/>)
            <fieldset>
              <legend>Adresse</legend>
              <input type="text" name="streetNumber" placeholder="N° de rue"/>
              <input type="text" name="streetType" placeholder="Type de rue"/>
              <input type="text" name="streetName" placeholder="Nom de rue"/>
              <input type="text" name="postalCode" placeholder="Code postal"/>
              <input type="text" name="city" placeholder="Ville"/>
              <input type="text-area" name="extra-info" placeholder="Autres informations (n° appartement, digicode...)"/>
            </fieldset>
          </div>
        )
      }
    }
    else{
      render.push(
        <div>
          <input type="text" name="prenom" placeholder="Prénom"/>
          <input type="password" name="password"  placeholder="Password"/>
        </div>
      )
    }
    return render
  }

  checkLogginInfo=()=>{
    let logginInfo = true;
    if(logginInfo) this.props.setLoggedUser();
  }

  render() {
    return (
      <div id="userInfo">
        
        <div>{this.renderNewUserInfo()}</div>
        <div id="buttonRow">
          <button onClick={this.checkLogginInfo}>OK</button>
          <button onClick={this.setNewUser}>New user</button>
        </div>
      </div>
    );
  }
}

export default Login;
