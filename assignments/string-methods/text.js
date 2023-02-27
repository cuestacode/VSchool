// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
var userName = "michael"


var allLowerCase = "michael"
function upperLower(name){
  var upperCasedName = name.toUpperCase()
  var lowerCasedName = name
return upperCasedName.concat(lowerCasedName)
}
console.log(upperLower(userName))

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
