export const modalOpenReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.view.modal = action.modal
  return nextState
}

export const modalCloseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.view.modal = null
  return nextState
}
