import { Component } from "react";

export default class RGBSliders extends Component{
  constructor(){
    super();

    this.state = {
      red : 123,
      green: 123,
      blue: 123
    }

    this.handleRed = this.handleRed.bind(this)
    this.handleGreen = this.handleGreen.bind(this)
    this.handleBlue = this.handleBlue.bind(this)

  }

  handleRed(e) {
    this.setState({red: e.target.value})
  
  }
  handleGreen(e) {
    this.setState({green: e.target.value})
  
  }
  handleBlue(e) {
    this.setState({blue: e.target.value})
  
  }

  render() {
    return(
    <>
    <h1>8. RGB Sliders</h1>

    <div className="box-wrapper" style={{display: "flex", justifyContent:"center", alignItems: "center"}}>

    <div className="color-box" style={{
      width:"200px",
      height:"200px",
      backgroundColor:`rgb(${this.state.red},${this.state.green},${this.state.blue})`
      
    }}/>
    </div>

    <h2 className="rgb">
      {`rgb(${this.state.red},${this.state.green},${this.state.blue})`}
    </h2>

    <div>

  <div className="sliders-wrapper" style={
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"

    }
      
      }>
    
    <div className="red">
      <div>Red</div>
      <input type="range" min="0" max="255" defaultValue="123" onChange={this.handleRed}/>
    </div>
    <div className="green">
      <div>Green</div>
      <input type="range" min="0" max="255" defaultValue="123" onChange={this.handleGreen}/>
</div>
    <div className="blue">
      <div>Blue</div>
      <input type="range" min="0" max="255" defaultValue="123" onChange={this.handleBlue}/>
</div>
  </div>
    </div>


      <br />
    <hr />
      <br />

  
    </>
    )
  }
}