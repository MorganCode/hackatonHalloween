import React, { Component } from 'react';
import ProfileGiver from '../Components/ProfileGiver';
import GiverInterface from '../Components/GiverInterface';

class Giver extends Component {
  render() {
    return (
      <div>
        <ProfileGiver/>
        <GiverInterface/>
      </div>
    );
  }
}

export default Giver;
