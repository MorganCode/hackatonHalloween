import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Receiver from './pages/Receiver';
import Giver from './pages/Giver';
import MapContainer from './Components/Map';
import GiverModel from './Models/GiverModel'


class App extends Component {
  constructor(){
    super();

    let JeanDupontInfo = {
      id : 0,
      firstName : 'Jean',
      lastName : 'Dupont',
      password : 'JeanDupont',
      email : 'jeandupont@voila.fr',
      avatar : 'citrouille.jpeg',
      adress : {
        streetNumber: 22,
        streetType: 'avenue',
        streetName: 'Saxe-Gambetta',
        postalCode: 69007,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy : {
        crocodile: true,
        coca: false,
        dragibus: false,
      },
      hasCandy : true,
      finalNotation : 0,
      notation : [],
      available : true,
    };

    this.giverJeanDupont = new GiverModel(JeanDupontInfo)

    let MartinDurandInfo = {
      id : 1,
      firstName : 'Martin',
      lastName : 'Durand',
      password : 'MartinDurand',
      email : 'martindurand@voila.fr',
      avatar : 'citrouille.jpeg',
      adress : {
        streetNumber: 20,
        streetType: 'rue',
        streetName: 'Delandine',
        postalCode: 69002,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy : {
        crocodile: true,
        coca: false,
        dragibus: false,
      },
      hasCandy : false,
      finalNotation : 0,
      notation : [],
      available : true,
    };
    this.giverMartinDurand = new GiverModel(MartinDurandInfo)

    let PaulMachinInfo = {
      id : 2,
      firstName : 'Paul',
      lastName : 'Machin',
      password : 'PaulMachin',
      email : 'paulmachin@voila.fr',
      avatar : 'citrouille.jpeg',
      adress : {
        streetNumber: 22,
        streetType: 'rue',
        streetName: 'Pasteur',
        postalCode: 69007,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy : {
        crocodile: true,
        coca: true,
        dragibus: false,
      },
      hasCandy : true,
      finalNotation : 0,
      notation : [],
      available : false,
    };
    this.giverPaulMachin = new GiverModel(PaulMachinInfo)

    this.giversArray = [this.giverJeanDupont, this.giverMartinDurand, this.giverPaulMachin]

    this.userStatus = ""
  }

  setUserStatus=(status)=>{
    this.userStatus = status;
  }

  render() {


    return (
      <div className="App">
        {/* <MapContainer /> */}
            <BrowserRouter>
              <Switch>
                <Route exact path="/" render={()=><HomePage/>}/>
                <Route exact path="/giver" onClick={this.setUserStatus("giver")} render={()=><Giver userStatus = {this.userStatus}/>}/>
                <Route 
                  exact path="/receiver" 
                  onClick={this.setUserStatus("receiver")} 
                  render={
                    ()=><Receiver 
                          giversArray={this.giversArray}
                          userStatus = {this.userStatus}
                        />
                  } 
                />
              </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
