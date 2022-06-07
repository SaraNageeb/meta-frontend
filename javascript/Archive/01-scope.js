// Initialize a global variable
var fruit = "apple";
 
function displayFruit() {
  // Initialize a local, function-scoped variable
  var fruit = "banana";
  console.log(fruit);
}

// Log the global and local variable
console.log(fruit); // "apple"
displayFruit(); // "banana"
console.log(fruit); // "apple"
