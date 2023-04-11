// 1. Counter
//   - Render a count value to the dom
//   - Render two buttons, "add" and a "subtract"
//   - The buttons will effectively add or subtract from the count, and render the new value on the dom. 
//   *Don't let the count go below zero.

import { Component } from "react";

import ShowHideText from "./ShowHideText";
export default class ShowHide extends Component{
  constructor(){
    super();

    this.state = {
      toggled : false
    }

    this.handleToggle = this.handleToggle.bind(this)

  }

  handleToggle() { 
    this.setState((prev) => ({toggled: !prev.toggled}))

  }


  render() {
    return(
    <>
    <h1>3. Show / Hide Toggle</h1>
    
    <div className="text-wrapper">
      { this.state.toggled? '' : <ShowHideText /> }
    </div>

    <div className="button-wrapper">

      <button onClick={this.handleToggle}>{
      
        this.state.toggled? "Show the Text" : "Hide the Text" 
      
      }</button>


    </div>

      <br />
    <hr />
      <br />

  
    </>
    )
  }
}