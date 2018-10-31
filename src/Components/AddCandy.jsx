import React, { Component } from 'react';
import '../Styles/addCandy.css'
import { Button } from 'reactstrap';

class AddCandy extends Component {
  constructor(props) {
    super(props)
    this.state = {
      giverInventary: [],
      selectedCandy: ""
    }
  };

  updateSelectedCandy = (e) => {
    this.setState({
      selectedCandy: e.target.value,

    })
  }

  handleAddClick = () => {
    let giverInventaryTmp = this.state.giverInventary

    if (this.state.selectedCandy.length !== 0) {
      giverInventaryTmp.push(this.state.selectedCandy) 
    }
     

    this.setState({
      giverInventary: giverInventaryTmp
    })
  }

  handleDelClick = (i) => {
    let giverInventaryTmp = this.state.giverInventary
    giverInventaryTmp.splice(i, 1)

    this.setState({
      giverInventary: giverInventaryTmp
    })
  }

  renderCandyTable() {
    let render = []

    for (let i = 0; i < this.state.giverInventary.length; i++) {
      render.push(
        <div className="fckCandyTable">
          <tr>
            <td>{this.state.giverInventary[i]}</td>
          </tr>
          <Button color="warning" onClick={() => this.handleDelClick(i)}>X</Button>
        </div>
      )
    }
    return render
  }


  render() {
    return (
      <div className="candySelect">
        <select onChange={this.updateSelectedCandy}>
        <option selected disabled>Choisissez vos bonbons</option>
          <option value="Dragibus">Dragibus</option>
          <option value="Coca">Coca</option>
          <option value="Schtroumpfs">Schtroumpfs</option>
          <option value="Croco">Croco</option>
          <option value="Carambar">Carambar</option>
          <option value="Sucette">Sucette</option>
        </select>
        <Button color="warning" onClick={this.handleAddClick} >Ajoutez</Button>
        <div>
          {this.renderCandyTable()}
        </div>

      </div>
    )
  }
}

export default AddCandy;