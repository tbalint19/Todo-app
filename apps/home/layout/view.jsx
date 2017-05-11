import React from 'react'

import ViewDependencies from 'view_dependencies'

import Background from './background/component'
import Start from './start/component'
import Signup from './signup/component'
import Login from './login/component'
import About from './about/component'

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
        <div className={"main-container"}>
          {state.interface == "start" && <Start data={data} state={state} controller={controller}/>}
          {state.interface == "signup" && <Signup data={data} state={state} controller={controller}/>}
          {state.interface == "login" && <Login data={data} state={state} controller={controller}/>}
          {state.interface == "about" && <About data={data} state={state} controller={controller}/>}
        </div>

      </div>

    )

  }

}

export default View
