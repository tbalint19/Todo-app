import React from 'react'
import Modal from 'tb_modal'

class SignupModal extends Modal{

  fetchFreshData(){
    let request = {
      method: "GET",
      destination: "https://api.github.com/users",
      action: {type: "GITHUB_DATA_ARRIVED"}
    }
    this.JSONtransfer(request)
    this.dispatch({type: "GITHUB_DATA_REQUESTED"})
  }

  content(props){
    return (
      <div>
        <CloseButton close={()=>this.close()}/>
      </div>
    )
  }

}

export default SignupModal

const CloseButton = (props) => (
  <button onClick={props.close} className={"tb-modal-close-button"}>x</button>
)

const Loading = () => (
  <div className={"modal-sign loading-sign"}>
    <i className="material-icons md-120">cloud_download</i>
  </div>
)

const Placeholder = () => (
  <div className={"modal-sign"}>
    <i className="material-icons md-120">info</i>
    <p>No data downloaded</p>
  </div>
)
