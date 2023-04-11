// 6. Lifecycle Clock
// - Render a component that displays a button
// - On Click, the button will mount / unmount (text should update on the button) a clock component
// - The Clock Component should "tick" every second
// - When unmounting, you must cleanup the interval to avoid a memory leak

import { Component } from "react";

import Clock from "./Clock"

export default class LifecycleClock extends Component{
  constructor(){
    super();

    this.state = {
      toggle: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() { 
    this.setState((prev) => ({toggle: !prev.toggle}))
  }
  
  render() {
    const { toggle } = this.state;

    return(

      <div>

    <h1>6. Lifecycle Clock</h1>
    
    <h1>
      {toggle && <Clock />}
    </h1>



      <button onClick={this.handleToggle}>{
        this.state.toggle ? "Hide the Clock" : "Show the Clock"
      }
      </button>

      <br />
    <hr />
      <br />
      </div>

  
    )
  }
}