const stateTree = {
  state: {
    view: {
      main: "login",
      modal: null
    },
    isWaiting: false
  },

  data: {
    login: {
      name: "",
      password: ""
    },
    signup: {
      name: "",
      password: ""
    }
  }
}

export default stateTree
