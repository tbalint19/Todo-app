import React from 'react'
import Container from 'container'

class Start extends Container{

  getLogin(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "login"})
  }

  getSignup(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "signup"})
  }

  getInfo(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "info"})
  }

  render(){
    return(
      <div className={"interface"}>

      </div>
    )
  }
}

export default Start
