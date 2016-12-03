function storytimeInitialState(){
  return {
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
    case "route_changed":
      state.currentRoute = action.data
      return;
  }
}
