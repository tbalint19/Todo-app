import React from 'react'
import Container from 'container'

class Start extends Container{

  getLogin(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "login"})
  }

  getSignup(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "signup"})
  }

  getAbout(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "about"})
  }

  render(){
    return(
      <div className={"interface"}>
        <Title title={"Welcome to RoboTODO!"}/>
        <Text text={"The is the most simple to-do app ever"}/>
        <Buttons signup={()=>this.getSignup()} login={()=>this.getLogin()} about={()=>this.getAbout()}/>
      </div>
    )
  }
}

export default Start

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
)

const Text = (props) => (
  <div>
    <p>{props.text}</p>
  </div>
)

const Buttons = (props) => (
  <div>
    <div>
      <button onClick={props.signup}>Signup</button>
      <button onClick={props.login}>Login</button>
    </div>
    <div>
      <button onClick={props.about}>Read more</button>
    </div>
  </div>
)
