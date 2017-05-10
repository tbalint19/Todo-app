import React from 'react'
import Container from 'container'

class About extends Container{

  getBack(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "start"})
  }

  render(){
    return(
      <div className={"interface"}>

      </div>
    )
  }
}

export default About
