import React from 'react'
import Modal from 'tb_modal'

class LoginModal extends Modal{

  content(props){
    return (
      <div>
        <CloseButton close={()=>this.close()}/>
        <InputField name={"username"}/>
        <InputField name={"password"}/>
        <LoginButton/>
      </div>
    )
  }

}

export default LoginModal

const CloseButton = (props) => (
  <button onClick={props.close} className={"tb-modal-close-button"}>x</button>
)

const InputField = (props) => (
  <div>
    <input onChange={props.reportChange} name={props.name} placeholder={props.placeholder}/>
  </div>
)

const LoginButton = (props) => (
  <div>
    <button>
      Login
    </button>
  </div>
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
