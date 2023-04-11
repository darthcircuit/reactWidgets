import { Component } from "react";

export default class ColorChanger extends Component{
  constructor(){
    super();

    this.state = {
      color: "black",
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);


  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleButton() {
    this.setState(() => ({
      color: this.state.value,
      value: ""
    }))
  }


  render() {
    return(
    <>
    <h1>7. Color Changer</h1>

    <h2 className="color" style={{color:this.state.color}}>
      {`${this.state.color}`}
    </h2>

    <div>
      <input value={this.state.value} onChange={this.handleChange}></input>
      <button type="submit" onClick={this.handleButton}>Submit</button>
    </div>

      <br />
    <hr />
      <br />

  
    </>
    )
  }
}