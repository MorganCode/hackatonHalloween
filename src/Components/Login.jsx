import React, { Component } from 'react';
import { Redirect } from 'react-router';
import '../Styles/login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      newUser:false,
      userName: '',
      password: '',
    }
  }

  setNewUser=()=>{
    this.setState({
      newUser : !this.state.newUser
    })
  }

  getUserName = (e) => {
    this.setState({userName: e.target.value})
  }
  getPassword = (e) => {
    this.setState({password: e.target.value})
  }

  renderNewUserInfo=()=>{
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
          <input type="text" name="prenom" placeholder="Prénom"  onChange={this.getUserName} />
          <input type="password" name="password"  placeholder="Password"  onChange={this.getPassword} onKeyPress={this.enterPassword} />
        </div>
      )
    }
    return render 
  }

  enterPassword = (e) => {
    if (e.key === 'Enter') {
      this.checkLogginInfo(this.props.giversArray, this.state.userName, this.state.password)
    }
  }

  checkLogginInfo = (array, name, password) => {
    let users = array.map(name => name.firstName)
    let passwords = array.map(password => password.password)
    console.log(name, password)
    for (let i = 0; i < users.length; i++) {
      if (name === users[i] && password !== passwords[i]) {
        alert("Mot de passe érroné")
      }
      if (name === users[i] && password === passwords[i]) {
        this.props.setLoggedUser(true)
      }       
    }
  }

  render() {
    
    return (
      <div id="userInfo">
        
        <div>{this.renderNewUserInfo()}</div>
        <div id="buttonRow">
          <button onClick={()=>this.checkLogginInfo(this.props.giversArray, this.state.userName, this.state.password)}>OK</button>
          <button onClick={this.setNewUser}>New user</button>
        </div>
      </div>
    );
  }
}

export default Login;
