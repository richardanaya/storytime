function storytimeInitialState(){
  return {
    gameStarted: false,
    currentRoute: window.location.path,
    pages: pages
  }
}

function storytimeMutator(state,action,dispatch){
  switch(action.type){
    case "start_game":
      state.storytime.gameStarted = true
      return;
    case "go_to_page":
      setTimeout(function(){
        page(window.location.pathname+action.data);
      },1)
      return;
    case "route_changed":
      state.currentRoute = action.data
      return;
  }
}
