import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './state_tree'

import {
  requestedLoginReducer,
  requestedSignupReducer,
  loginResponseReducer,
  signupResponseReducer
} from './reducers/response_reducers'

import {
  mainChangeReducer
} from './reducers/select_reducers'

import {
  userInputReducer
} from './reducers/input_reducers'

const core = (() => {

  const initialState = Object.assign({}, stateTree)

  const reducer = (state = initialState, action) => {
    let current = Object.assign({}, state)
    let nextState
    switch (action.type) {
      case "INPUT_FIELD_CHANGED":
        nextState = userInputReducer(current, action)
        return nextState
      case "INTERFACE_CHANGE":
        nextState = mainChangeReducer(current, action)
        return nextState
      case "LOGIN_REQUESTED":
        nextState = requestedLoginReducer(current, action)
        return nextState
      case "LOGIN_RESPONSE":
        nextState = loginResponseReducer(current, action)
        return nextState
      case "SIGNUP_REQUESTED":
        nextState = requestedSignupReducer(current, action)
        return nextState
      case "SIGNUP_RESPONSE":
        nextState = signupResponseReducer(current, action)
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
