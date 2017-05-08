import React from 'react'

import ViewDependencies from 'view_dependencies'

import HelloWorld from './helloworld/component'
import ExampleModal from './examplemodal/component'

class View extends React.Component{

  render(){
    let data = this.props.model.data
    let state = this.props.model.state
    let controller = this.props.controller
    return(

      <div className={"app-container"}>

        {/* For development only! */}
        <ViewDependencies/>

        {/* Middle */}
        <HelloWorld data={data} state={state} controller={controller}/>

        {/* Modals */}
        {state.view.modal == "exampleModal" && <ExampleModal data={data} state={state} controller={controller}/>}

      </div>

    )

  }

}

export default View
