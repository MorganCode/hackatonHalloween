import React, { Component } from 'react';
import '../Styles/addCandy.css'


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
    giverInventaryTmp.push(this.state.selectedCandy)

    this.setState({
      giverInventary: giverInventaryTmp
    })
    // this.renderCandyTable();
  }

  handleDelClick = (i)  => {
    let giverInventaryTmp = this.state.giverInventary
    giverInventaryTmp.splice(i,1)

    this.setState({
      giverInventary: giverInventaryTmp
    })
  }

  renderCandyTable() {
    let render = []
    console.log(render)
    
    for (let i = 0; i < this.state.giverInventary.length; i++) {
      render.push(
        <tr>
          <td>{this.state.giverInventary[i]}</td>
          <td onClick={()=>this.handleDelClick(i)}>Supprimer</td>
        </tr>
        )
    } 

    
    console.log(render)
    return render
  }
  

  render() {
    console.log(this.renderCandyTable())
    return (
      <div>
        <select onChange={this.updateSelectedCandy}>
          <option value="dragidus">Dragidus</option>
          <option value="fraises-tagada">Fraises tagada</option>
          <option value="schtroumpfs">Schtroumpfs</option>
          <option value="croco">Croco</option>
        </select>
        <button type="button" onClick={this.handleAddClick}>Ajoutez</button>

        <div className="candyTable">
          {this.renderCandyTable()}
        </div>

      </div>
    )
  }
}

export default AddCandy;