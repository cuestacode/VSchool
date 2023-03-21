// Note: Add math.floor to all math.random methods
//Two random enemies are being generated

//Plan
// Walk
//Encounter monster
//Decide what monster has been encountered
//Fight the monster or Run from the monster
//If fight is the choice go to combat loop
//If run in the choice then give chance to escape

'use strict';

const readlineSync = require("readline-sync");
const greeting = console.log("After the fungi virus hit, the world as we know it came to end. The fungi is spreading faster than ever! There's a place on the other side of Fungi Forest that has successfully created a safe society, completely protected from the infected, aka funganoids. It's the only way to get to where you need to go and your last chance for survival.");

const firstName = readlineSync.question ("Let's start with your name: ");
console.log("Ok " + firstName + "," + " let's go! ");
// walk()
let userInventory = [];
let game = true;
let hasItems = false;
let hp = 100;
let enemyHp = 100;
const fuel = ['water','protein bar', 'rest'];
const enemies = ['funganoid', 'apex predator', 'spray attack']
const text = readlineSync.question("The fungi sprays a highly contagious liquid into the air that spreads like a virus through our body and eventually takes over your brain. With the protection you have and keeping enough distance, you can avoid spray attacks. Enter 'y' to start your journey and 'n' to hold off. Are you ready?"); 
if (text === 'y' ){
  walk()
} else if (text === 'n'){
  const input = readlineSync.question("Take this time to refuel, hit 'r' when you are ready ")
  if (input === 'r'){
    walk()
  }
}
console.log (text);
while(game === true){ //While the player is alive
  walk()//Run the walk function 
}
var player = {
  name: "Player",
  hp: 50,
  attackValue: Math.floor(Math.random() * 5 + 3),
      
  }
// walk (text) //Move to below the walk function 

function walk () { //start the walk function
  //propmt uder to walk with 'y' or 'n'
// user hits 'y'
  const input = readlineSync.question("To move forward click 'e' to check health status click 'h' ")
  const chance = Math.floor(Math.random() * 3);
  console.log (chance);
  enemyHp = 100
  if (input === 'e'){
  if (chance <= 1/3 ) {
  console.log('Starting off brave. Your courage will be useful. ');
// console.log(randomEnemy)
  enemyEncounter()
  } else if (chance >= 2/3 ) {
  console.log ('You snuck right past the challenge. Keep it moving. ');
  walk ()
} } else {
  console.log('hp ' + hp)
}


  // } else if (text === "n") {
  //   console.log ("Take this time to fuel up. ")
  //   game = false 
  //   let text = readlineSync.question("Hit 'y' when you are ready to start ")
  //   console.log(text)
  //   if (text === "y"){
  //   game = true 
  //   console.log(game)
  //   }
  // }
}

