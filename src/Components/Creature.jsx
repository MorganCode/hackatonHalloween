import React, { Component } from 'react';
import '../Styles/creature.css';

 class Creature extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className='creature' src='http://image.noelshack.com/fichiers/2018/44/2/1540940307-creature.png' />
      </div>
    )
  }
}

export default Creature;