export const userInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.input == "username"){
    nextState.data.username = action.value.length < 11 ? action.value : nextState.data.username
  }
  if (action.input == "password"){
    nextState.data.password = action.value.length < 11 ? action.value : nextState.data.password
  }
  nextState.state.signup.lengthError = nextState.data.username.length < 6 || nextState.data.password.length < 6
  nextState.state.signup.occupiedError = false
  nextState.state.login.error = false
  return nextState
}