//Decides whether you encounter an enemy or not
function enemyEncounter(){
console.log('***** You have entered the enemyEncounter function *****')
// generate number 1 or 2 and store it in a variable
// if statment that make enemy appear
// else satement that says nothing appears
const enemyAppears = Math.floor(Math.random() * 2 + 1)//generates 1 or 2
if (enemyAppears === 1){
  console.log ("You hear some rustling in the bushes")
  fight ()
} else if (enemyAppears === 2) {
  console.log ("The coast is clear")
}
}
function fight () {
console.log("You have enterd the fight function")
const willFight = readlineSync.keyIn ("You've encountered an enemy and must either fight or attempt to run. Press 'f' for fight and 'r'for run. ")
const runAway = Math.floor(Math.random() * 2);
console.log(runAway)  
if (willFight === 'f') {
  console.log("you have decided to fight!")
  battle ()
} else if (willFight === 'r'){
console.log("You've decided to make a run for it!")
// run ()
// }else if (runAway < 2){
// console.log("Your attempt to run away has failed. Prepare for combat!")
// // winner () // create function for winner with random amount damage for user (& enemy?)
}
}
function battle(){
  console.log("You have entered the battle function")
  // var enemyName = enemies[Math.floor(Math.random() * 3)]
  var enemyName = enemies[0]
  console.log (`You are in a battle with a ${enemyName} !`);
  while (hp > 0 && enemyHp > 0) {
  // var action = readlineSync.question("You are in a battle, time to shoot.")
      //if (action==='s') {
      var playerAttack = Math.floor(Math.random() * 10) + 5;
      // var newHP = hp.attackValue
      
      
      console.log(`You hit the ${enemyName} with ${playerAttack}`)// player attacks enemy 
      var newEnemyHp = enemyHp -= playerAttack;// enemy loses health points from player attack
      enemyHp = newEnemyHp// updating enemy health points
      readlineSync.question(`The monster's hp is now ${enemyHp}`)// letting player know enemy's updated health

      if(enemyHp <= 0){ 
      return 'win';
    }
      var enemyAttack = Math.floor(Math.random() * 10) + 5;// enemy attacks player
      hp -= enemyAttack;// player loses health points from enemy attack
      var newHp = hp -= enemyAttack;// saving new health points to variable
      hp = newHp// updating player health points
      console.log (`The ${enemyName} hit you with ${enemyAttack}`)// letting player know their updated health points
        if (hp <= 0){
        return "lose";
      //}   
    }
  }
}
// function randomEnemy() {
// // //   /* write what happens when they walk - either an enemy or nothing*/
// console.log("============ You have entered the random enemy function ==========")
//   //;
//   const enemy = enemies[Math.floor(Math.random() * enemies.length)]//Genrates random number store value in randomNumber variable
//   //console.log(enemy)//console log randomNumber value 
  
//   //Make these
//   if(enemy === 'funganoid'){
//     console.log("you got funganoid")
//   } else if(enemy === 'apex predator'){
//     console.log("you got apex predator")
//   } else if(enemy === 'spray attack'){
//     console.log("you got spray attack")
//   }

//   return enemy
// }

// console.log(randomEnemy())
//   /* if (randomNumber <+ 1 /3) { which enemy, options to fight or run} */

//create combat function
//create a parameter called 'currentEnemy' 
//create a while loop 
//tell player monster attacks
//calculate new player health
//update player health

// player attacks monster
//calculate monster health
//update monster health

//determine what happens when player or monster die


/* function for fight */
//during fight function a random amount of damage will be dealt between a min and max

// function fight () {
//   console.log("========= You have entered the fight function============")
//   const userOption = ["load weapon" , "hand-to-hand combat"]
//   const message = readlineSync.keyInSelect (userOption, "You've encountered an enemy and must fight. Make a choice to proceed.")

//   if (userOption[message] === "load weapon") {
//     readlineSync.question ("load your weapon and aim to shoot.")
//   } else if (userOption[message] === "hand-to-hand combat"){
//     readlineSync.question("fight your enemy in hand-to-hand combat.")
//   }

// }








/*function if they run */

//   const choice = readlineSync.question ("Enter (y) to start your journey through the infected forest., (n)
//   if choice === "y" {
//     randomEnemy()
//   } else if (choice === (n))
//   console.log("Starting off brave. Your courage will be useful.")  
//   // const options = ['Walk', 'Fuel', 'Weapon' ];
//   // const choose = readlineSync.keyInSelect (
//   // options,
//   // "Choose one of the following options: "

//   if (choose === 0) {
//  /* this calls a function (either walk, fuel or weapon)*/ 
// }
// const enemyAttacks = Math.random
// }


  //if (randomNumber <= 1 / 3) {//if random number is less than or equall to 1/3
  //const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];//generate random enemy from enemy array
  //console.log(randomEnemy)
  
  
  //console.log (`\nOh no! Your first challenge. It's a ${randomEnemy}.`);//Tell player what enemy they have encountered 
  //const fight = readline.question('Enter (f) to fight, (h) to hide.')//
  //if (fight === "f") {
  //fightAndConquer ();
  //} else if (fight === "h") {
  //hide ();
  //} else if (randomNumber > 1/3) {
  //const noEnemy = fuel[Math.floor(Math.random () * fuel.length)];
  //}




