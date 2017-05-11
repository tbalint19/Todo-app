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
