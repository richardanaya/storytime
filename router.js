var ROUTE_ROOT = "";
var ROUTE_TEST = "test";
var router = (function(){
  function goToPage(context){
    store.dispatch('route_changed',context.path)
  }

  // ACTIVE ROUTES
  for(var i in pages){
      page(i, goToPage)
  }

  return {
    goTo: function(path){
      window.setTimeout(function(){
        page(path);
      },1)
    }
  }
}())
page({hashbang:true})
