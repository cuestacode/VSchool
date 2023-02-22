const form = document["addItem"]

form.addEventListener("submit", function (event){
    event.preventDefault()
    const input = document.getElementById("title")
    const food = input.value
    const list = document.getElementById("list")
    const listItem = document.createElement("li")
    listItem.style.listStyle = "none"

    const checkbox = document.createElement ("input")
    checkbox.type = "checkbox"

    const label = document.createElement ("label")
    label.textContent = food
    const edit = document.createElement ("button")
    edit.textContent = "edit"

    const remove = document.createElement ("button")
    remove.textContent = "X"

console.log(remove, "testing")
    alert("Item Added")
    
    remove.addEventListener ("click" , function (event) {
        event.target.closest ("li").remove ()
    })
    checkbox.addEventListener("click",function (event){
        console.log("checkbox was clicked")
        if (checkbox.checked===true){
            label.style.textDecoration="line-through"
        }
    }
    )
    
    list.append(listItem)
    listItem.append (checkbox) 
    listItem.append (label) 
    listItem.append (edit)
    listItem.append(remove)
    input.value = ""
}
)
//set style of listItem to 'none'

//set textContent of edit button

//add event listener to checkbox (pass crossOff function as callback)

//add event listener to edit (pass edit function as callback)

//write a function to edit items

//write a function to cross items off
