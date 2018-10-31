import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../Styles/Map.css'

export class MapContainer extends Component {

  constructor(props){
    super(props)
    
    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';
    
    this.state={
      userPosition:{
        lat:'',
        lng:'',
      }
    }

    this.pos={}
    this.renderProut=[]
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

  renderAllMarkers=()=>{
    let renderArray = []
    for(let i=0;i<3;i++){
      // console.log(this.props.giversArray[i].firstName)
      renderArray.push(this.renderOneMarker(this.props.giversArray[i]))
      // renderArray.push(this.renderOneMarker(this.props.giversArray[i]))
    }
    console.log(renderArray)
    return renderArray;
    // return renderArray;
  }

  renderOneMarker=(giver)=>{
    // console.log(giver)
    let query = giver.adress.streetNumber + "+" + giver.adress.streetType + "+" + giver.adress.streetName + "&postcode=" + giver.adress.postalCode;

    fetch(this.api + query)
      .then(response => response.json())
      .then(data => {
        let fetchLocalLat = data.features[0].geometry.coordinates[1];
        let fetchLocalLong = data.features[0].geometry.coordinates[0];
        this.pos = {lat: fetchLocalLat, lng: fetchLocalLong};
        console.log(this.pos)
        // return this.pos
      });

    if(giver.hasCandy && giver.available){
      return (<Marker 
        onClick={this.onMarkerClick}
        name={'Current location'}
        position={this.pos}
      />)
    }
    return
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

          {/* {this.renderAllMarkers().map((position, index) => (<Marker 
            onClick={this.onMarkerClick}
            name={'Current location'}
            position={position}
            key={index}
          />))} */}
          {this.renderOneMarker(this.props.giversArray[0])}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCKY5OS2THy-jXyAZL-BDlnyQCP8DJt1sw")
})(MapContainer)
