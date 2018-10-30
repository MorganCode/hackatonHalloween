import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../Styles/Map.css'


export class MapContainer extends Component {

  constructor(props){
    super(props)
    
    /*let JeanDupontInfo = {
      id : 0,
      firstName : 'Jean',
      lastName : 'Dupont',
      password : 'JeanDupont',
      email : 'jeandupont@voila.fr',
      avatar : 'citrouille.jpeg',
      adress : {
        streetNumber: 30,
        streetType: 'cours',
        streetName: 'Suchet',
        postalCode: 69002,
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

    this.giverJeanDupont = new giverModel(JeanDupontInfo)

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
        crocodile: false,
        coca: false,
        dragibus: false,
      },
      hasCandy : false,
      finalNotation : 0,
      notation : [],
      available : true,
    };
    this.giverMartinDurand = new giverModel(MartinDurandInfo)

    let PaulMachinInfo = {
      id : 2,
      firstName : 'Paul',
      lastName : 'Machin',
      password : 'PaulMachin',
      email : 'paulmachin@voila.fr',
      avatar : 'citrouille.jpeg',
      adress : {
        streetNumber: 6,
        streetType: 'cours',
        streetName: 'Charlemagne',
        postalCode: 69002,
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
      available : true,
    };
    this.giverPaulMachin = new giverModel(PaulMachinInfo)

    this.giversArray = [this.giverJeanDupont, this.giverMartinDurand, this.giverPaulMachin]

    this.user = []
    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';*/
    
    this.state={
      userPosition:{
        lat:'',
        lng:'',
      }
    }
  }

  maPosition=(position)=>{
    this.setState({
      userPosition:{
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }
  
  componentDidMount() {
    if(navigator.geolocation){
      navigator.geolocation.watchPosition(this.maPosition)
    }
    

    // let query = this.giversArray[0].adress.streetNumber + "+" + this.giversArray[0].adress.streetType + "+" + this.giversArray[0].adress.streetName + "&postcode=" + this.giversArray[0].adress.postalCode;

    // fetch(this.api + query)
    //   .then(response => response.json())
    //   .then(data => this.user = data.features.geometry.coordinates)
  }
  

  render() {

    let localLat = this.state.userPosition.lat;
    let localLong = this.state.userPosition.lng;

    return (
      <div id="mapZone">
        <Map 
          google={this.props.google} 
          zoom={16}
          initialCenter={{
            lat: this.state.userPosition.lat,
            lng: this.state.userPosition.lng
          }}
          center={{
            lat: localLat,
            lng: localLong
          }}
        >

        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'}
          position={{
            lat: localLat,
            lng: localLong,
          }} 
        />
  
        {/* <Marker onClick={this.onMarkerClick}
          name={'Current location'} 
          position={{
            lat: this.user[0],
            lng: this.user[1]
          }}
        /> */}

        <Marker 
          onClick={this.onMarkerClick}
          name={'Current location'}
          position={{
            lat: 45.745138,
            lng: 4.824873
          }} 
        />
  
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCKY5OS2THy-jXyAZL-BDlnyQCP8DJt1sw")
})(MapContainer)


// initialCenter={{
//   lat: 45.746067,
//   lng: 4.827030
// }}
// >

// <Marker 
//   onClick={this.onMarkerClick}
//   name={'Current location'} 
//   position={{
//     lat: 45.746920,
//     lng: 4.823725
//   }} />
// />

// <Marker 
//   onClick={this.onMarkerClick}
//   name={'Current location'}
//   position={{
//     lat: 45.745138,
//     lng: 4.824873
//   }} />