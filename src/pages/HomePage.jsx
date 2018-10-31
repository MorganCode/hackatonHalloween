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
          <h1 className='title'>Candy Hunter's</h1>
          <p className='textHome'><strong>Vous êtes un enfant ? Vous cherchez des bonbons ?</strong> On vous donne une carte au trésor pour les récupérer à coup sûr !</p>
          <NavLink to="./receiver" className="button">Je cherche des bonbons</NavLink>
          <p className='textHome'><strong>Vous êtes un adulte ?</strong> Venez renseigner votre disponibilité et vos bonbons afin d'accueillir les monstres du quartier !</p>
          <NavLink onClick={this.isGiver} to="./giver" className="button">Je donne des bonbons</NavLink>
        
      </div>
    );
  }
}

export default withRouter(HomePage);
