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

      </div>
    )
  }
}

export default Signup
