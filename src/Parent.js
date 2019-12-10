import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     color: getRandomColor(),
  //     childrenColor: '#FFF'
  //   }
  // }
  state ={
    color: getRandomColor(),
    childrenColor: '#FFF'
  }
  
  changeColor = (arg) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: arg
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child childColor= {this.state.childrenColor} colorFun = {this.changeColor} />
        <Child childColor= {this.state.childrenColor} colorFun = {this.changeColor}/>
      </div>
    )
  }
}

export default Parent
