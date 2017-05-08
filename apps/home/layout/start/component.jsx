import React from 'react'
import Container from 'container'

class Start extends Container{

  getLogin(){
    this.dispatch({type: "MODAL_OPENED", modal: "loginModal"})
  }

  getSignup(){
    this.dispatch({type: "MODAL_OPENED", modal: "signupModal"})
  }

  getInfo(){
    this.dispatch({type: "MODAL_OPENED", modal: "infoModal"})
  }

  render(){
    return (
      <div className={"welcome-container"}>
        <Title/>
        <Intro/>
        <Controller
          getLogin={()=>this.getLogin()}
          getSignup={()=>this.getSignup()}
          getInfo={()=>this.getInfo()}/>
      </div>
    )
  }

}

export default Start

const Title = (props) => (
  <h1 className={"welcome-title"}>Welcome to RoboTODO!</h1>
)

const Intro = (props) => (
  <p className={"welcome-intro"}>The most simple to-do app ever.</p>
)

const Controller = (props) => (
  <div>
    <p>
      <button className={"login-button"} onClick={props.getLogin}>Login</button>
      <button className={"signup-button"} onClick={props.getSignup}>Sign up</button>
    </p>
    <p><button className={"read-button"} onClick={props.getInfo}>Read more</button></p>
  </div>
)
