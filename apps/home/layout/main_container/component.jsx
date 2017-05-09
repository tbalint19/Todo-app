import React from 'react'
import Container from 'container'

class MainContainer extends Container{

  getLogin(){
    this.dispatch({type: "MAIN_CHANGE", interface: "login"})
  }

  getSignup(){
    this.dispatch({type: "MAIN_CHANGE", interface: "signup"})
  }

  getInfo(){
    this.dispatch({type: "MAIN_CHANGE", interface: "info"})
  }

  getBack(){
    this.dispatch({type: "MAIN_CHANGE", interface: "start"})
  }

  changeInput(event){
    this.dispatch({type: "INPUT_FIELD_CHANGED", input: event.target.name, value: event.target.value})
  }

  login(){

  }

  signup(){

  }

  render(){
    let iface = this.props.state.interface
    let username = this.props.data.username
    let password = this.props.data.password
    return (
      <div className={"main-container"}>
        {iface == "start" && <div className={"interface"} key={iface}>
          <Title text={"Welcome to RoboTODO!"}/>
          <Intro text={"The most simple to-do app ever."}/>
          <Controller getLogin={()=> this.getLogin()} getSignup={()=> this.getSignup()} getInfo={()=> this.getInfo()}/>
        </div>}
        {(iface == "login" || iface == "signup") && <div className={"interface"} key={iface}>
          <Title text={iface == "login" ? "Login" : "Sign up"}/>
          <InputField action={(event)=>this.changeInput(event)} username={username} password={password}/>
          <InputController
            getBack={()=>this.getBack()}
            action={iface == "login" ? ()=> this.login() : ()=> this.signup()}
            name={iface == "login" ? "Login" : "Sign up"}/>
        </div>}
        {iface == "info" && <div className={"interface"} key={iface}>
          <Title text={"About"}/>
          <Intro text={"This is a to-do app..."}/>
          <InputController getBack={()=> this.getBack()}/>
        </div>}
      </div>
    )
  }

}

export default MainContainer

const Title = (props) => (
  <h3 className={"welcome-title"}>{props.text}</h3>
)

const Intro = (props) => (
  <p className={"welcome-intro"}>{props.text}</p>
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

const InputField = (props) => (
  <p>
    <input onChange={props.action} name={"username"} value={props.username} placeholder={"username"}/>
    <input onChange={props.action} name={"password"} value={props.password} placeholder={"password"}/>
  </p>
)

const InputController = (props) => (
  <p>
    <button className={"back-button"} onClick={props.getBack}>Back</button>
    {props.action && <button className={"action-button"} onClick={props.action}>{props.name}</button>}
  </p>
)
