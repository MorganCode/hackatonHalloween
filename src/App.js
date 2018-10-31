import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Receiver from './pages/Receiver';
import Giver from './pages/Giver';
import GiverModel from './Models/GiverModel'


class App extends Component {
  constructor() {
    super();

    let JeanDupontInfo = {
      id: 0,
      firstName: 'Jean',
      lastName: 'Dupont',
      password: 'JeanDupont',
      email: 'jeandupont@voila.fr',
      avatar: 'citrouille.jpeg',
      adress: {
        streetNumber: 29,
        streetType: 'rue',
        streetName: 'de Condé',
        postalCode: 69002,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy: {
        coca: false,
        carambar:false,
        croco: false,
        schtroumpfs:false,
        sucette:false,
        dragibus: true,
      },
      hasCandy: true,
      finalNotation: 0,
      notation: [],
      available: true,
    };

    this.giverJeanDupont = new GiverModel(JeanDupontInfo)

    let MartinDurandInfo = {
      id: 1,
      firstName: 'Martin',
      lastName: 'Durand',
      password: 'password',
      email: 'martindurand@voila.fr',
      avatar: 'citrouille.jpeg',
      adress: {
        streetNumber: 20,
        streetType: 'rue',
        streetName: 'Delandine',
        postalCode: 69002,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy: {
        coca: true,
        carambar:true,
        croco: true,
        schtroumpfs:false,
        sucette:false,
        dragibus: false,
      },
      hasCandy: false,
      finalNotation: 0,
      notation: [],
      available: true,
    };
    this.giverMartinDurand = new GiverModel(MartinDurandInfo)

    let PaulMachinInfo = {
      id: 2,
      firstName: 'Paul',
      lastName: 'Machin',
      password: 'PaulMachin',
      email: 'paulmachin@voila.fr',
      avatar: 'citrouille.jpeg',
      adress: {
        streetNumber: 48,
        streetType: 'cours',
        streetName: 'Suchet',
        postalCode: 69002,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy: {
        coca: false,
        carambar:false,
        croco: false,
        schtroumpfs:true,
        sucette:false,
        dragibus: false,
      },
      hasCandy: true,
      finalNotation: 0,
      notation: [],
      available: true,
    };
    this.giverPaulMachin = new GiverModel(PaulMachinInfo)

    let LouisPierreInfo = {
      id: 3,
      firstName: 'Louis',
      lastName: 'Pierre',
      password: 'password',
      email: 'paulmachin@voila.fr',
      avatar: 'citrouille.jpeg',
      adress: {
        streetNumber: 38,
        streetType: 'cours',
        streetName: 'Emile Zola',
        postalCode: 69100,
        cityName: 'Villeurbanne',
        aptmtNumber: '',
      },
      candy: {
        coca: false,
        carambar:false,
        croco: false,
        schtroumpfs:true,
        sucette:false,
        dragibus: false,
      },
      hasCandy: true,
      finalNotation: 0,
      notation: [],
      available: true,
    };
    this.giverLouisPierre = new GiverModel(LouisPierreInfo)

    this.giversArray = [this.giverJeanDupont, this.giverMartinDurand, this.giverPaulMachin, this.giverLouisPierre]

    this.userStatus = ""
    console.log("in app", this.giversArray)
  }

  setUserStatus = (status) => {
    this.userStatus = status;
  }

  setNotation = (giver, note) => {
    giver.notation.push(note)
    giver.finalNotation = giver.notation.reduce((a, b) => a + b)
  }

  render() {

    console.log("in app render", this.giversArray)

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route 
              exact path="/giver" 
              onClick={this.setUserStatus("giver")} 
              render={() => 
                <Giver 
                  userStatus={this.userStatus} 
                  giversArray={this.giversArray} 
                />
              } 
            />
            <Route
              exact path="/receiver"
              onClick={this.setUserStatus("receiver")}
              render={
                () => 
                {
                console.log("route", this.giversArray)
                return <Receiver
                  giversArray={this.giversArray}
                  userStatus={this.userStatus}
                  setNotation={this.setNotation}
                />
                }
              }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
