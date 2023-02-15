const readlineSync = require("readline-sync");
const options = ["hole", "key", "door"];

let isAlive = true
const index = readlineSync.keyInSelect(
  options,
  "You are in an escape room and have three options: put your hand in the hole, find the key, or open the door"
);
let message;
let hasEscaped = false 

// while (count < 10 ){
//     count ++
//     console.log('count:', count)
// }
while (isAlive === true && hasEscaped === false) {
  if (options[index] === "hole") {
    message =
    "You stuck your hand into the hole and realized you could not get it back out. Looks like you're stuck here.";
    isAlive = false;
  } else if (options[index] === "key") {
    message = "You search for the key and find a button that pops the key out."
    console.log(message)
    const index2 = readlineSync.keyInYN(
       "Are you ready to escape?"
     );
    if (index2 === true) {
    message = 
        "Congrats on escaping the room!";
      hasEscaped = true 
    } else if (index2 === false) {
      message = 
        "Strange choice. Make yourself comfortable.";
    }
  } else if (options[index] === "door") {
    message =
      "You were supposed to find the key first. Now you're stuck here.";

    isAlive = false;
  } else {
    isAlive = false;
    message =
      "You are unable to find the hidden button for the key and eventually die.";
  }
  console.log(message);
}


