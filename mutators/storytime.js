function storytimeInitialState(){
  var pages = {}
  pages[window.location.pathname] = {
    text:"blah"
  },
  pages[window.location.pathname+"test"] = {
    text:"test"
  }
  return {
    gameStarted: false,
    currentRoute: null,
    pages: pages
  }
}

function storytimeMutator(state,action,dispatch){
  switch(action.type){
    case "start_game":
      state.storytime.gameStarted = true
      return;
    case "route_changed":
      state.currentRoute = action.data
      return;
  }
}
