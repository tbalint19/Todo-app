import React from 'react'
import Container from 'container'

class Login extends Container{

  getBack(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "start"})
  }

  changeInput(event){
    this.dispatch({type: "INPUT_FIELD_CHANGED", input: event.target.name, value: event.target.value})
  }

  login(username, password){
    let request = {method: "POST", destination: "api/login", data: {username, password}, action: {type: "LOGIN_RESPONSE"}}
    this.JSONtransfer(request)
    this.dispatch({type: "LOGIN_REQUESTED"})
  }

  render(){
    let state = this.props.state.login
    let isWaiting = this.props.state.isWaiting
    let username = this.props.data.username
    let password = this.props.data.password
    return(
      <div className={"interface"}>

      </div>
    )
  }
}

export default Login
