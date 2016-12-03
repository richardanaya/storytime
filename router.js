var ROUTE_ROOT = "";
var ROUTE_TEST = "test";
var router = (function(){
  function goToPage(context){
    debugger;
    store.dispatch('route_changed',context.path)
  }

  // ACTIVE ROUTES
  page(window.location.pathname+ROUTE_ROOT, goToPage)
  page(window.location.pathname+ROUTE_TEST, goToPage)

  return {
    goTo: function(path){
      window.setTimeout(function(){
        page(path);
      },1)
    }
  }
}())
page({hashbang:true})
