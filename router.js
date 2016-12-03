var ROUTE_ROOT = "/";
var router = (function(){
  function goToPage(context){
    store.dispatch('route_changed',context.path)
  }

  // ACTIVE ROUTES
  page(ROUTE_ROOT, goToPage)

  return {
    goTo: function(path){
      window.setTimeout(function(){
        page(path);
      },1)
    }
  }
}())
page({hashbang:true})
