import { Component } from "react";

export default class FontSizerButtons extends Component{
  constructor(){
    super();

    this.state = {
      size : 12
    }

    this.handleSize = this.handleSize.bind(this)

  }

  handleSize(e) {
    this.setState({size: e.target.value})
  
  }

  render() {
    return(
    <>
    <h1>4b. Font Sizer - Slider</h1>
    
    <h2 className="sizer">
      {`${this.state.size}px`}
    </h2>

    <div>

      <input type="range" min="5" max="110" defaultValue="12" onChange={this.handleSize}/>

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