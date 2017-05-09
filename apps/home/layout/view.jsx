import React from 'react'

import ViewDependencies from 'view_dependencies'

import Background from './background/component'
import MainContainer from './main_container/component'

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
        <MainContainer data={data} state={state} controller={controller}/>

      </div>

    )

  }

}

export default View
