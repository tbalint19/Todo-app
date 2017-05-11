import React from 'react'
import Container from 'container'

class Profile extends Container{

  logout(){
    let request = {method: "GET", destination: "api/logout", action: {type: "LOGOUT_RESPONSE"}}
    this.JSONtransfer(request)
    this.dispatch({type: "LOGOUT_REQUESTED"})
  }

  componentDidMount(){
    
  }

  render(){
    let logoutCompleted = this.props.state.logoutCompleted
    return (
      <div>
        {logoutCompleted && location.reload()}
        <button onClick={()=>this.logout()}>Logout</button>
      </div>
    )
  }
}

export default Profile
