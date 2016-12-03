var pages = {}
function addPage(name,p){
    pages[window.location.pathname+name] = p;
}
addPage("",{
  scenes:["assets/scene_a.dae"],
  sky:"assets/house_sky.jpg",
  description: "On a lonely autumn night, you are woken up from your sleep by strange lights coming through the window of your farmhouse. You look outside, and see a strange meteor falling through the sky, landing on a nearby hill. You get dressed and go outside to investigate...",
  sound:"assets/sounds/house.mp3",
  flags:["fog"],
  actions:[
    {
      trigger: "hill",
      description: "Climb the hill",
      page:"climb_hill",
      sound:"assets/sounds/hill.mp3",
    },
    {
      trigger: "Cat",
      description: "Approach the meteor",
      page:"approach_meteor",
      sound:"assets/sounds/meteor.mp3",
    },
    {
      trigger: "chicken",
      text: "The chicken was a sleep and did not like being rudely awoken.",
      playSound:"assets/sounds/chicken.mp3"
    }
  ]
})
addPage("approach_meteor",{
  customScene: "custom-scene-example"
})
addPage("climb_hill",{
  scenes:["assets/house.dae"],
  sky:"assets/house_sky.jpg",
  description: "As you begin climbing the hill you hear the sound of engines approaching rapidly from the distance. Startled, you crouch down behind a log and watch as three helicopters descend to the same spot where you saw the meteor land.",
  actions:[
      //TBD
  ]
})
