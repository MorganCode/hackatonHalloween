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
      tetesbrulees: {
        selected: false,
        style: {
          opacity: "0.7",
          backgroundImage: `url(${tetesbrulees})`,
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
      <hr className="hr"/>
        <Row>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("bonObon")} className="candy position1" style={this.state.bonObon.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("carambar")} className="candy position2" style={this.state.carambar.style}></div></Col>
          <Col xs="3" md={{ size: 1, offset: 1 }}><div onClick={() => this.clickCandy("croco")} className="candy position3" style={this.state.croco.style}></div></Col>
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