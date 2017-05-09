export const mainChangeReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.interface = action.interface
  nextState.data.username = ""
  nextState.data.password = ""
  return nextState
}
