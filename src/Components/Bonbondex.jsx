import React, { Component } from 'react';
import '../Styles/bonbondex.css';
import { Container, Row, Col } from 'reactstrap';
import bonObon from '../Assets/bonObon.jpg';
import carambar from '../Assets/carambar.png';
import croco from '../Assets/croco.jpg';
import schtroumpfs from '../Assets/schtroumpfs.jpg';
import sucette from '../Assets/sucette.jpg';
import tetesbrulees from '../Assets/tetesbrulees.png';

class Bonbondex extends Component {

  constructor(props) {
    super(props);
    this.api = 'https://api-adresse.data.gouv.fr/search/?q=';
    this.state = {
      bonObon: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${bonObon})`,
          top: window.innerHeight - 310,
        }
      },
      carambar: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${carambar})`,
          top: window.innerHeight - 310,
        }
      },
      crocodile: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${croco})`,
          top: window.innerHeight - 310,
        }
      },
      schtroumpfs: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${schtroumpfs})`,
          top: window.innerHeight - 310,
        }
      },
      sucette: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${sucette})`,
          top: window.innerHeight - 310,
        }
      },
      tetesbrulees: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${tetesbrulees})`,
          top: window.innerHeight - 310,
        }
      },

      localmarker: [],

    }
  }

  clickCandy = (selection) => {
    if (this.state[selection].selected === false && this.checkDistance(selection)) {
      this.setState({
        [selection]:
        {
          selected: !this.state[selection].selected,
          style: {
            ...this.state[selection].style,
            opacity: "1"
          }
        }
      })
    }
    else {
      this.setState({
        [selection]:
        {
          selected: !this.state[selection].selected,
          style: {
            ...this.state[selection].style,
            opacity: "0.7"
          }
        },
      })
    }
  }

  checkDistance = (selection) => {
    // console.log("in bonbondex", this.props.giverCoordinates)
    // console.log("in bonbondex", this.props.receiverCoordinates)
    for (let i = 0; i < this.props.giversArray.length; i++) {

        console.log("distance", this.calculateDistance(this.props.receiverCoordinates, this.props.giverCoordinates[i]))
        console.log("hasCandy", this.props.giversArray[i].candy[selection])
        console.log("isAvailable", this.props.giversArray[i].available)

        if (this.calculateDistance(this.props.receiverCoordinates, this.props.giverCoordinates[i]) < 50 && this.props.giversArray[i].candy[selection] && this.props.giversArray[i].available) {
          return true
        }
      
    }
    return false
  }

  calculateDistance = (localuser, localhouse) => {

    // console.log("this.state.userPosition", this.state.userPosition)
    // console.log("localuser",localuser)
    // console.log("localhouse", localhouse)

    const R = 6371e3; // metres
    const φ1 = (localuser.lat) * (Math.PI / 180);
    const φ2 = (localhouse.lat) * (Math.PI / 180);
    //console.log("in calculate : "+this.getCoordinates(house))
    const Δφ = Math.abs(localhouse.lat - localuser.lat) * (Math.PI / 180);
    const Δλ = Math.abs(localhouse.lng - localuser.lng) * (Math.PI / 180);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    console.log("in calculate distance", R*c)
    return R * c;
  }

  maPosition = (position) => {
    this.setState({
      userPosition: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(this.maPosition)
    }
  }

  render() {
    return (
      <div>

        <Container className="container">
          <hr className="hr" />
          <Row>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("bonObon")} className="candy position1" style={this.state.bonObon.style}></div></Col>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("carambar")} className="candy position2" style={this.state.carambar.style}></div></Col>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("crocodile")} className="candy position3" style={this.state.crocodile.style}></div></Col>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("schtroumpfs")} className="candy position4" style={this.state.schtroumpfs.style}></div></Col>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("sucette")} className="candy position5" style={this.state.sucette.style}></div></Col>
            <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("tetesbrulees")} className="candy position6" style={this.state.tetesbrulees.style}></div></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Bonbondex;