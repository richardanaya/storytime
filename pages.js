var pages = {}
function addPage(name,p){
    pages[window.location.pathname+name] = p;
}

function stemPathHelper(value) {
  return "Stem #" + value + ".wav";
}
addPage("",{
  scenes:["assets/scene1.dae"],
  sky:"assets/house_sky.jpg",
  description: "On a lonely autumn night, you are woken up from your sleep by strange lights coming through the window of your farmhouse. You look outside, and see a strange meteor falling through the sky, landing on a nearby hill. You get dressed and go outside to investigate...",
  sounds:[
    {
      name:"Guitar",
      sound:"assets/sounds/stems/Stem1(Guitar).wav",
      volume: 1,
      loop: true
    },
    {
      name: "Piano",
      sound:"assets/sounds/stems/Stem2(Piano).wav",
      volume: 1,
      loop: true
    },
    {
      name: "Haunting ambiance",
      sound: escape("assets/sounds/stems/Stem3(Haunting ambience).wave"),
      volume: 1,
      loop: true
    },
    {
      name: "Uneasy",
      sound: escape("assets/sounds/stems/Stem #4 (Haunting ambience).wave"),
      volume: 1,
      loop: true
    }
  ],
  flags:["fog"],
  actions:[
    {
      trigger: "hill",
      description: "Climb the hill",
      page:"climb_hill",
      hoverSound: [
        {
          name:"woodwind",
          volume: .7
        }
      ]
    },
    {
      trigger: "Cat",
      description: "Approach the meteor",
      cameraMove: {x:1,y:0,z:0},
      hoverSound: {
        name:"woodwind",
        volume:.3
      }
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
