
var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for(var i = 0; i< peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if(peopleWhoWantToSeeMadMaxFuryRoad [i].age <=18) {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")
  } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")

  }
}

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let count = 0
for (var i = 0; i < officeItems.length; i++){
  console.log(i,":", officeItems[i])
  if(officeItems[i]==="computer"){
    count++
  }
}
console.log (count)