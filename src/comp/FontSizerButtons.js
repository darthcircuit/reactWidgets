import { Component } from "react";

export default class FontSizerSlider extends Component{
  constructor(){
    super();

    this.state = {
      size : 12
    }

    this.handleMinus = this.handleMinus.bind(this)
    this.handlePlus = this.handlePlus.bind(this)

  }

  handleMinus() {
    this.setState((prev) => {
      if (this.state.size >= 10) {
        return ({size: prev.size - 5})
      } else {
        return ({size: 5})
      }

    })
  }

  handlePlus() {
    this.setState((prev) => {
      if (this.state.size <= 105) {
        return ({size: prev.size + 5})
      } else {
        return ({size: 110})
      }

    })
  }

  render() {
    return(
    <>
    <h1>4a. Font Sizer - Buttons</h1>
    <h2 className="sizer">
      {`${this.state.size}px`}
    </h2>



    <div>
      
      <button onClick={this.handleMinus}>-</button>
      <button onClick={this.handlePlus}>+</button>

    </div>
    
  <p style={{fontSize:`${this.state.size}px`}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, est id quasi repudiandae delectus expedita repellendus ut esse dolore nesciunt illum distinctio laborum quae vero dolores nam excepturi ipsa ipsum!
  </p>


      <br />
    <hr />
      <br />

  
    </>
    )
  }
}