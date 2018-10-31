import React, { Component } from 'react';
import ProfileGiver from '../Components/ProfileGiver';
import GiverInterface from '../Components/GiverInterface';
import '../Styles/giverInterface.css';

class Giver extends Component {
  render() {
    return (
      <div className="giverInterface">
        <ProfileGiver/>
        <GiverInterface/>
      </div>
    );
  }
}

export default Giver;
