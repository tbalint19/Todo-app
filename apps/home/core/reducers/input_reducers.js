export const userInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (action.input == "username" && action.value.length < 11){
    nextState.data.username = action.value
  }
  if (action.input == "password" && action.value.length < 11){
    nextState.data.password = action.value
  }
  return nextState
}
