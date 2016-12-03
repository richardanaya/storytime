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
      setTimeout(function(){
        page("/")
      },1)
      return;
    case "route_changed":
      debugger;
      state.currentRoute = action.data
      return;
  }
}
