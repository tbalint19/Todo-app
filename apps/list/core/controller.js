import {createStore} from 'redux'
import createApiController from 'datamanager'
import stateTree from './state_tree'

import {
  requestedLogoutReducer,
  logoutResponseReducer
} from './reducers/response_reducers'

const core = (() => {

  const initialState = stateTree

  const reducer = (state = initialState, action) => {
    let current = state
    let nextState
    switch (action.type) {
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
