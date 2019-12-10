import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  chilidChangeColor =() => {
    this.props.colorFun(getRandomColor())
  }
  render() {
    console.log(this.props)
    return (
      // other way to do it 
      // <div onClick ={()=> this.props.colorFun(getRandomColor())}
      <div onClick ={this.chilidChangeColor}
        className="child"
        style={{backgroundColor: this.props.childColor}}
      ></div>
    )
  }
}

export default Child
