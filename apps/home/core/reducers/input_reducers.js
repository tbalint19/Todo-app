export const userInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.input == "username" && action.value.length < 11){
    nextState.data.username = action.value
  }
  if (action.input == "password" && action.value.length < 11){
    nextState.data.password = action.value
  }
  nextState.state.signup.lengthError = nextState.data.username.length < 6 && nextState.data.password.length < 6
  nextState.state.signup.occupied = false
  nextState.state.login.error = false
  return nextState
}
