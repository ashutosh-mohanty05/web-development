//1. Click Event:

var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});


//2. Mouse Over and Mouse Out Events:

var element = document.getElementById("myElement");
element.addEventListener("mouseover", function() {
  console.log("Mouse over the element");
});

element.addEventListener("mouseout", function() {
  console.log("Mouse out of the element");
});



// 3. Key Press Event:

document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
  });

  

//4. Form Submission Event:

var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Form submitted");
  // Additional form handling logic
});



// 5. Change Event (for input fields, checkboxes, etc.):

var input = document.getElementById("myInput");
input.addEventListener("change", function() {
  console.log("Input value changed: " + input.value);
});



// 6. Window Load Event:

window.addEventListener("load", function() {
    console.log("Page and all assets are loaded");
    // Additional initialization logic
  });

  

  //7. Window Resize Event:

  window.addEventListener("resize", function() {
    console.log("Window has been resized");
    // Additional resize handling logic
  });

  

  //8. Custom Event (dispatching and handling):

  // Dispatching a custom event
var customEvent = new Event("customEvent");
document.dispatchEvent(customEvent);

// Handling the custom event
document.addEventListener("customEvent", function() {
  console.log("Custom event triggered");
});

