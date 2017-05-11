const stateTree = {
  state: {
    interface: "start",
    isWaiting: false,
    login: {
      error: false,
      successfulLogin: false
    },
    signup: {
      lengthError: true,
      occupiedError: false,
      successfulSignup: false
    }
  },
  data: {
    username: "",
    password: ""
  }
}

export default stateTree
