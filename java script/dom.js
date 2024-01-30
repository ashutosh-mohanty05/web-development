//1. Accessing Elements:
// By ID
var elementById = document.getElementById("myElement");

// By class name
var elementsByClass = document.getElementsByClassName("myClass");

// By tag name
var elementsByTag = document.getElementsByTagName("div");

// Using querySelector
var elementByQuery = document.querySelector("#myElement");

// Using querySelectorAll
var elementsByQueryAll = document.querySelectorAll(".myClass");



//2. Modifying Content:
// Changing text content
elementById.textContent = "New text content";

// Changing HTML content
elementById.innerHTML = "<strong>New HTML content</strong>";



//3. Manipulating Attributes:
// Changing the src attribute of an image
var image = document.getElementById("myImage");
image.src = "new-image.jpg";



//4. Creating and Appending Elements:
// Creating a new paragraph element and appending it to the body
var newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);


//5. Event Handling:
// Adding a click event listener to a button
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});




//6. Traversal and Navigation:
// Traversing to the next sibling of an element
var nextSibling = elementById.nextSibling;



//7. Style Manipulation:
// Changing the background color of an element
elementById.style.backgroundColor = "red";



//8. Dynamic Updates and AJAX:
// Example using XMLHttpRequest (not recommended for modern applications)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // Update content on the page
    elementById.textContent = xhr.responseText;
  }
};
xhr.open("GET", "example.txt", true);
xhr.send();



//9. Working with Forms:
// Accessing form elements
var form = document.getElementById("myForm");
var input = form.elements["username"];

// Preventing form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Additional form handling logic
});

