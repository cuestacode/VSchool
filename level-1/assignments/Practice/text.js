const form = document.myForm

form.addEventListener("submit", (event) => {
  event.preventDefault()



  console.log(form.city.value)

})

  //console.log(form.gender.value)

  // console.log(form.entertainment.value)
  /*const checkedInputs = []

  for(let i = 0; i < form.entertainment.length; i++){
      if(form.entertainment[i].checked) {
        checkedInputs.push(form.entertainment[i].value)
      }
  }
  console.log(checkedInputs)
})

/*const h1 = document.getElementById("clickable")
h1.addEventListener("click"),() => {
  h1.textContent= "clicked"

})

const birds= ["robin","pelican","goose"]

const bigBirds = birds.map(bird => "big" + bird)


const addTwo = (first,second) => return first + second


/*var ninjaTurtles = [
  "Leonardo",
  "Rafael",
  "Donatello",
  "Michaelangelo",
  
]
var ninjaList = document.getElementById("turtles")
for (var i = 0; i < ninjaTurtles.length; i++) {
  var newName = document.createElement ("li")
  newName.textContent = ninjaTurtles[i]
  ninjaList.append(newName)

}
var add = document.createElement ("li")
add.textContent = "Splinter"
var ninjaList = document.getElementById ("turtles")
ninjaList.prepend (add)

var addName = document.createElement ("li")
addName.textContent = "April"
var ninjaList = document.getElementById ("turtles")
ninjaList.append (addName)



/*const operator = prompt('Enter operator either +,-,* or / ):');
const number1 = parseFloat(prompt ('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
switch(operator) {
  case '+':
    result = number1 + number2;
    break;
  case '-':
    result = number1 - number2;
    break;
  case '*':
    result = number1 * number2;
    break;
  case '/':
    result = number1 / number2;
    break;

  default:
    console.log('Invalid operator');
    break;
}
console.log ('${number1} ${operator} ${number2} = ${result}');
*/

/*var header = document.getElementById ("header")
header.style.color = "purple"
header.style.backgroundColor = "pink"

document.body.style.background = "brown"
*/

/*var newLi = document.createElement ("li")
newLi.textContent = "3"
var myList = document.getElementById ("my-list")
myList.prepend(newLi)

var paragraph = document.createElement ("p")
paragraph.textContent = "no doubt"
var myText = document.getElementById ("my-text")
myText.append (paragraph)

var newP = document.createElement ("p")
newP.textContent = "I will make JS my bitch!"
var myText = document.getElementById ("my-text")
myText.prepend (newP)

var anotherP = document.createElement ("p")
anotherP.textContent = "I will not give up"
var myText = document.getElementById ("my-text")
myText.append (anotherP)

var allText = document.getElementById ("my-text")
allText.style.color = "pink"
allText.style.backgroundColor = "black"
allText.style.textAlign = "center"
allText.style.fontSize = "50px"

var list = document.getElementById ("my-list")
list.style.color = "blue"
list.style.backgroundColor = "green"
*/

