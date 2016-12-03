function storytimeInitialState(){
  var pages = {}
  function addPage(name,p){
      pages[window.location.pathname+name] = p;
  }
  addPage("",{
    actions:[
      {
        text:"Go to test",
        page:"test"
      }
    ]
  })
  addPage("test",{
    actions:[
      {
        text:"Go to blah",
        page:""
      }
    ]
  })
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
