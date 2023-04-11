import { Component } from "react";


export default class Clock extends Component {

  constructor() {
    super();

    this.state = {
      formattedTime: this.formatTime()
    }
    
  }

  componentDidMount() {
    this.updateInterval = (setInterval(() => {
          this.setState((prev) => ({
            formattedTime: this.formatTime()
          }))
        },1000)   
          
        )
      console.log("Mounting Clock")
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval)
    console.log("Unmounting Clock")

  }

  formatTime() {
    const currentTime = new Date(Date.now())
    return `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
  }


  render() {
    return (
      <>
      {this.state.formattedTime}
      </>
      )
    }
  }