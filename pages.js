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
      loop: true,
      type: "music"
    },
    {
      name: "Piano",
      sound:"assets/sounds/stems/Stem2(Piano).wav",
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Haunting ambiance",
      sound: escape("assets/sounds/stems/Stem3(Haunting ambience).wave"),
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Uneasy",
      sound: escape("assets/sounds/stems/Stem #4 (Haunting ambience).wave"),
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Trashed Piano",
      sound: escape("assets/sounds/stems/Stem #5 (Trashed Piano).wave"),
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Dark Wind",
      sound: escape("assets/sounds/stems/Stem #6 (Dark Wind).wave"),
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Tortured Strings",
      sound: escape("assets/sounds/stems/Stem #7 (Tortured Strings).wave"),
      volume: 1,
      loop: true,
      type: "music"
    },
    {
      name: "Kick",
      sound: escape("assets/sounds/stems/Stem4(Kick).wave"),
      volume: 1,
      loop: true,
      type: "music"
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
          name:"Guitar",
          volume: .7,
          type: "music"
        }
      ]
    },
    {
      trigger: "Cat",
      description: "Approach the meteor",
      cameraMove: {x:1,y:0,z:0},
      hoverSounds: {
        name:"woodwind",
        volume:.3,
        type: "music"
      }
    },
    {
      trigger: "chicken",
      text: "The chicken was a sleep and did not like being rudely awoken.",
      hoverSounds:{
        name: "radio",
        sound: "assets/sounds/Radio SFX 4.wav",
        type: "effect",
        loop: false
      }
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
