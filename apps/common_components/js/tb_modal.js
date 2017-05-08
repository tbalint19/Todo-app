import React from 'react'
import Container from 'container'

class Modal extends Container{
  constructor(props){
    super(props)
  }
  content(){
    return(
      <div>
        Empty modal
      </div>
    )
  }
  setStyle(){
    return {
      width: "40%",
      left: "30%",
      top: "10vh"
    }
  }
  componentWillMount(){
    this.modalContent = this.content(this.props)
  }
  componentDidMount(){
    this.modal = document.getElementById("tb-modal")
    this.background = document.getElementById("tb-modal-background")
  }
  componentWillReceiveProps(nextProps){
    this.modalContent = this.content(nextProps)
  }
  close(){
    this.modal.classList.add('tb-modal-leave')
    this.background.classList.add('tb-modal-background-leave')
    setTimeout(() => {this.dispatch({type: "MODAL_CLOSED"})}, 500)
  }
  render(){
    return(
      <div>
        <div id={"tb-modal"} className={"tb-modal"} style={this.setStyle()}>
          <div
            id={"tb-modal-content-container"}
            className={"tb-modal-content-container"}>
            {this.modalContent}
          </div>
        </div>
        <div id={"tb-modal-background"} className={"tb-modal-background"}></div>
      </div>
    )
  }
}

export default Modal
