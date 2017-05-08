import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './state_tree'

import {
  requestedGithubDataReducer,
  arrivedGithubDataReducer
} from './reducers/response_reducers'

import {
  modalOpenReducer,
  modalCloseReducer
} from './reducers/select_reducers'

import {
  userInputReducer
} from './reducers/input_reducers'

const core = (() => {

  const initialState = stateTree

  const reducer = (state = initialState, action) => {
    let current = state
    let nextState
    switch (action.type) {
      case "INPUT_FIELD_CHANGED":
        nextState = userInputReducer(current, action)
        return nextState
      case "MODAL_OPENED":
        nextState = modalOpenReducer(current, action)
        return nextState
      case "MODAL_CLOSED":
        nextState = modalCloseReducer(current, action)
        return nextState
      case "GITHUB_DATA_REQUESTED":
        nextState = requestedGithubDataReducer(current, action)
        return nextState
      case "GITHUB_DATA_ARRIVED":
        nextState = arrivedGithubDataReducer(current, action)
        return nextState
      default:
        nextState = Object.assign({}, current)
        return nextState
    }
  }

  const store = createStore(reducer)
  store.JSONtransfer = createApiController(store)

  return {store}

})()

export default core
