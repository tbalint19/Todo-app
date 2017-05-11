import React from 'react'
import Container from 'container'

class Signup extends Container{

  getBack(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "start"})
  }

  changeInput(event){
    this.dispatch({type: "INPUT_FIELD_CHANGED", input: event.target.name, value: event.target.value})
  }

  signup(username, password){
    let request = {method: "POST", destination: "api/signup", data: {username, password}, action: {type: "SIGNUP_RESPONSE"}}
    this.JSONtransfer(request)
    this.dispatch({type: "SIGNUP_REQUESTED"})
  }

  render(){
    let state = this.props.state.signup
    let isWaiting = this.props.state.isWaiting
    let username = this.props.data.username
    let password = this.props.data.password
    return(
      <div className={"interface"}>
        <Title title={"Signup"}/>
        <Message
          lengthError={state.lengthError}
          occupiedError={state.occupiedError}
          isWaiting={isWaiting}/>
        <InputFields username={username} password={password} action={(event)=>this.changeInput(event)}/>
        <Buttons back={()=>this.getBack()} signup={()=>this.signup(username, password)} lengthError={state.lengthError}/>
      </div>
    )
  }
}

export default Signup

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
)

const Message = (props) => (
  <div className={"message-body"}>
    <p>{props.lengthError && <Err message={"Min 6 characters!"}/>}</p>
    <p>{props.occupiedError && <Err message={"Already occupied"}/>}</p>
    <p>{props.isWaiting && <Loading message={"Please wait..."}/>}</p>
  </div>
)

const Err = (props) => (
  <span>{props.message}</span>
)

const Success = (props) => (
  <span>{props.message}</span>
)

const Loading = (props) => (
  <span>{props.message}</span>
)

const InputFields = (props) => (
  <div>
    <p><input onChange={props.action} name={"username"} placeholder={"username"} value={props.username}/></p>
    <p><input onChange={props.action} name={"password"} placeholder={"password"} value={props.password} type={"password"}/></p>
  </div>
)

const Buttons = (props) => (
  <div>
    <button onClick={props.back}>Back</button>
    <button onClick={props.signup} disabled={props.lengthError}>Sign up</button>
  </div>
)
