export const userInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.data.welcome = action.value.length <= 15 ? action.value : nextState.data.welcome
  return nextState
}
