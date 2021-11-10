console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

let node1 = document.getElementById("node1");

node1.innerHTML = "I used the getElementById('node1')";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");

node2[0].innerHTML = "I used the getElementsByClassName('node2')";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
var h3 = document.getElementsByTagName("h3");

for (let i = 0; i < h3.length; i++) {
  h3[i].innerHTML =
    "I used the getElementsByTagName('h3') method to access all of these.";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this element.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
// TODO: Create a <a> element using this element.createElement() and put this text inside "I am a <a> tag"
// BONUS: Add a link href to the <a>
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

let parent = document.getElementById("parent");
let newP = document.createElement("p");

newP.innerHTML = "This node was created using the createElement() method";

parent.appendChild(newP);

let newAnchor = document.createElement("a");
newAnchor.innerHTML = "<a href=#>I am anchor tag</a>";

parent.insertBefore(newAnchor, newP);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3 = document.getElementById("exercise3");
let new_p1 = document.createElement("p");
new_p1.innerHTML = "New child node";
let child = document.getElementById("N1");
exercise3.replaceChild(new_p1, child);

// TODO: Remove the "New Child Node"
setInterval(() => {
  exercise3.removeChild(new_p1);
}, 5000);

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
let box_move = 0;
let box = document.getElementById("box");
let interval = setInterval(move, 100);
function move() {
  if (box_move > 150) {
    clearInterval(interval);
  } else {
    box_move += 1;
    box.style.left = box_move + "px";
  }
}

// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

let button = document.querySelector("#btn");
let modal = document.querySelector(".modal");
let modalBody = document.querySelector(".modal_card");
button.addEventListener("click", show);

function show(event) {
  modal.style.display = "block";
  modalBody.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user.";
  setTimeout(function () {
    modal.style.display = "none";
  }, 3000);
}

// learning how to handle events
let title = document.getElementById("title");
let input = document.getElementById("work");

input.addEventListener("keyup", function (event) {
  title.textContent = event.target.value;
});
