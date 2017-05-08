const stateTree = {
  state: {
    view: {
      main: "base",
      modal: null
    },
    isFetchingGithub: false,
    githubDataPresent: false
  },

  data: {
    welcome: "world",
    githubData: {
      login: "",
      avatar_url: ""
    }
  }
}

export default stateTree
