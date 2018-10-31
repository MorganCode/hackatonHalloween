import React, { Component } from 'react';
import '../Styles/bonbondex.css';
import { Container, Row, Col } from 'reactstrap';
import coca from '../Assets/coca.jpg';
import carambar from '../Assets/carambar.jpg';
import croco from '../Assets/croco.jpg';
import schtroumpfs from '../Assets/schtroumpfs.jpg';
import sucette from '../Assets/sucette.jpg';
import dragibus from '../Assets/dragibus.jpg';

class Bonbondex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coca: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${coca})`,
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
      croco: {
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
      dragibus: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${dragibus})`,
          top: window.innerHeight - 310,
        }
      },
    }
  }

  clickCandy = (selection) => {
    if (this.state[selection].selected === false) {
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
        }
      })
    }
  }


  render() {
    return (
      <div>
        
      <Container className="container">
      
        <Row className="container1">
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("coca")} className="candy position1" style={this.state.coca.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("carambar")} className="candy position2" style={this.state.carambar.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("croco")} className="candy position3" style={this.state.croco.style}></div></Col>
        </Row>
        <Row className="container2">
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("schtroumpfs")} className="candy position4" style={this.state.schtroumpfs.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("sucette")} className="candy position5" style={this.state.sucette.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("dragibus")} className="candy position6" style={this.state.dragibus.style}></div></Col>
        </Row>
        

      </Container>
      </div>
    )
  }
}

export default Bonbondex;