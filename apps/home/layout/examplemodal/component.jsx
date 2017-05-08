import React from 'react'
import Modal from 'tb_modal'

class ExampleModal extends Modal{

  fetchFreshData(){
    let request = {
      method: "GET",
      destination: "https://api.github.com/users",
      action: {type: "GITHUB_DATA_ARRIVED"}
    }
    this.JSONtransfer(request)
    this.dispatch({type: "GITHUB_DATA_REQUESTED"})
  }

  content(props){
    let user = props.data.githubData
    let isFetchingGithub = props.state.isFetchingGithub
    let githubDataPresent = props.state.githubDataPresent
    return (
      <div>
        <CloseButton close={()=>this.close()}/>
        <div className={"content-container"}>
          {githubDataPresent ? <GithubContent user={user}/> : isFetchingGithub ? <Loading/> : <Placeholder/>}
        </div>
        <GithubButton fetchFreshData={()=>this.fetchFreshData()} disabled={isFetchingGithub}/>
      </div>
    )
  }

}

export default ExampleModal

const CloseButton = (props) => (
  <button onClick={props.close} className={"tb-modal-close-button"}>x</button>
)

const GithubContent = (props) => (
  <div>
    <img className={"modal-picture"} src={props.user.avatar_url} height={"100"} width={"100"}/>
    <p className={"modal-username"}>{props.user.login}</p>
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

const GithubButton = (props) => (
  <div className={"github-button-container"}>
    <button onClick={props.fetchFreshData} disabled={props.disabled}>
      Get fresh data from github!
    </button>
  </div>
)
