import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import "../Styles/homepage.css"

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      giver: false,
    };
  }

  isGiver = (e) => {
    this.props.history.push("/giver")
    this.setState({ giver: true })
  }

  render() {
    return (
      <div className="homepage">
        <div>
          <h1>Chass'O Bonbons</h1>
        </div>
        <div>
          <p><strong>Vous êtes un enfant ? Vous cherchez des bonbons ?</strong> On vous donne une carte au trésor pour les récupérer à coup sûr !</p>
          <NavLink to="./receiver" className="btn">Je cherche des bonbons</NavLink>
        </div>
        <div>
          <p>Vous êtes un adulte ? Venez renseigner votre disponibilité et vos bonbons afin d'accueillir les monstres du quartier !</p>
          <NavLink onClick={this.isGiver} to="./giver" className="btn">Je donne des bonbons</NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);
