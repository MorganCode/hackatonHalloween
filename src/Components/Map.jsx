import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../Styles/Map.css'
import GiverModel from '../Models/GiverModel.jsx'
import Crocodile from "../Assets/croco.jpg"
import BonObon from "../Assets/bonObon.jpg"
import Dragibus from "../Assets/citrouille.jpeg"
import Schtroumpfs from "../Assets/schtroumpfs.jpg"
import Sucette from "../Assets/sucette.jpg"
import Carambar from "../Assets/carambar.png"

export class MapContainer extends Component {

  constructor(props) {
    super(props)
    
    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';

    this.state = {
      userPosition: {
        lat: '',
        lng: '',
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers:[],
    }

    this.pos = {}
    this.renderAllMarkers()
  }

  maPosition = (position) => {
    this.setState({
      userPosition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    this.props.returnUserPosition(this.state.userPosition)
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.maPosition)
    }
  }

  renderAllMarkers=()=>{
    let renderArray = []
    for(let i=0;i<this.props.giversArray.length;i++){
      renderArray.push(this.renderOneMarker(this.props.giversArray[i],i))
      // renderArray.push(this.renderOneMarker(this.props.giversArray[i]))
    }
    console.log("in map", renderArray)
    return renderArray;
    // return renderArray;
  }

  renderOneMarker=(giver,giverIndex)=>{
    let query = giver.adress.streetNumber + "+" + giver.adress.streetType + "+" + giver.adress.streetName + "&postcode=" + giver.adress.postalCode;

    fetch(this.api + query)
      .then(response => response.json())
      .then(data => {
        let fetchLocalLat = data.features[0].geometry.coordinates[1];
        let fetchLocalLong = data.features[0].geometry.coordinates[0];
        this.pos = {lat: fetchLocalLat, lng: fetchLocalLong};

        const markers = this.state.markers;
        markers[giverIndex] = this.pos;
        this.setState({markers})
        console.log(this.state.markers)
        this.props.returnCoordinates(this.state.markers)
      });
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
      if (giver.candy.crocodile) return <img src={Crocodile}></img>
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

          {this.state.markers.map(item=><Marker 
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={{
              lat: item.lat,
              lng: item.lng,
            }}
            giver = {this.props.giversArray[this.state.markers.indexOf(item)]}
          />)}

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
