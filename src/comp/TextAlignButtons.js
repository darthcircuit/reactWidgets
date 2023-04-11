import { Component } from "react";

export default class TextAlignButtons extends Component{
  constructor(){
    super();

    this.state = {
      alignment : "center"
    }

    this.handleLeft = this.handleLeft.bind(this)
    this.handleCenter = this.handleCenter.bind(this)
    this.handleRight = this.handleRight.bind(this)

  }

  handleLeft() {
    this.setState((prev) => ({alignment: "left"}))
  }
  handleCenter() {
    this.setState((prev) => ({alignment: "center"}))
  }
  handleRight() {
    this.setState((prev) => ({alignment: "right"}))
  }

  render() {
    return(
    <>
    <h1>5. Text Alignment</h1>
    
  <p style={{textAlign:`${this.state.alignment}`}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, est id quasi repudiandae delectus expedita repellendus ut esse dolore nesciunt illum distinctio laborum quae vero dolores nam excepturi ipsa ipsum!
  </p>

    <h2 className="align">
      {`${this.state.alignment}`}
    </h2>



    <div>
      
      <button onClick={this.handleLeft}>Left</button>
      <button onClick={this.handleCenter}>Center</button>
      <button onClick={this.handleRight}>Right</button>

    </div>

      <br />
    <hr />
      <br />

  
    </>
    )
  }
}