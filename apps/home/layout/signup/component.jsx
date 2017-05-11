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
        <Title title={""}/>
        <Message
          lengthError={state.lengthError}
          occupiedError={state.occupiedError}
          success={state.successfulSignup}
          isWaiting={isWaiting}/>
        <InputFields username={username} password={password} action={()=>this.changeInput()}/>
        <Buttons back={()=>this.getBack()} login={()=>this.login()}/>
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
  <div>
    <p>{props.lengthError && <Err message={""}/>}</p>
    <p>{props.occupiedError && <Err message={""}/>}</p>
    <p>{props.success && <Success message={""}/>}</p>
    <p>{props.isWaiting && <Loading message={""}/>}</p>
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
    <p><input onChange={props.action} name={"username"} placeholder={"username"}/></p>
    <p><input onChange={props.action} name={"password"} placeholder={"password"}/></p>
  </div>
)

const Buttons = (props) => (
  <div>
    <button onClick={props.back}>Back</button>
    <button onClick={props.signup}>Sign up</button>
  </div>
)
