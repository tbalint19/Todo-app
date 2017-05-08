import React from 'react'
import Container from 'container'

class HelloWorld extends Container{

  reportClick(){
    this.dispatch({type: "MODAL_OPENED", modal: "exampleModal"})
  }

  reportChange(event){
    this.dispatch({type: "INPUT_FIELD_CHANGED", value: event.target.value})
  }

  render(){
    let value = this.props.data.welcome
    return (
      <div className={"welcome-container"}>
        <Title
          value={value}/>
        <Controller
          value={value}
          reportClick={()=>this.reportClick()}
          reportChange={(event)=>this.reportChange(event)}/>
      </div>
    )
  }

}

export default HelloWorld

const Title = (props) => (
  <h1 className={"welcome-title"}>Hello {props.value}!</h1>
)

const Controller = (props) => (
  <div>
    <p><input className={"welcome-input"} onChange={props.reportChange} value={props.value}/></p>
    <p><button className={"welcome-button"} onClick={props.reportClick}>Open modal</button></p>
  </div>
)
