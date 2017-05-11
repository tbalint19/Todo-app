import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './state_tree'

import {
  requestedUserDataReducer,
  userDataResponseReducer,
  requestedLogoutReducer,
  logoutResponseReducer
} from './reducers/response_reducers'

const core = (() => {

  const initialState = stateTree

  const reducer = (state = initialState, action) => {
    let current = state
    let nextState
    switch (action.type) {
      case "USER_DATA_REQUESTED":
        nextState = requestedUserDataReducer(current, action)
        return nextState
      case "USER_DATA_ARRIVED":
        nextState = userDataResponseReducer(current, action)
        return nextState
      case "LOGOUT_REQUESTED":
        nextState = requestedLogoutReducer(current, action)
        return nextState
      case "LOGOUT_RESPONSE":
        nextState = logoutResponseReducer(current, action)
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
