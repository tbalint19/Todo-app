export const requestedLoginReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.isWaiting = true
  return nextState
}

export const loginResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let response = action.data
  nextState.state.isWaiting = false
  nextState.state.login.successfulLogin = response.data.authenticated
  nextState.state.login.error = !response.data.authenticated
  return nextState
}

export const requestedSignupReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.isWaiting = true
  return nextState
}

export const signupResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let response = action.data
  nextState.state.isWaiting = false
  nextState.state.signup.successfulSignup = response.data.created
  nextState.state.signup.occupiedError = !response.data.created
  nextState.state.interface = response.data.created ? "login" : "signup"
  return nextState
}
