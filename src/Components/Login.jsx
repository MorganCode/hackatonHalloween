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

    console.log("in login", this.props.giversArray)
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
    console.log(this.props.userStatus == "receiver")
    let render=[]
    
    
    if(this.state.newUser && this.props.userStatus == "receiver"){
      render.push(
        <div>
          <input type="text" name="prenom" placeholder="Prénom"/>
          <input type="password" name="password"  placeholder="Password"/>
          <input type="password" name="passwordConfirm" placeholder="Confirm password"/>
          <input type="text" name="streetNumber" placeholder="N° de rue"/>
          <input type="text" name="streetType" placeholder="Type de rue"/>
          <input type="text" name="streetName" placeholder="Nom de rue"/>
          <input type="text" name="postalCode" placeholder="Code postal"/>
          <input type="text" name="city" placeholder="Ville"/>
          <input type="text-area" name="extra-info" placeholder="Autres informations (n° appartement, digicode...)"/>
        </div>
      )
    }
    
    else if(this.state.newUser){
      render.push(
        <div>
          <input type="text" name="prenom" placeholder="Prénom"/>
          <input type="password" name="password"  placeholder="Password"/>
          <input type="password" name="passwordConfirm" placeholder="Confirm password"/>
        </div>
      )
    }

    else{
      render.push(
        <div>
          <input type="text" name="prenom" placeholder="Prénom"  onChange={this.getUserName} />
          <input type="password" name="password"  placeholder="Password"  onChange={this.getPassword} />
        </div>
      )
    }
    return render 
  }

  /*enterPassword = (e) => {
    if (e.key === 'Enter') {
      this.checkLogginInfo(this.props.giversArray, this.state.userName, this.state.password)
    }
  }*/

  checkLogginInfo = (array, name, password) => {
    console.log(this.props.giversArray)
    let users = array.map(name => name.firstName)
    let passwords = array.map(password => password.password)
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
    console.log("in login render", this.props.giversArray)

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
