import React, { Component } from 'react';
import '../Styles/profileGiver.css';
import GiverModel from '../Models/GiverModel';
import '../Assets/avatarJeanDupont.jpg';
import Switch from 'react-toggle-switch';
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"; 
 

class ProfileGiver extends Component {

  constructor(props) {
    super(props);
    
    let infoJeanDupont = {
      id: 0,
      firstName: 'Jean',
      lastName: 'Dupont',
      password: 'password',
      email: 'jeandupont@voila.fr',
      avatar: 'http://image.noelshack.com/fichiers/2018/44/2/1540914861-avatarjeandupont.jpg',

      adress: {
        streetNumber: 17,
        streetType: 'rue',
        streetName: 'Delandine',
        postalCode: '69002',
        cityName: 'Lyon',
        aptmtNumber: '',
      },

      candy: {
        crocodile: false,
        coca: true,
        dragibus: true,
      },

      hasCandy: true,
      finalNotation: 0,
      notation: [],
      available: true,
    };
    this.GiverJeanDupont = new GiverModel(infoJeanDupont)

    this.state = {
      available: false,
      showAvailable: 'Absent',
    };

  }


  showInfoJeanDupont() {
    const arrayProfileJeanDupont = [];
    arrayProfileJeanDupont.push(this.GiverJeanDupont.adress.streetNumber, ' ', this.GiverJeanDupont.adress.streetType, ' ', this.GiverJeanDupont.adress.streetName, ' ', this.GiverJeanDupont.adress.postalCode, ' ', this.GiverJeanDupont.adress.cityName, ' ', this.GiverJeanDupont.adress.aptmtNumber);
    return (arrayProfileJeanDupont);
  }

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        available: !prevState.available
      };
    });
   
  };

render() {
  
  console.log(this.showInfoJeanDupont());
  
  return (
    <container className="profileGiver">
      <img src= {this.GiverJeanDupont.avatar}></img>
      <div className='coordinated'>
      <div className='name'>{this.GiverJeanDupont.firstName} {this.GiverJeanDupont.lastName}</div>
      <div className='adress'>{this.showInfoJeanDupont()}</div>
      </div>
      <div className='buttonActionProfile'>
      <button className='buttonChangeProfileInformation'>Change Informations</button>
      { 
        (this.state.available === false)
          ? <div className='showAvailable'>Absent</div>
          : <div className='showAvailable'>Disponible</div>
      }
      <Switch className='availableButton' onClick={this.toggleSwitch} on={this.state.available}/>
      </div>
    </container>

  );
}
}

export default ProfileGiver;