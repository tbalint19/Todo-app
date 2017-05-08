import React from 'react'
import Modal from 'tb_modal'

class InfoModal extends Modal{
  content(props){
    return (
      <div>
        <CloseButton close={()=>this.close()}/>
        This is a to-do app...
      </div>
    )
  }
}

export default InfoModal

const CloseButton = (props) => (
 <button onClick={props.close} className={"tb-modal-close-button"}>x</button>
)
