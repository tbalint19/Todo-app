export const requestedGithubDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.githubDataPresent = false
  nextState.state.isFetchingGithub = true
  return nextState
}

export const arrivedGithubDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.githubDataPresent = true
  nextState.state.isFetchingGithub = false
  let random = Math.floor(Math.random() * 10)
  let user = action.data[random]
  nextState.data.githubData.login = user.login
  nextState.data.githubData.avatar_url = user.avatar_url
  return nextState
}
