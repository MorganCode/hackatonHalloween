import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../Styles/Map.css'
import GiverModel from '../Models/GiverModel.jsx'
import Croco from "../Assets/croco.jpg"
import BonObon from "../Assets/bonObon.jpg"
import Dragibus from "../Assets/citrouille.jpeg"
import Schtroumpfs from "../Assets/schtroumpfs.jpg"
import Sucette from "../Assets/sucette.jpg"
import Carambar from "../Assets/carambar.png"

export class MapContainer extends Component {

  constructor(props) {
    super(props)

    let JeanDupontInfo = {
      id: 0,
      firstName: 'Jean',
      lastName: 'Dupont',
      password: 'JeanDupont',
      email: 'jeandupont@voila.fr',
      avatar: 'citrouille.jpeg',
      adress: {
        streetNumber: 31,
        streetType: 'rue',
        streetName: 'Lortet',
        postalCode: 69007,
        cityName: 'Lyon',
        aptmtNumber: '',
      },
      candy: {
        crocodile: true,
        coca: false,
        dragibus: false,
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
      password: 'MartinDurand',
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
        crocodile: false,
        coca: false,
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
        streetNumber: 140,
        streetType: 'avenue',
        streetName: 'Jean Jaurès',
        postalCode: 75019,
        cityName: 'Paris',
        aptmtNumber: '',
      },
      candy: {
        crocodile: true,
        coca: true,
        dragibus: false,
      },
      hasCandy: true,
      finalNotation: 0,
      notation: [],
      available: false,
    };
    this.giverPaulMachin = new GiverModel(PaulMachinInfo)

    this.giversArray = [this.giverJeanDupont, this.giverMartinDurand, this.giverPaulMachin]

    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';

    this.state = {
      userPosition: {
        lat: '',
        lng: '',
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    this.pos = {}
    this.renderProut = []
  }

  maPosition = (position) => {
    this.setState({
      userPosition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.maPosition)
    }
  }

  // convertAdressToCoordinates=()=>{
  //   console.log("in convert adresse to coordinates")
  //   let longitudeArray = []
  //   let latitudeArray = []
  //   for(let i=0;i<3;i++){
  //     let query = this.giversArray[i].adress.streetNumber + "+" + this.giversArray[i].adress.streetType + "+" + this.giversArray[i].adress.streetName + "&postcode=" + this.giversArray[i].adress.postalCode;

  //     fetch(this.api + query)
  //       .then(response => response.json())
  //       .then(data => {
  //         longitudeArray.push(data.features[0].geometry.coordinates[0]);
  //         latitudeArray.push(data.features[0].geometry.coordinates[1]);
  //       })
  //   }
  //   let coordinatesArray = [latitudeArray, longitudeArray]
  //   console.log(coordinatesArray)
  //   return coordinatesArray;
  // }

  // renderMarker=()=>{
  //   let coordinates = this.convertAdressToCoordinates();
  //   console.log("in render array", (coordinates))
  //   console.log("coordinates[0]",coordinates[0])
  //   let fuckCoordinates = coordinates[0]
  //   console.log("fuckCoordinates", fuckCoordinates)
  //   console.log("coordinates[0][0]", fuckCoordinates[0])
  //   let render = []
  //   for(let i=0;i<3;i++){
  //     let position={
  //       lat: coordinates[0][i],
  //       lng: coordinates[1][i],
  //     }
  //     console.log(position)
  //     render.push(
  //       <Marker 
  //         onClick={this.onMarkerClick}
  //         name={'Current location'}
  //         position={position}  
  //       />)
  //   }
  //   console.log(render)
  //   return render

  // }

  renderAllMarkers = () => {
    for (let i = 0; i < 3; i++) {
      this.renderOneMarker(this.giversArray[i])
    }
  }

  renderOneMarker = (giver) => {
    console.log(giver)
    let query = giver.adress.streetNumber + "+" + giver.adress.streetType + "+" + giver.adress.streetName + "&postcode=" + giver.adress.postalCode;

    fetch(this.api + query)
      .then(response => response.json())
      .then(data => {
        let fetchLocalLat = data.features[0].geometry.coordinates[1];
        let fetchLocalLong = data.features[0].geometry.coordinates[0];
        this.pos = { lat: fetchLocalLat, lng: fetchLocalLong };
      });

    if (giver.hasCandy && giver.available) {
      return (<Marker
        onClick={this.onMarkerClick}
        name={'Current location'}
        position={this.pos}
        giver={giver}
      />)
    }
    return
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  displayAdress = (giver) => {
    if (giver) {
      return <div><h2>{giver.firstName + " " + giver.lastName}</h2><p>{giver.adress.streetNumber + " " + giver.adress.streetType + " " + giver.adress.streetName + " " + giver.adress.postalCode + " " + giver.adress.cityName}</p></div>
    }
  }

  displayBonbon = (giver) => {
    if (giver) {
      if (giver.candy.coca) return <img src={BonObon}></img>
      if (giver.candy.crocodile) return <img src={Croco}></img>
      if (giver.candy.dragibus) return <img src={Dragibus}></img>
      if (giver.candy.schtroumpfs) return <img src={Schtroumpfs}></img>
      if (giver.candy.sucette) return <img src={Sucette}></img>
      if (giver.candy.carambar) return <img src={Carambar}></img>
    }
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

          {this.renderOneMarker(this.giversArray[0])}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              {this.displayAdress(this.state.selectedPlace.giver)}
              {this.displayBonbon(this.state.selectedPlace.giver)}
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCKY5OS2THy-jXyAZL-BDlnyQCP8DJt1sw")
})(MapContainer)
