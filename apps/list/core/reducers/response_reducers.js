export const requestedLogoutReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.isWaiting = true
  return nextState
}

export const logoutResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.logoutCompleted = true
  return nextState
}

export const requestedUserDataReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.isWaiting = true
  return nextState
}

export const userDataResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let response = action.data
  nextState.data.user.name = response.data.username
  nextState.data.user.avatar = response.data.avatar
  return nextState
}
