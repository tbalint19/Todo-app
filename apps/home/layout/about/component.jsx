import React from 'react'
import Container from 'container'

class About extends Container{

  getBack(){
    this.dispatch({type: "INTERFACE_CHANGE", interface: "start"})
  }

  render(){
    return(
      <div className={"interface"}>
        <Title title={"About"}/>
        <Text text={"This is a to-do app..."}/>
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
    <p>{props.text}</p>
  </div>
)

const BackButton = (props) => (
  <div>
    <button onClick={props.action}>Back</button>
  </div>
)
