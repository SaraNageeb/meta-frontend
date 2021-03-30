var elements = document.getElementsByClassName('hot'); // Find hot items

if (elements.length > 2) {  // If 3 or more are found

  var el = elements[1];   // Select the second one from the NodeList
  el.className = 'cool';  // Change the value of its class attribute

}

console.log(elements); // Returns a HTML Collection

// Loop over every single element in elements
for(let element of elements) {
  console.log(element);
}