import React from 'react'
import Container from 'container'

class About extends Container{

  getBack(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "start"})
  }

  render(){
    return(
      <div className={"interface"}>
        <Title title={""}/>
        <Text text={""}/>
        <BackButton action={()=>this.getBack()}/>
      </div>
    )
  }
}

export default About

const Title = (props) => (
  <div>
    <h1>{props.title}</h1>
  </div>
)

const Text = (props) => (
  <div>
    <h1>{props.text}</h1>
  </div>
)

const BackButton = (props) => (
  <div>
    <button onClick={props.action}>Back</button>
  </div>
)
