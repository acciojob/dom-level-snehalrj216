// Select the target element
let element = document.getElementById("level");

let count = 0;

// Traverse up the DOM tree
while (element) {
    count++;
    element = element.parentElement;
}

// Show result
alert("The level of the element is: " + count);
