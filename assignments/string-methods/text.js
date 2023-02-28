// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var userName = "michael"


var allLowerCase = "michael"
function upperLower(name){
  var upperCasedName = name.toUpperCase()
  var lowerCasedName = name
return upperCasedName.concat(lowerCasedName)
}
//console.log(upperLower(userName))

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
let ex2 = "Hello World"
function example2 (ex2) {
var getHalf = (Math.floor(ex2.length /2))

console.log(getHalf)
}
example2(ex2)

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
//returnFirstHalf("Hello") // => "He"
//returnFirstHalf("Hello World") // => "Hello"
let ex3 = "Hello World"
function example3(ex3){
  let slicedEx3 = ex3.slice(0, 5)
  console.log(slicedEx3)
}
example3(ex3)
//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//> Hint: If your string length is odd, use Math.floor() to round down.
