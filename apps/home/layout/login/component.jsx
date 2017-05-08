import React from 'react'
import Container from 'container'

class Login extends Container{

  reportClick(){
    this.dispatch({type: "MODAL_OPENED", modal: "exampleModal"})
  }

  reportChange(event){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value, name: event.target.name})
  }

  render(){
    return (
      <div className={"welcome-container"}>
        <Title/>
        <Controller
          reportClick={()=>this.reportClick()}
          reportChange={(event)=>this.reportChange(event)}/>
      </div>
    )
  }

}

export default Login

const Title = (props) => (
  <h1 className={"welcome-title"}>Welcome to RoboTODO!</h1>
)

const Controller = (props) => (
  <div>
    <p>
      <input className={"user-input"} onChange={props.reportChange} name={"username"} placeholder={"username"} value={props.value}/>
    </p>
    <p><input className={"user-input"} onChange={props.reportChange} name={"password"} placeholder={"password"} value={props.value}/></p>
    <p><button className={"main-button"} onClick={props.reportClick}>Login</button></p>
    <p><button className={"main-button"} onClick={props.reportClick}>Sign up</button></p>
    <p><button className={"main-button"} onClick={props.reportClick}>Read more</button></p>
  </div>
)
