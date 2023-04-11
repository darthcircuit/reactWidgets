// 1. Counter
//   - Render a count value to the dom
//   - Render two buttons, "add" and a "subtract"
//   - The buttons will effectively add or subtract from the count, and render the new value on the dom. 
//   *Don't let the count go below zero.

import { Component } from "react";

export default class Counter extends Component{
  constructor(){
    super();

    this.state = {
      count : 0
    }

    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)

  }

  handleMinus() {

    this.setState((prev) => {
      if (this.state.count > 0) {
        return ({count: prev.count - 1})
      }

    })
  }

  

  handlePlus() {
    this.setState((prev) => ({count: prev.count + 1}))
  }

  render() {
    return(
    <>
    <h1>1. Counter</h1>
    
    <h2 className="counter-wrapper">
      {this.state.count}
    </h2>

    <div className="button-wrapper">

      <button onClick={this.handleMinus}>-</button>
      <button onClick={this.handlePlus}>+</button>

    </div>

      <br />
    <hr />
      <br />

  
    </>
    )
  }
}