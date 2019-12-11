import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: '#FFF'
    }
  }

  changeColor = (newColor) =>{
    this.setState({
      color: getRandomColor(),
      childColor: newColor
    })
  }



  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child func={this.changeColor} color={this.state.childColor}/>
        <Child func={this.changeColor} color={this.state.childColor}/>
      </div>
    )
  }
}

export default Parent
