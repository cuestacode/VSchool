/*document.getElementById("btn").addEventListener("click", fun);  
function fun() {  
document.getElementById("para").innerHTML = "Hello World" + "<br>" + "Welcome to my Assignment";  
}  
*/
const box = document.getElementById ("square")
box.addEventListener ("mouseenter", turnBlue)
function turnBlue () {
box.style.backgroundColor = "blue"
}
box.addEventListener("mousedown", turnRed)
function turnRed () {
box.style.backgroundColor = "red"
}
box.addEventListener ("mouseup", turnYellow)
function turnYellow () {
box.style.backgroundColor = "yellow"
}
box.addEventListener("dblclick", turnGreen)
function turnGreen () {
box.style.backgroundColor = "green" 
}
box.addEventListener("mouseleave", turnOrange)
function turnOrange () {
box.style.backgroundColor = "orange"
}


