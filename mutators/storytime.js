function storytimeInitialState(){
  return {
    gameStarted: false,
    currentRoute: null,
    pages: {
      "/":{
        text:"blah"
      },
      "/test":{
        text:"test"
      }
    }
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
