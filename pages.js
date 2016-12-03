var pages = {}
function addPage(name,p){
    pages[window.location.pathname+name] = p;
}
addPage("",{
  scene:"assets/howard_test_scene.dae",
  sky:"assets/free.jpg",
  actions:[
    {
      trigger: "pasted__pasted__pCube1",
      text:"Go to test",
      page:"test"
    }
  ]
})
addPage("test",{
  scene:"assets/scene_a.dae",
  sky:"assets/free2.jpg",
  actions:[
    {
      trigger:"Cat",
      text:"Go to blah",
      page:""
    }
  ]
})
