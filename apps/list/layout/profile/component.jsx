import React from 'react'
import Container from 'container'

class Profile extends Container{

  logout(){
    let request = {method: "GET", destination: "api/logout", action: {type: "LOGOUT_RESPONSE"}}
    this.JSONtransfer(request)
    this.dispatch({type: "LOGOUT_REQUESTED"})
  }

  componentDidMount(){
    let request = {method: "GET", destination: "api/user_data", action: {type: "USER_DATA_ARRIVED"}}
    this.JSONtransfer(request)
    this.dispatch({type: "USER_DATA_REQUESTED"})
  }

  render(){
    let logoutCompleted = this.props.state.logoutCompleted
    let name = this.props.data.user.name
    let avatar = this.props.data.user.avatar
    return (
      <div className={"profile-container"}>
        <div className={"user-data-container"}>
          <img src={avatar}/>
          <p>{name}</p>
        </div>
        {logoutCompleted && location.reload()}
        <button onClick={()=>this.logout()}>Logout</button>
      </div>
    )
  }
}

export default Profile
