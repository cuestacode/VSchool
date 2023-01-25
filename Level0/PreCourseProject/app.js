//Data Types - Create variable for each data type below using the example provided for a string 


//String - denoted/represented by " " ' ' - they are great for words,language
var firstName = "Michael"
console.log(firstName)


////////


//Number -anything  of numerical value - just a number

// Length




//Boolean - true or false 
var hasTwoDayShipping = true
console.log(hasTwoDayShipping)

/////////



//Array - are denoted/represented by [] - are great for holding multple pieces of data
//use bracket notation [] here with the array you created use 
var myNumbers = [1, 2, 3, 4, 5]
console.log(myNumbers[1])
////////
            // . 0 .    1.      2.      3.      4.
var colors = ["blue", "green", "red", "yellow", "purple"]
console.log(colors.length)



////////// here
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])
console.log(colors[3])
console.log(colors[4])

/////////


var user = {
    name: 'dfg',
    lastName: 'fsg',
    firnedList: ['marie','julio']
}


//Object - denoted/represented by {} - great for describing something in detail - like a billing address
// use dot notation . here with the object you created .
var billingAddress = {
    houseNum: 1904,
    streetName: "Elm Street",
    hasHouseLights: true,
    packageSenders: ['walmart', 'target']
}

console.log(billingAddress.packageSenders[1])

//////////


//Create an object - use each datatype as a property
//Use dot and bracket notation to display your knowledge
//////////



//Condtional Statement
//if (this is true){ execute this code }
//  else if (this is true) {do this code instead!}
//  else {for anything else do this here!}
//using the variable provided below create a conditional statement

//Using below example below to create your own conditional statement.
var color = "blue"

if (color === "red") {
    console.log("I am blue!")
} else if (color === 'blue') {
    console.log("I am red!")
} else {
    console.log(" i am something else!")
}

var age = 21

if (age < 17 ) {
    console.log("This person cannot see the movie!!!!!!")
} else if (age >= 17 ) {
    console.log("This person can see the movie!")
}

var sport = 'football'


//For Loops - At their most elementary form they are just creating an number line for us; starting at a number and ending at a number - these number are represented by a single variable, named i

//for (#1Step start point; #2Step end point; #4Step howtogetthere){
//    #3Step what to do 
//} 

//i = i + 1 same i++


//Create 1 for loop


var favMusic = ["hiphop", "rock", "jazz", "country", "pop", "classical" , "techno"]
favMusic.length //
for (var i = 0; i < favMusic.length; i++) {
    console.log(favMusic[i])
}





function greeting() {
    alert("I will pass my Evaluation!")
}




//////////////////
//level 0 curriculum last 5 videos cover this material "DOM"

//1. Create button with an ID on it in HTML
//2. Call Button into JS using document and getting element by its ID
//3. Set that button equal to a variable
//4. with that variable use dot notation to access the addeventlistener method


var newButton = document.getElementById("button-one")
console.log(newButton)


newButton.addEventListener("click", greeting)


//1. What does the javascript word document/DOM mean or represent to us in the javascript language?

//2. What does the getElementById() do, and what needs to go inside the ()?

//3. What does the  addEventListener("", function) do, and what are the two items that go in the ()?
