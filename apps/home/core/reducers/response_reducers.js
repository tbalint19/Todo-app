export const requestedLoginReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  return nextState
}

export const loginResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let response = action.data
  nextState.state.loginSuccessful = response["authenticated"]
  return nextState
}

export const requestedSignupReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  return nextState
}

export const signupResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let response = action.data
  nextState.state.signupSuccessful = response["created"]
  return nextState
}
