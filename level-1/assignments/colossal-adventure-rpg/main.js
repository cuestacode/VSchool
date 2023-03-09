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
console.log (text);
walk (text)
function walk () { //start the walk function
  //propmt uder to walk with 'y' or 'n'
// user hits 'y'
  const chance = Math.random ();
  console.log (chance);
  if (text === "y" && chance <= .25 ) {
  console.log('Starting off brave. Your courage will be useful. ');
// console.log(randomEnemy)
  runAway ()
  } else if (text === "y" && chance >= .26 ) {
  console.log ('You snuck right past the challenge. Keep it moving. ');
  walk ()
  } else if (text === "n") {
    console.log ("Take this time to fuel up. ")
  }
}
function runAway () {
  
}
// function randomEnemy() {
// //   /* write what happens when they walk - either an enemy or nothing*/
//   const randomNumber = Math.random();
//   //console.log(randomNumber)
//   if (randomNumber <= 1 / 3) {
//     const randomEnemy = enemies[Math.floor(Math.random () * enemies.length)];
//     console.log (`\nOh no! Your first challenge. It's a ${randomEnemy}.`);
//     const fight = readline.question('Enter (f) to fight, (h) to hide.')
//     if (fight === "f") {
//       fightAndConquer ();
//     } else if (fight === "h") {
//       hide ();
//     } else if (randomNumber > 1/3) {
//       const noEnemy = fuel[Math.floor(Math.random () * fuel.length)];
//     }
//   }
//   /* if (randomNumber <+ 1 /3) { which enemy, options to fight or run} */
// }

/* function for fight */

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
//  /* this calls a function (either walk, fule or weapon)*/ 
// }
// const enemyAttacks = Math.random
// }





