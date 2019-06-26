// Add Items

var userInput = document.getElementById("userInput");
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");
var items = document.querySelectorAll("#list li");
var delButtons = document.querySelectorAll("#list li button");

// Check if the string from the inpunt is not empty
function isNotEmpty(x) {
    if (x.length > 0) {
        return true;
    } else {
        return false;
    }
}

// Creates a new item to the list. 
function addItem(item) {
    // Creates li with text from var item.
    var li = document.createElement("li");
    var item = document.createTextNode(item)
    li.appendChild(item);
    list.appendChild(li); 
    userInput.value = ""; // clears the input
    clickToMarkDone("#list > li:last-child");
    addsNewDelButton();
    activateLastDelButton();
}

// Adds a new item after the user clicks Add Button
function addItemAfterClick() {
    var item = userInput.value;
    if (isNotEmpty(item)) {
        addItem(item);
    }
}
addButton.addEventListener("click", addItemAfterClick);

//  Adds a new item after the user presses Enter
function addItemAfterEnter(event) {
    var item = userInput.value;
    if (isNotEmpty(item) && event.which == 13) { // 13 is the Enterkey
        addItem(item);
    }
}
userInput.addEventListener("keypress", addItemAfterEnter); // After each keypress this function will be called, but only after enter is pressed the condition will add the item. For the future, check if there is a more efficiente way of doind this.

// Listen to clicks on all existing del buttons
for (let i = 0; i < items.length; i++) { // for all the li's
    delButtons[i].addEventListener("click", function(){ // listen for click on the respective button
        items[i].remove(); // remove the respective li
    });     
}

// Crates a new del button for the new items on the list.
function addsNewDelButton() {
    // Creates del button in the last item.
    var lastItem = document.querySelector("#list > li:last-child");
    var delButton = document.createElement("button");
    delButton.innerText = "Del";
    lastItem.appendChild(delButton);
}

// Listen for clicks on the newly created del buttons.
function activateLastDelButton() { //listen to click on a just created del button
    var lastItem = document.querySelector("#list > li:last-child");
    var lastDelButtons = document.querySelector("#list > li:last-child > button");
    lastDelButtons.addEventListener("click", function(){ 
        lastItem.remove(); 
    });
}

// Toggles strike trhough line on clicked items.
function toggleDone(item) {
    item.classList.toggle("done");
}

// Listen to clicks on items to toggle them as done. Is also used to activate listen for clicks on newly created items
function clickToMarkDone(selector) {
    var items = document.querySelectorAll(selector);
    items.forEach(element => {
        element.addEventListener("click", function () {
            toggleDone(element);
        }, false);
    });
}

// Runs function to add listener for clicks on all existing items.
clickToMarkDone("#list li");






