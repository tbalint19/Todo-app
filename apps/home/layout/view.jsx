import React from 'react'

import ViewDependencies from 'view_dependencies'

import Background from './background/component'
import Start from './start/component'
import SignupModal from './signupmodal/component'
import LoginModal from './loginmodal/component'
import InfoModal from './infomodal/component'

class View extends React.Component{

  render(){
    let data = this.props.model.data
    let state = this.props.model.state
    let controller = this.props.controller
    return(

      <div className={"app-container"}>

        {/* For development only! */}
        <ViewDependencies/>

        <Background/>

        {/* Middle */}
        <Start data={data} state={state} controller={controller}/>

        {/* Modals */}
        {state.view.modal == "signupModal" && <SignupModal data={data} state={state} controller={controller}/>}

        {state.view.modal == "loginModal" && <LoginModal data={data} state={state} controller={controller}/>}

        {state.view.modal == "infoModal" && <InfoModal data={data} state={state} controller={controller}/>}

      </div>

    )

  }

}

export default View
