var header = document.getElementById("header");
header.textContent = "JavaScript Made This!!";
header.style.textAlign = "center";
header.style.fontSize = "30px";

var text = document.createElement("p");
text.textContent = " wrote the JavaScript";
var para = document.getElementById("para");
header.append(text);

var myName = document.createElement("span");
myName.textContent = "Quest";
text.prepend(myName);
myName.style.color = "pink";
myName.style.fontStyle = "italic";

//BRONZE
const messages = document.getElementsByClassName("message");
messages[0].textContent = "That was the greatest movie ever!";
messages[1].textContent =
  "There is another showing tomorrow, would you want to go again?";
messages[2].textContent = "Of course, but I am tight on money right now.";
messages[3].textContent = "No worries, my treat!";

let clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function clearChat() {
  document.getElementsByClassName("messages")[0].textContent = "";
});

//SILVER

const theme = document.getElementById("theme-drop-down");
theme.addEventListener("change", changeTheme);
function changeTheme() {
  if (theme.value === "theme-one") {
    document.querySelectorAll(".right").forEach(function (change) {
      change.style.backgroundColor = "light-blue";//text box
    });
    document.querySelectorAll(".left").forEach(function (change) {
      change.style.backgroundColor = "burlywood";//text box
      change.style.color = "black";//words
    });
  }
  if (theme.value === "theme-two") {
    document.querySelectorAll(".right").forEach(function (change) {
      change.style.backgroundColor = "red";//text box
    });
    document.querySelectorAll(".left").forEach(function (change) {
      change.style.backgroundColor = "black";//text box
      change.style.color = "white";// words
    });
  }
}

/*const left = document.getElementsByClassName ("left")
console.log(left)
const right = document.getElementsByClassName ("right")
console.log(right)

theme.addEventListener("change", (e) => {
  if(e.target.value === "theme-one") {
    left.stle.backgroundColor = "blue"
    right.style.backgroundColor = "brown"
  } else if (e.target.value === "theme-two") {
    left.style.backgroundColor = "red"
    right.style.backgroundColor = "black"
  } else if (e.target.value === "none") {
    left.style.backgroundColor = ""
    right.style.backgroundColor = "" }}
)
*/
